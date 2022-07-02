import React from 'react';
import {Box} from "@mui/material";
import AppText from "../AppText";

function AppErrorMessage({ error, visible, width }) {

    if (!visible || !error) return null;

    return (
        <>
            <Box sx={{
                margin: 1,
                fontSize: '0.8rem',
                width: width,
            }}>
                <AppText color='red' sx={{ fontSize: '12px' }} >{error}</AppText>

            </Box>
        </>
    );
}

export default AppErrorMessage;