import React, {useContext} from 'react';
import AppNavBar from "../../AppNavBar";
import {Box, Container, Toolbar} from "@mui/material";
import AppTextInput from "../../AppTextInput";
import AppButton from "../../AppButton";
import CustomerPrintJob from "../../customerPrintJob";
import UserContext from "../../../context/userContext";
import {useRouter} from "next/router";

function PosDashboardLayout({children}) {
    const {user, setUser} = useContext(UserContext);
    const router = useRouter();
    const [ printJob, setPrintJob ] = React.useState(null);

    const handleLogOut = () => {
        setUser(null);
        router.push('/')
    }

    const handleSearchPrintJob = () => {
        console.log('search print job')
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
                </Box>
                {children}
            </Container>
        </>
    );
}

export default PosDashboardLayout;