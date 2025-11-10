import { BarChart3 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { NavButton } from "./ui/NavButton";
import LanguageDropdown from "./ui/LanguageDropdown";
import MobileDropdown from "./ui/MobileDropdown";

export function NavBar() {
  const { pathname } = useLocation();
  const { t } = useTranslation("common");

  const baseLinks = [
    { href: "/login", label: t("buttons.logIn") },
    { href: "/register", label: t("navbar.getStarted") },
  ];

  const navLinks = [...baseLinks];

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
        <div className="flex gap-4">
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

          {/* Mobile Navigation 
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="lg">
                  <Menu className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {/* {currentUser && (
                <div className="px-2 py-1.5 text-sm font-medium">
                  {currentUser.email}
                </div>
              )} 
                <DropdownMenuSeparator />
                {navLinks.map(({ href, label, type }) => (
                  <React.Fragment key={href}>
                    <DropdownMenuItem
                      onClick={() => {
                        type === "logout" && handleLogout();
                        navigate(href);
                      }}
                    >
                      <Shield className="h-4 w-4 mr-2" />
                      {label}
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                  </React.Fragment>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div> */}
        </div>
      </div>
    </header>
  );
}
