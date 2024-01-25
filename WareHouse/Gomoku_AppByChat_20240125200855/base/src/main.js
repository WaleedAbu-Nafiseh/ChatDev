/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCl47LbM90Aoueii0Mh89r9nmYxe_BdqBc",
  authDomain: "template-9305f.firebaseapp.com",
  projectId: "template-9305f",
  storageBucket: "template-9305f.appspot.com",
  messagingSenderId: "1020348222236",
  appId: "1:1020348222236:web:691bf06fadccf4fc0488d9",
  measurementId: "G-F91WV0HYRL"
};

const app = createApp(App)

registerPlugins(app)

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
app.mount('#app')
