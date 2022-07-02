import React from 'react';
import {Box} from "@mui/material";
import {useFormikContext} from "formik";
import AppSelectInput from "../AppSelectInput";
import AppErrorMessage from "./AppErrorMessage";

function AppFormSelectField({name, label, choices, ...otherProps}) {
    const {setFieldTouched, values, setFieldValue, errors, touched} = useFormikContext();


    return (
        <>
            <Box sx={{}}>
                <AppSelectInput
                    choices={choices}
                    label={label}
                    value={values[name]}
                    {...otherProps}
                    onBlur={() => setFieldTouched(name)}
                    setValue={(val) => setFieldValue(name, val)}
                />
                <AppErrorMessage error={errors[name]} visible={touched[name]} sx={{mt: 1}}/>
            </Box>
        </>
    );
}

export default AppFormSelectField;