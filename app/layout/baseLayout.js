import React from 'react';
import AppNavBar from "../components/AppNavBar";
import {Box, CssBaseline, Toolbar} from "@mui/material";
import AppSideBar from "../components/AppSideBar";
import {useSession} from "next-auth/react";
import {styled} from "@mui/material/styles";
import AuthLayout from "./AuthLayout";


const drawerWidth = 240;

const Main = styled('main', {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),

        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

function BaseLayout({children, opened=true}) {

    const session = useSession();

    const [open, setOpen] = React.useState(opened);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <>
            {/*<AuthLayout>*/}
            <Box sx={{display: 'flex'}}>
                <CssBaseline/>
                <AppNavBar open={false} handleDrawerClose={handleDrawerClose} handleDrawerOpen={handleDrawerOpen}/>
                <Main open={open}>
                    <Toolbar/>
                    {children}
                </Main>
            </Box>
            {/*</AuthLayout>*/}
        </>
    );
}

export default BaseLayout;
