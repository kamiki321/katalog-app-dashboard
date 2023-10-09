
import { AppBar, Badge, Box, Button, IconButton, Toolbar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'
import LogoutIcon from '@mui/icons-material/Logout';
import { useProSidebar } from "react-pro-sidebar";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router";
import { UserContext } from "../App";


function AppHeader() {
    const { user, setUser } = useContext(UserContext);
    // const navigate = useNavigate();
    // const location = useLocation();
    const { collapseSidebar, toggleSidebar, collapsed, broken } = useProSidebar();

    return <AppBar position="sticky" sx={styles.appBar}>
        <Toolbar >
            <IconButton onClick={() => broken ? toggleSidebar() : collapseSidebar()} color="secondary">
                <MenuIcon />
            </IconButton>
            <Box
                component={'img'}
                sx={styles.appLogo}
                src="/src/assets/Logo.png" />
            <Box
                sx={{ flexGrow: 1 }} />
            <IconButton 
            onClick={() => {
                if (!user.loggedIn) return;
                setUser({ loggedIn: false});
            }}
            title="Sign Out" color="secondary"
            navigate to ='/'
            >
                <LogoutIcon />
            </IconButton>
        </Toolbar>
    </AppBar>;
}

/** @type {import("@mui/material").SxProps} */
const styles = {
    appBar: {
        bgcolor: 'neutral.main'
    },
    appLogo: {
        borderRadius: 2,
        width: 250,
        marginLeft: 2,
        cursor: 'pointer'
    }
}

export default AppHeader;