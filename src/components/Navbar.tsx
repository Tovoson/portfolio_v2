import { Terminal, Download, Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CONSTANTS } from "@/constants/Constants";
import { navBarLangues } from "../data/langues";
import { useLanguageStore } from "../store/useLanguageStore";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { langue, changeLanguage, setShowMenu, showMenu } = useLanguageStore();

  return (
    <nav
      className={`fixed top-0 w-full z-50 glass-card border-b ${CONSTANTS.BACKGROUNDS.BORDER_PRIMARY_10}`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`${CONSTANTS.BACKGROUNDS.PRIMARY} p-2 rounded-lg`}>
            <Terminal className={`${CONSTANTS.TEXT.TITLE} size-6`} />
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex  items-center gap-8">
          {navBarLangues[langue].menu.map((link) => (
            <a
              key={link.name}
              className={`${CONSTANTS.TEXT.TITLE} text-sm font-medium ${CONSTANTS.TEXT.HOVER_PRIMARY} transition-colors`}
              href={link.href}
            >
              {link.name}
            </a>
          ))}
          <div className="relative">
            <button
              type="button"
              className={`flex items-center gap-2 border ${CONSTANTS.BACKGROUNDS.BORDER_PRIMARY_10} ${CONSTANTS.BACKGROUNDS.HOVER_PRIMARY_10} ${CONSTANTS.TEXT.TITLE} rounded-lg px-3 py-2 text-sm transition-all`}
              onClick={() => setShowMenu(true)}
            >
              <Globe className="size-4" />
              <span>{langue.toUpperCase()}</span>
            </button>

            {showMenu && (
              <div
                className={`absolute top-full left-0 mt-2 w-28 z-50 rounded-xl border ${CONSTANTS.BACKGROUNDS.BORDER_PRIMARY_10} ${CONSTANTS.BACKGROUNDS.HOVER_PRIMARY_10} shadow-xl`}
              >
                <DropDownLanguage txt={"fr"} changeLanguage={changeLanguage} setShowMenu={setShowMenu} />
                <DropDownLanguage txt={"en"} changeLanguage={changeLanguage} setShowMenu={setShowMenu} />
              </div>
            )}
          </div>
          <button
            type="button"
            onClick={() => window.open("/cv.pdf", "_blank")}
            className={`border ${CONSTANTS.BACKGROUNDS.BORDER_PRIMARY_10} ${CONSTANTS.BACKGROUNDS.HOVER_PRIMARY_10} ${CONSTANTS.TEXT.TITLE} px-6 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2 cursor-pointer`}
          >
            <Download className="size-4" />
            {navBarLangues[langue].btnDowload}
          </button>
          <a
            href="#contact"
            className={`${CONSTANTS.BACKGROUNDS.PRIMARY} ${CONSTANTS.BACKGROUNDS.HOVER_PRIMARY_90} ${CONSTANTS.TEXT.TITLE} px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg cursor-pointer`}
          >
            {navBarLangues[langue].btnContact}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex flex-row xl:hidden gap-2">
          <div className="relative">
            <button
              type="button"
              className={`flex items-center gap-2 border ${CONSTANTS.BACKGROUNDS.BORDER_PRIMARY_10} ${CONSTANTS.BACKGROUNDS.HOVER_PRIMARY_10} ${CONSTANTS.TEXT.TITLE} rounded-lg px-3 py-2 text-sm transition-all`}
              onClick={() => setShowMenu(true)}
            >
              <Globe className="size-4" />
              <span>{langue.toUpperCase()}</span>
            </button>

            {showMenu && (
              <div
                className={`absolute top-full left-0 mt-2 w-28 z-50 rounded-xl border ${CONSTANTS.BACKGROUNDS.BORDER_PRIMARY_10} ${CONSTANTS.BACKGROUNDS.HOVER_PRIMARY_10} shadow-xl`}
              >
                
                <DropDownLanguage txt={"fr"} changeLanguage={changeLanguage} setShowMenu={setShowMenu} />
                <DropDownLanguage txt={"en"} changeLanguage={changeLanguage} setShowMenu={setShowMenu} />
              </div>
            )}
          </div>

          <button
            type="button"
            className={`xl:hidden ${CONSTANTS.TEXT.TITLE} p-2 cursor-pointer`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`xl:hidden ${CONSTANTS.BACKGROUNDS.DARK_95} backdrop-blur-xl border-b ${CONSTANTS.BACKGROUNDS.BORDER_PRIMARY_10} overflow-hidden`}
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

type DropDownProps={
  txt: "fr" | "en";
  changeLanguage: (lg: "fr" | "en") => void;
  setShowMenu: (val: boolean) => void;
}

function DropDownLanguage({txt, changeLanguage, setShowMenu}: DropDownProps) {

  const handleClick = () =>{
    changeLanguage(txt);
    setShowMenu(false);
  }

  return (
    <button
      type="button"
      className="w-full text-left px-4 py-2 text-sm transition-colors hover:bg-white/10"
      onClick={() => handleClick()}
    >
      {txt}
    </button>
  );
}
