import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getUserID, getUsers, updateUser, setUsers } from '../models/actions';

import { Grid, Paper, TextField, Button } from '@material-ui/core';

const axios = require('axios');

const NDashboard = ({setAuth}) =>
{
    const users = useSelector((state) => state.users)
    const dispatch = useDispatch();

    /*useEffect(() =>
    {
        dispatch(getUsers());
    }, []);*/

    // Dispatch on Button Create
    const onBtnCreate = () =>
    {
        alert('Created');
    }

    // Dispatch on Button Update 
    const onBtnUpdate = () =>
    {
        alert('Updated')
        dispatch(updateUser(users));
        /*e.preventDefault()
        try
        {
            axios.patch(`http://localhost:7000/dashboard/update/${id}`)
            {
                method: 'patch',
            }

        }
        alert('Updated')*/
        //dispatch()
    }

    // Dispatch on Button Search All
    const onBtnSearchAll = () =>
    {
        alert('Search All')
        dispatch(getUsers(users));
    }

    // Dispatch on Button Search ID
    const onBtnSearchID = () =>
    {
        alert('Search ID')
        dispatch(getUserID(users));
    }

    // On Button Delete
    const onBtnClickDelete = async (e) =>
    {
        e.preventDefault()
        try 
        {
            axios.delete(`http://localhost:7000/dashboard/remove/${id}`);
            alert('User deleted')
        }
        catch (error) 
        {
            console.error(error.message);
        }
    }

    // Log Out Button
    const logout = (e) =>{
        e.preventDefault();
        localStorage.removeItem('token');
        setAuth(false);
    }

    // Input change in textfields
    const [inputs, setInputs] = useState({
        id: ''
    });

    const { id } = inputs;

    const onChange = (e) =>
    {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    }

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

    return(
        <>
        <Grid>
        <Paper elevation={5} style={paperStyle}>
            <Paper elevation={0} style={{padding: 4, width: 'auto'}}>
                <TextField type="text" name='id' value={id} onChange={e => onChange(e)} placeholder='ID'/>
                <TextField  type="text" name='name' placeholder='Username'/>
                <TextField type="text" name='name'  placeholder='Password'/>
            </Paper>

            <Paper elevation={0}>
            <Button type='submit' style={buttonStyle} variant='contained' color='primary' onClick={onBtnCreate}>Create</Button>
            <Button type='submit' style={buttonStyle} variant='contained' color='primary' onClick={onBtnSearchAll}>Search All</Button>
            <Button type='submit' style={buttonStyle} variant='contained' color='primary' onClick={onBtnSearchID}>Search ID</Button>
            <Button type='submit' style={buttonStyle} variant='contained' color='primary' onClick={onBtnUpdate}>Update</Button>
            <Button type='submit' style={buttonStyle} variant='contained' color='primary' onClick={onBtnClickDelete}>Remove ID</Button>
            <Button type='submit' style={buttonStyle} variant='contained' color='secondary' onClick={logout}>Log out</Button>
            </Paper>

 
      {users.map((data) => (
                    <div className='tabela'>
                        <tr>
                            <td>ID: {data.user_id}</td>
                            <td>Username: {data.user_name}</td>
                        </tr>
                        <hr/>
                    </div>
                ))}
        </Paper>
    </Grid>
        </>
    )
}

export default NDashboard

/*{users.map((data) => {
          return (
              <li>{data.user_id}</li>)
        })}*/

/*<Grid>
        <Paper elevation={5} style={paperStyle}>
            <Paper elevation={0} style={{padding: 4, width: 'auto'}}>
                <TextField type="text" name='id' value={id} onChange={e => onChange(e)} placeholder='ID'/>
                <TextField  type="text" name='name' placeholder='Username'/>
                <TextField type="text" name='name'  placeholder='Password'/>
            </Paper>

            <Paper elevation={0}>
            <Button type='submit' style={buttonStyle} variant='contained' color='primary'>Create</Button>
            <Button type='submit' style={buttonStyle} variant='contained' color='primary' onClick={onBtnSearchAll}>Search All</Button>
            <Button type='submit' style={buttonStyle} variant='contained' color='primary' >Search ID</Button>
            <Button type='submit' style={buttonStyle} variant='contained' color='primary' >Update</Button>
            <Button type='submit' style={buttonStyle} variant='contained' color='primary' onClick={onBtnClickDelete}>Remove ID</Button>
            <Button type='submit' style={buttonStyle} variant='contained' color='secondary' >Log out</Button>
            </Paper>

        </Paper>
    </Grid>*/