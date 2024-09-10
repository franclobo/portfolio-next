"use client";
import Link from "next/link";
import React, { useState } from "react";
import { MenuItems } from "@/constants/menu";
import { MdMenu } from "react-icons/md";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const pathName = usePathname();

  const checkActive = (path: string) => {
    return path === pathName;
  };

  const onHandleMenu = () => {
    setIsOpen(!isOpen);
  };

  const onHoverStart = (id: number) => {
    setHoveredItem(id);
    // Aquí puedes agregar más lógica cuando se hace hover sobre un elemento
  };

  const onHoverEnd = () => {
    setHoveredItem(null);
    // Aquí puedes agregar más lógica cuando se deja de hacer hover sobre un elemento
  };

  return (
    <header className="bg-white shadow md:relative">
      <div className="md:hidden" onClick={onHandleMenu}>
        <MdMenu size={24} />
      </div>
      <nav
        className={`md:flex ${
          isOpen ? "block" : "hidden"
        } md:right md:flex-col md:absolute md:right-0 md:top-1/2 md:transform md:translate-y-1/2`}
      >
        {MenuItems.map((item) => (
          <li
            key={item.id}
            className="list-none"
            onMouseEnter={() => onHoverStart(item.id)}
            onMouseLeave={onHoverEnd}
          >
            <Link
              href={item.url}
              className={`flex justify-start items-center gap-1 rounded-full md:flex-row-reverse py-1 px-2 m-1 ${
                hoveredItem === item.id
                  ? "bg-primary text-white"
                  : checkActive(item.url)
                  ? "bg-primary text-white"
                  : "text-black bg-transparent"
              }`}
            >
              <item.icon size={20} />
              <span
                className={`${
                  hoveredItem === item.id
                    ? "flex bg-primary text-white"
                    : "hidden"
                }`}
              >
                {item.name}
              </span>
            </Link>
          </li>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
