'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuItem } from './types';
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