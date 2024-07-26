import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyBvTrzXjol8x-KFoMc3yAjXenydUf-GaAo",
  authDomain: "netflix-gpt-b1cbd.firebaseapp.com",
  projectId: "netflix-gpt-b1cbd",
  storageBucket: "netflix-gpt-b1cbd.appspot.com",
  messagingSenderId: "465816916971",
  appId: "1:465816916971:web:2817eec2bbcd13b695bfae",
  measurementId: "G-WWYHGR9EDR"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();