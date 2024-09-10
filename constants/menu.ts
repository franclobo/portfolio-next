import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaRegFolderOpen } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";
import { Menu } from "@/types";

export const MenuItems: Menu[] = [
  {
    id: 1,
    name: 'Home',
    url: '/',
    icon: IoHomeOutline
  },
  {
    id: 2,
    name: 'About',
    url: '/about',
    icon: FaRegUser
  },
  {
    id: 3,
    name: 'Portfolio',
    url: '/portfolio',
    icon: FaRegFolderOpen
  },
  {
    id: 4,
    name: 'Contact',
    url: '/contact',
    icon: IoMailOpenOutline
  },
]
