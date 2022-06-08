import React from 'react';
import AppForm from "./forms/AppForm";
import * as Yup from "yup";
import AppFormField from "./forms/AppFormField";
import {Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import AppSubmitButton from "./forms/AppSubmitButton";


const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    active: Yup.boolean().required('Status is required')
})

const initialValues = {
    title: '',
    active: false
}


function EducationLevelForm({onSubmit}) {
    return (
        <>
            <AppForm
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >

                <AppFormField
                    name='title'
                    label='Title'
                    placeholder='Secondary or Primary'
                    type='text'
                />

                <Box sx={{mx: 5, my: 2}}>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Operational Status of Education Level</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="0"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="1" control={<Radio/>} label="Active"/>
                            <FormControlLabel value="0" control={<Radio/>} label="Not Active"/>

                        </RadioGroup>
                    </FormControl>
                </Box>

                <AppSubmitButton title='Submit'/>

            </AppForm>
        </>
    );
}

export default EducationLevelForm;