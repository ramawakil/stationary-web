import React from 'react';
import AppDashboardLayout from "./AppDashboardLayout";
import {Container, Toolbar} from "@mui/material";

function CustomerDrawerLayout({children}) {
    return (
       <>
           <AppDashboardLayout>
               <Container maxWidth='xxl'>
                     {children}
               </Container>
           </AppDashboardLayout>
       </>
    );
}

export default CustomerDrawerLayout;