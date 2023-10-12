import React from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  CssBaseline,
  Typography,
  Link,
  TextField,
  Paper,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import LoginHeader from '../components/LoginHeader';

export const RegisterForm = () =>{
const navigate = useNavigate();
const handleBackToLogin = (e) => {
  navigate('/')
};

return (
  <div>
  <AppBar position="static" color="primary">
        <Toolbar>

        <img src ="src/assets/logo.png" width='300px' height='auto'  />

        </Toolbar>
  </AppBar>
  <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper
          elevation={3} // You can adjust the elevation for the card-like effect
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 4, // Add margin from the top
            padding: 3, // Add padding inside the card
          }}
        >
          <img src ="src/assets/logo_kemhan.png" width='80px' height='auto'  />
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <form
        sx={{
          width: '100%',
          marginTop: 2,
        }}
        noValidate
      >
        {/* Registration form fields go here */}
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Email Address"
          name="email"
          autoComplete="email"
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Password"
          name="password"
          type="password"
          autoComplete="current-password"
        />
        {/* Add more fields as needed */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ marginTop: 2 }} // Add margin to the button
        >
          Register
        </Button>
      </form>
          <Link
            component="button"
            variant="body2"
            onClick={handleBackToLogin}
            sx={{ cursor: 'pointer', marginTop: 5 }} // Add margin to the link
          >
            <ArrowBackIcon sx={{ marginRight: 1 }} /> Back to Login
          </Link>
        </Paper>
      </Container>
    </div>
  );
}
//   <Container component="main" maxWidth="xs">
//     <CssBaseline />
//     <Paper
//       elevation={3} // You can adjust the elevation for the card-like effect
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         marginTop: 4, // Add margin from the top
//         padding: 3, // Add padding inside the card
//       }}
//     >
//       <img src ="src/assets/logo_kemhan.png" width='80px' height='auto'  />
//       <Typography component="h1" variant="h5">
//         Register
//       </Typography>
//       <form
//         sx={{
//           width: '100%',
//           marginTop: 2,
//         }}
//         noValidate
//       >
//         {/* Registration form fields go here */}
//         <TextField
//           variant="outlined"
//           margin="normal"
//           fullWidth
//           label="Username"
//           name="username"
//           autoComplete="username"
//           autoFocus
//         />
//         <TextField
//           variant="outlined"
//           margin="normal"
//           fullWidth
//           label="Email Address"
//           name="email"
//           autoComplete="email"
//         />
//         <TextField
//           variant="outlined"
//           margin="normal"
//           fullWidth
//           label="Password"
//           name="password"
//           type="password"
//           autoComplete="current-password"
//         />
//         {/* Add more fields as needed */}
//         <Button
//           type="submit"
//           fullWidth
//           variant="contained"
//           color="primary"
//           sx={{ marginTop: 2 }} // Add margin to the button
//         >
//           Register
//         </Button>
//       </form>
//       <Link
//         component="button"
//         variant="body2"
//         onClick={handleBackToLogin}
//         sx={{ cursor: 'pointer', marginTop: 1 }} // Add margin to the link
//       >
//         <ArrowBackIcon sx={{ marginRight: 1 }} /> Back to Login
//       </Link>
//     </Paper>
//   </Container>
//   </div>

// );
// }