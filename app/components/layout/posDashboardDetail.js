import React, {useContext} from 'react';
import AppNavBar from "../AppNavBar";
import {Box, Container, Toolbar} from "@mui/material";
import AppTextInput from "../AppTextInput";
import AppButton from "../AppButton";
import PosPrintJob from "../posPrintJob";
import DetailPageLayout from "./detailPageLayout";
import UserContext from "../../context/userContext";
import {useRouter} from "next/router";

function PosDashboardDetail({children}) {
    const {user, setUser} = useContext(UserContext);
    const router = useRouter();
    const [ printJob, setPrintJob ] = React.useState(null);

    const handleLogOut = () => {
        setUser(null);
        router.push('/')
    }


    return (
       <>
           <AppNavBar handleLogOut={handleLogOut} handleDrawerOpen={false} open={false} showButton={false}
                      auth={!!user}/>
           <Toolbar/>
           <Container maxWidth='xxl'>
               <DetailPageLayout />
               {children}
           </Container>
       </>
    );
}

export default PosDashboardDetail;