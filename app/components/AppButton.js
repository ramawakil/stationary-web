import React from 'react';
import {Box, Button} from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(({
    btn: {
        textAlign: 'center',
    },
}))

function AppButton({ title, variant, disabled = false, onClick, color, ...otherProps }) {
    const classes = useStyles();

    return (
        <Box sx={{ textAlign: 'center' }}>
            <Button fullWidth variant={variant} disabled={disabled} onClick={onClick} color={color} {...otherProps} >{title}</Button>
        </Box>

    );
}

export default AppButton;
