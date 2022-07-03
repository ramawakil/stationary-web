import React from 'react';
import * as Yup from "yup";
import CustomerDashboardLayout from "../../app/components/layout/component/customerDashboardLayout";
import AppTable from "../../app/components/commons/AppTable";


const Documents = [
    {
        id: 1,
        printCode: '098et1',
        title: 'FYP Report Sem 1',
        pages: '10',
        copies: '2',
        price: 'Tsh 100',
        created_at: 'One day ago',
        actions: 'Waiting pickup'
    }
]

const Columns = [
    { field: 'printCode', headerName: 'Print Code', flex: 1 },
    { field: 'title', headerName: 'Title', flex: 1 },
    { field: 'pages', headerName: 'Pages', flex: 1 },
    { field: 'copies', headerName: 'Copies', flex: 1 },
    { field: 'price', headerName: 'Price', flex: 1 },
    { field: 'created_at', headerName: 'Created At', flex: 1 },
    { field: 'actions', headerName: 'Actions', flex: 1 },
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
                <AppTable data={documents} columns={Columns} />
            </CustomerDashboardLayout>

        </>
    );
}

export default Index;