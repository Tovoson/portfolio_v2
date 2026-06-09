import { Terminal, Link as LinkIcon, User, AtSign } from 'lucide-react';
import { CONSTANTS } from '@/constants/Constants';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <div className={`${CONSTANTS.BACKGROUNDS.PRIMARY_20} p-1.5 rounded-md`}>
            <Terminal className={`${CONSTANTS.TEXT.PRIMARY} size-5`} />
          </div>
          <span className={`${CONSTANTS.TEXT.TITLE} font-black text-sm uppercase tracking-widest`}>Mara Tovoson © 2026</span>
        </div>
        <div className="flex gap-8">
          <a className={`${CONSTANTS.TEXT.LABEL_TXT} ${CONSTANTS.TEXT.HOVER_PRIMARY} transition-colors flex items-center gap-2`} href="https://github.com/Tovoson">
            <LinkIcon className="size-4" /> GitHub
          </a>
          <a className={`${CONSTANTS.TEXT.LABEL_TXT} ${CONSTANTS.TEXT.HOVER_PRIMARY} transition-colors flex items-center gap-2`} href="#">
            <User className="size-4" /> LinkedIn
          </a>
          
        </div>
      </div>
    </footer>
  );
}
