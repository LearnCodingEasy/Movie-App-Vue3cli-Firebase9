// call Object from the Firebase to Initialize app
import { initializeApp } from "firebase/app";

// Import Auth
import { getAuth } from "firebase/auth";

// Import Google Auth Provider
import { GoogleAuthProvider } from "firebase/auth";

// Import signIn With Popup For Google
import { signInWithPopup } from "firebase/auth";

import { ref, onUnmounted, computed } from "vue";

// Config Project
const firebaseConfig = {
  apiKey: "AIzaSyAGaZT23B67NRPzndqZeDub77L1U7x4WiQ",
  authDomain: "movie-app-vue3cli-firebase9.firebaseapp.com",
  projectId: "movie-app-vue3cli-firebase9",
  storageBucket: "movie-app-vue3cli-firebase9.appspot.com",
  messagingSenderId: "938199527005",
  appId: "1:938199527005:web:0f52f749c6b782192467b4",
  measurementId: "G-J8NMFJMRVE",
};

// initialize firebase App
initializeApp(firebaseConfig);

// Call Object From The Firebase To Initialize Services ( Auth )
const auth = getAuth();

export function userAuth() {
  let user = ref(null);

  let unsubscribe = auth.onAuthStateChanged((_user) => (user.value = _user));

  onUnmounted(unsubscribe);

  let isLogin = computed(() => user.value !== null);

  let signIn = async () => {
    let googleProvider = new GoogleAuthProvider();

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log("result: ", result);
        console.log("result user: ", result.user);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };

  let signOut = () => auth.signOut();

  return { user, isLogin, signIn, signOut };
}
