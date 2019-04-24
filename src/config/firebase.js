import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAje6s5BVd6zcwiOnikejS4eWwgur9Fcw0",
  authDomain: "fireblog-cc3bf.firebaseapp.com",
  databaseURL: "https://fireblog-cc3bf.firebaseio.com",
  projectId: "fireblog-cc3bf",
  storageBucket: "fireblog-cc3bf.appspot.com",
  messagingSenderId: "534336765517"
};

firebase.initializeApp(config);
// firebase.firestore().settings({ timestampsInSnapshots: true});

export default firebase;