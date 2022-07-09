import React, {useContext} from 'react';
import AppForm from "./forms/AppForm";
import * as Yup from "yup";
import {Box} from "@mui/material";
import AppFormImagePicker from "./forms/AppFormImagePicker";
import AppFormField from "./forms/AppFormField";
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import AppText from "./AppText";
import AppSubmitButton from "./forms/AppSubmitButton";
import AppButton from "./AppButton";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import customersApi from "../api/customers";
import LoadingContext from "../context/loadingContext";
import {toast} from "react-toastify";
import {useRouter} from "next/router";


const ValidationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string().label('Description'),
    pages: Yup.number().required('Pages is required'),
    copies: Yup.number().required('Copies is required'),
});


function NewPrintRequestFormComponent({ closeDialog }) {
    const [total_price, setTotal_price] = React.useState(0);
    const [printRequest, setPrintRequest] = React.useState(null);
    const { setLoading } = useContext(LoadingContext);
    const router = useRouter();

    const handleCreatePrintRequest = async () => {
        setLoading(true);
        console.log(printRequest);
        try {
            await customersApi.createPrintJob({
                title: printRequest.title,
                description: printRequest.description,
                total_price: total_price,
                pages: printRequest.pages,
                copies: printRequest.copies,
            })
            setLoading(false);
            closeDialog();
        }
        catch (e) {
            setLoading(false);
            console.log(e);
            toast.error(e);
        }

    }

    const calculateTotalPrice = (values) => {
        const total = values.pages * values.copies * 50.00;
        setTotal_price(total);
        setPrintRequest(values);
    }

    return (
        <>
            <AppForm
                initialValues={{
                    title: '',
                    description: '',
                    pages: 1,
                    copies: 1,
                }}
                validationSchema={ValidationSchema}
                onSubmit={calculateTotalPrice}
            >
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                   <Box>

                       <AppFormField
                           name='title'
                           label='File Title'
                           type='text'
                       />

                       <AppFormField
                           name='description'
                            label='Description'
                            type='text'
                           multiline
                            rows={4}
                           variant='outlined'
                           />

                   </Box>
                    <Box sx={{}}>

                        <AppFormField
                            name='pages'
                            label='Pages'
                            type='number'
                            />

                        <AppFormField
                            name='copies'
                            label='Copies'
                            type='number'
                            />

                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}>
                            <PointOfSaleIcon color='info' /> <AppText sx={{ ml: 2 }}>Total price: {total_price}</AppText>
                        </Box>
                        <AppSubmitButton color='info' sx={{ mt: 2 }} title='Calculate price' variant='outlined' />
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                    }}>

                        <div></div>
                        <Box sx={{
                        }}>
                            <AppButton endIcon={<DoubleArrowIcon/>} color='success' onPress={handleCreatePrintRequest} variant='contained' title='Send Request' />
                        </Box>
                    </Box>
                </Box>


            </AppForm>
        </>
    );
}

export default NewPrintRequestFormComponent;