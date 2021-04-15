import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

//Material UI
import Button from '@material-ui/core/Button';
import { Grid, Paper, Avatar, TextField} from '@material-ui/core';
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';



const Login = ({ setAuth }) =>
{
    const [inputs, setInputs] = useState({
        name: '',
        password: ''
    });

    const { name, password } = inputs;

    const onChange = (e) => {
        setInputs({...inputs, [e.target.name] : e.target.value})
    }

    const onSubmitForm = async(e) =>{
        e.preventDefault()
        try {

            const body = {name, password};

            const response = await fetch('http://localhost:7000/auth/login', {
                method: "POST",
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify(body)
            });

            const parseResponse = await response.json();

            console.log(parseResponse);
            
            localStorage.setItem('token', parseResponse.token);

            setAuth(true);

        } catch (error) {
            console.error(error.message);
        }
    }

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
            <Paper elevation={5} style={paperStyle}>
                <Grid align='center'>
                    <Avatar><LockTwoToneIcon/></Avatar>
                    <h2>Login</h2>
                </Grid>
                <form onSubmit={onSubmitForm}>
                    <TextField type="text" name='name' value={name} onChange={e => onChange(e)} placeholder='Username'/>
                    <TextField type='password' name='password' placeholder='Password' value={password} onChange={e => onChange(e)}/>

                    <Button href="/register" style={buttonStyle} variant='contained' color='secondary'>Register</Button>
                    <Button type='submit' style={buttonStyle} variant='contained' color='primary'>Login</Button>
                </form>
            </Paper>
        </Grid>

        /*<div>
        <h1>Login</h1>
            <form onSubmit={onSubmitForm}>
                <input type='text' name='name' placeholder='User name' value={name} onChange={e => onChange(e)}/>
                <input type='password' name='password' placeholder='Password' value={password} onChange={e => onChange(e)}/>
                <Button variant='contained' color='primary'>Submit</Button>
            </form>
            <Link to='register'>Register</Link>
        </div>*/
    )
}

export default Login;