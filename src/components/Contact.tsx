import { CONSTANTS } from "@/constants/Constants";
import { MapPin, Phone } from "lucide-react";
import { useLanguageStore } from "../store/useLanguageStore";
import { contactLanguages } from "../data/langues";
import Button from "./ui/Button";

export default function Contact() {
  const { langue } = useLanguageStore();
  const contactLangue = contactLanguages[langue];

  return (
    <section
      className={`py-32 max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-8`}
      id="contact"
    >
      {/* Contact Form Column */}
      <div
        className={`lg:col-span-3 ${CONSTANTS.PADDING} rounded-3xl border ${CONSTANTS.contour} ${CONSTANTS.Light.CARD}`}
      >
        <div className="space-y-6 mb-10">
          <h2
            className={`text-4xl md:text-5xl font-black ${CONSTANTS.Light.TITLE} leading-tight`}
          >
            {contactLangue.title}
          </h2>
          <p className={`${CONSTANTS.Light.DESCRIPTION} max-w-md`}>
            {contactLangue.desc}
          </p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                className={`text-[10px] font-bold uppercase tracking-widest ${CONSTANTS.Light.DESCRIPTION}`}
              >
                {contactLangue.nameLabel}
              </label>
              <input
                className={`w-full ${CONSTANTS.Light.Bg_BLUE} border ${CONSTANTS.contour} ${CONSTANTS.Light.DESCRIPTION} rounded-xl px-4 py-4 outline-none transition-all ${CONSTANTS.TEXT.TITLE} ${CONSTANTS.Light.PLACEHOLDER_MSG}`}
                placeholder={contactLangue.namePlaceholder}
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label
                className={`text-[10px] font-bold uppercase tracking-widest ${CONSTANTS.Light.DESCRIPTION}`}
              >
                {contactLangue.emailLabel}
              </label>
              <input
                className={`w-full ${CONSTANTS.Light.Bg_BLUE} border ${CONSTANTS.contour} ${CONSTANTS.Light.DESCRIPTION} rounded-xl px-4 py-4 outline-none transition-all ${CONSTANTS.TEXT.TITLE} ${CONSTANTS.Light.PLACEHOLDER_MSG}`}
                placeholder="email@gmail.com"
                type="email"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label
              className={`text-[10px] font-bold uppercase tracking-widest ${CONSTANTS.Light.DESCRIPTION}`}
            >
              Message
            </label>
            <textarea
              className={`w-full ${CONSTANTS.Light.Bg_BLUE} border ${CONSTANTS.contour} ${CONSTANTS.Light.DESCRIPTION} rounded-xl px-4 py-4 outline-none transition-all ${CONSTANTS.TEXT.TITLE} ${CONSTANTS.Light.PLACEHOLDER_MSG} min-h-40 resize-none`}
              placeholder={contactLangue.msgPlaceholder}
            ></textarea>
          </div>
          <Button type="submit" className={`${CONSTANTS.Light.PRIMARY_BTN} ${CONSTANTS.Light.HOVER_PRIMARY_BTN} ${CONSTANTS.Light.BTN_TXT} px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg cursor-pointer`}>
            {contactLangue.sendBtn}
          </Button>
        </form>
      </div>

      {/* Info Cards Column */}
      <div className="lg:col-span-2 flex flex-col gap-8">
        {/* Location Card */}
        <div
          className={`${CONSTANTS.PADDING} rounded-3xl border ${CONSTANTS.Light.CARD} ${CONSTANTS.contour} space-y-6`}
        >
          <div className="flex items-start gap-4">
            <div className={`p-3 ${CONSTANTS.Light.Bg_BLUE} rounded-xl`}>
              <MapPin className={`${CONSTANTS.Light.DESCRIPTION}`} />
            </div>
            <div className="space-y-1">
              <span
                className={`text-[10px] font-bold uppercase tracking-widest ${CONSTANTS.Light.DESCRIPTION}`}
              >
                {contactLangue.positionTxt}
              </span>
              <p className={`${CONSTANTS.Light.DESCRIPTION} font-bold`}>
                Madagascar
              </p>
            </div>
          </div>

          {/* <div className="w-full aspect-video rounded-2xl overflow-hidden border border-white/5 transition-all duration-500">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15105.628208635175!2d47.470962374565126!3d-18.824560349662526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f081856482706b%3A0x89413cfd94072a76!2sIvato%20Firaisana%2C%20Tananarive!5e0!3m2!1sfr!2smg!4v1771910069979!5m2!1sfr!2smg"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div> */}
        </div>

        {/* Direct Contact Card */}
        <div
          className={`${CONSTANTS.PADDING} rounded-3xl border ${CONSTANTS.Light.CARD} ${CONSTANTS.contour} flex items-center justify-start gap-3`}
        >
          <div
            className={`p-4 border rounded-full ${CONSTANTS.Light.Bg_BLUE} transition-all cursor-pointer group`}
          >
            <Phone
              className={` ${CONSTANTS.Light.DESCRIPTION} transition-colors`}
            />
          </div>
          <div className={`space-y-1 ${CONSTANTS.Light.DESCRIPTION}`}>
            <span className="text-[10px] font-bold uppercase tracking-widest">
              Direct Contact
            </span>
            <p className={` font-bold text-lg`}>+261348143958</p>
          </div>
        </div>
      </div>
    </section>
  );
}
