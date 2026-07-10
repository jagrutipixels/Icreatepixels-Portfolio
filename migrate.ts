import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, Timestamp } from "firebase/firestore";
import fs from "fs";

// Need to read env vars
import dotenv from "dotenv";
dotenv.config();

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app, process.env.VITE_FIREBASE_DATABASE_ID);

import { BLOG_POSTS } from "./blogs.js";

async function migrate() {
  console.log("Migrating blogs...", BLOG_POSTS.length);
  for (const blog of BLOG_POSTS) {
    const { id, ...data } = blog;
    try {
      await addDoc(collection(db, "blogs"), {
        ...data,
        createdAt: Timestamp.now()
      });
      console.log(`Migrated ${blog.title}`);
    } catch(e) {
      console.error(e);
    }
  }
  console.log("Done");
  process.exit(0);
}

migrate();
