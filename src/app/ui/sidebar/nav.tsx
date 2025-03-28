'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuItem } from './types';
import { MenuItemComponent } from './menuItem';

// Recursive type definition to allow nested submenus

// Menu data structure (same as before)
const menuData: MenuItem[] = [
  {
    label: 'Data Structures',
    icon: 'fas fa-database',
    subMenu: [
      {
        label: 'What is?',
        icon: 'fas fa-info-circle',
        href: '/data-structures'
      },
      {
        label: 'Catalog',
        icon: 'fas fa-folder',
        subMenu: [
          { label: 'Arrays', href: '/array.html' },
          { label: 'Stacks', href: '/data-structures/stacks' }
        ]
      }
    ]
  },
  {
    label: 'Algorithms',
    icon: 'fas fa-code',
    subMenu: [
      {
        label: 'What is?',
        icon: 'fas fa-info-circle',
      },
      {
        label: 'Catalog',
        icon: 'fas fa-folder',
        subMenu: [
          {
            label: 'Sort',
            icon: 'fas fa-sort',
            subMenu: [
              { label: 'Bubble Sort', href: '/bubble-sort.html' },
              { label: 'Quick Sort', href: '/quick-sort.html' }
            ]
          },
          {
            label: 'Search',
            icon: 'fas fa-search',
            subMenu: [
              { label: 'Binary Search', href: '/binary-search.html' },
              { label: 'Linear Search', href: '/linear-search.html' }
            ]
          }
        ]
      }
    ]
  }
];

// Recursive menu item component


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