import React from 'react';
import {Avatar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";
import { styled, useTheme } from '@mui/material/styles';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Link from 'next/link';
import {signOut, useSession} from "next-auth/react";
import {useRouter} from "next/router";
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import {makeStyles} from "@mui/styles";
import PrintIcon from '@mui/icons-material/Print';



const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const useStyles = makeStyles(theme => ({
    appBar: {
        backgroundColor: theme.palette.primary.dark,
    },
}));


function AppNavBar({ open, handleDrawerOpen, handleDrawerClose}) {
    const classes = useStyles();
    const {data: session} = useSession();
    const router = useRouter();



    const handleSignOut = async () => {
        await signOut({
            callbackUrl: '/',
            redirect: false,
        });
        await router.push('/login');
    };

    return (
            <AppBar color='secondary' position='fixed' open={open}>
                <Toolbar>
                    <Link href='/'>
                        <IconButton color='white' sx={{
                        }}>
                            <Typography variant='subtitle1' sx={{ mr: 2 }} >
                                Flash Printer
                            </Typography>
                            <PrintIcon />
                        </IconButton>
                    </Link>
                    <Box sx={{flexGrow: 1}}></Box>
                    {!session?.user ? (<Link href='/auth/login'>
                        <Button
                            color='white'
                            size='large'
                            sx={{fontWeight: 'bold', textTransform: 'none'}}
                        >
                            { router.pathname === '/auth/login' ? '' : 'Login' }
                        </Button>
                    </Link>) : (
                        <Button
                            color='white'
                            size='large'
                            onClick={handleSignOut}
                            sx={{fontWeight: 'bold', textTransform: 'none'}}
                        >
                            { router.pathname === '/auth/login' ? '' : 'Logout' }
                        </Button>
                    )}
                    <Link href='/help'>
                        <IconButton
                            size='large'
                            edge='end'
                            color='inherit'
                            aria-label='menu'
                        >
                            <HelpOutlineIcon color='white' />
                        </IconButton>
                    </Link>
                </Toolbar>
            </AppBar>
    );
}

export default AppNavBar;
