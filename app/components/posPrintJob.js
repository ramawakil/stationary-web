import React from 'react';
import {Box, Divider, Paper, Stack, Tooltip} from "@mui/material";
import AppText from "./AppText";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import CreditCardOffIcon from "@mui/icons-material/CreditCardOff";
import AppIconButton from "./AppIconButton";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import AppTextInput from "./AppTextInput";
import AppButton from "./AppButton";
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

function PosPrintJob({ onSubmit: handleSubmit, obj }) {
    const [confirmCode, setConfirmCode] = React.useState('');

    const handleConfirmPayment = () => {
        handleSubmit();

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
                        <AppText>{obj?.print_code}</AppText>
                        <Stack spacing={2} direction='row'>
                            <Tooltip title='Pages'>
                                <AutoStoriesIcon />
                            </Tooltip>
                            <AppText variant='subtitle2'>{obj?.pages}</AppText>
                        </Stack>

                        <Stack sx={{ marginX: 4 }} spacing={2} direction='row'>
                            <Tooltip title='Copies'>
                                <FileCopyIcon />
                            </Tooltip>
                            <AppText>{obj?.copies}</AppText>
                        </Stack>

                        <Stack spacing={3} direction='row'>
                            <Tooltip title='Payment'>
                                <CreditCardOffIcon />
                            </Tooltip>
                            <AppText>{changeStatus(obj?.status)}</AppText>
                        </Stack>
                    </Box>
                    <Divider sx={{ marginY: 2 }} />
                    <AppText>{obj?.description}</AppText>
                    <Divider sx={{ marginY: 2 }} />
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                        <Box sx={{

                        }}>
                            <AppIconButton icon={<FileOpenIcon />} label='File location' /> {obj?.title}
                        </Box>
                        <Box>
                            <AppText>Tsh {obj?.total_price}</AppText>
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

                    </Box>
                    <Box>
                        <AppButton variant='contained' title='Confirm bill payed' color='success' onPress={handleConfirmPayment} startIcon={<PriceCheckIcon />} />
                    </Box>

                </Box>
            </Paper>
        </>
    );
}

export default PosPrintJob;