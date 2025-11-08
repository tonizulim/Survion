import { Link } from "react-router-dom";
import type { NavButtonProps } from "../../types/navButtonProps";
import { twMerge } from "tailwind-merge";

export function NavButton({ href, label, selected }: NavButtonProps) {
  return (
    <Link to={href}>
      <button
        className={twMerge(
          "gap-2 text-lg px-3 p-2 size hover:bg-accent rounded-md font-semibold cursor-pointer",
          selected && "bg-accent text-accent-foreground"
        )}
      >
        {label}
      </button>
    </Link>
  );
}
