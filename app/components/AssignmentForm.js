import React from 'react';
import AppForm from "./forms/AppForm";
import * as Yup from "yup";
import AppFormField from "./forms/AppFormField";
import AppSubmitButton from "./forms/AppSubmitButton";

const initialValues = {
    title: '',
    description: '',
    due_date: '',
    file: '',
};

const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    due_date: Yup.string().required('Date is required'),
    file: Yup.string().required('File is required'),
});

function AssignmentForm({onSubmit}) {
    return (
        <>
            <AppForm
                onSubmit={onSubmit}
                initialValues={initialValues}
                validationSchema={validationSchema}
            >

                <AppFormField
                    name="title"
                    label="Title"
                    type="text"
                    placeholder="Enter title"
                />

                <AppFormField
                    name="description"
                    label="Description"
                    type="text"
                    multiline
                    rows={5}
                    placeholder="Enter description"
                />

                <AppFormField
                    name="due_date"
                    type="date"
                    label="Due Date"
                    placeholder="Enter date"
                />

                <AppFormField
                    name="file"
                    type="file"
                    placeholder="Enter file"
                />

                <AppSubmitButton title='Submit' />

            </AppForm>
        </>
    );
}

export default AssignmentForm;