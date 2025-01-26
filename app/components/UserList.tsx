"use client"

import React from 'react';

interface User {
    id?: number;
    name: string;
    favoriteColor: string;
}

interface UserListProps {
    users: User[];
    onDeleteUser: (id: number) => void;
}

const UserList: React.FC<UserListProps> = ({ users, onDeleteUser }) => {
    return (
        <div className="mt-6">
            <h2 className="text-xl font-bold mb-4">Liste des utilisateurs</h2>
            {users.length === 0 ? (
                <p className="text-gray-500">Aucun utilisateur pour le moment</p>
            ) : (
                <ul className="space-y-2">
                    {users.map((user) => (
                        <li
                            key={user.id}
                            className="flex justify-between items-center bg-white p-4 rounded shadow"
                        >
                            <div>
                                <span className="font-medium">{user.name}</span>
                                <span className="ml-4 text-gray-600">
                                    Couleur: {user.favoriteColor}
                                </span>
                            </div>
                            <button
                                onClick={() => user.id && onDeleteUser(user.id)}
                                className="text-red-500 hover:text-red-700"
                            >
                                Supprimer
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UserList; 