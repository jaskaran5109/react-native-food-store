import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyAZ110fALFxBTmAXu2UveoC0JKE54YE_lg",
  authDomain: "food-store-react-native.firebaseapp.com",
  projectId: "food-store-react-native",
  storageBucket: "food-store-react-native.appspot.com",
  messagingSenderId: "850985732843",
  appId: "1:850985732843:web:c03e1b5a519ad9ebed0cae",
  measurementId: "G-YWZ249GKPT",
};
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;