import React, {useContext, useEffect, useState} from 'react';
import PosDashboardDetail from "../../app/components/layout/posDashboardDetail";
import AppText from "../../app/components/AppText";
import {Box, InputAdornment} from "@mui/material";
import AppForm from "../../app/components/forms/AppForm";
import * as Yup from "yup";
import AppFormField from "../../app/components/forms/AppFormField";
import AppSubmitButton from "../../app/components/forms/AppSubmitButton";
import DoubleArrowOutlinedIcon from '@mui/icons-material/DoubleArrowOutlined';
import AppTable from "../../app/components/commons/AppTable";
import customersApi from "../../app/api/customers";
import {toast} from "react-toastify";
import LoadingContext from "../../app/context/loadingContext";


const ValidationSchema = Yup.object().shape({
    page_price: Yup.number().label('Page Price').required('Page Price is required')
});


const Columns = [
    {field: 'print_code', headerName: 'Print Code', flex: 1},
    {field: 'title', headerName: 'Title', flex: 1},
    {field: 'total_price', headerName: 'Price (Tsh)', flex: 1},
    {field: 'created_at', headerName: 'Created At', flex: 1},
]

function Config(props) {
    const [openDialog, setOpenDialog] = React.useState(false);
    const [documents, setDocuments] = useState([]);
    const {setLoading} = useContext(LoadingContext);


    const submitPagePrice = (values) => {

    }

    const handleFetchPrintJobs = async () => {
        setLoading(true);
        try {
            const res = await customersApi.getPrintJobs();
            setLoading(false);
            setDocuments(res.data);
        } catch (e) {
            setLoading(false);
            toast.error(e.response.data.detail);
        }

    }

    useEffect(() => {
        handleFetchPrintJobs();
    }, []);


    return (
        <>
            <PosDashboardDetail>
                <Box>
                    <AppText sx={{p: 3}} variant='h4'>Configurations page</AppText>
                    <AppForm
                        initialValues={{page_price: 50}}
                        validationSchema={ValidationSchema}
                        onSubmit={submitPagePrice}
                    >
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                        }}>
                            <AppFormField
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="end" sx={{cursor: 'pointer', mr: 2}}>
                                            Tsh
                                        </InputAdornment>
                                    ),
                                }}
                                name='page_price'
                                label='Page Price'
                                type='number'
                            />

                            <AppSubmitButton sx={{ml: 2}} title='Set new Price' variant='outlined'
                                             endIcon={<DoubleArrowOutlinedIcon/>}/>
                        </Box>

                    </AppForm>
                </Box>
                <AppTable onClickEvent={null} columns={Columns} data={documents}/>
            </PosDashboardDetail>
        </>
    );
}

export default Config;