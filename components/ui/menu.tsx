"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,

} from "@/components/ui/navigation-menu";

import {
  PiBookOpenTextLight,
  PiFileThin,
  PiSparkleLight,
  PiTargetLight,
} from "react-icons/pi";

// const components: { title: string; href: string; description: string }[] = [
//   {
//     title: "ပၢႆးၸႂ်ၵၢၼ်ႁဵၼ်း",
//     href: "/docs/primitives/alert-dialog",
//     description:
//       "",
//   },
//   {
//     title: "ပၢႆးဝူၼ်ႉၶပ်ႉၵၢၼ်ႁဵၼ်း",
//     href: "/docs/primitives/hover-card",
//     description:
//       "",
//   },
//   {
//     title: "ပေႃႇလၸီႇၵၢၼ်ႁဵၼ်း",
//     href: "/docs/primitives/progress",
//     description:
//       "",
//   },
//   {
//     title: "ၼမ်ႉၵတ်ႉၶူးသွၼ်",
//     href: "/docs/primitives/scroll-area",
//     description: "",
//   },
//   {
//     title: "လွၵ်းလၢႆးသွၼ်",
//     href: "/docs/primitives/tabs",
//     description:
//       "",
//   },

// ];

// const components2: { title: string; href: string; description: string }[] = [
//   {
//     title: "Book",
//     href: "/docs/primitives/alert-dialog",
//     description:
//       "",
//   },
//   {
//     title: "Video",
//     href: "/docs/primitives/hover-card",
//     description:
//       "",
//   },
//   {
//     title: "Download",
//     href: "/docs/primitives/hover-card",
//     description:
//       "",
//   },

// ];




// {
//   href: "/academics",
//   label: "Academics",
// },
// {
//   href: "/admission",
//   label: "Admission",
// },
// {
//   href: "/programme",
//   label: "Collaboration Program",
// },


export function Menu() {
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-shan">About</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex">
              <ul className="grid  p-2 md:w-[400px]  lg:w-[250px] hover:cursor-pointer border-r">
                <div className="flex items-center gap-1 p-1 rounded-sm hover:bg-gray-400/10">
                  <PiBookOpenTextLight className="mr-2 text-2xl text-red-600" />
                  <div>
                    
                    <a href="/org"> Organizational Chart</a>
                    {/* <p className="text-sm font-light text-gray-400">
                      Explore more about visually represents a College's structure.
                    </p> */}
                  </div>
                </div>

                <div className="flex items-center gap-1 p-1 rounded-sm hover:bg-gray-400/10">
                  <PiTargetLight className="mr-2 text-2xl text-blue-600" />
                  <div className="/campus-life">
                    <a href="/campus-life">Campus Life</a>
                    {/* <p className="text-sm font-light text-gray-400">
                    Engaging experiences and activities that foster personal growth and community among students.
                    </p> */}
                  </div>
                </div>

                <div className="flex items-center gap-1 p-1 rounded-sm hover:bg-gray-400/10">
                  <PiFileThin className="mr-2 text-2xl text-yellow-600" />
                  <div>
                    <a href="/research">Research</a>
                    {/* <p className="text-sm font-light text-gray-400">
                    Research is the systematic study aimed at discovering knowledge and solving problems.
                    </p> */}
                  </div>
                </div>

                <div className="flex items-center gap-1 p-1 rounded-sm hover:bg-gray-400/10">
                  <PiSparkleLight className="mr-2 text-2xl text-purple-600" />
                  <div>
                    <a href="/resources">Resources</a>
                    {/* <p className="text-sm font-light text-gray-400">
                    Resources are materials or assets available for use to meet needs and achieve goals.
                    </p> */}
                  </div>
                </div>
              </ul>
              <div>
                <ul className="grid  p-2 md:w-[400px]  lg:w-[250px] hover:cursor-pointer border-r">
                  <div className="flex items-center gap-1 p-1 rounded-sm hover:bg-gray-400/10">
                    <div>
                      <a className="/vision">Vision</a>
                      <p className="text-sm font-light text-gray-400">
                         Explore more about SCC Vision.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 p-1 rounded-sm hover:bg-gray-400/10">
                    <div>
                      <a href="/vision">History</a>
                      <p className="text-sm font-light text-gray-400">
                        Discover more about the history of SCC.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 p-1 rounded-sm hover:bg-gray-400/10">
                    <div>
                      <a href="/scholarship">SCC Scholarship</a>
                      <p className="text-sm font-light text-gray-400">
                       Discover more about Scholarship of SCC.
                      </p>
                    </div>
                  </div>

                
                </ul>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
     

      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

