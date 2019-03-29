
import firebase from "firebase";
import { YellowBox } from 'react-native';
import _ from 'lodash';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};
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
            .then(
                function (snapshot) {
                    var user = (snapshot.val())
                    for (key in user) {
                        if (user.hasOwnProperty(key)) {
                            resolve(user)
                        }
                    }
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
            .then(
                function (snapshot) {
                    var userType = (snapshot.val() && snapshot.val().userType)
                    resolve(userType);
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
            .then(function (snapshot) {
                let data = [];
                snapshot.forEach(function (childSnapshot) {
                    // var key = childSnapshot; // "ada"
                    data.push(childSnapshot.key)
                })
                resolve(data)
            })
            .catch((error) => {
                reject(error);
            })
    })
}

export function getNoticeId(id) {
    return new Promise((resolve, reject) => {
        var database = firebase.database();
        database.ref('/notice/' + id).once('value')
            .then(function (snapshot) {
                var userType = (snapshot.val() && snapshot.val().notice)
                resolve(userType);
            })
            .catch((error) => {
                reject(error);
            })
    })
}