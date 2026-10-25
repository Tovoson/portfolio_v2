import { Terminal, Link as LinkIcon, User, AtSign } from 'lucide-react';
import { CONSTANTS } from '@/constants/Constants';

export default function Footer() {
  return (
    <footer className="py-12 border border-t-slate-300 h-52 max-w-7xl mx-auto px-6 flex flex-col md:flex-col items-center justify-center  gap-8">

        <div className="flex items-center gap-3">
          <div className={` p-1.5 rounded-md`}>
            <Terminal className={`${CONSTANTS.Light.TITLE} size-5`} />
          </div>
          <span className={`${CONSTANTS.Light.DESCRIPTION} font-black text-lg tracking-widest`}>Mara Tovoson</span>
        </div>
        <div className="flex gap-8">
          <a className={`${CONSTANTS.Light.TITLE} transition-colors flex items-center gap-2`} href="https://github.com/Tovoson">
            <LinkIcon className={` size-5`}  /> GitHub
          </a>
          <a className={`${CONSTANTS.Light.TITLE} transition-colors flex items-center gap-2`} href="#">
            <User className="size-5" /> LinkedIn
          </a>
          
        </div>
  
    </footer>
  );
}
