import Head from 'next/head'
import React, {useContext} from "react";
import lottie from 'lottie-web';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Box, Container, Typography} from "@mui/material";
import loaderAnimation from '../app/animations/loading_printer.json';
import {useEffect} from "react";
import LoadingContext from "../app/context/LoadingContext";
import {useRouter} from "next/router";

export default function Home() {
   const { loading, setLoading } = useContext(LoadingContext);
   const router = useRouter();

   useEffect(() => {
      setLoading(true);
      setTimeout(() =>{
          setLoading(false);
          router.push('/service')
      }, 2000)

      }, []);

    return (
        <>
            <Container maxWidth='md'>
                <Box sx={{
                    mx: 'auto',
                    mt: 10,
                    alignItems: 'center',
                    textAlign: 'center',
                }}>
                    <Typography variant='h3' color='icon' component='h1'>
                            Welcome To The Flast Printer
                    </Typography>
                </Box>

            </Container>
        </>
    )
}
