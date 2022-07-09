import React, {useEffect, useState} from 'react';
import CustomerDashboardDetailPages from "../../app/components/layout/component/customerDashboardDetailPages";
import {useRouter} from "next/router";
import customersApi from "../../app/api/customers";
import {toast} from "react-toastify";
import {Box, Divider, Paper, Stack, Tooltip} from "@mui/material";
import AppText from "../../app/components/AppText";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import AppIconButton from "../../app/components/AppIconButton";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import AppTextInput from "../../app/components/AppTextInput";
import AppButton from "../../app/components/AppButton";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";

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


function PrintRequestDetail(props) {
    const router = useRouter();
    const [printJob, setPrint] = useState(null);
    const [confirmCode, setConfirmCode] = React.useState('');

    const handleConfirmPayment = () => {
        console.log('confirm payment');
    }


    const fetchPrintRequest = async (id) => {

        try {
            const res = await customersApi.getPrintJob(id);
            setPrint(res.data);
        } catch (e) {
            toast.error(e.response.data.message);
        }
    }

    useEffect(() => {
        const id = router.query.id;
        fetchPrintRequest(id);
        console.log(print);
    }, []);


    return (
        <>
            <CustomerDashboardDetailPages>
                {JSON.stringify(printJob?.id)}
            </CustomerDashboardDetailPages>
        </>
    );
}

export default PrintRequestDetail;