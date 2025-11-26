import { BarChart3 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { LanguageDropdown, MobileDropdown } from ".";
import { useUserContext } from "../contexts";
import { NavButton } from ".";

export function NavBar() {
  const { pathname } = useLocation();
  const { t } = useTranslation("common");
  const { user } = useUserContext();

  const baseLinks = [
    { href: "/login", label: t("buttons.logIn") },
    { href: "/register", label: t("navbar.getStarted") },
  ];

  const LoginUserLinks = [{ href: "/user", label: t("navbar.dashboard") }];

  const navLinks = user ? [...LoginUserLinks] : [...baseLinks];

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 fixed w-full top-0 z-500">
      <div className="ml-4 px-4 py-3 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <BarChart3 className="h-5 w-5 md:h-6 md:w-6 text-primary" />
          <span className="text-lg md:text-xl font-bold">Survion</span>
        </Link>
        <div className="flex gap-4 items-center">
          {user && (
            <span className="text-md text-muted-foreground text-center">
              {user.email}
            </span>
          )}
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {navLinks.map(({ href, label }) => (
              <NavButton
                key={href}
                href={href}
                label={label}
                selected={pathname === href}
              />
            ))}
          </div>

          <LanguageDropdown />

          <MobileDropdown navLinks={navLinks} />
        </div>
      </div>
    </header>
  );
}
