import React, {useContext} from 'react';
import AppNavBar from "../../AppNavBar";
import UserContext from "../../../context/userContext";
import {Container, Toolbar} from "@mui/material";
import CustomerPrintJob from "../../customerPrintJob";


function CustomerDashboardLayout({children}) {
    const {user} = useContext(UserContext);

    return (
        <>
            <AppNavBar handleDrawerOpen={false} open={false} showButton={false} auth={!!user}/>
            <Toolbar/>
            <Container maxWidth='xxl'>
                {children}
            </Container>
        </>
    );
}

export default CustomerDashboardLayout;