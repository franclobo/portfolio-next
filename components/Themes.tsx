"use client";
import React, { useState, useEffect } from "react";
import { ThemesItems as ThemesComponent } from "@/components/ThemesItems";
import { ThemesItems } from "@/constants";
import { GoSun } from "react-icons/go";
import { LuMoon } from "react-icons/lu";
import { IoMdSettings } from "react-icons/io";

export const Themes = () => {
  const [showSwitcher, setShowSwitcher] = useState(false);
  const [color, setColor] = useState("262.1 83.3% 57.8%");
  const [theme, setTheme] = useState("light");

  const OpenSwitcher = () => setShowSwitcher(true);
  const CloseSwitcher = () => setShowSwitcher(false);

  const changeColor = (color: string) => {
    setColor(color);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Solo accede a localStorage cuando el componente está montado en el cliente
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedColor = localStorage.getItem("color");
      const storedTheme = localStorage.getItem("theme");
      if (storedColor) {
        setColor(storedColor);
      }
      if (storedTheme) {
        setTheme(storedTheme);
      }
    }
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty("--primary", color);
    if (typeof window !== "undefined") {
      localStorage.setItem("color", color);
    }
  }, [color]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return (
    <div className="z-10 fixed left-0 top-[10%] font-bold">
      <div className="relative flex flex-col gap-4">
        <div onClick={OpenSwitcher}>
          <IoMdSettings className="bg-white w-6 h-6 p-1 text-gray-500 rounded-r-[3px]" />
        </div>
        <div onClick={toggleTheme}>
          {theme === "light" ? (
            <LuMoon className="bg-white w-6 h-6 p-1 text-gray-500 rounded-r-[3px]" />
          ) : (
            <GoSun className="bg-white w-6 h-6 p-1 text-gray-500 rounded-r-[3px]" />
          )}
        </div>
        {showSwitcher && (
          <div className="absolute -top-1 -left-1 bg-white w-[150px] p-1 dark:bg-slate-500">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-center">Style Switcher</h3>
                <div
                  className="cursor-pointer text-2xl"
                  onClick={CloseSwitcher}
                >
                  &times;
                </div>
              </div>
              <div className="w-full h-[1px] bg-gray-200" />
              <div className="grid grid-cols-6 bg-white dark:bg-slate-500">
                {ThemesItems.map((theme) => (
                  <ThemesComponent
                    key={theme.id}
                    id={theme.id}
                    color={`hsl(${theme.color})`}
                    icon={theme.icon}
                    onClick={() => changeColor(theme.color)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
