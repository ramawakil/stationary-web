import React from 'react';
import {useFormikContext} from "formik";
import {makeStyles} from "@mui/styles";
import {Box, TextareaAutosize} from "@mui/material";
import AppErrorMessage from "./AppErrorMessage";


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexGrow: 1,
        overflow: 'hidden',
    }
}));


function AppFormTextArea({ name, width = '100%', ...otherProps }) {

    const {setFieldTouched, values, setFieldValue, setValues, errors, touched} = useFormikContext();
    const classes = useStyles();

    const onChange = (event) => {
        setFieldValue(name, event.target.value);
    };

    return (
        <>
            <Box sx={{ my: 1, width: 200 }} >
                <Box className={classes.root} sx={{width: width}}>
                    <TextareaAutosize
                        style={{width: '100%'}}
                        onBlur={() => setFieldTouched(name)}
                        onChange={(event) => onChange(event)}
                        value={values[name]}
                        error={errors[name] && touched[name]}
                        {...otherProps}
                        sx={{ mx: 2, mt: 2 }}
                        {...otherProps}
                        fullWidth
                    />
                </Box>
                <AppErrorMessage width={width} error={errors[name]} visible={touched[name]} />
            </Box>
        </>
    );
}

export default AppFormTextArea;