const BTN = {
  PRIMARY:
    "bg-primary hover:bg-primary/90 text-white h-14 rounded-xl font-bold transition-all px-10 cursor-pointer",
  SECONDARY_DARK:
    "border border-white/20 bg-white/5 text-white h-14 rounded-xl font-bold transition-all hover:bg-white/10 px-10 cursor-pointer",
  SECONDARY_LIGHT:
    "border border-gray-300 bg-transparent text-gray-800 h-14 rounded-xl font-bold transition-all hover:bg-gray-100 px-10 cursor-pointer",
};

export const CONSTANTS = {
  PADDING: "p-5",
  ICONS_SIZE: "size-6",

  Dark: {
    TITLE: "text-white",
    SUBTITLE: "text-primary/80",
    DESCRIPTION: "text-slate-400",
    BACKGROUND: "bg-background-dark",
    PRIMARY_BTN: BTN.PRIMARY,
    SECONDARY_BTN: BTN.SECONDARY_DARK,
  },

  Light: {
    TITLE: "text-gray-900",
    SUBTITLE: "text-gray-700",
    DESCRIPTION: "text-gray-500",
    BACKGROUND: "bg-background-light",
    PRIMARY_BTN: BTN.PRIMARY,
    SECONDARY_BTN: BTN.SECONDARY_LIGHT,
  },

  BACKGROUNDS: {
    PRIMARY: "bg-primary",
    PRIMARY_5: "bg-primary/5",
    PRIMARY_10: "bg-primary/10",
    PRIMARY_20: "bg-primary/20",
    PRIMARY_20_BORDER: "border-primary/20",
    PRIMARY_20_SHADOW: "shadow-lg shadow-primary/20",
    PRIMARY_90: "bg-primary/90",
    HOVER_PRIMARY_10: "hover:bg-primary/10",
    BTN_STATE: "hover:bg-primary/20", // Used for buttons and interactive elements (X, icons, etc.)
    HOVER_PRIMARY_90: "hover:bg-primary/90",
    HOVER_WHITE_5: "hover:bg-white/5",
    BORDER_PRIMARY_10: "border-primary/10", // Used for borders around cards, modals, etc.
    BORDER_WHITE_1: "border-white/1",
    BORDER_WHITE_5: "border-white/5",
    BORDER_WHITE_10: "border-white/10",
    BORDER_WHITE_20: "border-white/20",
    WHITE: "bg-white",
    WHITE_1: "bg-white/1",
    WHITE_2: "bg-white/2",
    WHITE_3: "bg-white/3",
    WHITE_5: "bg-white/5",
    WHITE_10: "bg-white/10",
    WHITE_20: "bg-white/20",
    DARK_50: "bg-background-dark/50",
    DARK_80: "bg-background-dark/80",
    DARK_90: "bg-background-dark/90",
    DARK_95: "bg-background-dark/95",
    RED_10: "bg-red-500/10", //Admin Login error background
  },

  TEXT: {
    PRIMARY: "text-primary",
    TITLE: "text-slate-200",
    DESCRIPTION: "text-slate-400",
    LABEL_TXT: "text-slate-500",
    ICON_COLOR_FORM: "text-slate-600",
    ERROR: "text-red-500",
    PLACEHOLDER_MSG: "placeholder:text-slate-600",
    PLACEHOLDER_ADMIN: "placeholder:text-slate-700",
    HOVER_PRIMARY: "hover:text-primary",
    HOVER_WHITE: "hover:text-white",
  },
};
