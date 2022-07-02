import React from 'react';
import {Box, Button} from "@mui/material";

function AppButton({ title, variant, disabled= false, onPress, color, width, ...otherProps }) {
    return (
        <>
            <Box sx={{
                width: width
            }}>
                <Button fullWidth variant={variant} disabled={disabled} onClick={onPress} color={color} {...otherProps} >{title}</Button>

            </Box>

        </>
    );
}

export default AppButton;