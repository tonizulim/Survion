import { useEffect, useRef, useState } from "react";
import {
  BarChart3,
  EllipsisVertical,
  PowerOff,
  SquarePen,
  Trash2,
} from "lucide-react";
import { Link } from "react-router-dom";
import type { SurveyCardDropdownProps } from "../../types/SurveyCardDropdownProps";
import { useTranslation } from "react-i18next";

export default function SurveyCardDropdown({
  surveyId,
  setSurveyToDelete,
  deactivate,
}: SurveyCardDropdownProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation("surveyCard");

  const buttons = [
    {
      label: t("surveyCardDropdown.edit"),
      icon: <SquarePen className="h-5 w-5 text-muted-foreground" />,
      href: `/survey/edit/${surveyId}`,
    },
    {
      label: t("surveyCardDropdown.results"),
      icon: <BarChart3 className="h-5 w-5 text-muted-foreground" />,
      href: `/survey/results/${surveyId}`,
    },
    {
      label: t("surveyCardDropdown.disable"),
      icon: <PowerOff className="h-5 w-5 text-muted-foreground" />,
      onClick: () => deactivate({ surveyId }),
    },
    {
      label: t("surveyCardDropdown.delete"),
      icon: <Trash2 className="h-5 w-5 text-muted-foreground" />,
      onClick: () => setSurveyToDelete(surveyId),
    },
  ];

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
        className="gap-2 px-3 p-2 size hover:bg-accent rounded-md font-semibold flex items-center cursor-pointer"
      >
        <EllipsisVertical className="h-5 w-5" />
      </button>

      {open && (
        <div className="absolute top-full flex flex-col p-1 gap-1 right-0 w-44 items-center rounded-md bg-background border-2 shadow-lg z-50 animate-in fade-in slide-in-from-top">
          {buttons.map(({ href, icon, label, onClick }) => {
            if (href != null) {
              return (
                <Link to={href}>
                  <button
                    className={
                      "p-1 flex border-foreground rounded-md cursor-pointer hover:bg-accent w-40 bg-background gap-2"
                    }
                    key={href}
                  >
                    {icon}
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
                  {icon}
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
