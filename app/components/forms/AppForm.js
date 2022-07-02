import React from 'react';
import {Formik} from "formik";
import {Box} from "@mui/material";

function AppForm({ initialValues, onSubmit, validationSchema, children }) {
    return (
        <>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {
                    () => (
                        <Box sx={{ m: 1, p: 2 }}>
                            {children}
                        </Box>
                    )
                }

            </Formik>
        </>
    );
}

export default AppForm;