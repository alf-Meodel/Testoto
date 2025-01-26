"use client"

import React, { useState, useEffect } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

interface User {
    id?: number;
    name: string;
    favoriteColor: string;
}

export default function Home() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/users');
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error('Erreur lors de la récupération des utilisateurs:', error);
        }
    };

    const handleAddUser = async (user: User) => {
        try {
            const response = await fetch('http://localhost:8080/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });
            const newUser = await response.json();
            setUsers([...users, newUser]);
        } catch (error) {
            console.error('Erreur lors de l\'ajout de l\'utilisateur:', error);
        }
    };

    const handleDeleteUser = async (id: number) => {
        try {
            await fetch(`http://localhost:8080/api/users/${id}`, {
                method: 'DELETE',
            });
            setUsers(users.filter(user => user.id !== id));
        } catch (error) {
            console.error('Erreur lors de la suppression de l\'utilisateur:', error);
        }
    };

    return (
        <main className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 pt-24 pb-8">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-3xl font-bold mb-8 text-gray-800">
                        Gestion des utilisateurs
                    </h1>
                    
                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <h2 className="text-xl font-semibold mb-4 text-gray-700">
                            Ajouter un utilisateur
                        </h2>
                        <UserForm onAddUser={handleAddUser} />
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <UserList users={users} onDeleteUser={handleDeleteUser} />
                    </div>
                </div>
            </div>
        </main>
    );
}
