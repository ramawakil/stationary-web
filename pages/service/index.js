import React from 'react';
import * as Yup from "yup";
import CustomerDashboardLayout from "../../app/components/layout/component/customerDashboardLayout";


const Documents = [
    {
        id: 1,
        title: 'FYP Report Sem 1',
        pages: '10',
        copies: '2',
        price: 'Tsh 100',
        created_at: 'One day ago',
        actions: 'Waiting pickup'
    }
]

const ValidationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    pages: Yup.string().required('Pages is required'),
    copies: Yup.string().required('Copies is required'),
    price: Yup.string().required('Price is required'),
});


function Index(props) {
    const [open, setOpen] = React.useState(false);
    const [documents, setDocuments] = React.useState(Documents);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = () => {
        setDocuments(documents.filter(doc => doc.id !== document.id));
        handleClose();
    };

    const handleSubmit = (values) => {
        const obj = {
            id: documents.length + 1,
            created_at: 'Moment ago',
            actions: 'Pending',
            ...values
        }
        setDocuments(documents.concat(obj));
        handleClose();
    };

    return (
        <>
            <CustomerDashboardLayout>


            </CustomerDashboardLayout>

        </>
    );
}

export default Index;