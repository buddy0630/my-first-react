import React from 'react';
import useFetch from './useFetch';

function UserList() {
    const { data: users, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} ({user.email})</li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;
