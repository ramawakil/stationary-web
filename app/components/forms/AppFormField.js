import React from 'react';
import {Box} from "@mui/material";
import AppTextInput from "../AppTextInput";
import {useFormikContext} from "formik";
import AppErrorMessage from "./AppErrorMessage";

function AppFormField({name, ...otherProps}) {
    const {setFieldTouched, values, setFieldValue, errors, touched} = useFormikContext();


    return (
        <>
            <Box sx={{
                overflow: 'hidden',
                marginY: 2,
            }}>
                <AppTextInput
                    value={values[name]}
                    {...otherProps}
                    error={errors[name] && touched[name]}
                    onBlur={() => setFieldTouched(name)}
                    setValue={(val) => setFieldValue(name, val)}
                />
                <AppErrorMessage error={errors[name]} visible={touched[name]} sx={{mt: 1}}/>
            </Box>
        </>
    );
}

export default AppFormField;