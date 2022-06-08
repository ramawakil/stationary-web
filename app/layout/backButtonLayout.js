import React from 'react';
import {Box, IconButton, Stack, Typography} from "@mui/material";
import {useRouter} from "next/router";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";


function BackButtonLayout({children, title}) {
    const router = useRouter();

    return (
        <>
           <Stack direction='row' spacing={5} sx={{alignContent: 'center' }}>
                <IconButton onClick={() => router.back()}>
                    <ArrowBackIosIcon/>
                </IconButton>
                    <Typography sx={{ alignSelf: 'center', fontWeight: 'bold' }} color='icon' variant='subtitle1'>{title}</Typography>
           </Stack>
            <Box>
                {children}
            </Box>

        </>
    );
}

export default BackButtonLayout;
