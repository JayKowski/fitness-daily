let token;
let userInfo;

export function saveToken(tok, uData) {
    // if (localStorage.getItem('userToken') === null) {
    token = tok;
    localStorage.setItem('userToken', JSON.stringify(token));
    setUserData(uData);
}

function setUserData(data) {
    userInfo = data;
    localStorage.setItem('userData', JSON.stringify(userInfo));
}

export function getUserData() {
    return JSON.parse(localStorage.getItem('userData'));
}

export function getToken() {
    token = JSON.parse(localStorage.getItem('userToken'));

    return token;
}