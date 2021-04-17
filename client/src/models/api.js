export const getUsers = async () =>{
    console.log('getApi')
    return fetch('http://localhost:7000/dashboard/read/users', {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    .then(res => res.json())
    .catch((err) => {throw err})
}