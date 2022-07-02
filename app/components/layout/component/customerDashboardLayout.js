import React, {useContext} from 'react';
import AppNavBar from "../../AppNavBar";
import UserContext from "../../../context/userContext";
import {useRouter} from "next/router";

function CustomerDashboardLayout(props) {
    const { user } = useContext(UserContext);
    const router = useRouter();

    const handleLogOut = () => {
        router.push('/')
    }

    return (
        <>
            <AppNavBar handleLogOut={} handleDrawerOpen={false} open={false} showButton={false} auth={} />
        </>
    );
}

export default CustomerDashboardLayout;