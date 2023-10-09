import React, { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import { Sidebar, Menu, MenuItem, SubMenu, ProSidebarProvider } from 'react-pro-sidebar';

import { Box, Button, Container, ThemeProvider, Typography } from '@mui/material';
import theme from './config/theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import AppRoutes from './router/AppRoutes';
import { HelmetProvider } from 'react-helmet-async';

import Analytics from './containers/Analytics/Analytics';

import { FAQ } from './containers/FAQ';
import { ErrorPage } from './containers/ErrorPage';
import ProtectedRoutes from './router/ProtectedRoutes';
import { LoginPage } from './Login/LoginPage';
import KatalogData from './containers/katalog/KatalogData';

import Katalog from './containers/katalog/Katalog';
import { KatalogTIK } from './containers/katalog/KatalogTIK';
import { Input } from './Input/Input';
import { RegisterForm } from './Register/RegisterForm';





export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({loggedIn: false});
  return (
    <HelmetProvider>
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <UserContext.Provider value={{user, setUser}}>
            <BrowserRouter>
              <Routes>
                  <Route path='/' element={<LoginPage/>} />
                  <Route path='/signup' element={<RegisterForm/>}/>
                  <Route element={<ProtectedRoutes />}>
                    <Route path='/dashboard' element={<Analytics />} />
                    <Route path='/katalog-aplikasi' element={<Katalog />} />
                    <Route path='/faq' element={<FAQ />} />
                    <Route path='/katalog-data' element={<KatalogData />} />
                    <Route path='/katalog-tik' element={<KatalogTIK />} />
                    <Route path='/input' element={<Input />} />
                    <Route path='/*' element={<ErrorPage />} />
                  </Route>
              </Routes>
            </BrowserRouter>

          </UserContext.Provider>
        </ThemeProvider>
      </React.Fragment>
    </HelmetProvider>
  )
}

/**
 * @type {import('@mui/material').SxProps}
 */
const styles = {
  container: {
    display: 'flex',
    bgcolor: 'neutral.light',
    height: 'calc(100% - 64px)'
  },
  mainSection: {
    p: 4,
    width: '100%',
    height: '100%',
    overflow: 'auto',
  }
}
export default App
