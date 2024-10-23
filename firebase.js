// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// Replace this configuration with your own from the Firebase Console
const firebaseConfig = {
          apiKey: "AIzaSyD22HovwIxpX-kLVfKOij-plnzHMHGvVV8",
          authDomain: "sample-6ff0f.firebaseapp.com",
          projectId: "sample-6ff0f",
          storageBucket: "sample-6ff0f.appspot.com",
          messagingSenderId: "728770696571",
          appId: "1:728770696571:web:8729accca44b8b51cd99de",
          measurementId: "G-2ZS76SFN8H"
        };

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Cloud Storage and export it
const storage = getStorage(firebaseApp);
export { storage }