import React from 'react';
import * as Yup from "yup";
import AppForm from "./forms/AppForm";
import AppFormField from "./forms/AppFormField";

const initialValues = {
    title: '',
    education_level: '',
    description: '',
    published: false,
    published_date: '',
    publisher: '',
    file: null,
}

const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    education_level: Yup.string().required('Education level is required'),
    description: Yup.string().required('Description is required'),
    published: Yup.boolean().required('Published is required'),
    published_date: Yup.string().required('Published date is required'),
    publisher: Yup.string().required('Publisher is required'),
    file: Yup.mixed().required('File is required'),
});


function ExamResultsForm({onSubmit}) {
    return (
        <>

            <AppForm
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <AppFormField
                    name="title"
                    label="Title"
                    type="text"
                    placeholder="Enter title"
                />

                <AppFormField
                    name="education_level"
                    label="Education level"
                    type="text"
                    placeholder="Enter education level"
                />

                <AppFormField
                    name="description"
                    label="Description"
                    type="text"
                    placeholder="Enter description"
                />

                <AppFormField
                    name="published"
                    label="Published"
                    type="checkbox"
                />

                <AppFormField
                    name="published_date"
                    label="Published date"
                    type="date"
                />

                <AppFormField
                    name="publisher"
                    label="Publisher"
                    type="text"
                    placeholder="Enter publisher"
                />

                <AppFormField
                    name="file"
                    label="File"
                    type="file"
                />

            </AppForm>

        </>
    );
}

export default ExamResultsForm;