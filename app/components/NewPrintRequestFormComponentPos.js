import React, {useRef} from 'react';
import AppForm from "./forms/AppForm";
import {Box, Divider} from "@mui/material";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import AppText from "./AppText";
import AppButton from "./AppButton";
import * as Yup from "yup";


const ValidationSchema = Yup.object().shape({
    file: Yup.string().required('File is required'),
});

function NewPrintRequestFormComponentPos({obj, closeDialog}) {
    const pdfRef = useRef(null);
    const [file, setFile] = React.useState(null);


    const handleCreatePrintRequest = (values) => {

    }

    const printDocument = (values) => {
        window.print();


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
                        {/*<AppFormImagePicker*/}
                        {/*    name='file'*/}
                        {/*    */}
                        {/*/>*/}

                        <input type='file' value={file} onChange={(e) => setFile(e.target.value)}/>

                        <AppText sx={{mt: 2}}>{obj?.title}</AppText>
                        <Divider sx={{marginY: 1}}/>

                    </Box>
                    <Box sx={{}}>

                        <AppText sx={{mt: 2}}>{obj?.pages} Pages</AppText>
                        <Divider sx={{marginY: 1}}/>

                        <AppText sx={{mt: 2}}>{obj?.copies} Copies</AppText>
                        <Divider sx={{marginY: 1}}/>


                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                        }}>
                            <PointOfSaleIcon color='info'/> <AppText sx={{ml: 2}}>Total
                            price: {obj?.total_price}</AppText>
                        </Box>
                        <AppButton onPress={printDocument} color='info' sx={{mt: 2}} title='Print Document'
                                   variant='outlined'/>
                    </Box>
                </Box>


            </AppForm>
        </>
    );
}

export default NewPrintRequestFormComponentPos;