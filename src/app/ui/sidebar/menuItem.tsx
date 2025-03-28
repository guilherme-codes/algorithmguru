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

  const hasSubMenu = item.subMenu && item.subMenu.length > 0;
  const isExactMatch = item.href === pathname;

  const isRouteInBranch = (menuItem: MenuItem): boolean => {
    if (menuItem.href === pathname) return true;
    return menuItem.subMenu 
      ? menuItem.subMenu.some(subItem => isRouteInBranch(subItem)) 
      : false;
  };

  useEffect(() => {
    if (hasSubMenu && isRouteInBranch(item)) {
      setIsOpen(true);
    }
  }, [pathname, item]);

  const renderItemContent = () => (
    <div 
      className={`flex items-center space-x-2 cursor-pointer menu-item py-2 px-3 ${
        level === 0 ? 'text-sm font-bold' : 'text-sm'
      } ${isExactMatch ? 'menu-item-active font-semibold' : ''}`}
      onClick={() => hasSubMenu && setIsOpen(!isOpen)}
    >
      {item.icon && <i className={item.icon}></i>}
      <span>{item.label}</span>
      {hasSubMenu && <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'} ml-auto`}></i>}
    </div>
  );

  return (
    <li>
      {item.href ? (
        <Link href={item.href}>
          {renderItemContent()}
        </Link>
      ) : (
        renderItemContent()
      )}

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