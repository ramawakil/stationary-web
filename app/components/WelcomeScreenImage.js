import React from 'react';
import {Box, Typography} from "@mui/material";
import Image from "next/image";
import {makeStyles} from "@mui/styles";


const useStyles = makeStyles(theme => ({
    title: {
        fontWeight: "bold",
        marginBottom: theme.spacing(2),
        color: theme.palette.secondary.text,
    },

}));

function WelcomeScreenImage(props) {
    const classes = useStyles();

    return (
        <>
            <Box sx={{ textAlign: 'center' }}>
                <img src="/printer.png" alt="Welcome Screen" width='150' />
            </Box>
            <Box sx={{mt: 2, mb: 3}}>
                <Typography
                    variant="h5"
                    component="div"
                    gutterBottom
                    className={classes.title}
                >
                    Sign in to To start printing
                </Typography>
            </Box>
        </>
    );
}

export default WelcomeScreenImage;