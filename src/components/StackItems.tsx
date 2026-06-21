import { useState } from "react";
import { ChevronDown, ChevronUp, LucideProps } from "lucide-react";
import { CONSTANTS } from "@/constants/Constants";

type TechItem = {
  icon:
    | string
    | undefined
    | React.ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
      >;
  name: string;
};

type Props = {
  title: string;
  tech: TechItem[];
  defaultOpen?: boolean;
  desc: string;
};

export default function StackItems({
  title,
  tech,
  desc,
  defaultOpen = false,
}: Props) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      className={`rounded-lg border ${CONSTANTS.BACKGROUNDS.BORDER_PRIMARY_10} ${CONSTANTS.BACKGROUNDS.WHITE_2} ${CONSTANTS.PADDING} shadow-black/10 transition-all duration-300`}
    >
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <div>
          <p className={`text-[16px] font-bold ${CONSTANTS.TEXT.PRIMARY}`}>
            {title}
            <span
              className={`mt-1 text-[14px] font-medium ${CONSTANTS.TEXT.TITLE} ml-4`}
            >
              {tech.length} {desc}
            </span>
          </p>
        </div>

        <span
          className={`inline-flex h-6 w-6 items-center justify-center ${CONSTANTS.TEXT.PRIMARY} transition-all duration-200 ${CONSTANTS.BACKGROUNDS.BTN_STATE} hover:rounded-full`}
        >
          {open ? (
            <ChevronUp className={CONSTANTS.ICONS_SIZE} />
          ) : (
            <ChevronDown className={CONSTANTS.ICONS_SIZE} />
          )}
        </span>
      </button>

      <div className={`${open ? "mt-6 grid gap-4" : "hidden"}`}>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {tech.map((item, index) => {

            const isStringIcon = typeof item.icon === "string";
            const isComponentIcon = !isStringIcon && item.icon != null;
            const Icon = isComponentIcon
              ? (item.icon as React.ComponentType<any>)
              : undefined;  
            const src = isStringIcon ? (item.icon as string) : undefined;

            return (
              <div
                key={index}
                className={`flex flex-col items-center justify-center gap-3 ${CONSTANTS.BACKGROUNDS.BORDER_PRIMARY_10} p-4 text-center transition duration-200`}
              >
                {Icon ? (
                  <Icon style={{ width: "32px", height: "32px" }} /> // placeholder
                ) : (
                  <img
                    src={src}
                    alt=""
                    style={{ width: "32px", height: "32px" }}
                  />
                )}
                <span
                  className={`text-xs font-bold uppercase tracking-widest ${CONSTANTS.TEXT.TITLE}`}
                >
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
