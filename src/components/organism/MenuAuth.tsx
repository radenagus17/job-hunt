import React, { FC, ReactNode } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { RiLogoutCircleRLine } from "react-icons/ri";

// type CallbackString = {
//   callbackUrl?: string;
// };

interface MenuAuthProps {
  children: ReactNode;
  signOut(): any;
}

const MenuAuth: FC<MenuAuthProps> = ({ children, signOut }) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>{children}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink
              onClick={signOut}
              className="p-2 inline-flex items-center gap-2 hover:bg-red-500 cursor-pointer hover:text-muted text-sm"
            >
              <span>
                <RiLogoutCircleRLine />
              </span>
              Logout
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default MenuAuth;
