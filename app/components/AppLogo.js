import React from 'react';
import {Box} from "@mui/material";
import AppText from "./AppText";

function AppLogo({ appTitle, imageUrl, imageAlt='App alt', width='100px', height='100px', subtitle }) {
    return (
        <>
            <Box sx={{
                textAlign: 'center'
            }}>
                { appTitle && (
                    <AppText variant='h5' sx={{ fontWeight: 'bold' }} color='primary'>
                        {appTitle}
                    </AppText>
                ) }

                <Box>
                    <img src={imageUrl} alt={imageAlt} width={width} height={height} />
                </Box>
                { subtitle && (
                    <AppText variant='subtitle' color='secondary'>
                        {subtitle}
                    </AppText>
                ) }

            </Box>
        </>
    );
}

export default AppLogo;