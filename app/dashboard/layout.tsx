'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isOpen) setIsOpen(false);
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  const navItems = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Quests', href: '/dashboard/quests' },
    { name: 'Inventory', href: '/dashboard/inventory' },
    { name: 'Map', href: '/dashboard/map' },
    { name: 'Settings', href: '/dashboard/settings' },
  ];

  return (
    <div className="flex h-screen bg-obsidian-black">
      {/* Mobile menu button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 pixel-button"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
      >
        MENU
      </button>

      {/* Sidebar - Command Menu */}
      <aside
        className={`command-menu fixed md:relative z-40 h-full w-64 transform transition-transform duration-300 ease-in-out md:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-full flex flex-col p-4">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-poison-green glitch-effect" data-text="NEO-RETRO">
              NEO-RETRO
            </h1>
            <p className="text-sm text-plasma-blue mt-1">Dungeon Crawler v2.0</p>
          </div>

          <nav className="flex-1">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block px-4 py-3 rounded transition-all duration-200 ${
                      pathname === item.href
                        ? 'bg-dark-purple border border-poison-green shadow-[0_0_8px_#00ff41]'
                        : 'hover:bg-dark-purple hover:bg-opacity-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto pt-4 border-t border-poison-green border-opacity-30">
            <div className="flex items-center justify-between">
              <span className="text-sm">Player: CMDR</span>
              <div className="w-3 h-3 rounded-full bg-poison-green animate-pulse"></div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          {children}
        </div>

        {/* Status Bar */}
        <div className="border-t border-poison-green border-opacity-30 p-2 text-xs flex flex-wrap justify-between items-center">
          <div className="flex gap-4">
            <div>HP: <span className="text-poison-green">100/100</span></div>
            <div>MP: <span className="text-plasma-blue">50/50</span></div>
            <div>Gold: <span className="text-yellow-400">250</span></div>
          </div>
          <div>Location: <span>Dungeon Level 1</span></div>
        </div>
      </main>
    </div>
  );
}