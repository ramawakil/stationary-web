import React from 'react';
import {Box} from "@mui/material";
import AppIconButton from "../AppIconButton";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import {useRouter} from "next/router";

function DetailPageLayout(props) {
    const router = useRouter();

    const handleGoBack = () => {
        router.back();
    }
    return (
        <>
            <Box sx={{
                mt: 2,
                display: 'flex',
                flexDirection: 'row',
                marginX: 5,
                justifyContent: 'space-between',
            }}>
                <Box sx={{ flex: 0.5 }}>
                    <AppIconButton icon={<ArrowCircleLeftOutlinedIcon color='accent' />} label='Back button' onPress={handleGoBack} />
                </Box>
                <Box sx={{ flex: 0.18 }}>

                </Box>
            </Box>
        </>
    );
}

export default DetailPageLayout;