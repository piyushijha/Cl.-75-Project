import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBTnID3b1hzfI_878ZAWvdYHgiuk3kM50c",
    authDomain: "cl-71-project.firebaseapp.com",
    projectId: "cl-71-project",
    storageBucket: "cl-71-project.appspot.com",
    messagingSenderId: "412240293612",
    appId: "1:412240293612:web:2e61e01c594c862556bfc9"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
