"use client"
import React, { useState } from 'react';

type NavItem = {
  name: string;
  href: string;
  subItems?: NavItem[]; // Added subItems for dropdown functionality
};

const navItems: NavItem[] = [
  {
    name: 'Ad Management',
    href: '#',
    subItems: [
      { name: 'My Ads', href: '#' },
      { name: 'Drafts', href: '#' },
    ],
  },
  { name: 'Notifications', href: '#' },
  { name: 'Chat', href: '#' },
  { name: 'Saved Items', href: '#' },
];

const Sidebar: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <aside className="lg:w-[217px] w-full bg-red-300 gap-4 p-4">
      <h2 className="text-2xl font-bold mb-6">Profile Overview</h2>
      <nav>
        <ul className="space-y-4">
          {navItems.map((item) => (
            <li key={item.name}>
              {item.subItems ? (
                <>
                  <button
                    onClick={() => handleDropdownToggle(item.name)}
                    className="text-gray-700 hover:text-purple-600 transition-colors flex items-center w-full"
                  >
                    {item.name}
                    <span
                      className={`ml-2 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`}
                    >
                      ▼
                    </span>
                  </button>
                  {openDropdown === item.name && (
                    <ul className="space-y-2 pl-6 mt-2">
                      {item.subItems.map((subItem) => (
                        <li key={subItem.name}>
                          <a
                            href={subItem.href}
                            className="text-gray-600 hover:text-purple-600 transition-colors"
                          >
                            {subItem.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <a
                  href={item.href}
                  className="text-gray-700 hover:text-purple-600 transition-colors"
                >
                  {item.name}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
