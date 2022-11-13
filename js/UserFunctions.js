// =============================================
// All the functionf of Register/Login is here
// =============================================


// =============================================
// REGISTER FUNCITONS 
// =============================================
if(!Object.keys(localStorage).includes('users')){
    let arr = []
    localStorage.setItem('users', JSON.stringify(arr))
}

export default function getUserDataById(userId) {
    let users = getUsers();
    let user = users.find(user => JSON.parse(user).id == userId);
    return JSON.parse(user);
}
function getUserDataByName(username) {
    let users = getUsers();
    let user = users.find(user => JSON.parse(user).username == username);
    return JSON.parse(user);

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
    let users = JSON.parse(localStorage.getItem('users'));
    users.push(newUser)
    localStorage.setItem(`users`, JSON.stringify(users));
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
    if(username.length == 0 ) return true;   
    let users = JSON.parse(localStorage.getItem('users'));
     let result = users.some(user => JSON.parse(user).username === username)
    return result
}

function getUsers() {
    return JSON.parse(localStorage.getItem('users'));
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
    if (!isUserExists(username)){
        console.log('userexists problem')
        return false;
    }
    let user = getUserDataByName(username);
    console.log(user);
    if (user.password !== password){
        console.log('password problem')
        return false;
    }

    user.isLogged = true;
    addNewUser(user);
    localStorage.setItem('currentUserId', user.id);
    localStorage.setItem('currentUserName', user.username);
    localStorage.setItem('fullName', user.fullName);
    localStorage.setItem('email', user.email);
    localStorage.setItem('phoneNum', user.phoneNumber);
    localStorage.setItem('isLogged', user.isLogged);
    localStorage.setItem('photo', user.photo);
    console.log('Logged In ');
    return true;

}
function isLoggedIn() {
    let isLogged =JSON.parse(localStorage.getItem('isLogged')) ;
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
    localStorage.setItem('isLogged', false);

}

export {logOut};