"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="inline-block h-6 w-6 rounded-full bg-green-600" aria-hidden />
          <span>Permaverger</span>
        </Link>

        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className="px-3 py-2 text-sm font-medium hover:text-green-700">
                    Accueil
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/blog" legacyBehavior passHref>
                  <NavigationMenuLink className="px-3 py-2 text-sm font-medium hover:text-green-700">
                    Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/tutorials" legacyBehavior passHref>
                  <NavigationMenuLink className="px-3 py-2 text-sm font-medium hover:text-green-700">
                    Tutoriels
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-2">
          <Button asChild variant="default" className="hidden md:inline-flex bg-green-600 hover:bg-green-700">
            <Link href="/#decouvrir">Découvrir</Link>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden" aria-label="Ouvrir le menu">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <nav className="mt-10 flex flex-col gap-4">
                <Link href="/" onClick={() => setOpen(false)} className="text-sm font-medium hover:text-green-700">
                  Accueil
                </Link>
                <Link href="/blog" onClick={() => setOpen(false)} className="text-sm font-medium hover:text-green-700">
                  Blog
                </Link>
                <Link href="/tutorials" onClick={() => setOpen(false)} className="text-sm font-medium hover:text-green-700">
                  Tutoriels
                </Link>
                <Button asChild className="mt-2 bg-green-600 hover:bg-green-700">
                  <Link href="/#decouvrir" onClick={() => setOpen(false)}>
                    Découvrir
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
