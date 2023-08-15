import { initializeApp } from "firebase/app";
import { getDatabase, ref, update, onValue } from "firebase/database";
import useOnlineStore from '../pinia/useOnlineStore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUpev4Wf4yX9mms6_W9SAFKIA0Z3NH2IY",
  authDomain: "webchat-337d6.firebaseapp.com",
  projectId: "webchat-337d6",
  storageBucket: "webchat-337d6.appspot.com",
  messagingSenderId: "226537379811",
  appId: "1:226537379811:web:493c70d363b9d5a3a8f2d6",
  databaseURL:
    "https://webchat-337d6-default-rtdb.asia-southeast1.firebasedatabase.app/",
  measurementId: "G-4M1R71FK77",
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const onlineStore = useOnlineStore();

export function getDb() {
  return db;
}

export function userUid() {
  let uuid = window.localStorage.getItem("userUid") || uuid();
  window.localStorage.setItem("userUid", uuid);
  return uuid;
}

export function uuid() {
  let d = Date.now(),
    uuid = null;
  if (
    typeof performance !== "undefined" &&
    typeof performance.now === "function"
  ) {
    d += performance.now(); //use high-precision timer if available
  }
  uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    let r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
  window.localStorage.setItem("uuid", uuid);
  return uuid;
}

export function startChat() {
  console.log("click");
}

export function joinLivingRoom(uuid) {
  const db = getDatabase(app);
  const path = `livingroom/${uuid}`;
  const updates = {};
  updates["online_at"] = new Date().getTime();
  updates["is_online"] = true;
  update(ref(db, path), updates);
}

export function monitorLivingRoom() {
  onValue(ref(db, "/livingroom"), (snapshot) => {
    const data = snapshot.val();
    console.log("data", Object.keys(data));
    onlineStore.setOnlineCount(Object.keys(data).length);
  });
}
