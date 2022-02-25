  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
  import { getFirestore,collection,getDocs } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA88KjM0dr-h7YHQBGr8ZPxvCKCc1q55uY",
    authDomain: "sample-3593e.firebaseapp.com",
    projectId: "sample-3593e",
    storageBucket: "sample-3593e.appspot.com",
    messagingSenderId: "1008845077158",
    appId: "1:1008845077158:web:666763e70812e85111d267"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  //
  const db = getFirestore();
//
const commentRef = collection(db,'comment');

//get comment
const read_comment = ()=>{
const comment = []
getDocs(commentRef)
.then((snapshot)=>{
snapshot.docs.forEach((doc)=>{
console.log('====================================');
console.log(doc.data());
console.log('====================================');
})
})
.catch((err)=>{
console.log('====================================');
console.log(err.message);
console.log('====================================');
})
}

read_comment() 
  
  