import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import React, {useState} from "react";
import {Box, ThemeProvider} from "@mui/material";
import theme from "../app/config/theme";
import UserContext from "../app/context/userContext";
import {ToastContainer} from "react-toastify";
import AppLoadingScreen from "../app/components/AppLoadingScreen";
import LoadingContext from "../app/context/loadingContext";
import PrintJobContext from "../app/context/printJobContext";


function MyApp({Component, session, pageProps}) {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [printJob, setPrintJob] = React.useState(null);


    return (
        <>
            <ThemeProvider theme={theme}>
                <UserContext.Provider value={{user, setUser}}>
                    <ToastContainer/>
                    <PrintJobContext.Provider value={{printJob, setPrintJob}}>
                        <LoadingContext.Provider value={{loading, setLoading}}>
                            <Box>
                                <AppLoadingScreen loading={loading}/>
                                <Box>
                                    <Component {...pageProps} />
                                </Box>
                            </Box>
                        </LoadingContext.Provider>
                    </PrintJobContext.Provider>
                </UserContext.Provider>

            </ThemeProvider>

        </>
    )
}

export default MyApp
