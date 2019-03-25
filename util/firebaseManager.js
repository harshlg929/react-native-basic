
import firebase from "firebase";

const config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
};

export function initialiseFirebase() {
    if (!firebase.apps.length) {
        console.log("Initialize");
        firebase.initializeApp(config);
    }
}

export function signUp(email, password) {
    return new Promise((resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            });
    })
}

export function sendVerificationEmail(data) {
    return new Promise((resolve, reject) => {
        data.user.sendEmailVerification()
            .then(() => {
                resolve();
            }).catch((error) => {
                reject(error);
            });
    })
}

export function resetPassword(email) {
    return new Promise((resolve, reject) => {
        firebase.auth().sendPasswordResetEmail(email)
            .then(() => {
                resolve();
            }).catch((error) => {
                reject(error);
            });
    })
}

export function signIn(email, password) {
    return new Promise((resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            })
    })
}

export function getAllStudentData() {
    return new Promise((resolve, reject) => {
        var database = firebase.database();
        database.ref('/users/Student/').once('value')
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            })
    })
}

export function getAllUsers(userType, uid) {
    return new Promise((resolve, reject) => {
        var database = firebase.database();
        database.ref('/users/' + userType + '/' + uid).once('value')
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            })
    })
}

export function getUserType(uid, userType) {
    return new Promise((resolve, reject) => {
        var database = firebase.database();
        database.ref('/users/'+userType+'/'+uid).once('value')
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            })
    })
}

export function setUserInsideUserType(uid, userType) {
    return new Promise((resolve, reject) => {
        var database = firebase.database();
        database.ref('users/userType/'+uid).set({
            userType : userType,
        })
            .then(() => { 
                resolve();
            })
            .catch((error) => {
                reject(error);
                console.log('error: ', error);
            })
    })
}

export function setUserDataInsideParticularType(uid, userType, data) {
    return new Promise((resolve, reject) => {
        var database = firebase.database();
        database.ref('users/'+userType+'/'+uid).set(data)
            .then((data) => { 
                resolve(data);
                console.log('data: ', data);
            })
            .catch((error) => {
                reject(error);
                console.log('error: ', error);
            })
    })
}