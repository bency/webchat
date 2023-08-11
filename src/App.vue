<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUpev4Wf4yX9mms6_W9SAFKIA0Z3NH2IY",
  authDomain: "webchat-337d6.firebaseapp.com",
  projectId: "webchat-337d6",
  storageBucket: "webchat-337d6.appspot.com",
  messagingSenderId: "226537379811",
  appId: "1:226537379811:web:493c70d363b9d5a3a8f2d6",
  databaseURL: "https://webchat-337d6-default-rtdb.asia-southeast1.firebasedatabase.app/",
  measurementId: "G-4M1R71FK77"
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Initialize Firebase

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup: () => {
    function _uuid() {
      let uuid = window.localStorage.getItem('uuid');
      if (uuid) {
        return uuid;
      }
      let d = Date.now();
      if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
        d += performance.now(); //use high-precision timer if available
      }
      uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
      });
      window.localStorage.setItem('uuid', uuid);
      return uuid;
    }
    return {
      _uuid,
      database
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
