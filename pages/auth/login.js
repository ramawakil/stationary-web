import React, {useContext, useState} from 'react';
import LoadingContext from "../../app/context/LoadingContext";
import * as Yup from 'yup';
import {Box, Container, Paper, Stack, Typography} from "@mui/material";
import WelcomeScreenImage from "../../app/components/WelcomeScreenImage";
import AppErrorMessage from "../../app/components/forms/AppErrorMessage";
import AppForm from "../../app/components/forms/AppForm";
import AppFormField from "../../app/components/forms/AppFormField";
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import AppSubmitButton from "../../app/components/forms/AppSubmitButton";
import AppButton from "../../app/components/AppButton";
import {useRouter} from "next/router";
import FlashOnIcon from '@mui/icons-material/FlashOn';


const ValidationSchema = Yup.object().shape({
    username: Yup.string().required('Email or Phone number is required'),
    password: Yup.string().required('Password is required'),
});


function Login(props) {
    const [error, setError] = useState();
    const [loading, setLoading] = useContext(LoadingContext);
    const router = useRouter();

    const submitLogin = async (values) => {
        setError(null);

        // try {
        //     await authApi.login({
        //         username: values.username,
        //         password: values.password,
        //     });
        //     window.location = '/';
        // }
        // catch (e) {
        //     setError(e.response.data.detail);
        //     await toast.error(e.response.data.detail);
        // }
    };

    const handleForgetPasswordLink = () => {
        router.push('/auth/forget-password');
    };

    const handleSignUpLink = () => {
        router.push('/auth/register');
    };

    return (
        <>
            <Container maxWidth='sm' component={Paper} sx={{mt: 5, p: 3}}>
                <Typography variant='h4' align='center' color='secondary' sx={{
                    fontWeight: 'bold',
                    marginBottom: '1rem'
                }}>
                    Flash Printer
                </Typography>
                <Box sx={{ textAlign: 'center' }}>
                    <FlashOnIcon fontSize='large' color='info' />
                </Box>



                <Box sx={{mt: 2, textAlign: 'center'}}>
                    <AppErrorMessage error={error} visible={error}/>
                </Box>

                <AppForm
                    initialValues={{username: '', password: ''}}
                    onSubmit={submitLogin}
                    validationSchema={ValidationSchema}
                >
                    <Box sx={{p: 3}}>
                        <AppFormField
                            backIcon={<PersonIcon color='icon' sx={{mr: 2}}/>}
                            name='username'
                            placeholder='Email or Phone number'
                            variant='standard'
                        />

                        <AppFormField
                            backIcon={<LockIcon color='icon' sx={{mr: 2}}/>}
                            name='password'
                            placeholder='Password'
                            type='password'
                            variant='standard'
                        />

                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            mt: 3,
                            mb: 2
                        }}>
                            <AppButton title='Forget Password ?' onClick={handleForgetPasswordLink}/>
                            <AppButton title='No Account? Register Here' onClick={handleSignUpLink}/>

                        </Box>

                        <Box sx={{textAlign: 'center'}}>
                            <AppSubmitButton title='LOGIN' fullWidth color='success'/>
                        </Box>

                    </Box>

                </AppForm>

            </Container>
        </>
    );
}

export default Login;