import React,{useState}from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";




const firebaseConfig = {
    apiKey: "AIzaSyAmwF0DmmJb4aWZzMyXobLB5BByftd7TMQ",
    authDomain: "react-authentication-ac2df.firebaseapp.com",
    projectId: "react-authentication-ac2df",
    storageBucket: "react-authentication-ac2df.appspot.com",
    messagingSenderId: "19229243748",
    appId: "1:19229243748:web:a15118c9d6d170c05fe271"
  };
  
  
  
const app = initializeApp(firebaseConfig);

     const auth = getAuth(app);

const Login = () => {
    const [Email,setEmail]=useState("")
   
    const [Password,setPassword] =useState("");
   


    const SigneUser=()=>{
      signInWithEmailAndPassword(auth,Email,Password)
      .then((value) =>alert("succes"))
      .catch((error) =>alert("succes"))
    
    };
    
  return (
    <div>
        <div className="login-container">
          <div className="login-form">
          <h2>Login </h2>
           <label>Email</label>            
           <input onChange={(e)=>setEmail(e.target.value) } value={Email} required placeholder="please signup" type="email"/>
           <br />
           <label>Password</label>
           <input onChange={(e)=>setPassword(e.target.value) }
            value={Password} 
            required 
            placeholder="please Password"
             type="Password"  />
           <br />
          
            <button onClick={SigneUser}>Login</button>
        </div>
        </div>
    </div>
  )
}

export default Login





