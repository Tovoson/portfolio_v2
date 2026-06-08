import { ArrowRight, BarChart3 } from 'lucide-react';
import { motion } from 'motion/react';
import { CONSTANTS } from '@/constants/Constants';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-25 pb-5 overflow-hidden hero-glow">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className={`absolute top-1/4 -left-20 w-96 h-96 ${CONSTANTS.BACKGROUNDS.PRIMARY_10} rounded-full blur-[120px]`}></div>
        <div className={`absolute bottom-1/4 -right-20 w-96 h-96 ${CONSTANTS.BACKGROUNDS.PRIMARY_10} rounded-full blur-[120px]`}></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8"
        >
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${CONSTANTS.BACKGROUNDS.PRIMARY_10} border ${CONSTANTS.BACKGROUNDS.PRIMARY_20_BORDER} w-fit`}>
            <span className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${CONSTANTS.BACKGROUNDS.PRIMARY} opacity-75`}></span>
              <span className={`relative inline-flex rounded-full h-2 w-2 ${CONSTANTS.BACKGROUNDS.PRIMARY}`}></span>
            </span>
            <span className={`text-xs font-bold ${CONSTANTS.TEXT.PRIMARY} tracking-widest uppercase`}>Available for new projects</span>
          </div>
          <h1 className={`text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight ${CONSTANTS.TEXT.WHITE}`}>
            Architecting <span className={CONSTANTS.TEXT.PRIMARY}>Intelligent Systems</span> & Scalable Solutions
          </h1>
          <p className={`text-lg ${CONSTANTS.TEXT.SLATE_400} max-w-xl leading-relaxed`}>
            Fullstack Developer | AI Systems Engineer | Database Expert. 
            Bridging the gap between complex data architectures, LLM orchestration, and seamless user experiences.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className={`${CONSTANTS.BACKGROUNDS.PRIMARY} ${CONSTANTS.BACKGROUNDS.HOVER_PRIMARY_90} ${CONSTANTS.TEXT.WHITE} h-14 px-8 rounded-xl font-bold transition-all shadow-xl ${CONSTANTS.BACKGROUNDS.PRIMARY_30_SHADOW} flex items-center gap-2 cursor-pointer`}>
              View Projects <ArrowRight className="size-5" />
            </a>
            <div className={`glass-card flex items-center justify-center ${CONSTANTS.BACKGROUNDS.HOVER_WHITE_5} border h-14 px-8 rounded-xl font-bold transition-all ${CONSTANTS.BACKGROUNDS.BORDER_PRIMARY_5} ${CONSTANTS.TEXT.WHITE} cursor-pointer`}>
              <a href="#stack">
              Technical Stack
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block relative"
        >
          <div className={`relative w-full aspect-square glass-card rounded-3xl overflow-hidden border p-4 ${CONSTANTS.BACKGROUNDS.BORDER_PRIMARY_5}`}>
            <div 
              className="w-full h-full rounded-2xl bg-cover bg-center" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDGwdVUs2BTnfArKcjhwzljBnnrKknYc9ckWZs3AoCLBAQCpsgnGS5MW7jNpnwDzUAJXMU4XLNOfth777x-8aKjHPmt8jtUFcczEdzek516FOl1DtY0fDz8ulJfkfS_cYRLhni3syiNf0-Ua_noOvhcVacwvevb-1UAt-b9PPQBtFwQmyWB4iy4rJbSwoLRC4-RR4ASqTCKgi5I4DMRg1q8iqqyRu_NsP_yF4MQUKSaIzCxLQySh5pZWEudkaGi1cfILbc05w1BuTDJ')" }}
            ></div>
            <div className={`absolute bottom-10 left-10 glass-card p-6 rounded-2xl border ${CONSTANTS.BACKGROUNDS.BORDER_WHITE_10}`}>
              <div className="flex items-center gap-4">
                <div className={`size-12 rounded-full ${CONSTANTS.BACKGROUNDS.PRIMARY_20} flex items-center justify-center`}>
                  <BarChart3 className={`${CONSTANTS.TEXT.PRIMARY} size-6`} />
                </div>
                <div>
                  <p className={`${CONSTANTS.TEXT.SLATE_400} text-xs uppercase font-bold tracking-widest`}>Active nodes</p>
                  <p className={`text-xl font-black ${CONSTANTS.TEXT.WHITE}`}>1,248 TPS</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
