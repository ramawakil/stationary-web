import React from "react";
import lottie from 'lottie-web';
import {Box, Toolbar, Typography} from "@mui/material";
import loaderAnimation from '../app/animations/loader.json';
import {useRouter} from "next/router";
import BaseLayoutNavBar from "../app/components/layout/BaseLayoutNavBar";
import UserContext from "../app/context/userContext";



export default function Home() {
    const {user, setUser} = React.useContext(UserContext);
    const anime = React.useRef(null);
    const router = useRouter();


    React.useEffect(() => {
        // initialize animation
        lottie.loadAnimation({
            container: anime.current,
            renderer: 'html',
            loop: true,
            autoplay: true,
            animationData: loaderAnimation,
        });
        // wait until animation finished
        // setTimeout(() => {
        //     fetchUser();
        // }, 4000);

    }, []);

    const fetchUser = async () => {
        if (user) {
            await router.push('/customers');
        } else {
            await router.push('/login');
        }
    }

    const fetchUserLive = async () => {

    }


    return (
        <>
            <BaseLayoutNavBar>
                <Box sx={{

                    alignItems: 'center',
                    textAlign: 'center',
                }}>
                    <Box sx={{
                        width: '100%',
                        height: '500px'
                    }} component='div' ref={anime}></Box>
                </Box>
                <Typography sx={{  }} variant='subtitle1' gutterBottom textAlign='center'>
                    Synchronization on progress ...
                </Typography>
            </BaseLayoutNavBar>
        </>
    )
}
