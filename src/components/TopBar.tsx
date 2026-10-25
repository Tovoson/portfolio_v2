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
      className={`fixed top-0 w-full z-50 border-b border-b-slate-200 ${CONSTANTS.Light.BACKGROUND}`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`${CONSTANTS.Light.HOVER} p-2 rounded-lg`}>
            <Terminal className={`${CONSTANTS.Light.TITLE}`} />
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex  items-center gap-8">
          {navBarLangues[langue].menu.map((link) => (
            <a
              key={link.name}
              className={`${CONSTANTS.Light.DESCRIPTION} font-bold ${CONSTANTS.Light.TITLE} transition-colors`}
              href={link.href}
            >
              {link.name}
            </a>
          ))}
          <div className="relative">
            <button
              type="button"
              className={`flex items-center gap-2 border ${CONSTANTS.Light.HOVER} ${CONSTANTS.contour} ${CONSTANTS.Light.DESCRIPTION} rounded-lg px-3 py-2 text-sm transition-all`}
              onClick={() => setShowMenu(true)}
            >
              <Globe className="size-4" />
              <span>{langue.toUpperCase()}</span>
            </button>

            {showMenu && (
              <div
                className={`absolute top-full left-0 mt-2 w-28 z-50 rounded-xl border ${CONSTANTS.contour} ${CONSTANTS.Light.BACKGROUND} shadow-xl`}
              >
                <DropDownLanguage
                  txt={"FR"}
                  changeLanguage={changeLanguage}
                  setShowMenu={setShowMenu}
                />
                <DropDownLanguage
                  txt={"EN"}
                  changeLanguage={changeLanguage}
                  setShowMenu={setShowMenu}
                />
              </div>
            )}
          </div>
          <button
            type="button"
            onClick={() => window.open("/cv.pdf", "_blank")}
            className={`border ${CONSTANTS.contour} ${CONSTANTS.Light.BACKGROUND} ${CONSTANTS.Light.HOVER} ${CONSTANTS.Light.DESCRIPTION} px-6 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2 cursor-pointer`}
          >
            <Download className="size-4" />
            {navBarLangues[langue].btnDowload}
          </button>
          <a
            href="#contact"
            className={`${CONSTANTS.Light.PRIMARY_BTN} ${CONSTANTS.Light.HOVER_PRIMARY_BTN} ${CONSTANTS.Light.BTN_TXT} px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg cursor-pointer`}
          >
            {navBarLangues[langue].btnContact}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex flex-row xl:hidden gap-2">
          <div className="relative">
            <button
              type="button"
              className={`flex items-center gap-2 border ${CONSTANTS.contour} ${CONSTANTS.Light.HOVER} ${CONSTANTS.Light.DESCRIPTION} rounded-lg px-3 py-2 text-sm transition-all`}
              onClick={() => setShowMenu(true)}
            >
              <Globe className="size-4" />
              <span>{langue.toUpperCase()}</span>
            </button>

            {showMenu && (
              <div
                className={`absolute top-full left-0 mt-2 w-28 z-50 rounded-xl border ${CONSTANTS.Light.BACKGROUND} ${CONSTANTS.contour}`}
              >
                <DropDownLanguage
                  txt={"FR"}
                  changeLanguage={changeLanguage}
                  setShowMenu={setShowMenu}
                />
                <DropDownLanguage
                  txt={"EN"}
                  changeLanguage={changeLanguage}
                  setShowMenu={setShowMenu}
                />
              </div>
            )}
          </div>

          <button
            type="button"
            className={`xl:hidden ${CONSTANTS.Light.DESCRIPTION} p-2 cursor-pointer`}
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
            className={`xl:hidden ${CONSTANTS.Light.BACKGROUND} backdrop-blur-xl border-b ${CONSTANTS.contour} overflow-hidden`}
          >
            <div className="flex flex-col p-6 gap-6">
              {navBarLangues[langue].menu.map((link) => (
                <a
                  key={link.name}
                  className={`${CONSTANTS.Light.DESCRIPTION} text-sm font-bold transition-colors`}
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
                  className={`w-full border ${CONSTANTS.contour} ${CONSTANTS.Light.HOVER} ${CONSTANTS.Light.DESCRIPTION} px-6 py-3 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer`}
                >
                  <Download className="size-4" />
                  {navBarLangues[langue].btnDowload}
                </button>
                <button
                  type="button"
                  className={`w-full ${CONSTANTS.Light.HOVER_PRIMARY_BTN} ${CONSTANTS.Light.PRIMARY_BTN} ${CONSTANTS.Light.BTN_TXT} px-6 py-3 rounded-lg text-sm font-bold transition-all shadow-lg cursor-pointer`}
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

type DropDownProps = {
  txt: "FR" | "EN";
  changeLanguage: (lg: "FR" | "EN") => void;
  setShowMenu: (val: boolean) => void;
};

function DropDownLanguage({ txt, changeLanguage, setShowMenu }: DropDownProps) {
  const handleClick = () => {
    changeLanguage(txt);
    setShowMenu(false);
  };

  return (
    <button
      type="button"
      className={`w-full text-left px-4 py-2 text-sm transition-colors  ${CONSTANTS.Light.HOVER} ${CONSTANTS.Light.DESCRIPTION}`}
      onClick={() => handleClick()}
    >
      {txt}
    </button>
  );
}
