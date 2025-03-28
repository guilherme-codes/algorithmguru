'use client'
import { useEffect, useState } from "react";
import { MenuItem } from "./types";
import Link from "next/link";

export function MenuItemComponent ({ item, level = 0, pathname = '' }: { 
  item: MenuItem, 
  level?: number,
  pathname?: string
}){
  const [isOpen, setIsOpen] = useState(false);

  // Determine if the item has a submenu
  const hasSubMenu = item.subMenu && item.subMenu.length > 0;

  // Check if current menu item is an exact route match
  const isExactMatch = item.href === pathname;

  // Check if the current route is in this menu branch
  const isRouteInBranch = (menuItem: MenuItem): boolean => {
    if (menuItem.href === pathname) return true;
    return menuItem.subMenu 
      ? menuItem.subMenu.some(subItem => isRouteInBranch(subItem)) 
      : false;
  };

  // Auto-expand if the current route is in this menu branch
  useEffect(() => {
    if (hasSubMenu && isRouteInBranch(item)) {
      setIsOpen(true);
    }
  }, [pathname, item]);

  // Render function for menu item content
  const renderItemContent = () => (
    <div 
      className={`flex items-center space-x-2 cursor-pointer menu-item py-2 px-3 ${
        level === 0 ? 'text-sm font-bold' : 'text-sm'
      } ${isExactMatch ? 'menu-item-hover-color font-semibold' : ''}`}
      onClick={() => hasSubMenu && setIsOpen(!isOpen)}
    >
      {item.icon && <i className={item.icon}></i>}
      <span>{item.label}</span>
      {hasSubMenu && <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'} ml-auto`}></i>}
    </div>
  );

  return (
    <li>
      {/* If href exists, wrap in Link, otherwise use div */}
      {item.href ? (
        <Link href={item.href}>
          {renderItemContent()}
        </Link>
      ) : (
        renderItemContent()
      )}

      {/* Render submenu if exists and is open */}
      {hasSubMenu && isOpen && (
        <ul className={`
          ${level === 0 ? 'ml-6' : 'ml-4'} 
          mt-2 
          space-y-1 
          text-sm
        `}>
          {item.subMenu?.map((subItem, index) => (
            <MenuItemComponent 
              key={index} 
              item={subItem} 
              level={level + 1} 
              pathname={pathname}
            />
          ))}
        </ul>
      )}
    </li>
  );
};