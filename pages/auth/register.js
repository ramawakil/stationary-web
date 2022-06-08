import React, {useContext, useState} from 'react';
import {Box, Container, Paper, Typography} from "@mui/material";
import AppErrorMessage from "../../app/components/forms/AppErrorMessage";
import AppForm from "../../app/components/forms/AppForm";
import AppFormField from "../../app/components/forms/AppFormField";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import AppButton from "../../app/components/AppButton";
import AppSubmitButton from "../../app/components/forms/AppSubmitButton";
import LoadingContext from "../../app/context/LoadingContext";
import * as Yup from "yup";
import {useRouter} from "next/router";
import FlashOnIcon from "@mui/icons-material/FlashOn";

const ValidationSchema = Yup.object().shape({
    username: Yup.string().required('Email or Phone number is required'),
    name: Yup.string().required('Name is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
});

function Register(props) {
    const [error, setError] = useState();
    const [loading, setLoading] = useContext(LoadingContext);
    const router = useRouter();

    const submitRegister = async (values) => {
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

    const signInLink = () => {
        router.push('/auth/login');
    }


    return (
        <>
            <Container maxWidth='sm' component={Paper} sx={{mt: 5, p: 3}}>
                <Typography variant='h4' align='center' color='secondary' sx={{
                    fontWeight: 'bold',
                    marginBottom: '1rem'
                }}>
                    Flash Printer
                </Typography>

                <Box sx={{ mt: 2, textAlign: 'center' }}>
                    <AppErrorMessage error={error} visible={error} />
                </Box>

                <Box sx={{ textAlign: 'center' }}>
                    <FlashOnIcon fontSize='large' color='info' />
                </Box>

                <AppForm
                    initialValues={{username: '', password: '', confirmPassword: '', name: ''}}
                    onSubmit={submitRegister}
                    validationSchema={ValidationSchema}
                >
                    <Box sx={{p: 3}} >

                        <AppFormField
                            backIcon={<PersonIcon color='icon' sx={{mr: 2}}/>}
                            name='username'
                            placeholder='Email or Phone number'
                            variant='standard'
                        />

                        <AppFormField
                            name='name'
                            backIcon={<PersonIcon color='icon' sx={{mr: 2}}/>}
                            placeholder='FullName'
                            variant='standard'
                            />

                        <AppFormField
                            backIcon={<LockIcon color='icon' sx={{mr: 2}}/>}
                            name='password'
                            placeholder='Password'
                            type='password'
                            variant='standard'
                        />

                        <AppFormField
                            backIcon={<LockIcon color='icon' sx={{mr: 2}}/>}
                            name='confirmPassword'
                            placeholder='Confirm Password'
                            type='password'
                            variant='standard'
                        />


                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            mt: 3,
                            mb: 2
                        }}>
                            <AppButton title='Already Registered ? Login Here' onClick={signInLink} />

                        </Box>

                        <Box sx={{textAlign: 'center'}}>
                            <AppSubmitButton title='signup' fullWidth color='success'/>
                        </Box>

                    </Box>

                </AppForm>

            </Container>
        </>
    );
}

export default Register;