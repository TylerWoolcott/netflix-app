import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FirebaseContext } from './context/firebase'

import { seedDatabase } from './seed';

const config = {
  apiKey: "AIzaSyCNEeIlrzbP-hw9fNuazYebnFxZNLjOYlI",
  authDomain: "netflix-tylerwoolcott.firebaseapp.com",
  projectId: "netflix-tylerwoolcott",
  storageBucket: "netflix-tylerwoolcott.appspot.com",
  messagingSenderId: "666454166358",
  appId: "1:666454166358:web:f78d7d60470170179024f7" 
}

const firebase = window.firebase.initializeApp(config);
// seedDatabase(firebase)

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase: window.firebase}}>
      <GlobalStyles />
      <App />
      </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
