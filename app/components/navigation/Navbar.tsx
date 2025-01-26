"use client"
// components/Navbar.tsx
import React from 'react';
import Link from 'next/link';
import { FaBars, FaUser } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';

interface NavProps {
    routes: { path: string, name: string }[];
    toggleDrawer: () => void;
}

const Navbar: React.FC<NavProps> = ({ routes, toggleDrawer }) => {
    // const dispatch = useDispatch();

    return (
        <nav className="fixed w-full bg-black bg-opacity-75 text-white shadow-lg flex items-center justify-between px-4 py-2 z-10">
            <div className="flex items-center">
                <button className="text-2xl mr-4 md:hidden" onClick={toggleDrawer}>
                    <FaBars />
                </button>
                <div className="text-2xl">LOGO</div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
                {routes.map((route) => (
                    <Link href={route.path} key={route.name} className="text-lg hover:underline">
                        {route.name}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
