import React, {useContext} from 'react';
import AppNavBar from "../AppNavBar";
import UserContext from "../../context/userContext";
import {Box, Container, Toolbar} from "@mui/material";

function BaseLayoutNavBar({children}) {
    const { user } = useContext(UserContext);

    return (
        <Box>
            <AppNavBar auth={false} showButton={false} open={false} handleDrawerOpen={null} handleLogOut={null} />
            <Toolbar />
            <Container maxWidth='xxl'>
                {children}
            </Container>
        </Box>
    );
}

export default BaseLayoutNavBar;