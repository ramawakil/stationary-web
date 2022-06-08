import React from 'react';
import {Box} from "@mui/material";
import {makeStyles} from "@mui/styles";


const useStyles = makeStyles(theme => ({

}));

function AppScreen({ children }) {
    const classes = useStyles();

    return (
        <Box >
            {children}
        </Box>
    );
}

export default AppScreen;