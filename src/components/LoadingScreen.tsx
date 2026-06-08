import { CONSTANTS } from '@/constants/Constants';
import { Terminal } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function LoadingScreen({ onComplete }: { onComplete: () => void, key?: string }) {
  const [text, setText] = useState('');
  const fullText = '> Initializing Portfolio...';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);

    // Total duration of the loading screen (6 seconds)
    const timeout = setTimeout(() => {
      onComplete();
    }, 6000);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed inset-0 z-100 ${CONSTANTS.Dark.BACKGROUND} flex flex-col items-center justify-center gap-8`}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: [0.8, 1.1, 1],
          opacity: 1,
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className={`${CONSTANTS.BACKGROUNDS.PRIMARY} p-6 rounded-2xl ${CONSTANTS.BACKGROUNDS.PRIMARY_20_SHADOW}`}
      >
        <Terminal className={`${CONSTANTS.TEXT.WHITE} size-16`} />
      </motion.div>

      <div className="flex flex-col items-center gap-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`font-mono ${CONSTANTS.TEXT.PRIMARY} text-lg md:text-xl h-8`}
        >
          {text}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className={`inline-block w-2 h-5 ${CONSTANTS.BACKGROUNDS.PRIMARY} ml-1 align-middle`}
          />
        </motion.div>

        <div className={`w-64 h-1 ${CONSTANTS.BACKGROUNDS.WHITE_10} rounded-full overflow-hidden`}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 5.5, ease: "easeInOut" }}
            className={`h-full ${CONSTANTS.BACKGROUNDS.PRIMARY}`}
          />
        </div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={`${CONSTANTS.TEXT.SLATE_500} text-xs uppercase tracking-[0.3em] font-bold`}
        >
          System Loading
        </motion.p>
      </div>
    </motion.div>
  );
}
