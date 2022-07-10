import React, {useContext} from 'react';
import BaseLayoutNavBar from "../app/components/layout/BaseLayoutNavBar";
import AppLogin from "../app/components/commons/AppLogin";
import {Box} from "@mui/material";
import AppConfig from "../app/appConfig.json";
import * as Yup from "yup";
import LoadingContext from "../app/context/loadingContext";
import AuthApi from "../app/api/auth";
import UserContext from "../app/context/userContext";

const ValidationSchema = Yup.object().shape({
    username: Yup.string().required('Email or Phone is required'),
    password: Yup.string().required('Password is required'),
});


function Login(props) {
    const { setLoading } = useContext(LoadingContext);
    const { setUser } = useContext(UserContext);

    const handleLogin = (values) => {
        setLoading(true);
        try {
            const res = AuthApi.login({
                username: values.username,
                password: values.password
            });
            setUser(res.data);
        }
        catch (e) {
        }
    }

    return (
        <>
            <BaseLayoutNavBar>
                <Box sx={{ mt: 15 }}>
                    <AppLogin validationSchema={ValidationSchema} onSubmitForm={handleLogin} title={AppConfig.appName} initialValues={{ username: '', password: '' }} usernameLabel='Email or Phone Number' subTitle='Complete the form to Login'  />
                </Box>
            </BaseLayoutNavBar>

        </>
    );
}

export default Login;