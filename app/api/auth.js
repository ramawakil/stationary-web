import http from "./client";
import config from '../appConfig.json';


const apiEndPoint = config.alternativeApiEndPoint;
// const tokenKey = config.apiEndPoint + "/api/token";
const tokenAccess = 'accessTokenKey';
const tokenRefresh = 'refreshTokenKey';

// http.setJwt(getJwt());

export async function login(credentials) {
    await logout();
    const res = await http.post(`${apiEndPoint}/auth`, credentials, {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    });
    // res.data contains { access, refresh }
    if (res.data.result) {
        await loginWithJwt(res.data.result.session_id);
    }
    return res;
}

export async function fetchUser() {
    const access = await getJwt();
    return await http.get(`${apiEndPoint}/auth/users/me/`, {
        headers: {
            'Authorization': `JWT ${access}`
        }
    });
}

export async function loginWithJwt(jwt) {
    await localStorage.setItem(tokenAccess, JSON.stringify(jwt));
}

export function logout() {
    localStorage.removeItem(tokenAccess);
}

export function getCurrentUser() {
    try {
        return JSON.parse(localStorage.getItem(tokenAccess));
    } catch (error) {
        return null;
    }
}

//
export async function getJwt() {
    return await JSON.parse(localStorage.getItem(tokenAccess));
}

const authApi = {
    login,
    loginWithJwt,
    logout,
    getCurrentUser,
    getJwt,
    fetchUser
};

export default authApi;
