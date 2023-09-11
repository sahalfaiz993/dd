import React,{useState}from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore ,collection, addDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';





const firebaseConfig = {
    apiKey: "AIzaSyAmwF0DmmJb4aWZzMyXobLB5BByftd7TMQ",
    authDomain: "react-authentication-ac2df.firebaseapp.com",
    projectId: "react-authentication-ac2df",
    storageBucket: "react-authentication-ac2df.appspot.com",
    messagingSenderId: "19229243748",
    appId: "1:19229243748:web:a15118c9d6d170c05fe271"
  };
  
  
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const Signup = () => {
  const navigate=useNavigate()
    const [Email,setEmail]=useState ("")
    const [Name,setName] =useState("");
    const [Password,setPassword] =useState("");
   


    const CreateUser=async()=>{
        createUserWithEmailAndPassword(auth,Email,Password,Name).then(()=>{
          navigate('/Login')
                  })
        try {
          const docRef = await addDoc(collection(db, "users"), {
            Email:Email,
       Password:Password,
       Name:Name,
          })
   
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
         
        }
      }
    
  return (
 
    <div className="signup-form">
        <div className="signup-container">
          <h2>Signup</h2>
           <h6>Email</h6>            
           <input onChange={(e)=>setEmail(e.target.value) } value={Email}  type="Email" required placeholder='Email' />
           <h6>Password</h6>
           <input onChange={(e)=>setPassword(e.target.value) }
            value={Password} 
            required 
            placeholder="please Password"
             type="Password"  />
           <h6>Name</h6>
            <input onChange={(e)=>setName(e.target.value) } value={Name}  type="Name" required placeholder='Name' />
            <button id='signup-form' onClick={CreateUser}>Signup</button>

        </div>
    </div>
  )
}

export default Signup





