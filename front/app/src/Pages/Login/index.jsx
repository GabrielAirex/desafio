import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";
import  SpaIcon from '@mui/icons-material/Spa';

const theme = createTheme();

export default function SignIn() {
  const [cookies, setCookie] = useCookies(['access_token','refresh_token']);
  const [auth,setAuth] = React.useState(false)
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: '',
      password: ''
    }
  });
    const onSubmit = (data) => 
   {
     console.log(data)
     axios.defaults.baseURL = 'https://api-desafio.airex.com.br/';


      axios.post('token/',data , {
        
              mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS'
      }
    
      


      }).then( response =>  {
        return response['data'];
      }).then( token =>
        {setCookie('access_token', token['access'], { path: '/' })
         setCookie('refresh_token', token['refresh'], { path: '/' })

         setAuth(true)
      
        navigate("/home", { replace: true });
      }
      )
  
      .catch(function (error) {
        console.log(error);
      });

  
  }




 
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <SpaIcon  color="action"/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box   noValidate sx={{ mt: 1 }}>

<form onSubmit={handleSubmit(onSubmit)}>

<Controller
        name="username"
        control={control}
        render={({ field }) =>  <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Addressss"
        name="email"
        autoComplete="email"
        autoFocus
       
       {...field} />}
      />

<Controller
        name="password"
        control={control}
        render={({ field }) =>  <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
       {...field} />}
      />

         

        
            
     
            
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            </form>
          </Box>
        </Box>
   
      </Container>
    </ThemeProvider>
  );
}