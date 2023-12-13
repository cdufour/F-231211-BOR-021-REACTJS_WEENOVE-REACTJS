import React from 'react'

interface User {
    id: number;
    name: string;
}

const UsersPage = async () => {

    const res = await fetch(
        'https://jsonplaceholder.typicode.com/users',
        //{ next: { revalidate: 10 } }
        {cache: 'no-cache'}
    )
    const users: User[] = await res.json()

    return (
        <>
            <h3>User list</h3>
            { new Date().toLocaleString() }
            <ul>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </>
    )
}

export default UsersPage
