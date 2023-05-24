import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


firebase.initializeApp({
    apiKey: "AIzaSyDNuACgonxewvGheiPbGq07ojYwE8OAGg8",
    authDomain: "chat-react-2d49c.firebaseapp.com",
    projectId: "chat-react-2d49c",
    storageBucket: "chat-react-2d49c.appspot.com",
    messagingSenderId: "121000624093",
    appId: "1:121000624093:web:e98e3f37a5e5a02c598034",
    measurementId: "G-9C5CY5PWEH"
});

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
            <App />
    </Context.Provider>

);


