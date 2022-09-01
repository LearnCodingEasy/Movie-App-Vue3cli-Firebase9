// call Object from the Firebase to Initialize app
// import { initializeApp } from "firebase/app";

// Import Data Base
// import { getFirestore } from "firebase/firestore";

// Config Project
// const firebaseConfig = {
//   apiKey: "AIzaSyAGaZT23B67NRPzndqZeDub77L1U7x4WiQ",
//   authDomain: "movie-app-vue3cli-firebase9.firebaseapp.com",
//   projectId: "movie-app-vue3cli-firebase9",
//   storageBucket: "movie-app-vue3cli-firebase9.appspot.com",
//   messagingSenderId: "938199527005",
//   appId: "1:938199527005:web:0f52f749c6b782192467b4",
//   measurementId: "G-J8NMFJMRVE",
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// init services ( Database )
// const Database = getFirestore(app);

// Export
// export { Database };

import firebase from "firebase/app";
// import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyAGaZT23B67NRPzndqZeDub77L1U7x4WiQ",
  authDomain: "movie-app-vue3cli-firebase9.firebaseapp.com",
  projectId: "movie-app-vue3cli-firebase9",
  storageBucket: "movie-app-vue3cli-firebase9.appspot.com",
  messagingSenderId: "938199527005",
  appId: "1:938199527005:web:0f52f749c6b782192467b4",
  measurementId: "G-J8NMFJMRVE",
});

/**
 * npm run serve
 * npm run lint -- --fix
 * npm run build
 * firebase deploy --only hosting
 * json-server --watch data/db.json
 * json-server --watch data/EnglishDictionary.json
 * json-server --watch src/Services/EnglishDictionary.json
 * npm cache clean --force
 *
 *
 */
