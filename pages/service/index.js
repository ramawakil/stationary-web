import React, {useContext, useEffect} from 'react';
import CustomerDashboardLayout from "../../app/components/layout/component/customerDashboardLayout";
import AppTable from "../../app/components/commons/AppTable";
import customersApi from "../../app/api/customers";
import {toast} from "react-toastify";
import LoadingContext from "../../app/context/loadingContext";
import AppDialogue from "../../app/components/AppDialogue";
import NewPrintRequestFormComponent from "../../app/components/newPrintRequestFormComponent";
import {Box} from "@mui/material";
import AppTextInput from "../../app/components/AppTextInput";
import AppButton from "../../app/components/AppButton";
import UserContext from "../../app/context/userContext";
import CustomerPrintJob from "../../app/components/customerPrintJob";


const changeStatus = (status) => {
    switch (status) {
        case 1:
            return 'Pending payment';
        case 2:
            return 'Printing';
        case 3:
            return 'Waiting pickup';
    }
}

const Columns = [
    {field: 'print_code', headerName: 'Print Code', flex: 1},
    {field: 'title', headerName: 'Title', flex: 1},
    {field: 'pages', headerName: 'Pages', flex: 1},
    {field: 'copies', headerName: 'Copies', flex: 1},
    {field: 'total_price', headerName: 'Price (Tsh)', flex: 1},
    {field: 'created_at', headerName: 'Created At', flex: 1},
    {
        field: 'status', headerName: 'Actions',
        valueGetter: (params) => `${changeStatus(params.row.status)}`
        , flex: 1
    },
]

function Index(props) {
    const {user, setUser} = useContext(UserContext);
    const [open, setOpen] = React.useState(false);
    const [documents, setDocuments] = React.useState([]);
    const {setLoading} = useContext(LoadingContext);
    const [printJob, setPrintJob] = React.useState(null);
    const [openDialog, setOpenDialog] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleSearchPrintJob  = () => {
        console.log('ok');
    }

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpenDialogue = () => {
        setOpenDialog(true);
    }

    const handleCloseDialog = () => {
        setOpenDialog(false);
    }


    const handleGoToDetails = (val) => {
        toast(`${val.row.print_code}`)
    }


    const handleFetchPrintJobs = async () => {
        setLoading(true);
        try {
            const res = await customersApi.getPrintJobs();
            setLoading(false);
            setDocuments(res.data);
        } catch (e) {
            setLoading(false);
            console.log(e)
            toast.error(e.response.data.detail);
        }

    }

    useEffect(() => {
        handleFetchPrintJobs();
    }, []);

    useEffect(() => {
        handleFetchPrintJobs();
    }, [openDialog]);


    return (
        <>
            <CustomerDashboardLayout>
                <Box sx={{
                    mt: 2,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                    <Box sx={{flex: 0.5}}>
                        {/*{!user && <AppTextInput value={printJob} setValue={setPrintJob}*/}
                        {/*                        label='Enter print job control code'/>}*/}
                    </Box>
                    <Box sx={{flex: 0.18}}>
                        {/*{!user &&*/}
                        {/*    <AppButton onPress={handleSearchPrintJob} title='Search' variant='outlined' color='info'/>}*/}
                    </Box>
                    <Box sx={{flex: 0.28}}>
                        <AppButton onPress={handleOpenDialogue} title='Add new print request' variant='outlined'
                                   color='success'/>
                    </Box>

                </Box>
                <AppTable data={documents} columns={Columns} onClickEvent={(val) => handleGoToDetails(val)}/>
                <AppDialogue title='New Print Request' open={openDialog} handleCloseDialog={handleCloseDialog}>
                    <NewPrintRequestFormComponent closeDialog={handleCloseDialog}/>
                </AppDialogue>
            </CustomerDashboardLayout>

        </>
    );
}

export default Index;