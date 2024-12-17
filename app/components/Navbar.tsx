"use client";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet";


import { buttonVariants } from "./ui/button";

import { ModeToggle } from "./mode-toggle";
import { LogoIcon } from "./Icons";
import { CommandMenu } from "./ui/command-menu";
import React from "react";
import { Menu } from "@/components/ui/menu";
import { MenuIcon } from "lucide-react";

 // eslint-disable-next-line @typescript-eslint/no-explicit-any
interface RouteProps {
  href: string;
  label: string;
  children?: any
}

 // eslint-disable-next-line @typescript-eslint/no-explicit-any
const routeList: RouteProps[] = [
  { href: "/programs", label: "Programs" },
  // { href: "/campus", label: "Campus Life" },
  { href: "/lectures", label: "Lectures" },
  // { href: "/resources", label: "Resources" },

  { href: "/admissions", label: "Admissions" },
  {
    href: "/news",
    label: "News & Events",
  },
  {
    href: "/faq",
    label: "FAQ",
  },
];


const navLinks = [
  { href: "/programs", label: "Programs" },
  // { href: "/campus", label: "Campus Life" },
  { href: "/lectures", label: "Lectures" },
  { href: "/resources", label: "Resources" },
  { href: "/research", label: "Research" },
  { href: "/admissions", label: "Admissions" },
];


export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  return (
    <header className="fixed top-0  border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container flex justify-between w-screen px-4 h-14 ">
          <NavigationMenuItem className="flex items-center font-bold">
           <a 
             rel="noreferrer noopener"
              href="/"
           >
           <LogoIcon />
           </a>

         

          </NavigationMenuItem>

          {/* mobile */}
          <div className="flex md:hidden">
            <ModeToggle />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              {/* here is hydration error  */}
              <SheetTrigger className="px-2">
                <MenuIcon
                  className="flex w-5 h-5 md:hidden"
                  onClick={() => setIsOpen(true)}
                />
              </SheetTrigger>

              <SheetContent side={"left"}>
               
                <nav className="flex flex-col items-center justify-center gap-2 mt-4">
                  <Menu />
                  {routeList.map(({ href, label, children }: RouteProps) => (
                    <React.Fragment key={label}>
                      <a
                        rel="noreferrer noopener"
                        href={href}
                        onClick={() => setIsOpen(false)}
                        className={buttonVariants({ variant: "ghost" })}
                      >
                        {label}
                      </a>
                      {children && (
                        <div className="ml-4">
                          {children.map(({ href, label }: RouteProps) => (
                            <a
                              rel="noreferrer noopener"
                              key={label}
                              href={href}
                              onClick={() => setIsOpen(false)}
                              className={buttonVariants({ variant: "ghost" })}
                            >
                              {label}
                            </a>
                          ))}
                        </div>
                      )}
                    </React.Fragment>
                  ))}

                  <div className="hidden md:flex">
                    <CommandMenu />
                  </div>

                  {/* <a
                    rel="noreferrer noopener"
                    href="https://github.com/leoMirandaa/shadcn-landing-page.git"
                    target="_blank"
                    className={`w-[110px] border ${buttonVariants({
                      variant: "secondary",
                    })}`}
                  >
                    <GitHubLogoIcon className="w-5 h-5 mr-2" />

                  </a> */}
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* desktop */}
          <nav className="hidden gap-2 md:flex">
          <Menu />
            {routeList.map((route: RouteProps, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </a>
            ))}
          </nav>

          <div className="hidden gap-2 md:flex">
            <div>
              <CommandMenu />
            </div>
            {/* <a
              rel="noreferrer noopener"
              href="https://github.com/leoMirandaa/shadcn-landing-page.git"
              target="_blank"
              className={`border ${buttonVariants({ variant: "secondary" })}`}
            >
              <GitHubLogoIcon className="w-5 h-5 mr-2" />
              Github
            </a> */}

            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
