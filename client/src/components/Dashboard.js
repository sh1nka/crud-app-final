import { useState, useEffect } from 'react';

//Material UI
import Button from '@material-ui/core/Button';
import { Grid, Paper, Avatar, TextField} from '@material-ui/core';
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';

const Dashboard = ({setAuth}) =>
{
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

    const logout = (e) =>{
        e.preventDefault();
        localStorage.removeItem('token');
        setAuth(false);
    }

    useEffect(() => {
        getName();
    }, []);

    const paperStyle={
        padding: 40,
        paddingTop: 20,
        height: '20vh', 
        width: 200,
        margin: 'auto',
        marginTop: '20vh'
    }

    const buttonStyle={
        marginTop: '2vh'
    }
     
     return(

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
        </Grid>
     )
}

export default Dashboard;