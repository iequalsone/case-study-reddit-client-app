"use client";

import { useSearch } from "@/contexts/SearchContext";
import { Search } from "@/components/Search";
import Image from "next/image";

import redditLogo from "./assets/logo.webp";
import redditIcon from "./assets/reddit-icon.webp";
import menuIcon from "./assets/menu.svg";
import userIcon from "./assets/user-icon.svg";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const { setSearchTerm } = useSearch();

  return (
    <header className="py-4 px-8 flex items-center justify-between">
      <div className="flex relative">
        <Logo />
      </div>

      <div className="flex-1 mx-4 max-w-lg">
        <Search onSearch={setSearchTerm} />
      </div>

      <div className="mr-4">
        <UtilityNav />
      </div>
    </header>
  );
}

function Logo() {
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <Image
            className="md:hidden mr-4"
            src={menuIcon}
            alt="Reddit!"
            width={35}
          />
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <Image className="md:hidden" src={redditIcon} alt="Reddit!" width={35} />
      <Image
        className="hidden md:block"
        src={redditLogo}
        alt="Reddit!"
        width={100}
      />
    </>
  );
}

function UtilityNav() {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <img src={userIcon.src} width={35} alt="" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
