import React from 'react';
import {IconButton, Tooltip} from "@mui/material";

function AppIconButton({ onPress, icon, label }) {
    return (
        <>
            <Tooltip title={label}>
                <IconButton onClick={onPress} >
                    {icon}
                </IconButton>
            </Tooltip>

        </>
    );
}

export default AppIconButton;