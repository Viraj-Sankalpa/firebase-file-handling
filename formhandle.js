import{app} from "./index.js";
import { getStorage, ref,uploadBytes } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-storage.js";
import { getFirestore,collection,addDoc} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js";

const storage = getStorage(app);
const firestore = getFirestore();
const coll = collection(firestore,'user');




const myform = document.getElementById('myform');
  
if(myform){
    myform.onsubmit = e=>{
        e.preventDefault();

        const formData = new FormData(myform);
        const data = {};

        for(let[key,value] of formData){
            data[key] = value;
        }

        const file = data['profile'];
        
        const file_name = `${Date.now()}-${data['profile']['name']}`;
        const storageRef = ref(storage,file_name);

        uploadBytes(storageRef,file)
            .then(snapshot=>{
                // console.log('====================================');
                // console.log('Uploaded');
                // console.log('====================================');

                delete data['profile']
                data['url'] = file_name;

                console.log('====================================');
                console.log(data);
                console.log('====================================');
                addDoc(coll,data)
                    .then(()=>{
                        console.log('====================================');
                        console.log('Successfully');
                        console.log('====================================');
                    })
            })
        


        // console.log(formData);

        // for (let[key,value] of formData){
        //     console.log('====================================');
        //     console.log(`${key}==${value}`);
        //     console.log('====================================');
        // }

        
    }
}  