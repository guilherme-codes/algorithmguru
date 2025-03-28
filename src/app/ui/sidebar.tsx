'use client'
import React, { useState } from 'react';
import Link from 'next/link';

// Recursive type definition to allow nested submenus
type MenuItem = {
  label: string;
  icon?: string;
  href?: string;
  subMenu?: MenuItem[];
};

// Menu data structure
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
          { label: 'Stacks', href: '/data-structure/stacks.html' }
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
const MenuItemComponent: React.FC<{ 
  item: MenuItem, 
  level?: number 
}> = ({ item, level = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Determine if the item has a submenu
  const hasSubMenu = item.subMenu && item.subMenu.length > 0;

  // Render function for menu item content
  const renderItemContent = () => (
    <div 
      className={`flex items-center space-x-2 cursor-pointer menu-item py-2 px-3 ${
        level === 0 ? 'text-sm font-bold' : 'text-sm'
      }`}
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
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default function Sidebar() {
  return (
    <nav>
      <ul>
        {menuData.map((menuItem, index) => (
          <MenuItemComponent key={index} item={menuItem} />
        ))}
      </ul>
    </nav>
  );
}