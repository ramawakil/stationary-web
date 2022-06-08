import React from 'react';
import * as Yup from "yup";
import AppForm from "./forms/AppForm";
import AppFormField from "./forms/AppFormField";
import AppSubmitButton from "./forms/AppSubmitButton";

const initialValues = {
    name: '',
    description: '',
    grade_level: null,
    year: '',
    class_teacher: '',
}

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    grade_level: Yup.number().required('Required'),
    year: Yup.number().required('Required'),
    class_teacher: Yup.string().required('Required'),
});

function ClassRoomForm({onSubmit}) {
    return (
        <>
            <AppForm
                onSubmit={onSubmit}
                initialValues={initialValues}
                validationSchema={validationSchema}
            >

                <AppFormField
                    name="name"
                    label="Name"
                    type="text"
                    placeholder="Name"
                />

                <AppFormField
                    name="description"
                    label="Description"
                    type="text"
                    multiline
                    rows={4}
                    placeholder="Description"
                />

                <AppFormField
                    name="grade_level"
                    label="Grade Level"
                    type="number"
                    placeholder="Grade Level"
                />

                <AppFormField
                    name="year"
                    label="Year"
                    type="number"
                    placeholder="Year"
                />

                <AppSubmitButton title='Submit'/>

            </AppForm>
        </>
    );
}

export default ClassRoomForm;