import React from 'react';
import PosDashboardLayout from "../../app/components/layout/component/posDashboardLayout";
import PosDashboardDetail from "../../app/components/layout/posDashboardDetail";
import AppText from "../../app/components/AppText";
import {Box, InputAdornment} from "@mui/material";
import AppForm from "../../app/components/forms/AppForm";
import * as Yup from "yup";
import AppFormField from "../../app/components/forms/AppFormField";
import AppSubmitButton from "../../app/components/forms/AppSubmitButton";
import DoubleArrowOutlinedIcon from '@mui/icons-material/DoubleArrowOutlined';
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";


const ValidationSchema = Yup.object().shape({
    page_price: Yup.number().label('Page Price').required('Page Price is required')
});

function Config(props) {
    const [openDialog, setOpenDialog] = React.useState(false);


    const submitPagePrice = (values) => {

    }


    return (
        <>
            <PosDashboardDetail>
                <Box>
                    <AppText sx={{ p:3 }} variant='h4'>Configurations page</AppText>
                    <AppForm
                        initialValues={{ page_price: 50 }}
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
                                        <InputAdornment position="end" sx={{ cursor: 'pointer', mr: 2 }}>
                                            Tsh
                                        </InputAdornment>
                                    ),
                                }}
                                name='page_price'
                                label='Page Price'
                                type='number'
                            />

                            <AppSubmitButton sx={{ ml: 2 }} title='Set new Price' variant='outlined' endIcon={<DoubleArrowOutlinedIcon/>} />
                        </Box>

                    </AppForm>
                </Box>
            </PosDashboardDetail>
        </>
    );
}

export default Config;