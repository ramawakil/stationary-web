import React from "react";
import lottie from 'lottie-web';
import {Box, Toolbar, Typography} from "@mui/material";
import loaderAnimation from '../app/animations/loader.json';
import {useRouter} from "next/router";
import BaseLayoutNavBar from "../app/components/layout/BaseLayoutNavBar";
import UserContext from "../app/context/userContext";
import authApi from "../app/api/auth";



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
        setTimeout(() => {
            fetchUserLive();
        }, 2000);

    }, []);

    const whichUser = async () => {
        // reroute according to label
        if (user.is_pos) {
            await router.push('/pos');
        } else  {
            await router.push('/service');
        }
    }

    const fetchUserLive = async () => {
        try {
            const res = await authApi.fetchUser();
            setUser(res.data);
        } catch (e) {
            await router.push('/login');
        }
    }

    React.useEffect(() => {
        if (user) {
            whichUser();
        }

    }, [user]);


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
