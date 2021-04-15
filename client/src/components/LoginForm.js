//Material UI
import Button from '@material-ui/core/Button';
import { Grid, Paper, Avatar, TextField} from '@material-ui/core';
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';

const LoginForm = () =>
{
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
    )
}

export default LoginForm;