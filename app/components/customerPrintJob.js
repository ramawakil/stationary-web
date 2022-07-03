import React from 'react';
import {Box, Divider, Paper, Stack, Tooltip} from "@mui/material";
import AppText from "./AppText";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import AppIconButton from "./AppIconButton";
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import PaymentIcon from '@mui/icons-material/Payment';
import CreditCardOffIcon from '@mui/icons-material/CreditCardOff';
import AppTextInput from "./AppTextInput";
import AppButton from "./AppButton";
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import {Check} from "@mui/icons-material";


function CustomerPrintJob({  }) {
    const [confirmCode, setConfirmCode] = React.useState('');

    const handleConfirmPayment = () => {
        console.log('confirm payment');
    }

    return (
        <>
            <Paper elevation={5} sx={{ m: 5, p: 2 }}>
                <Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                    }}>
                        <AppText>ID: 09s8dsd00</AppText>
                        <Stack spacing={2} direction='row'>
                            <Tooltip title='Pages'>
                                <AutoStoriesIcon />
                            </Tooltip>
                            <AppText variant='subtitle2'>15</AppText>
                        </Stack>

                        <Stack sx={{ marginX: 4 }} spacing={2} direction='row'>
                            <Tooltip title='Copies'>
                                <FileCopyIcon />
                            </Tooltip>
                            <AppText>1</AppText>
                        </Stack>

                        <Stack spacing={3} direction='row'>
                            <Tooltip title='Payment'>
                                <CreditCardOffIcon />
                            </Tooltip>
                            <AppText>Pending</AppText>
                        </Stack>
                    </Box>
                    <Divider sx={{ marginY: 2 }} />
                    <AppText>sdsadasdasdasdasdasdasdas</AppText>
                    <Divider sx={{ marginY: 2 }} />
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                        <Box sx={{

                        }}>
                            <AppIconButton icon={<FileOpenIcon />} label='File location' /> FYP papers
                        </Box>
                        <Box>
                            <AppText>Tsh 5000</AppText>
                        </Box>
                    </Box>
                </Box>
                <Divider sx={{ m:1 }} color='accent' />
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                }}>
                    <Box sx={{ flex: 0.4 }}>
                        <AppTextInput setValue={setConfirmCode} value={confirmCode} label='Payment Confirm code' />
                    </Box>
                    <Box>
                        <AppButton variant='contained' title='Confirm payment' color='success' onPress={handleConfirmPayment} startIcon={<PriceCheckIcon />} />
                    </Box>

                </Box>
            </Paper>
        </>
    );
}

export default CustomerPrintJob;