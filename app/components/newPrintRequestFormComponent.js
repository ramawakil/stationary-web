import React from 'react';
import AppForm from "./forms/AppForm";
import * as Yup from "yup";


const ValidationSchema = Yup.object().shape({
    file: Yup.string().required('File is required'),
    title: Yup.string().required('Title is required'),
    pages: Yup.number().required('Pages is required'),
    copies: Yup.number().required('Copies is required'),
    price: Yup.string().required('Price is required'),
});


function NewPrintRequestFormComponent(props) {
    const [total_price, setTotal_price] = React.useState(0);

    const handleCreatePrintRequest = (values) => {

    }

    return (
        <>
            <AppForm
                initialValues={{
                    file: '',
                    title: '',
                    pages: 0,
                    copies: 0,
                    price: total_price,
                }}
                validationSchema={ValidationSchema}
                onSubmitForm={handleCreatePrintRequest}
            >


            </AppForm>
        </>
    );
}

export default NewPrintRequestFormComponent;