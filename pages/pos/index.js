import React from 'react';
import PosDashboardLayout from "../../app/components/layout/component/posDashboardLayout";
import AppTable from "../../app/components/commons/AppTable";
import AppDialogue from "../../app/components/AppDialogue";
import NewPrintRequestFormComponent from "../../app/components/newPrintRequestFormComponent";


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

const Columns = [
    { field: 'printCode', headerName: 'Print Code', flex: 1 },
    { field: 'title', headerName: 'Title', flex: 1 },
    { field: 'pages', headerName: 'Pages', flex: 1 },
    { field: 'copies', headerName: 'Copies', flex: 1 },
    { field: 'price', headerName: 'Price', flex: 1 },
    { field: 'created_at', headerName: 'Created At', flex: 1 },
    { field: 'actions', headerName: 'Actions', flex: 1 },
]

function Index() {
    const [documents, setDocuments] = React.useState(Documents);

    const handleGoToDetails = (val) => {
        console.log(val.id);
    }


    return (
        <>
            <PosDashboardLayout>
                {/*<AppTable onClickEvent={handleGoToDetails} columns={Columns} data={documents}/>*/}

            </PosDashboardLayout>
        </>
    );
}

export default Index;