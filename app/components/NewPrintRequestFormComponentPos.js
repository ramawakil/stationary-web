import React, { useRef } from 'react';
import AppForm from "./forms/AppForm";
import {Box, Divider} from "@mui/material";
import AppFormImagePicker from "./forms/AppFormImagePicker";
import AppFormField from "./forms/AppFormField";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import AppText from "./AppText";
import AppSubmitButton from "./forms/AppSubmitButton";
import AppButton from "./AppButton";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import * as Yup from "yup";
import { jsPDF } from 'jspdf';



const ValidationSchema = Yup.object().shape({
    file: Yup.string().required('File is required'),
});

function NewPrintRequestFormComponentPos(props) {
    const pdfRef = useRef(null);


    const handleCreatePrintRequest = (values) => {

    }

    const printDocument = (values) => {
        let doc = new jsPDF();
        doc.loadFile(values.file);
        doc.save('print.pdf');
    }

    return (
        <>
            <AppForm
                initialValues={{
                    file: '',
                }}
                validationSchema={ValidationSchema}
                onSubmit={printDocument}
            >
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                }}>
                    <Box>
                        <AppFormImagePicker
                            name='file'
                        />

                        <AppText sx={{ mt: 2 }}>Title</AppText>
                        <Divider sx={{ marginY: 1 }} />

                    </Box>
                    <Box sx={{}}>

                        <AppText sx={{ mt: 2 }}>23 Pages</AppText>
                        <Divider sx={{ marginY: 1 }} />

                        <AppText sx={{ mt: 2 }}>2 Copies</AppText>
                        <Divider sx={{ marginY: 1 }} />


                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                        }}>
                            <PointOfSaleIcon color='info'/> <AppText sx={{ml: 2}}>Total price: 34567</AppText>
                        </Box>
                        <AppSubmitButton color='info' sx={{mt: 2}} title='Print Document' variant='outlined'/>
                    </Box>
                </Box>


            </AppForm>
        </>
    );
}

export default NewPrintRequestFormComponentPos;