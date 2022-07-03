import React from 'react';
import CustomerPrintJob from "../../app/components/customerPrintJob";
import CustomerDashboardLayout from "../../app/components/layout/component/customerDashboardLayout";
import CustomerDashboardDetailPages from "../../app/components/layout/component/customerDashboardDetailPages";

function PrintRequestDetail(props) {


    return (
        <>
            <CustomerDashboardDetailPages>
                <CustomerPrintJob />
            </CustomerDashboardDetailPages>
        </>
    );
}

export default PrintRequestDetail;