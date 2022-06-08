import React from 'react';
import AppButton from "../AppButton";
import {useFormikContext} from "formik";
import {Button, IconButton} from "@mui/material";
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

function AppSubmitButton({title, icon, ...props }) {
    const { handleSubmit } = useFormikContext();

    if (icon) return (
        <IconButton onClick={handleSubmit}>
            <ArrowCircleRightOutlinedIcon color='primary' />
        </IconButton>
    );

    return (
        <AppButton onClick={handleSubmit}  variant='contained' {...props} title={title} />
    );
}

export default AppSubmitButton;