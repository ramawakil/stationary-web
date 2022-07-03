import React, {useContext} from 'react';
import AppNavBar from "../../AppNavBar";
import {Box, Container, Toolbar} from "@mui/material";
import AppTextInput from "../../AppTextInput";
import AppButton from "../../AppButton";
import CustomerPrintJob from "../../customerPrintJob";
import UserContext from "../../../context/userContext";
import {useRouter} from "next/router";
import PosPrintJob from "../../posPrintJob";
import AppDialogue from "../../AppDialogue";
import NewPrintRequestFormComponent from "../../newPrintRequestFormComponent";
import NewPrintRequestFormComponentPos from "../../NewPrintRequestFormComponentPos";

function PosDashboardLayout({children}) {
    const {user, setUser} = useContext(UserContext);
    const router = useRouter();
    const [ printJob, setPrintJob ] = React.useState(null);
    const [ openDialog, setOpenDialog ] = React.useState(false);

    const handleLogOut = () => {
        setUser(null);
        router.push('/')
    }

    const handleSearchPrintJob = () => {
        console.log('search print job')
    }

    const handleGoToConfig = () => {
        router.push('/pos/config');
    }

    const handleCloseDialog = () => {
        setOpenDialog(false);
    }

    const handleOpenDialog = () => {
        setOpenDialog(true);
    }




    return (
        <>
            <AppNavBar handleLogOut={handleLogOut} handleDrawerOpen={false} open={false} showButton={false}
                       auth={!!user}/>
            <Toolbar/>
            <Container maxWidth='xxl'>
                <Box sx={{
                    mt: 2,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                    <Box sx={{flex: 0.5}}>
                        <AppTextInput value={printJob} setValue={setPrintJob} label='Enter print job control code'/>
                    </Box>
                    <Box sx={{flex: 0.18}}>
                        <AppButton onPress={handleSearchPrintJob} title='Search' variant='outlined' color='info'/>
                    </Box>

                    <Box sx={{flex: 0.18}}>
                        <AppButton onPress={handleGoToConfig} title='Configurations' variant='outlined' color='accent'/>
                    </Box>
                </Box>
                <PosPrintJob onSubmit={handleOpenDialog} />
                {children}
            </Container>
            <AppDialogue title='New Print Request' open={openDialog} handleCloseDialog={handleCloseDialog} >
                <NewPrintRequestFormComponentPos />
            </AppDialogue>
        </>
    );
}

export default PosDashboardLayout;