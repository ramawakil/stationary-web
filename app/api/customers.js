import http from "./client";
import config from '../appConfig.json';


const apiEndPoint = config.alternativeApiEndPoint;
// const tokenKey = config.apiEndPoint + "/api/token";
const tokenAccess = 'accessTokenKey';

export async function getJwt() {
    return await JSON.parse(localStorage.getItem(tokenAccess));
}

export async function titles() {
    const access = await getJwt();
    return await http.get(`${apiEndPoint}/api/res.partners.title`, {
        params: {
            session_id: access,
            query: '{name,id}'
        }
    })
}

export async function getCustomers() {
    const access = await getJwt();
    console.log(access)
    return await http.get(`${apiEndPoint}/api/loan.applicant`, {
        params: {
            session_id: access,
            query: '{id,street,plot_number,house_number,ward,district,region,nin,name,nationality,birth_date,gender,marital_status,title,phone,email,postal_address}'
        }
    })
}

export async function createCustomer(data) {
    const access = await getJwt();
    return await http.post(`${apiEndPoint}/api/loan.applicant`, data, {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        params: {
            session_id: access
        }
    })

}

const customersApi = {
    titles,
    getCustomers,
    createCustomer,
}

export default customersApi;