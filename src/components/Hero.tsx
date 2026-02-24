import { ArrowRight, BarChart3 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden hero-glow">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-bold text-primary tracking-widest uppercase">Available for new projects</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-white">
            Architecting <span className="text-primary">Intelligent Systems</span> & Scalable Solutions
          </h1>
          <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
            Fullstack Developer | AI Systems Engineer | Database Expert. 
            Bridging the gap between complex data architectures, LLM orchestration, and seamless user experiences.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="bg-primary hover:bg-primary/90 text-white h-14 px-8 rounded-xl font-bold transition-all shadow-xl shadow-primary/30 flex items-center gap-2 cursor-pointer">
              View Projects <ArrowRight className="size-5" />
            </a>
            <button className="glass-card hover:bg-white/5 border h-14 px-8 rounded-xl font-bold transition-all border-primary/5 text-white cursor-pointer">
              <a href="#stack">
              Technical Stack
              </a>
            </button>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block relative"
        >
          <div className="relative w-full aspect-square glass-card rounded-3xl overflow-hidden border p-4 border-primary/5">
            <div 
              className="w-full h-full rounded-2xl bg-cover bg-center" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDGwdVUs2BTnfArKcjhwzljBnnrKknYc9ckWZs3AoCLBAQCpsgnGS5MW7jNpnwDzUAJXMU4XLNOfth777x-8aKjHPmt8jtUFcczEdzek516FOl1DtY0fDz8ulJfkfS_cYRLhni3syiNf0-Ua_noOvhcVacwvevb-1UAt-b9PPQBtFwQmyWB4iy4rJbSwoLRC4-RR4ASqTCKgi5I4DMRg1q8iqqyRu_NsP_yF4MQUKSaIzCxLQySh5pZWEudkaGi1cfILbc05w1BuTDJ')" }}
            ></div>
            <div className="absolute bottom-10 left-10 glass-card p-6 rounded-2xl border border-white/20">
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <BarChart3 className="text-primary size-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase font-bold tracking-widest">Active nodes</p>
                  <p className="text-xl font-black text-white">1,248 TPS</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
