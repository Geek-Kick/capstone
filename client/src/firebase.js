import * as firebase from 'firebase';
import config from '../firebase.json';

const app = firebase.initializeApp(config);

const Auth = app.auth();

export const signin = async ({ email, password }) => {
    const { user } = await Auth.signInWithEmailAndPassword(email, password);
    return user;
};

const uploadImage = async uri => {
    if (uri.startsWith('https')) {
        return uri;
    }
    const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
            resolve(xhr.response)
        };
        xhr.onerror = function () {
            reject(new TypeError('Network request failed'))
        };
        xhr.responseType = 'blob';
        xhr.open('GET', uri, true);
        xhr.send(null);
    });

    const user = Auth.currentUser;
    const ref = app.storage().ref(`/profile/${user.uid}/photo.png`);
    const snapshot = await ref.put(blob, { contentType: 'image/png' });
    blob.close();

    return await snapshot.ref.getDownloadURL();
}

export const signup = async ({ email, password, photo, nickname }) => {
    const { user } = await Auth.createUserWithEmailAndPassword(email, password);
    const photoUrl = await uploadImage(photo);
    await user.updateProfile({ displayName: nickname, photoUrl });
    return user;
}