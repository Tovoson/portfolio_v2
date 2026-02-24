import { MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-24 bg-background-dark" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Form Column */}
          <div className="lg:col-span-3 glass-card p-8 md:p-12 rounded-3xl border border-white/5 bg-white/2">
            <div className="space-y-6 mb-10">
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                Let's build the <br />
                future.
              </h2>
              <p className="text-slate-400 max-w-md">
                Have a complex technical challenge? I'm ready to help you solve
                it.
              </p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    Full Name
                  </label>
                  <input
                    className="w-full bg-white/3 border border-white/10 rounded-xl px-4 py-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white placeholder:text-slate-600"
                    placeholder="Name..."
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    Email Address
                  </label>
                  <input
                    className="w-full bg-white/3 border border-white/10 rounded-xl px-4 py-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white placeholder:text-slate-600"
                    placeholder="email@gmail.com"
                    type="email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  Message
                </label>
                <textarea
                  className="w-full bg-white/3 border border-white/10 rounded-xl px-4 py-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white placeholder:text-slate-600 min-h-[160px] resize-none"
                  placeholder="Describe your project..."
                ></textarea>
              </div>
              <button className="bg-primary hover:bg-primary/90 text-white h-14 rounded-xl font-bold transition-all shadow-xl shadow-primary/30 px-10 cursor-pointer">
                Send Message
              </button>
            </form>
          </div>

          {/* Info Cards Column */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Location Card */}
            <div className="glass-card p-8 rounded-3xl border border-white/5 bg-white/2 space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <MapPin className="size-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    Office Location
                  </span>
                  <p className="text-white font-bold">
                    Ivato, Antananarivo, Madagascar
                  </p>
                </div>
              </div>

              <div className="w-full aspect-video rounded-2xl overflow-hidden border border-white/5 transition-all duration-500">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15105.628208635175!2d47.470962374565126!3d-18.824560349662526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f081856482706b%3A0x89413cfd94072a76!2sIvato%20Firaisana%2C%20Tananarive!5e0!3m2!1sfr!2smg!4v1771910069979!5m2!1sfr!2smg"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Direct Contact Card */}
            <div className="glass-card p-8 rounded-3xl border border-white/5 bg-white/2 flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  Direct Contact
                </span>
                <p className="text-primary font-bold text-lg">+261348143958</p>
              </div>
              <div className="p-4 border border-white/10 rounded-full hover:bg-primary/10 hover:border-primary/30 transition-all cursor-pointer group">
                <Phone className="size-5 text-slate-400 group-hover:text-primary transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
