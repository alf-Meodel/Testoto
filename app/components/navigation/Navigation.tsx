"use client"

// components/Navigation.tsx
import React, { useState } from 'react';
import Navbar from './Navbar';
import Drawer from './Drawer';

const routes = [
    { path: '/', name: 'Home' },
    { path: '/page1', name: 'page1' },
    { path: '/page2', name: 'page2' },
    { path: '/page3', name: 'page3' },
];

const Navigation: React.FC = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <>
            <Navbar routes={routes} toggleDrawer={toggleDrawer} />
            <Drawer routes={routes} open={open} toggleDrawer={toggleDrawer} />
        </>
    );
};

export default Navigation;
