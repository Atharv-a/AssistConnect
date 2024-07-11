import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { NavLink, useNavigate } from 'react-router-dom';
import { signin } from '../api';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © AssistConnect '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function SignIn() {

  const navigator = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const data ={
      email: form.get('email'),
      password: form.get('password'),
    };
    const sucess = await signin(data)

    if(sucess === true){
      sessionStorage.setItem("ASSIST_CONNECT_LOGGEDIN","true")
      navigator("/",{replace:true})
    }

  };

  return (
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              variant='standard'
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              color='secondary'
            />
            <TextField
              margin="normal"
              required
              fullWidth
              variant='standard'
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              color='secondary'
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor:"secondary.main", color:"#fff"}}
            >
              Sign In
            </Button>
            <NavLink to="/signup" className='auth-link'>
              "Don't have an account? Sign Up"
            </NavLink>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
  );
}