import React from 'react';
import {Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack} from "@mui/material";
import AppButton from "../../app/components/AppButton";
import ServicesTableComponent from "../../app/components/ServicesTableComponent";
import * as Yup from "yup";
import AppForm from "../../app/components/forms/AppForm";
import AppFormField from "../../app/components/forms/AppFormField";
import AppSubmitButton from "../../app/components/forms/AppSubmitButton";


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
            <container maxWidth='md'>
                <Box sx={{
                    marginX: 4,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <div></div>
                    <AppButton onClick={handleClickOpen} title='New Print Task' variant='contained' color='info' />
                </Box>
                <Box sx={{
                    mt: 3
                }}>

                <ServicesTableComponent data={documents} />

                </Box>

                <Dialog open={open} onClose={handleClose} maxWidth='md' fullWidth>
                    <DialogTitle>Add Collateral Information</DialogTitle>
                    <DialogContent>
                        <DialogContentText >
                            Complete the form to add a new Collateral.
                        </DialogContentText>
                        <AppForm
                            onSubmit={handleSubmit}
                            validationSchema={ValidationSchema}
                            initialValues={{
                                title: '',
                                pages: '',
                                price: '',
                                copies: '',
                                file: null,
                            }}
                        >

                            <AppFormField
                                name='title'
                                label='Title'
                                type='text'
                                variant='standard'
                                margin='normal'
                                fullWidth
                            />

                            <AppFormField
                                name='pages'
                                label='Pages'
                                type='text'
                                variant='standard'
                                margin='normal'
                                fullWidth
                            />

                            <AppFormField
                                name='price'
                                label='Price'
                                type='text'
                                variant='standard'
                                margin='normal'
                                fullWidth
                            />

                            <AppFormField
                                name='copies'
                                label='Copies'
                                type='text'
                                variant='standard'
                                margin='normal'
                                fullWidth
                            />

                            <AppFormField
                                name='file'
                                label='File'
                                placeholder='Upload File'
                                type='file'
                                variant='standard'
                                margin='normal'
                                fullWidth
                            />


                            <DialogActions>
                                <Stack spacing={4} direction='row'>
                                    <AppButton title='Cancel' />
                                    <AppSubmitButton title='Submit' variant='text' />
                                </Stack>

                            </DialogActions>
                        </AppForm>
                    </DialogContent>

                </Dialog>

            </container>
        </>
    );
}

export default Index;