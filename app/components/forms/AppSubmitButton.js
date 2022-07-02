import React from 'react';
import {Box} from "@mui/material";
import AppButton from "../AppButton";
import {useFormikContext} from "formik";

function AppSubmitButton({title, ...otherProps}) {
    const {handleSubmit} = useFormikContext();
    
    return (
        <>
            <Box>
                <AppButton title={title} onPress={handleSubmit} {...otherProps} />
            </Box>
        </>
    );
}

export default AppSubmitButton;