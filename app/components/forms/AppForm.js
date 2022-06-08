import {Form, Formik} from 'formik';
import React from 'react';
import {Box} from "@mui/material";
import {makeStyles} from "@mui/styles";


const useStyles = makeStyles(theme => ({
    form: {
        width: '100%',
        margin: 5,
        justifyContent: 'center',
        alignContent: 'center',
    },

}));


function AppForm({ initialValues, onSubmit, validationSchema, children }) {
    const classes = useStyles();

    return (
        <Formik initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
        >
            { () => (
                <>
                    {children}
                </>
            )}

        </Formik>
    );
}

export default AppForm;