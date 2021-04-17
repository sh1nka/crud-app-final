import { useState, useEffect } from 'react';
import api from '../axios/axios';
import { useSelector, useDispatch } from 'react-redux'
import { getUsers } from '../actions/usersActions'

//Material UI
import Button from '@material-ui/core/Button';
import { Grid, Paper, Avatar, TextField, Table } from '@material-ui/core';

const axios = require('axios');

const Dashboard = ({ setAuth }) =>
{
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);
    const loading = useSelector(state => state.users.loading);
    const error = useSelector(state => state.users.error);

    //alert(JSON.stringify(users))

    const [inputs, setInputs] = useState({
        id: ''
    });

    const { id } = inputs;

    const onChange = (e) => {
        setInputs({...inputs, [e.target.name] : e.target.value})
    }

    const onBtnClickDelete = async(e) =>{
        e.preventDefault()
        try 
        {
            axios.delete(`http://localhost:7000/dashboard/remove/${id}`);
        } 
        catch (error) 
        {
            console.error(error.message);
        }
    }

    const onBtnClickSearch = async(e) =>{
        e.preventDefault()
        try 
        {
            axios.get(`http://localhost:7000/dashboard/read/${id}`);
            alert(id);
            {users.map((data) => (
                <tr>
                    <td>{data.user_id === id ? data.user_name : 'User not found'}</td>
                </tr>
            ))};
        } 
        catch (error) 
        {
            console.error(error.message);
        }
    }

    useEffect(() =>
    {
        dispatch(getUsers());
    }, [dispatch]);

    
    /*const [name, setName] = useState('');

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

    useEffect(() => {
        getName();
    }, []); */

    // Log out evento button
    const logout = (e) =>{
        e.preventDefault();
        localStorage.removeItem('token');
        setAuth(false);
    }


    // paperStyle and buttonStyle
    const paperStyle = {
        padding: 40,
        paddingTop: 20,
        height: 'auto',
        width: 500,
        margin: 'auto',
        marginTop: '20vh',
    }

    const buttonStyle = {
        marginRight: '',
    }

    const textfieldStyle = {
        width: 'auto'
    }

    /*
    <Button href="/" style={buttonStyle} variant='contained' color='primary'>Create</Button>
                <Button type='submit' style={buttonStyle} variant='contained' color='primary'>Update</Button>*/

    return(
        <Grid>
            <Paper elevation={5} style={paperStyle}>
            <form onSubmit={onBtnClickDelete}>
                <Paper elevation={0} style={{padding: 4, width: 'auto'}}>
                    <TextField type="text" name='id' value={id} onChange={e => onChange(e)} placeholder='ID'/>
                    <TextField  type="text" name='name' placeholder='Username'/>
                    <TextField type="text" name='name'  placeholder='Password'/>
                </Paper>

                <Paper elevation={0}>
                <Button type='submit' style={buttonStyle} variant='contained' color='primary'>Create</Button>
                <Button type='submit' style={buttonStyle} variant='contained' color='primary' onClick={onBtnClickSearch}>Search ID</Button>
                <Button type='submit' style={buttonStyle} variant='contained' color='primary'>Update</Button>
                <Button type='submit' style={buttonStyle} variant='contained' color='primary'>Remove ID</Button>
                <Button type='submit' style={buttonStyle} variant='contained' color='secondary' onClick={logout}>Log out</Button>
                </Paper>
            </form>
                {users.map((data) => (
                    <div className='tabela'>
                        <tr>
                            <td>{data.user_name}</td>
                            <td>{data.user_id}</td>
                        </tr>
                    </div>
                ))}
                {users.length === 0 && !loading && <p>Vazio ou com erro</p>}
                {error && !loading && <p>{error}</p>}
                
            </Paper>
        </Grid>
    )
}

export default Dashboard;

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