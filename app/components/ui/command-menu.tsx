"use client";

import * as React from "react";


import {
  CircleIcon,
  FileIcon,

} from "@radix-ui/react-icons";


import { docsConfig } from "../../config/docs";
import { cn } from "../../lib/utils";
import { Button } from "./button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./command";

export function CommandMenu({ ...props }) {

  const [open, setOpen] = React.useState(false);


  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "relative w-full justify-start text-sm rounded-lg text-muted-foreground sm:pr-8 md:w-60 lg:w-50"
        )}
        onClick={() => setOpen(true)}
        {...props}
      >
        <span className="lg:inline-flex">{'Search'}</span>
        <span className="inline-flex font-shan lg:hidden"></span>
        <kbd className="pointer-events-none absolute right-1.5 top-2 h-5 select-none items-center gap-1 rounded-md border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog  open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup className="rounded-md" heading="Links">
            {docsConfig.mainNav
              .map((navItem) => (
                <CommandItem
                  key={navItem.href}
                  value={navItem.title}
                  onSelect={() => {
                    runCommand(() => {
                        // router.push(navItem.href as string)
                    });
                  }}
                >
                  <FileIcon className="w-4 h-4 mr-2" />
                  {navItem.title}
                </CommandItem>
              ))}
          </CommandGroup>
          {docsConfig.sidebarNav.map((group) => (
            <CommandGroup key={group.title} heading={group.title}>
              {group.items.map((navItem) => (
                <CommandItem
                  key={navItem.href}
                  value={navItem.title}
                  onSelect={() => {
                    runCommand(() => {
                        // router.push(navItem.href as string)
                    });
                  }}
                >
                  <div className="flex items-center justify-center w-4 h-4 mr-2">
                    <CircleIcon className="w-3 h-3" />
                  </div>
                  {navItem.title}
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
          <CommandSeparator />
         
        </CommandList>
      </CommandDialog>
    </>
  );
}
