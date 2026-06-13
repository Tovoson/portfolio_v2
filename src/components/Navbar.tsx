import { Terminal, Download, Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CONSTANTS } from "@/constants/Constants";
import { navBarLangues } from "../data/langues";

type LangueKey = keyof typeof navBarLangues;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [langue, setLangue] = useState<LangueKey>("fr");
  const [showMenu, setShowMenu] = useState(false)

  return (
    <nav
      className={`fixed top-0 w-full z-50 glass-card border-b ${CONSTANTS.BACKGROUNDS.BORDER_PRIMARY_10}`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`${CONSTANTS.BACKGROUNDS.PRIMARY} p-2 rounded-lg`}>
            <Terminal className={`${CONSTANTS.TEXT.TITLE} size-6`} />
          </div>
          {/* <span
            className={`${CONSTANTS.TEXT.TITLE} text-xl font-bold tracking-tight uppercase`}
          >
            Mara Tovoson
          </span> */}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navBarLangues[langue].menu.map((link) => (
            <a
              key={link.name}
              className={`${CONSTANTS.TEXT.TITLE} text-sm font-medium ${CONSTANTS.TEXT.HOVER_PRIMARY} transition-colors`}
              href={link.href}
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-2 relative">
            <button
              type="button"
              className={`flex items-center gap-2 border ${CONSTANTS.BACKGROUNDS.BORDER_PRIMARY_10} ${CONSTANTS.BACKGROUNDS.HOVER_PRIMARY_10} ${CONSTANTS.TEXT.TITLE} rounded-lg px-3 py-2 text-sm transition-all`}
              onClick={() => setShowMenu((current) => !current)}
            >
              <Globe className="size-4" />
              <span>{langue.toUpperCase()}</span>
            </button>

            {showMenu && (
              <div className={`absolute -ml-11 mt-30 w-28 rounded-xl border ${CONSTANTS.BACKGROUNDS.BORDER_PRIMARY_10} ${CONSTANTS.BACKGROUNDS.HOVER_PRIMARY_10} shadow-xl`}>
                <button
                  type="button"
                  className="w-full text-left px-4 py-2 text-sm transition-colors hover:bg-white/10"
                  onClick={() => {
                    setLangue("fr");
                    setShowMenu(false);
                  }}
                >
                  FR
                </button>
                <button
                  type="button"
                  className="w-full text-left px-4 py-2 text-sm transition-colors hover:bg-white/10"
                  onClick={() => {
                    setLangue("ang");
                    setShowMenu(false);
                  }}
                >
                  EN
                </button>
              </div>
            )}

            <button
              type="button"
              onClick={() => window.open("/cv.pdf", "_blank")}
              className={`border ${CONSTANTS.BACKGROUNDS.BORDER_PRIMARY_10} ${CONSTANTS.BACKGROUNDS.HOVER_PRIMARY_10} ${CONSTANTS.TEXT.TITLE} px-6 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2 cursor-pointer`}
            >
              <Download className="size-4" />
              {navBarLangues[langue].btnDowload}
            </button>
          </div>
          <a
            href="#contact"
            className={`${CONSTANTS.BACKGROUNDS.PRIMARY} ${CONSTANTS.BACKGROUNDS.HOVER_PRIMARY_90} ${CONSTANTS.TEXT.TITLE} px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg cursor-pointer`}
          >
            {navBarLangues[langue].btnContact}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className={`md:hidden ${CONSTANTS.TEXT.TITLE} p-2 cursor-pointer`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden ${CONSTANTS.BACKGROUNDS.DARK_95} backdrop-blur-xl border-b ${CONSTANTS.BACKGROUNDS.BORDER_PRIMARY_10} overflow-hidden`}
          >
            <div className="flex flex-col p-6 gap-6">
              {navBarLangues[langue].menu.map((link) => (
                <a
                  key={link.name}
                  className={`${CONSTANTS.TEXT.TITLE} text-lg font-medium ${CONSTANTS.TEXT.HOVER_PRIMARY} transition-colors`}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-4 pt-4 border-t border-white/10">
                <label
                  className={`w-full flex items-center justify-between border ${CONSTANTS.BACKGROUNDS.BORDER_PRIMARY_10} ${CONSTANTS.BACKGROUNDS.HOVER_PRIMARY_10} ${CONSTANTS.TEXT.TITLE} px-4 py-3 rounded-lg text-sm transition-all`}
                >
                  <span className="flex items-center gap-2">
                    <Globe className="size-4" />
                    Language
                  </span>
                  <select
                    value={langue}
                    onChange={(event) =>
                      setLangue(event.target.value as LangueKey)
                    }
                    className={`${CONSTANTS.TEXT.TITLE} bg-transparent outline-none cursor-pointer`}
                  >
                    <option value="fr">FR</option>
                    <option value="ang">EN</option>
                  </select>
                </label>
                <button
                  type="button"
                  onClick={() => window.open("/cv.pdf", "_blank")}
                  className={`w-full border ${CONSTANTS.BACKGROUNDS.BORDER_PRIMARY_10} ${CONSTANTS.BACKGROUNDS.HOVER_PRIMARY_10} ${CONSTANTS.TEXT.TITLE} px-6 py-3 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer`}
                >
                  <Download className="size-4" />
                  {navBarLangues[langue].btnDowload}
                </button>
                <button
                  type="button"
                  className={`w-full ${CONSTANTS.BACKGROUNDS.PRIMARY} ${CONSTANTS.BACKGROUNDS.HOVER_PRIMARY_90} ${CONSTANTS.TEXT.TITLE} px-6 py-3 rounded-lg text-sm font-bold transition-all shadow-lg cursor-pointer`}
                >
                  {navBarLangues[langue].btnContact}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
