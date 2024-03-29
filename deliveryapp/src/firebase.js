import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInAnonymously} from "firebase/auth";
import {initializeApp} from "firebase/app";
import {
    doc as Doc,
    setDoc as SetDoc,
    addDoc as AddDoc,
    collection as Collection,
    getFirestore as GetFirestore,
    getDocs as GetDocs,
    getDoc as GetDoc,
    where as Where,
    limit as Limit,
    query as Query
} from "firebase/firestore";
import {getStorage as GetStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);

//auth
export const createUser = createUserWithEmailAndPassword;
export const signIn = signInWithEmailAndPassword;
export const signInAnonym = signInAnonymously;
export const auth = getAuth();

//firestore
export const doc = Doc;
export const setDoc = SetDoc;
export const addDoc = AddDoc;
export const collection = Collection;
export const db = GetFirestore();
export const getDocs = GetDocs;
export const getStorage = GetStorage(app);
export const getDoc = GetDoc;
export const where = Where;
export const limit = Limit;
export const query = Query;