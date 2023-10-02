import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC9-pmTmSUpVCjP9kHQcPIABQpAa3bA6T0",
    authDomain: "fir-3-97fff.firebaseapp.com",
    projectId: "fir-3-97fff",
    storageBucket: "fir-3-97fff.appspot.com",
    messagingSenderId: "157857112774",
    appId: "1:157857112774:web:c1edca6d478a1d57b0edc7"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;