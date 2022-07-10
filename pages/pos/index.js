import React from 'react';
import PosDashboardLayout from "../../app/components/layout/component/posDashboardLayout";


const Documents = [
    {
        id: 1,
        printCode: '098et1',
        title: 'FYP Report Sem 1',
        pages: '10',
        copies: '2',
        price: 'Tsh 100',
        created_at: 'One day ago',
        actions: 'Waiting pickup'
    }
]


function Index() {
    const [documents, setDocuments] = React.useState(Documents);

    const handleGoToDetails = (val) => {
        console.log(val.id);
    }


    return (
        <>
            <PosDashboardLayout>


            </PosDashboardLayout>
        </>
    );
}

export default Index;