"use client"

import React, { useState } from 'react';

interface User {
    id?: number;
    name: string;
    favoriteColor: string;
}

interface UserFormProps {
    onAddUser: (user: User) => void;
}

const UserForm: React.FC<UserFormProps> = ({ onAddUser }) => {
    const [name, setName] = useState('');
    const [favoriteColor, setFavoriteColor] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name && favoriteColor) {
            onAddUser({ name, favoriteColor });
            setName('');
            setFavoriteColor('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-6 p-4 bg-white rounded shadow">
            <div className="mb-4">
                <label htmlFor="name" className="block mb-2 text-sm font-medium">
                    Nom
                </label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="color" className="block mb-2 text-sm font-medium">
                    Couleur préférée
                </label>
                <input
                    type="text"
                    id="color"
                    value={favoriteColor}
                    onChange={(e) => setFavoriteColor(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Ajouter
            </button>
        </form>
    );
};

export default UserForm; 