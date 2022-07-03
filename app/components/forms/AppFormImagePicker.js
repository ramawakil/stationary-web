import React from 'react';
import {useFormikContext} from "formik";
import AppErrorMessage from "./AppErrorMessage";
import {Box} from "@mui/material";
import FileBase64 from 'react-file-base64';


function AppFormImagePicker({name, width = '150px', height = '150px', ...otherProps}) {
    const {setFieldTouched, values, setFieldValue, errors, touched} = useFormikContext();


    const handleChange = (event) => {
        let files = event.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = (e) => {
            setFieldValue(name, e.target.result);
        }
    }

    return (
        <>
            <Box sx={{
                display: 'flex',
                flexGrow: 0,
                flexDirection: 'column',
            }}>
                <FileBase64
                    multiple={false}
                    onDone={({base64}) => setFieldValue(name, base64)}/>
                {/*<input type='file' onChange={(e) => handleChange(e)} fullWidth={false} />*/}
                {values[name] && (
                    <Box sx={{mt: 1}}>
                        <img src={values[name]} width={width} height={height}/>
                    </Box>
                )}
            </Box>
            <AppErrorMessage error={errors[name]} visible={touched[name]} sx={{mt: 1}}/>
        </>
    );
}

export default AppFormImagePicker;