// import logo from './logo.svg';
// import './App.css';
// import { useState } from 'react';

// function App() {
//   const [Submit,setSubmit]=useState("")
//   const [lname,setlname]=useState("")
//   const [number,setnumber]=useState("")

//   const handleClick = () => {
   
   
//     console.log(Submit,lname,number)
//     document.getElementById("table").innerHTML += `<tr>
//     <td>${Submit}</td>
//     <td>${lname}</td>
//     <td>${number}</td>
//   </tr>` 
//     };


  
//   return (
//     <>
//     <h1>name</h1>
//     <h1>lname</h1>
//     <h1>number</h1>
//     <div className="main-container">
     
// <label>name</label>
// <input   onChange={(e)=>setSubmit(e.target.value)} value={Submit} type="text" required placeholder='enter aname' />
// <label>lname</label>
// <input  on onChange={(e)=>setlname(e.target.value)} value={lname} type="text" required placeholder='enter aname' />

// <label>number</label>
// <input   onChange={(e)=>setnumber(e.target.value)} value={number} type="numbert" required placeholder='enter aname' />
// <button onClick={handleClick}>submit</button>
// <table id='table'>
// </table>

//     </div>

     
//     </>
//   );
// }

// export default App