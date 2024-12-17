"use client";

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import { Button } from "./ui/button"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"

export function ModeToggle() {
  
  const { setTheme, theme } = useTheme();

  const [changeThemeValue, setChangeThemeValue] = React.useState<string>();

  React.useEffect(() => {
    setChangeThemeValue(theme === "dark" ? "light" : "dark");
  }, [theme]);

  React.useEffect(() => {
    // detect if current system theme is dark
    const checkDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
   // Find new theme value for setTheme
    const newValue =
      theme === "dark"
        ? "light"
        : theme === "light"
        ? "dark"
        : checkDarkTheme
        ? "light"
        : "dark";
    setChangeThemeValue(newValue);
  }, []);




  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => {
          console.log("here is setTheme:", setTheme('light'), setTheme)
          // return setTheme('light')
        }}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => {
          setTheme(changeThemeValue ?? "light")
        }}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
