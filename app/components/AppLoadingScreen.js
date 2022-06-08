import React, {useEffect} from 'react';
import {Backdrop, Box, CircularProgress, Typography} from "@mui/material";
import lottie from "lottie-web";
import loaderAnimation from "../animations/loading_printer.json";

function AppLoadingScreen({loading, setLoading}) {
    const anime = React.useRef(null);


    useEffect(() => {
        // initialize animation
        lottie.loadAnimation({
            container: anime.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: loaderAnimation,
        });
    }, []);

    const handleToggle = () => {
        setLoading(!loading);
    }

    return (
        <>
            <div>
                {/*<Button onClick={handleToggle}>Show backdrop</Button>*/}
                <Backdrop
                    sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                    open={loading}
                >
                    <Box sx={{
                        alignItems: 'center',
                        textAlign: 'center',
                    }}>
                        <Box sx={{
                            mx: 'auto',
                            width: '40%',
                        }}>
                            <div ref={anime}></div>
                        </Box>
                        <CircularProgress />
                        <Typography sx={{mt: 2}} color='info.light' variant='subtitle1' gutterBottom textAlign='center'>
                            Please wait while Loading
                        </Typography>
                    </Box>

                </Backdrop>
            </div>
        </>
    );
}

export default AppLoadingScreen;