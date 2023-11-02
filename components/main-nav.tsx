"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
<<<<<<< HEAD
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-gray-200">
            <NavigationMenuLink>
              <ul className="grid grid-cols-3 w-[300px] gap-2 p-2 md:w-[500px] md:grid-cols-3 lg:w-[400px] ">
                  {routes.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      className={cn(
                        "text-sm font-medium text-neutral-600 hover:text-black"
                        // route.active ? "text-black" : "text-neutral-500"
                      )}
                    >
                      {route.label}
                    </Link>
                  ))}
              </ul>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
=======
    <nav
      className="mx-6 grid grid-cols-3"
    >
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'inline-flex justify-center items-center rounded-sm bg-gray-100 p-2 py-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-100 mr-2 mb-2 transition-colors hover:text-black',
            route.active ? 'ring-gray-400 bg-gray-50' : 'text-neutral-500'
          )}
        >
          {route.label}
      </Link>
      ))}
    </nav>
  )
>>>>>>> a7b7f40669453d9beea9e85f8bb4eeaac92bb790
};

export default MainNav;
