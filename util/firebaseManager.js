
import firebase from "firebase";

const config = {
    apiKey: "AIzaSyDz9v7Pixlee3PN59ZGmQ2GfgDm8NdNzz8",
    authDomain: "react-native-basic-b46e8.firebaseapp.com",
    databaseURL: "https://react-native-basic-b46e8.firebaseio.com",
    projectId: "react-native-basic-b46e8",
    storageBucket: "react-native-basic-b46e8.appspot.com",
    messagingSenderId: "455507098098"
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
        database.ref('/users/' + userType + '/' + uid).once('value')
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
        database.ref('users/userType/' + uid).set({
            userType: userType,
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
        database.ref('users/' + userType + '/' + uid).set(data)
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

export function setNotice(notice) {
    var timeStamp = new Date();
    return new Promise((resolve, reject) => {
        var database = firebase.database();
        database.ref('notice/' + timeStamp).set({
            notice: notice,
        })
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
                console.log('error: ', error);
            })
    })
}

export function getNotice() {
    return new Promise((resolve, reject) => {
        var database = firebase.database();
        database.ref('/notice/').once('value')
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            })
    })
}