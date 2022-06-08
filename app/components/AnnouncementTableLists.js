import React from 'react';
import AppTable from "./AppTable";
import {Typography} from "@mui/material";

function AnnouncementTableLists({data, columns, headers}) {
    return (
        <>
            {
                (data.length > 0) ? (<AppTable data={data} columns={columns} headers={headers} path='announcement'/>) :
                    <Typography variant="body1" color='textSecondary' gutterBottom>No Announcements yet!</Typography>
            }
        </>
    );
}

export default AnnouncementTableLists;