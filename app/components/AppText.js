import React from 'react';
import {Box, Typography} from "@mui/material";

function AppText({ variant, children, width = '100%', ...otherProps }) {
    return (
        <>
            <Box sx={{
                width: width
            }}>
                <Typography {...otherProps} variant={variant}>
                    {children}
                </Typography>

            </Box>
        </>
    );
}

export default AppText;