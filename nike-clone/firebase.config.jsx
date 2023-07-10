import  {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from  'firebase/storage'
import {getAuth}  from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyD5OssO_GHz39lNG2_VxJm5ATXgxUANMsI",
    authDomain: "nike-9e5db.firebaseapp.com",
    databaseURL: "https://nike-9e5db-default-rtdb.firebaseio.com",
    projectId: "nike-9e5db",
    storageBucket: "nike-9e5db.appspot.com",
    messagingSenderId: "1044065584579",
    appId: "1:1044065584579:web:80d6051c740be0f43fa976"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
  const firestore = getFirestore(app)
  const storage = getStorage(app)
  export const auth = getAuth(app);

  export  { app, firestore, storage };
