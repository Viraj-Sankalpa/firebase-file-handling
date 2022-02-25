  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
  import { getFirestore,collection,getDocs,getDoc,doc,addDoc,updateDoc } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js";

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
const readAll = ()=>{
const comment = []
getDocs(commentRef)
.then((snapshot)=>{
snapshot.docs.forEach((doc)=>{
    comment.push({id:doc.id,...doc.data()})
})
})
// .catch((err)=>{
// console.log('====================================');
// console.log(err.message);
// console.log('====================================');
// })
    console.log('====================================');
    console.log(comment);
    console.log('====================================');
}

const readOne =(id)=>{
    const docRef = doc(db,'comment',id);
    const comment = {}
    getDoc(docRef)
        .then(doc=>{
            console.log('====================================');
            console.log({id:doc.id,...doc.data()});
            console.log('====================================');
        })
}

// readOne('cbLd37U52IxNgSVIaz33');

const createOne = ({name,email,body}) => {
    console.log('====================================');
    const comment = {name,email,body};
    addDoc(commentRef,{name,email,body})
        .then(()=>{
            console.log('====================================');
            console.log('Successfully insertion');
            console.log('====================================');
        })
    // console.log({name,email,body});
    // console.log('====================================');
}

// createOne({
//     "postId": 1,
//     "id": 1,
//     "name": "id labore ex et quam laborum",
//     "email": "Eliseo@gardner.biz",
//     "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
// })
  
  const updateOne = (obj) => {
      const docRef = doc(db,'comment',obj.id)
      delete obj['id'];
      updateDoc(docRef,obj)
        .then(()=>{
            console.log('====================================');
            console.log("Successfull");
            console.log('====================================');
        })
  }

  updateOne ({
    "id":'qwV4dGQ93ZnmLdoa3Myp',
    "name": "Dog",
  })

//   updateOne();

// const deleteOne = ()