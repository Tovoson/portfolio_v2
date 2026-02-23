export default function Contact() {
  return (
    <section className="py-24 bg-primary/5" id="contact">
      <div className="max-w-4xl mx-auto px-6">
        <div className="glass-card p-10 md:p-16 rounded-3xl border flex flex-col items-center gap-12 border-primary/5">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white">Let's build the future.</h2>
            <p className="text-slate-400">Have a complex technical challenge? I'm ready to help you solve it.</p>
          </div>
          <form className="w-full flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6 w-full">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Full Name</label>
                <input 
                  className="bg-background-dark/40 border border-white/10 rounded-xl px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white" 
                  placeholder="Nom..." 
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Email Address</label>
                <input 
                  className="bg-background-dark/40 border border-white/10 rounded-xl px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white" 
                  placeholder="email@gmail.com" 
                  type="email"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Message</label>
              <textarea 
                className="bg-background-dark/40 border border-white/10 rounded-xl px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white" 
                placeholder="Describe your project..." 
                rows={4}
              ></textarea>
            </div>
            <button className="bg-primary hover:bg-primary/90 text-white h-14 rounded-xl font-bold transition-all shadow-xl shadow-primary/30 w-full md:w-fit px-12 mx-auto cursor-pointer">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
