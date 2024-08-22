"use client"
import React, { useState } from 'react';

type NavItem = {
  name: string;
  href: string;
  subItems?: NavItem[];
};

const navItems: NavItem[] = [
  { name: 'Profile Overview', href: '#' },
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleDropdownToggle = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
    
  };

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="lg:hidden text-2xl p-2 text-black"
        onClick={handleSidebarToggle}
      >
        &#9776;
      </button>

      {/* Sidebar */}
      <aside
        className={`lg:w-[217px] w-full h- full lg:p-4 p-2 bg-background-400 fixed lg:relative top-auto lg:top-auto z-50 transform ${
          isSidebarOpen
            ? 'left-[28px] opacity-100'
            : 'left-[-100%] lg:left-0 opacity-0 lg:opacity-100'
        } transition-all duration-300] lg:h-auto`}
        onClick={(e) => e.stopPropagation()}
      >
        <nav>
          <ul className="space-y-4" 
          onClick={handleCloseSidebar}>
            {navItems.map((item) => (
              <li key={item.name}>
                {item.subItems ? (
                  <>
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className="text-gray-700 hover:text-purple-600 transition-colors flex items-center w-full lg:text-[16px] text-[14px] lg:text-base gap-4 sm:gap-2 font-sans"
                    >
                      {item.name}
                      <span
                        className={`ml-2 transition-transform ${
                          openDropdown === item.name ? 'rotate-180' : ''
                        }`}
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
                              className="text-gray-600 hover:text-purple-600 transition-colors text-[14px] lg:text-base"
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
                    className="text-gray-700 hover:text-purple-600 transition-colors text-[14px] lg:text-base"
                  >
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-0 z-40"
          onClick={handleCloseSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
