import { useEffect, useRef, useState } from "react";
import { Menu } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { Link, useLocation } from "react-router-dom";
import type { MobileDropdownProps } from "../../types";

export function MobileDropdown({ navLinks }: MobileDropdownProps) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
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
    <div ref={dropdownRef} className="relative md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="gap-2 px-3 p-2 size border-accent border-2 shadow-lg hover:bg-accent rounded-md font-semibold flex items-center cursor-pointer"
      >
        <Menu className="h-5 w-5" />
      </button>

      {open && (
        <div className="absolute top-full flex flex-col p-1 gap-1 right-0 md:w-full rounded-md bg-background border-t shadow-lg z-50 animate-in fade-in slide-in-from-top">
          {navLinks.map(({ href, label, onClick }) => {
            if (href != null) {
              return (
                <Link to={href}>
                  <button
                    className={twMerge(
                      "gap-2 text-lg px-3 p-2 size hover:bg-accent rounded-md font-semibold cursor-pointer",
                      pathname === href && "bg-accent text-accent-foreground"
                    )}
                    key={href}
                  >
                    {label}
                  </button>
                </Link>
              );
            } else {
              return (
                <button
                  className={
                    "p-1 flex border-foreground rounded-md cursor-pointer hover:bg-accent w-40 bg-background gap-2"
                  }
                  key={href}
                  onClick={onClick}
                >
                  {label}
                </button>
              );
            }
          })}
        </div>
      )}
    </div>
  );
}
