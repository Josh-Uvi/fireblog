import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
const config = {
<<<<<<< HEAD
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: ''
=======
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
>>>>>>> 5a3bc3617e26685cfad29bd3a70438faaa5a4f91
};

firebase.initializeApp(config);
// firebase.firestore().settings({ timestampsInSnapshots: true});

export default firebase;
