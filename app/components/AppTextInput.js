import React from 'react';
import {Box, Input, TextField} from "@mui/material";
import {makeStyles} from "@mui/styles";
import AppErrorMessage from "./forms/AppErrorMessage";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    }
}));

function AppTextInput({
                          BackIcon = null,
                          forwardIcon = null,
                          width = '100%',
                          value,
                          handleChange,
                          label,
                          otherProps
                      }) {
    const classes = useStyles();

    return (
        <Box sx={{my: 1, width: '100%'}}>
            <Box className={classes.root} sx={{width: width}}>
                {BackIcon && (<BackIcon sx={{m: 3, mr: 2}} color='primary'/>)}
                <TextField
                    variant='standard'
                    onChange={(event) => handleChange(event)}
                    value={value}
                    placeholder={label}
                    {...otherProps}
                    fullWidth
                />
                {forwardIcon && forwardIcon}
            </Box>
        </Box>
    );
}

export default AppTextInput;
