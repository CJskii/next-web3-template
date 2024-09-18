// import logoDark from "@/assets/dark-logo.svg";
// import logoLight from "@/assets/light-logo.svg";
// import logo from "@/assets/logo-symbol.svg";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggler } from "../ui/theme-toggler";
import { Button } from "../ui/button";
import { HeaderSheet } from "./header-sheet";
import { ConnectWalletButton } from "@/components/ui/connect-button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  ListItem,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Typography } from "../ui/typography";
import { Separator } from "@radix-ui/react-separator";
import React from "react";

interface DropdownLinks {
  label: string;
  paths: {
    href: string;
    label: string;
    description: string;
  }[];
}

interface NavLink {
  label: string;
  href: string;
}

const productLinks: DropdownLinks[] = [
  {
    label: "Products",
    paths: [
      {
        href: "/product1",
        label: "Product 1",
        description: "Learn more about our first product offering.",
      },
      {
        href: "/product2",
        label: "Product 2",
        description: "Explore the features of our second product.",
      },
      {
        href: "/product3",
        label: "Product 3",
        description: "Get started with our third innovative product.",
      },
    ],
  },
  {
    label: "Solutions",
    paths: [
      {
        href: "/solution1",
        label: "Solution 1",
        description: "Discover our first solution for seamless operations.",
      },
      {
        href: "/solution2",
        label: "Solution 2",
        description: "Unlock the power of our second seamless solution.",
      },
      {
        href: "/solution3",
        label: "Solution 3",
        description: "Efficiently bridge the gap with our third solution.",
      },
    ],
  },
];

const otherLinks: NavLink[] = [
  {
    label: "Marketplace",
    href: "/marketplace",
  },
  {
    label: "Bridge",
    href: "/bridge",
  },
  {
    label: "Documentation",
    href: "/docs",
  },
];

export const Navbar: React.FC = () => {
  return (
    <div className="fixed z-50 flex w-full justify-between items-center border-b border-neutral-400/50 bg-white/50 p-4 backdrop-blur-xl dark:bg-black/50 md:px-16 md:py-4">
      <div className="flex-1 hidden md:block">
        <Link href="/" className="flex items-center justify-start">
          {/* 
          @
          @@
          @@@
          @@@@ Replace Typography component with theme aware Image components  
          @@@
          @@
          @
          */}
          {/* <Image
            src={logoDark}
            alt="dark mode logo"
            className="block w-40 dark:hidden"
          />
          <Image
            src={logoLight}
            alt="light mode logo"
            className="hidden w-40 dark:block"
          /> */}
          <Typography variant="h3" className="font-bold">
            Logo Placeholder
          </Typography>
        </Link>
      </div>
      <Link href={"/"} className="md:hidden">
        {/* 
          @
          @@
          @@@
          @@@@ Replace Typography component with theme aware Image component for mobile view  
          @@@
          @@
          @
          */}
        {/* <Image
          src={logo}
          alt="mobile logo icon"
          className="block md:hidden"
          width={30}
          height={30}
        /> */}
        <Typography variant="h3" className="font-bold">
          Logo Placeholder
        </Typography>
      </Link>
      <div className="flex-1 justify-center hidden items-center gap-3 lg:flex">
        <NaviLinks />
      </div>

      <div className="flex-1  justify-end items-center gap-3 hidden  lg:flex">
        <ThemeToggler />
        <ConnectWalletButton />
      </div>

      <div className="block lg:hidden">
        <HeaderSheet />
      </div>
    </div>
  );
};

export const NaviLinks: React.FC = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="">Products</NavigationMenuTrigger>
          <NavigationMenuContent className="flex">
            {productLinks.map((navLink, index) => (
              <ul
                key={index}
                className="flex flex-col w-[200px] gap-3 p-4 md:w-[250px] md:grid-cols-2 lg:w-[300px] "
              >
                <Typography className="" variant={"large"}>
                  {navLink.label}
                </Typography>
                {navLink.paths.map((path, index) => (
                  <React.Fragment key={path.label}>
                    <ListItem title={path.label} href={path.href} className="">
                      {path.description}
                    </ListItem>
                    {index !== navLink.paths.length - 1 && (
                      <Separator
                        orientation="horizontal"
                        className="dark:border-[#E8E8E8]/20 border-[1px] border-black/20"
                      />
                    )}
                  </React.Fragment>
                ))}
              </ul>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>

        {otherLinks.map((navLink, index) => (
          <NavigationMenuItem key={index}>
            <Link href={navLink.href} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {navLink.label}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export const MobileNavLinks: React.FC = () => {
  return (
    <>
      {otherLinks.map((navLink, index) => (
        <React.Fragment key={index}>
          <Link href={navLink.href} passHref>
            <Button className="w-full">{navLink.label}</Button>
          </Link>
        </React.Fragment>
      ))}
      {productLinks.map((navLink, index) => (
        <React.Fragment key={index}>
          <Typography key={index} variant={"large"}>
            {navLink.label}
          </Typography>
          {navLink.paths.map((path, index) => (
            <React.Fragment key={index}>
              <Link href={path.href} passHref>
                <Button className="w-full">{path.label}</Button>
              </Link>
            </React.Fragment>
          ))}
        </React.Fragment>
      ))}
    </>
  );
};
