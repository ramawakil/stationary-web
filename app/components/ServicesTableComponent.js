import React from 'react';
import {Container} from "@mui/material";
import AppTable from "./AppTable";


const Columns = [
    'id', 'title', 'pages', 'price', 'copies', 'created_at', 'actions'
]

const Headers = [
    'ID', 'Title', 'Pages', 'Price', 'Copies', 'Created At', 'Status'
]

function ServicesTableComponent({ data, ...props }) {
    return (
        <>
            <Container maxWidth='md' >
                <AppTable columns={Columns} headers={Headers} data={data} />
            </Container>
        </>
    );
}

export default ServicesTableComponent;