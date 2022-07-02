import React from 'react';
import BaseLayoutNavBar from "../app/components/layout/BaseLayoutNavBar";
import AppLogin from "../app/components/commons/AppLogin";
import {Box} from "@mui/material";


function Login(props) {
    return (
        <>
            <BaseLayoutNavBar>
                <Box sx={{ mt: 15 }}>
                    <AppLogin title='Flash Printer' initialValues={{ username: '', password: '' }} usernameLabel='Email or Phone Number' subTitle='Complete the form to Login'  />
                </Box>
            </BaseLayoutNavBar>

        </>
    );
}

export default Login;