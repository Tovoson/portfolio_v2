import { Terminal, Link as LinkIcon, User, AtSign } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <div className="bg-primary/20 p-1.5 rounded-md">
            <Terminal className="text-primary size-5" />
          </div>
          <span className="font-black text-sm uppercase tracking-widest text-white">DevExpert AI © 2026</span>
        </div>
        <div className="flex gap-8">
          <a className="text-slate-500 hover:text-primary transition-colors flex items-center gap-2" href="#">
            <LinkIcon className="size-4" /> GitHub
          </a>
          <a className="text-slate-500 hover:text-primary transition-colors flex items-center gap-2" href="#">
            <User className="size-4" /> LinkedIn
          </a>
          <a className="text-slate-500 hover:text-primary transition-colors flex items-center gap-2" href="#">
            <AtSign className="size-4" /> X
          </a>
        </div>
      </div>
    </footer>
  );
}
