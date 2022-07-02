import React from 'react';
import {Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";

function AppDialogue({ open, handleCloseDialog, title, description, children, ActionComponent = null }) {
    return (
        <>
            <Dialog open={open} onClose={handleCloseDialog} maxWidth='md' fullWidth>
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>{description}</DialogContentText>
                    {children}
                    <Box>
                        { ActionComponent && (
                            <DialogActions>
                                <ActionComponent />
                            </DialogActions>
                        ) }

                    </Box>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default AppDialogue;