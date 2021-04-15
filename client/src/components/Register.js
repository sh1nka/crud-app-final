import { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Grid, Paper, Avatar, TextField} from '@material-ui/core';
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';

const Register = ({setAuth}) =>
{
    const [inputs, setInputs] = useState({
        name: '',
        password: ''
    });

    const onSubmitForm = async (e) =>
    {
        e.preventDefault()

        try 
        {
            const body = { name, password };

            const response = await fetch('http://localhost:7000/auth/register', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });

            const parseResponse = await response.json();

            console.log(parseResponse);

            localStorage.setItem('token', parseResponse.token);

            setAuth(true);
        }
        catch (err) 
        {
            console.error(err.message)
        }
    }

    const { name, password } = inputs;

    const onChange = (e) =>
    {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    };

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

    return (
        <Grid>
            <Paper elevation={5} style={paperStyle}>
                <Grid align='center'>
                    <Avatar><LockTwoToneIcon/></Avatar>
                    <h2>Register</h2>
                </Grid>
                <form onSubmit={onSubmitForm}>
                    <TextField type="text" name='name' value={name} onChange={e => onChange(e)} placeholder='Username'/>
                    <TextField type='password' name='password' placeholder='Password' value={password} onChange={e => onChange(e)}/>

                    <Button type='submit'  style={buttonStyle} variant='contained' color='secondary'>Register</Button>
                    <Button href='/login' style={buttonStyle} variant='contained' color='primary'>Login</Button>
                </form>
            </Paper>
        </Grid>
       /* <div>
            <h1>Register</h1>
            <form onSubmit={onSubmitForm}>
                <input type='text' name='name' placeholder='Username' value={name} onChange={e => onChange(e)} />
                <input type='password' name='password' placeholder='Password' value={password} onChange={e => onChange(e)} />
                <button className='btn btn success btn block'>Submit</button>
            </form>
        </div>*/
    )
}

export default Register;