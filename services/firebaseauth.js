// Import the functions you need from the SDKs you need
import { initializeApp,getApps } from "firebase/app";
import { initializeAuth, getReactNativePersistence, getAuth } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAm3XxdAU-UljiF-U82j_M-5EK9fptstlM",
  authDomain: "react-native-auth-demo-dd3fa.firebaseapp.com",
  projectId: "react-native-auth-demo-dd3fa",
  storageBucket: "react-native-auth-demo-dd3fa.firebasestorage.app",
  messagingSenderId: "594166091714",
  appId: "1:594166091714:web:ad876f314535ed9339905b"
};

var auth;
if(getApps().length==0)
    {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    auth = initializeAuth(app,{
        persistence:getReactNativePersistence(ReactNativeAsyncStorage)
    });
}
else
{
  auth = getAuth();
}

export default auth;