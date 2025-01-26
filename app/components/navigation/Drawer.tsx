"use client"
// components/Drawer.tsx
import React from 'react';
import Link from 'next/link';
import { FaTimes } from 'react-icons/fa';

interface DrawerProps {
    routes: { path: string, name: string }[];
    open: boolean;
    toggleDrawer: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ routes, open, toggleDrawer }) => {
    return (
        <>
            {open && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-20"
                    onClick={toggleDrawer}
                />
            )}
            <div
                className={`fixed top-0 left-0 h-full w-2/3 bg-white transform transition-transform duration-300 z-30 ${open ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-xl font-bold">Menu</h2>
                    <button onClick={toggleDrawer} className="text-2xl">
                        <FaTimes />
                    </button>
                </div>
                <nav className="flex flex-col space-y-4 p-4">
                    {routes.map((route) => (
                        <Link
                            href={route.path}
                            key={route.name}
                            onClick={toggleDrawer}
                            className="text-lg hover:bg-gray-200 p-2 rounded"
                        >
                            {route.name}
                        </Link>
                    ))}

                </nav>
            </div>
        </>
    );
};

export default Drawer;
