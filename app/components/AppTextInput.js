import React from 'react';
import {Box, TextField} from "@mui/material";

function AppTextInput({backIcon = null, forwardIcon = null, width = '100%', label, value, setValue, ...otherProps}) {

    return (<>
        <Box sx={{
            display: 'flex',
            flexGrow: 1,
            borderRadius: 4,
            alignItems: 'center',
            overflow: 'hidden',
            width: width,
        }}>
            {backIcon && backIcon}
            <TextField helperText={label} variant='standard' value={value} placeholder={label} fullWidth sx={{ px: 1 }} onChange={(e) => setValue(e.target.value)} {...otherProps} />
            { forwardIcon && forwardIcon }
        </Box>
    </>);
}

export default AppTextInput;