// call Object from the Firebase to Initialize app
import { initializeApp } from "firebase/app";
import { ref } from "vue";
import { onUnmounted } from "vue";
import Filter from "bad-words";
import { userAuth } from "./SignIn";

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

// Import Data Base
import { getFirestore } from "firebase/firestore";

// Import Collection
import { collection } from "firebase/firestore";

// Import Object Query
import { query } from "firebase/firestore";

// Import Object orderBy
import { orderBy } from "firebase/firestore";

// Import Object serverTimestamp
import { serverTimestamp } from "firebase/firestore";

// Import Object Add Doc
import { addDoc } from "firebase/firestore";

// Import Object onSnapshot
import { onSnapshot } from "firebase/firestore";

// init services ( Database )
const Database = getFirestore();

// Get The Collection From Database by Collection Name
// collection ref
const colRef = collection(Database, "messages");

// Queries
const Queries = query(colRef, orderBy("createdAt", "desc"));

const filter = new Filter();

export function useChat() {
  const messages = ref([]);
  const unsubscribe = onSnapshot(Queries, (snapshot) => {
    messages.value = snapshot.docs
      .map((doc) => ({ id: doc.id, ...doc.data() }))
      .reverse();
  });
  onUnmounted(unsubscribe);
  //
  const { user, isLogin } = userAuth();
  //
  const sendMessage = (text) => {
    if (!isLogin.value) return;
    const { photoURL, uid, displayName } = user.value;
    addDoc(colRef, {
      userName: displayName,
      userId: uid,
      userPhotoURL: photoURL,
      text: filter.clean(text),
      createdAt: serverTimestamp(),
    }).then((add) => {
      console.log("add: ", add);
    });
  };
  return { messages, sendMessage };
}
