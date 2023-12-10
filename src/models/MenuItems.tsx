import { ReactNode } from "react";
import {
  Banknote,
  FilePlus2,
  History,
  Home,
  AlignEndHorizontal,
  Menu,
  Pause,
  ChevronRight,
  LayoutDashboard,
  Cog,
} from "lucide-react";

interface ItemProp {
  title?: String;
  rightIcon?: ReactNode;
  leftIcon: ReactNode;
}

interface sideBarProps {
  customerCare: ItemProp[];
  magangement: ItemProp[];
}
// export const SideBarItems: ItemProp[] = [
//   { title: "Home", icon: <Home className="h-5 w-5" /> },
//   { title: "Registration", icon: <FilePlus2 className="h-5 w-5" /> },
//   { title: "Payments", icon: <Banknote className="h-5 w-5" /> },
//   { title: "History", icon: <History className="h-5 w-5" /> },
//   { title: "Reports", icon: <AlignEndHorizontal className="h-5 w-5" /> },
// ];

export const SideBarItems: sideBarProps = {
  customerCare: [
    { title: "Dashboard", leftIcon: <LayoutDashboard className="h-5 w-5" /> },
    {
      title: "Registration",
      leftIcon: <FilePlus2 className="h-5 w-5" />,
      rightIcon: <ChevronRight className="h-5 w-5 ml-2" />,
    },
    { title: "Holding", leftIcon: <Pause className="h-5 w-5" /> },
    { title: "Payments", leftIcon: <Banknote className="h-5 w-5" /> },
  ],
  magangement: [
    { title: "History", leftIcon: <History className="h-5 w-5" /> },
    { title: "Reports", leftIcon: <AlignEndHorizontal className="h-5 w-5" /> },
    {
      title: "Settings",
      leftIcon: <Cog className="h-5 w-5" />,
      rightIcon: <ChevronRight className="h-5 w-5 ml-2" />,
    },
  ],
};

// export const TopBarItems: ItemProp[] = [
//   { title: "Menu", icon: <Menu className="h-8 w-8" /> },
//   // { title: "Registration", icon: <FilePlus2 className="h-5 w-5" /> },
//   // { title: "Payments", icon: <Banknote className="h-5 w-5" /> },
//   // { title: "History", icon: <History className="h-5 w-5" /> },
//   // { title: "Reports", icon: <AlignEndHorizontal className="h-5 w-5" /> },
// ];
