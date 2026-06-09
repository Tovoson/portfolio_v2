import { useState } from "react";
import { ChevronDown, ChevronsDown, ChevronsDownIcon, ChevronsUp, ChevronUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { CONSTANTS } from "@/constants/Constants";

export type TechItem = {
  icon: LucideIcon;
  name: string;
  color: string;
  bg: string;
};

type Props = {
  title: string;
  tech: TechItem[];
  defaultOpen?: boolean;
};

export default function StackItems({ title, tech, defaultOpen = false }: Props) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`rounded-lg border ${CONSTANTS.BACKGROUNDS.BORDER_PRIMARY_10} ${CONSTANTS.BACKGROUNDS.WHITE_2} ${CONSTANTS.PADDING} shadow-black/10 transition-all duration-300`}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <div>
          <p className={`text-[16px] font-bold ${CONSTANTS.TEXT.PRIMARY}`}>
            {title}
          <span className={`mt-1 text-[14px] font-medium ${CONSTANTS.TEXT.TITLE} ml-4`}>
            {tech.length} items
          </span>
          </p>
        </div>

        <span className={`inline-flex h-6 w-6 items-center justify-center ${CONSTANTS.TEXT.PRIMARY} transition-all duration-200 ${CONSTANTS.BACKGROUNDS.BTN_STATE} hover:rounded-full`}>
          {open ? <ChevronUp className={CONSTANTS.ICONS_SIZE} /> : <ChevronDown className={CONSTANTS.ICONS_SIZE} />}
        </span>
      </button>

      <div className={`${open ? "mt-6 grid gap-4" : "hidden"}`}>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {tech.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center gap-3 rounded-2xl ${CONSTANTS.BACKGROUNDS.BORDER_PRIMARY_10} p-4 text-center transition duration-200 hover:scale-[1.01] hover:grayscale-0 hover:shadow-lg`}
            >
              <item.icon className={`${CONSTANTS.ICONS_SIZE} ${CONSTANTS.TEXT.TITLE}`} />
              <span className={`text-xs font-bold uppercase tracking-widest ${CONSTANTS.TEXT.TITLE}`}>
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
