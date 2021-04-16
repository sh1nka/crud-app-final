import { useState, useEffect } from 'react';
import api from '../axios/axios';
import { useSelector, useDispatch } from 'react-redux'
import { getUsers } from '../actions/usersActions'

//Material UI
import Button from '@material-ui/core/Button';
import { Grid, Paper, Avatar, TextField } from '@material-ui/core';
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';
import MaterialTable from 'material-table';

const Dashboard = ({ setAuth }) =>
{
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);
    const loading = useSelector(state => state.users.loading);
    const error = useSelector(state => state.users.error);

    //alert(JSON.stringify(users))

    useEffect(() =>
    {
        dispatch(getUsers());
    }, [dispatch]);

    /*
    const [name, setName] = useState('');

    async function getName()
    {
        try {
            const response = await fetch('http://localhost:7000/dashboard/',{
                method: 'GET',
                headers: {token: localStorage.token}
            });

            const parseResponse = await response.json();

            console.log(parseResponse);

            setName(parseResponse.user_name);
            
        } catch (error) {
            
        }
    }

    // Button log out event
    const logout = (e) =>{
        e.preventDefault();
        localStorage.removeItem('token');
        setAuth(false);
    }

    useEffect(() => {
        getName();
    }, []); */

    const paperStyle = {
        padding: 40,
        paddingTop: 20,
        height: 'auto',
        width: 500,
        margin: 'auto',
        marginTop: '20vh'
    }

    const buttonStyle = {
        marginTop: '2vh'
    }

    /*
    const fetchUsers = async() =>{
        const response = await api.get('/users');
        return response.data;
    }
        */

    // get user datas

    /*useEffect(() => {
        const AllUsers = async () =>
        {
            const allU = await fetchUsers();
            if(allU) setData(allU)
        };
        AllUsers();
        }, []); */

    /*
    {users.loading && <p>Loading...</p>}
    {users.length === 0 && !loading && <p>Fudeu irmao</p>}*/
    
    // users.length > 0 && 
    // {users.loading && <p>Loading...</p>}

    return (
      
        <Grid>
            <Paper elevation={5} style={paperStyle}>
                {users.map((data) => (
                    <div className='tabela'>
                        <tr>
                            <td>{data.user_name}</td>
                        </tr>
                    </div>
                ))}
                {users.length === 0 && !loading && <p>Fudeu irmao</p>}
                {error && !loading && <p>{error}</p>}
            </Paper>
        </Grid>



        /*
                <Grid>
                <h1>Bem vindo ao Dashboard, {name}</h1>
                    <Paper elevation={5} style={paperStyle}>
                    
                        <Grid align='center'>
                            <Avatar><LockTwoToneIcon/></Avatar>
                            <h2>Login</h2>
                        </Grid>
                            <Button href="/register" style={buttonStyle} variant='contained' color='secondary'>Register</Button>
                            <Button type='submit' style={buttonStyle} variant='contained' color='primary'>Login</Button>
                    </Paper>
                </Grid>*/
    )
}

export default Dashboard;