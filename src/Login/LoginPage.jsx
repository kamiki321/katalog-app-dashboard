import { Button, Container, Grid, TextField, Typography, useTheme } from '@mui/material'
import React, { useContext, useState } from 'react'
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
import LoginHeader from '../components/LoginHeader';




export const LoginPage = () => {
  const theme = useTheme;
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // const [errors, setErrors] = useState({})

  // const [values, setValues] = useState({
  //   username: '',
  //   password: ''
  // })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    // if(errors.username === "" && errors.password === "") {
    //   axios.get('http://localhost:8081/', values)
    //   .then(res => {
    //     if(res.data === "Success"){
    //       navigate('/dashboard');
    //     } else {
    //       alert("Akun tidak ditemukan")
    //     }  
    //   })
    //   .catch(err => console.log(err));
    // }
    // You can add your login logic here
  };



  return (
    <div>
      <header>
        <LoginHeader/>
      </header>
      
      <div  sx={{
        bgcolor: 'neutral.main'
        }}>

      <Typography  fontFamily="sans-serif" variant="h4" align="center"  sx={styles.spacer}>
      Selamat datang pada Katalog Data Aplikasi 
      </Typography>
      <h4  align="center"  >  </h4>
      <logo justifycontent="center" >
        
      </logo>
      <Container maxWidth="xs">
      <Paper elevation={3} style={{ padding: '50px' }}>
      
        <Typography variant="h4" align="center" gutterBottom>
          <img src ="src/assets/logo_kemhan.png" width='80px' height='auto'  />
          <br></br>
          Sign In!
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField
                label="Username"
                fullWidth
                variant="outlined"
                value={username}
                onChange={handleUsernameChange}
                />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                fullWidth
                type="password"
                variant="outlined"
                value={password}
                onChange={handlePasswordChange}
                />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                onClick={()=> {
                  navigate('/dashboard');
                  if(user.loggedIn) return;
                  setUser({ loggedIn: true});
        
                  if(location.state?.from) {
                    navigate(location.state.from);
                  }
                }}
              >
                Masuk Sekarang!
              </Button>
            </Grid>
            <Grid item xs={12}>
            <Typography 
            variant="h6" 
            align="center" 
            gutterBottom >
              Belum punya akun?
              <Button  href="/signup">
                 buat sekarang!
              </Button>
            </Typography>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
    </div>
    <footer >
            <Box sx={{
              width: '100%',
              height: 80
            }}
            >
               
                <Typography 
                align = "center"
                variant="h6" sx={styles.appFooter}>© Hak Cipta 2022 - 2023 Pusat Data dan Informasi Kementerian Pertahanan Republik Indonesia</Typography>
            </Box>
    </footer>
    </div>
  )
}


/** @type {import("@mui/material").SxProps} */
const styles = {
  appBar: {
      bgcolor: 'neutral.main'
  },
  spacer: {
      paddingTop: 12,
      margin : 0,
      fontFamily : 'sans-serif'
  },
  appFooter: {
    position: 'sticky',
    padding: 5,
    margin : 0
}
}