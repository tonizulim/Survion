import { BarChart3 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { LanguageDropdown, MobileDropdown } from ".";
import { useAuthContext } from "../contexts";
import { twMerge } from "tailwind-merge";

export function NavBar() {
  const { pathname } = useLocation();
  const { t } = useTranslation("common");
  const { user, logoutUser } = useAuthContext();

  const baseLinks = [
    { href: "/login", label: t("buttons.logIn"), onClick: () => {} },
    { href: "/register", label: t("navbar.getStarted"), onClick: () => {} },
  ];

  const LoginUserLinks = [
    { href: "/dashboard", label: t("navbar.dashboard"), onClick: () => {} },
    {
      label: t("navbar.logout"),
      onClick: () => logoutUser(),
    },
  ];

  const navLinks =
    user?.isApproved && user.isEmailVerified
      ? [...LoginUserLinks]
      : [...baseLinks];

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
            {navLinks.map(({ href, label, onClick }, index) => {
              if (href != null) {
                return (
                  <Link to={href} key={href}>
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
                    key={index}
                    className={
                      "gap-2 text-lg px-3 p-2 size hover:bg-accent rounded-md font-semibold cursor-pointer"
                    }
                    onClick={onClick}
                  >
                    {label}
                  </button>
                );
              }
            })}
          </div>

          <LanguageDropdown />

          <MobileDropdown navLinks={navLinks} />
        </div>
      </div>
    </header>
  );
}
