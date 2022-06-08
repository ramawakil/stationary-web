import React from 'react';
import AppText from "../AppText";
import {makeStyles} from "@mui/styles";


const useStyles = makeStyles(theme => ({
    root: {
        marginX: theme.spacing(1),
        color: theme.palette.error.main,
        fontSize: '0.8rem',
    },
}));

function AppErrorMessage({error, visible, width}) {
    const classes = useStyles();

    if (!visible || !error) return null;

    return (
        <AppText className={classes.root} sx={{ width: width, marginLeft: 11, mt: 0 }} >{error}</AppText>
    );
}

export default AppErrorMessage;
