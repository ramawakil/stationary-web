import React, {useContext, useEffect} from 'react';
import UserContext from "../../../context/userContext";
import {useRouter} from "next/router";
import AppNavBar from "../../AppNavBar";
import {Box, Container, Toolbar} from "@mui/material";
import AppTextInput from "../../AppTextInput";
import AppButton from "../../AppButton";
import CustomerPrintJob from "../../customerPrintJob";
import AppDialogue from "../../AppDialogue";
import NewPrintRequestFormComponent from "../../newPrintRequestFormComponent";
import AppIconButton from "../../AppIconButton";
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';


function CustomerDashboardDetailPages({children}) {
    const { user, setUser } = useContext(UserContext);
    const router = useRouter();
    const [ printJob, setPrintJob ] = React.useState(null);

    useEffect(() => {
        // fetch print job matching the control code entered
    }, [printJob]);

    const handleLogOut = () => {
        setUser(null);
        router.push('/')
    }

    const handleSearchPrintJob = () => {
        console.log('search print job')
    }

    const handleGoBack = () => {
        router.back();
    }

    return (
        <>
            <AppNavBar handleLogOut={handleLogOut} handleDrawerOpen={false} open={false} showButton={false} auth={!!user} />
            <Toolbar />
            <Container maxWidth='xxl'>
                <Box sx={{
                    mt: 2,
                    display: 'flex',
                    flexDirection: 'row',
                    marginX: 5,
                    justifyContent: 'space-between',
                }}>
                    <Box sx={{ flex: 0.5 }}>
                        <AppIconButton icon={<ArrowCircleLeftOutlinedIcon color='accent' />} label='Back button' onPress={handleGoBack} />
                    </Box>
                    <Box sx={{ flex: 0.18 }}>

                    </Box>
                </Box>
                {children}
            </Container>
        </>
    );
}

export default CustomerDashboardDetailPages;