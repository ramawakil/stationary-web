import React from 'react';
import {Card, CardActions, CardContent, CardHeader, Divider, Paper, Typography} from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AppButton from "./AppButton";
import {makeStyles} from "@mui/styles";


const useStyles = makeStyles(theme => ({
    root: {

    },
    card: {
    },
    cardAction: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardBody:{
        padding: theme.spacing(2),
        textAlign: 'center',
    },
}));

function AppCard({ avatar, title, subtitle, description, action, actionTitle, }) {
    const classes = useStyles();

    return (
        <Paper elevation={5} className={classes.root} >
            <Card className={classes.card}>
                <CardHeader
                    avatar={avatar}
                    title={title}
                    subheader={subtitle}
                />
                <Divider />
                <CardContent className={classes.cardBody} >
                    <Typography variant='body2' color='text.secondary'>
                        {description}
                    </Typography>
                </CardContent>
                <CardActions className={classes.cardAction}>
                    <AppButton variant='contained' title={actionTitle} onClick={action} />
                </CardActions>
            </Card>
        </Paper>
    );
}

export default AppCard;