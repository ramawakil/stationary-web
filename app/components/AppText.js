import React from 'react';
import {Typography} from "@mui/material";

function AppText({ variant, children, ...props }) {
    return (
        <Typography sx={{ width: '100%' }} {...props}>
            {children}
        </Typography>
    );
}

export default AppText;