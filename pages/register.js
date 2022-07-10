import React, {useContext} from 'react';
import * as Yup from 'yup';
import BaseLayoutNavBar from "../app/components/layout/BaseLayoutNavBar";
import {Box, Container, InputAdornment, Paper} from "@mui/material";
import AppForm from "../app/components/forms/AppForm";
import AppFormField from "../app/components/forms/AppFormField";
import AppLogo from "../app/components/AppLogo";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import AppSubmitButton from "../app/components/forms/AppSubmitButton";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import AppButton from "../app/components/AppButton";
import {useRouter} from "next/router";
import AppConfig from "../app/appConfig.json";
import LoadingContext from "../app/context/loadingContext";
import authApi from "../app/api/auth";
import {toast} from "react-toastify";


const ValidationSchema = Yup.object().shape({
    fullName: Yup.string().required('Full name is required'),
    username: Yup.string().required('Email or Phone number is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
});


function Register(props) {
    const [passwordVisible, setPasswordVisible] = React.useState(false);
    const router = useRouter();
    const { setLoading } = useContext(LoadingContext);

    const handleSubmit = async (values) => {
        setLoading(true);
        try {
            await authApi.register({
                username: values.username,
                first_name: values.fullName.toString().split(" ")[0],
                last_name: values.fullName.toString().split(" ")[1],
                password: values.password
            })
            toast('Account created successfully!')
            setLoading(false);
            await router.push('/login');
        }
        catch (e) {
            setLoading(false);
            toast.error(e);
        }
    }

    const handleShowPassword = () => {
        setPasswordVisible(!passwordVisible);
    }

    const handleGoToLogin = () => {
        router.push('/login')
    }

    return (
        <>
            <BaseLayoutNavBar>
                <Container maxWidth='sm' sx={{ mt: 15, p:2  }} component={Paper}>
                    <Box>
                        <AppLogo imageUrl='/printer1.png' appTitle={AppConfig.appName} subtitle='Complete the form to Register..' />
                    </Box>
                    <AppForm
                        initialValues={{
                            fullName: '',
                            username: '',
                            password: '',
                            confirmPassword: '',
                        }}
                        validationSchema={ValidationSchema}
                        onSubmit={handleSubmit}
                    >

                        <AppFormField
                            name='fullName'
                            label='Full Name'
                            type='text'
                        />

                        <AppFormField
                            name='username'
                            label='Email or Phone Number'
                            type='text'
                        />

                        <AppFormField
                            name='password'
                            label='Password'
                            type={`${passwordVisible ? 'text' : 'password'}`}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end" sx={{ cursor: 'pointer' }}>
                                        {passwordVisible ? <VisibilityOffIcon onClick={handleShowPassword} /> : <RemoveRedEyeIcon onClick={handleShowPassword} />}
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <AppFormField
                            name='confirmPassword'
                            label='Confirm Password'
                            type={`${passwordVisible ? 'text' : 'password'}`}

                        />
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                            <Box>
                                <AppButton sx={{ textTransform: 'none' }} title='Already have an Account? Login here.' onPress={handleGoToLogin} />
                            </Box>
                            <Box sx={{ flex: 0.4 }}>

                                <AppSubmitButton  title='register' variant='contained' color='success' endIcon={<DoubleArrowIcon />} />
                            </Box>
                        </Box>



                    </AppForm>
                </Container>
            </BaseLayoutNavBar>
        </>
    );
}

export default Register;