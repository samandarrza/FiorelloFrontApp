// =============================================
// All the functionf of Register/Login is here
// =============================================


// =============================================
// REGISTER FUNCITONS 
// =============================================

export default function getUserDataById(userId) {
    let result;
    let wantedUser = localStorage.getItem(`${userId}`);
    if (wantedUser !== null) {
        result = JSON.parse(wantedUser);
    }
    else {
        console.error('User Not Found');
    }
    return result;
}
function getUserDataByName(username) {
    let users = getUsers();
    return users.find(user => user.username == username);
}
function generateUniqueId(array) {
    let newId = Math.floor((101538400000 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    let isUnique = array.every(item => item.id !== newId);
    if (!isUnique)
        generateUniqueId(products);
    return newId;
};

function addNewUser(user) {
    let newUser = JSON.stringify(user);
    localStorage.setItem(`${user.id}`, newUser);
}
function User(fullname,email,phoneNumber, username, password, isLogged,photoLink) {
    this.id = generateUniqueId(getUsers());
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.fullName = fullname;
    this.username = username;
    this.password = password;
    this.photo = photoLink;
    this.isLogged = isLogged;
}

function isUserExists(username) {
    let keys = Object.keys(localStorage);
    if(username.length == 0 ) return true;
    let hasUser = keys.some(key => {
        let user = JSON.parse(localStorage.getItem(key));
        return user.username === username;
    });
    return hasUser;

}

function getUsers() {
    let users = [];
    for (const key of Object.keys(localStorage)) {
        let user = localStorage.getItem(key);
        users.push(JSON.parse(user));
    }
    return users;
}

function register(fullname,email,phoneNumber, username, password, photoLink) {
    if (isUserExists(username))
        return false;
    // create new user
    let newUser = new User(fullname,email,phoneNumber,username, password, true, photoLink);
    addNewUser(newUser);
    return true;

}

export { User, getUserDataById, getUserDataByName, addNewUser, isUserExists, getUsers, register };


// =============================================
// LOGIN FUNCITONS 
// =============================================


function login(username, password) {
    if (!isUserExists(username))
        return false;
    let user = getUserDataByName(username);
    if (user.password !== password)
        return false;

    user.isLogged = true;
    localStorage.removeItem(user.id);
    addNewUser(user);
    sessionStorage.setItem('currentUserId', user.id);
    sessionStorage.setItem('currentUserName', user.username);
    sessionStorage.setItem('fullName', user.fullName);
    sessionStorage.setItem('email', user.email);
    sessionStorage.setItem('phoneNum', user.phoneNumber);
    sessionStorage.setItem('isLogged', user.isLogged);
    sessionStorage.setItem('photo', user.photo);
    console.log('Logged In ');

}
function isLoggedIn() {
    let isLogged =JSON.parse(sessionStorage.getItem('isLogged')) ;
    console.log(isLogged);
    isLogged?
        console.log('logged in user'):
        console.log('user not logged in');
    return isLogged;
}

export { login, isLoggedIn};



// =============================================
// LOG OUT FUNCITONS 
// =============================================


function logOut(){
    sessionStorage.clear();
    sessionStorage.setItem('isLogged', false);

}

export {logOut};