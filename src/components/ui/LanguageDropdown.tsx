import i18n, { locales, localeNames, type Locale } from "../../i18n/i18n";
import { useEffect, useRef, useState } from "react";
import { Globe } from "lucide-react";
import { twMerge } from "tailwind-merge";

export default function LanguageDropdown() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="gap-2 px-3 p-2 size border-accent border-2 shadow-lg hover:bg-accent rounded-md font-semibold flex items-center cursor-pointer"
      >
        <Globe className="h-5 w-5" />
        <span className="hidden md:inline">
          {localeNames[i18n.language as Locale] || i18n.language}
        </span>
      </button>

      {open && (
        <div className="absolute top-full flex flex-col p-1 gap-1 md:w-full right-0 rounded-md bg-background border-t shadow-lg z-50 animate-in fade-in slide-in-from-top">
          {locales.map((loc) => {
            return (
              <button
                className={twMerge(
                  "p-1 border-2 border-foreground rounded-md cursor-pointer hover:bg-accent w-40 md:w-full",
                  i18n.language === loc && "bg-accent text-accent-foreground"
                )}
                key={loc}
                onClick={() => i18n.changeLanguage(loc)}
              >
                {localeNames[loc]}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
