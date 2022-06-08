import '../styles/globals.css';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {ThemeProvider} from "@mui/material";
import BaseLayout from "../app/layout/baseLayout";
import theme from "../app/config/theme";
import {SessionProvider} from "next-auth/react";
import AppLoadingScreen from "../app/components/AppLoadingScreen";
import LoadingContext from "../app/context/LoadingContext";
import {useState} from "react";


function MyApp({ Component, session, pageProps }) {
    const [loading, setLoading] = useState(false);

  return (
      <>
        <ThemeProvider theme={theme}>
            {/*<button onClick={notify}>Notify</button>*/}
            <SessionProvider session={session}>
                <LoadingContext.Provider value={{loading, setLoading}}>
            <ToastContainer/>
            <BaseLayout >
              <Component {...pageProps} />
                <AppLoadingScreen loading={loading}/>
            </BaseLayout>
                </LoadingContext.Provider>
            </SessionProvider>
        </ThemeProvider>
      </>
  )
}

export default MyApp
