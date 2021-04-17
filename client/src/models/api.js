export const getUsers = async () =>
{
    console.log('API - getUsers');
    return fetch('http://localhost:7000/dashboard/read/users', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .catch((err) => { throw err })
}

export const getUserID = async () =>
{
    console.log('API - getUserID');
    return fetch('http://localhost:7000/dashboard/read/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());
}

export const updateUser = async(users) => {
    return fetch(`http://localhost:7000/dashboard/update/${users.user_id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(users)
    }).then(res => res.json());
} 