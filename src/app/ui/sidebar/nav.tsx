'use client'
import React from 'react';
import { usePathname } from 'next/navigation';
import { MenuItemComponent } from './menuItem';
import { menuData } from './data';

export default function SidebarNav() {
  const pathname = usePathname();

  return (
    <nav>
      <ul>
        {menuData.map((menuItem, index) => (
          <MenuItemComponent 
            key={index} 
            item={menuItem} 
            pathname={pathname} 
          />
        ))}
      </ul>
    </nav>
  );
}