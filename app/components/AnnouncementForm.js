import React from 'react';
import AppForm from "./forms/AppForm";
import * as Yup from "yup";
import AppFormField from "./forms/AppFormField";
import AppSubmitButton from "./forms/AppSubmitButton";


const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    date: Yup.date().required('Date is required'),
    due_date: Yup.date().required('Due date is required'),
    file: Yup.mixed()

})


function AnnouncementForm({onSubmit, initialValues}) {
    return (
        <div>
            <AppForm
                onSubmit={onSubmit}
                initialValues={initialValues}
                validationSchema={validationSchema}>

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
                    name="date"
                    label="Date"
                    type="date"
                    placeholder="Enter date"
                />

                <AppFormField
                    name="due_date"
                    label="Due date"
                    type="date"
                    placeholder="Enter due date"
                />

                <AppFormField
                    name="file"
                    type="file"
                    placeholder="Enter file"
                />

                <AppSubmitButton title="Submit" size='large'/>

            </AppForm>
        </div>
    );
}

export default AnnouncementForm;