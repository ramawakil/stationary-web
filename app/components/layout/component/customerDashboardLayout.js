import React, {useContext, useEffect} from 'react';
import AppNavBar from "../../AppNavBar";
import UserContext from "../../../context/userContext";
import {useRouter} from "next/router";
import {Box, Container, Toolbar} from "@mui/material";
import AppTextInput from "../../AppTextInput";
import AppButton from "../../AppButton";
import PrintJobContext from "../../../context/printJobContext";
import CustomerPrintJob from "../../customerPrintJob";

function CustomerDashboardLayout({children}) {
    const { user } = useContext(UserContext);
    const router = useRouter();
    const [ printJob, setPrintJob ] = React.useState(null);

    const handleLogOut = () => {
        router.push('/')
    }

    const handleSearchPrintJob = () => {
        console.log('search print job')
    }

    useEffect(() => {
        // fetch print job matching the control code entered
    }, [printJob]);


    return (
        <>
            <PrintJobContext.Provider value={{printJob, setPrintJob}}>
            <AppNavBar handleLogOut={handleLogOut} handleDrawerOpen={false} open={false} showButton={false} auth={!!user} />
            <Toolbar />
            <Container maxWidth='xxl'>
                <Box sx={{
                    mt: 2,
                  display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                    <Box sx={{ flex: 0.5 }}>
                        <AppTextInput value={printJob} setValue={setPrintJob} label='Enter print job control code' />
                    </Box>
                    <Box sx={{ flex: 0.18 }}>
                        <AppButton onPress={handleSearchPrintJob} title='Search' variant='outlined' color='info'  />
                    </Box>
                    <Box sx={{ flex: 0.28 }}>
                        <AppButton onPress={handleSearchPrintJob} title='Add new print request' variant='outlined' color='success'  />
                    </Box>
                </Box>
                <CustomerPrintJob />
                {children}
            </Container>
            </PrintJobContext.Provider>
        </>
    );
}

export default CustomerDashboardLayout;