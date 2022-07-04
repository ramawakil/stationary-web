import React, {useContext, useEffect} from 'react';
import AppNavBar from "../../AppNavBar";
import UserContext from "../../../context/userContext";
import {useRouter} from "next/router";
import {Box, Container, Toolbar} from "@mui/material";
import AppTextInput from "../../AppTextInput";
import AppButton from "../../AppButton";
import PrintJobContext from "../../../context/printJobContext";
import CustomerPrintJob from "../../customerPrintJob";
import AppDialogue from "../../AppDialogue";
import NewPrintRequestFormComponent from "../../newPrintRequestFormComponent";

function CustomerDashboardLayout({children}) {
    const { user, setUser } = useContext(UserContext);
    const router = useRouter();
    const [ printJob, setPrintJob ] = React.useState(null);
    const [openDialog, setOpenDialog] = React.useState(false);

    const handleLogOut = () => {
        setUser(null);
        router.push('/')
    }

    const handleSearchPrintJob = () => {
        console.log('search print job')
    }

    useEffect(() => {
        // fetch print job matching the control code entered
    }, [printJob]);

    const handleOpenDialogue = () => {
        setOpenDialog(true);
    }

    const handleCloseDialog = () => {
        setOpenDialog(false);
    }

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
                        { !user && <AppTextInput value={printJob} setValue={setPrintJob} label='Enter print job control code'/>}
                    </Box>
                    <Box sx={{ flex: 0.18 }}>
                        { !user && <AppButton onPress={handleSearchPrintJob} title='Search' variant='outlined' color='info'/>}
                    </Box>
                    <Box sx={{ flex: 0.28 }}>
                        <AppButton onPress={handleOpenDialogue} title='Add new print request' variant='outlined' color='success'  />
                    </Box>
                </Box>
                { !user && <CustomerPrintJob/> }
                 {children}
            </Container>
                <AppDialogue title='New Print Request' open={openDialog} handleCloseDialog={handleCloseDialog} >
                    <NewPrintRequestFormComponent />
                </AppDialogue>
            </PrintJobContext.Provider>
        </>
    );
}

export default CustomerDashboardLayout;