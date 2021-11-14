import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCErdr9Eo7D4KvNMi520NITvZRtCWElvZA",
    authDomain: "classtest-14204.firebaseapp.com",
    databaseURL: "https://classtest-14204-default-rtdb.firebaseio.com",
    projectId: "classtest-14204",
    storageBucket: "classtest-14204.appspot.com",
    messagingSenderId: "989446118282",
    appId: "1:989446118282:web:864e787e8dff1edff9c673"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
