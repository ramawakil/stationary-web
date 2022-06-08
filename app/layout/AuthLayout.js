import React from 'react';
import {Box, CircularProgress} from "@mui/material";
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";

function AuthLayout({ children }) {

    const {data: session, status} = useSession()
    const router = useRouter()

    if (status === "loading") {
        return (
            <Box sx={{ mx: 'auto', textAlign: 'center' }}>
                <CircularProgress />
            </Box>
        )
    }

    if (status === "unauthenticated") {
        if (router.pathname !== "/login" && router.pathname !== "/help") {
            router.push("/login")
        }
    }

    return (
        <>
            {children}
        </>
    );
}

export default AuthLayout;
