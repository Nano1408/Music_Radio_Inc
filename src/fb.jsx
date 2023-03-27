import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

export const app = firebase.initializeApp({
    "projectId": "music-radio-inc",
    "appId": "1:496426720833:web:328c6e2d7036d7965e70c0",
    "storageBucket": "music-radio-inc.appspot.com",
    "apiKey": "AIzaSyCcbYJm7wXgbmbl1cWtBJpKAslBgsAUV9Q",
    "authDomain": "music-radio-inc.firebaseapp.com",
    "messagingSenderId": "496426720833"
  });
