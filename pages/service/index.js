import React, {useContext, useEffect} from 'react';
import CustomerDashboardLayout from "../../app/components/layout/component/customerDashboardLayout";
import AppTable from "../../app/components/commons/AppTable";
import {useRouter} from "next/router";
import customersApi from "../../app/api/customers";
import {toast} from "react-toastify";
import LoadingContext from "../../app/context/loadingContext";


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
    {field: 'print_code', headerName: 'Print Code', flex: 1},
    {field: 'title', headerName: 'Title', flex: 1},
    {field: 'pages', headerName: 'Pages', flex: 1},
    {field: 'copies', headerName: 'Copies', flex: 1},
    {field: 'price', headerName: 'Price', flex: 1},
    {field: 'created_at', headerName: 'Created At', flex: 1},
    {field: 'actions', headerName: 'Actions', flex: 1},
]

function Index(props) {
    const [open, setOpen] = React.useState(false);
    const [documents, setDocuments] = React.useState(Documents);
    const router = useRouter();
    const { setLoading } = useContext(LoadingContext);

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

    const handleGoToDetails = (val) => {
        router.push(`/service/${val.id}`)
    }

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

    const handleFetchPrintJobs = async () => {
        setLoading(true);
        try {
            const res = await customersApi.getPrintJobs();
            setLoading(false);
            setDocuments(res.data);
        }
        catch (e) {
            setLoading(false);
            toast.error(e.response.data.detail);
        }

    }

    useEffect(() => {
        handleFetchPrintJobs();
    }, []);


    return (
        <>
            <CustomerDashboardLayout>
                <AppTable data={documents} columns={Columns} onClickEvent={(val) => handleGoToDetails(val)}/>
            </CustomerDashboardLayout>

        </>
    );
}

export default Index;