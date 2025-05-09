import React, { useState } from 'react';
const Login = ({handleLogin}) => {
  
  
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email,password)
    setEmail("");
    setPassword("");
  }
  return (
    <div className='flex items-center justify-center h-screen w-screen bg-black text-white'>
     <div className=' p-20 border-emerald-600  border-2  rounded-xl ' >
    <form  onSubmit ={(e)=>{
        submitHandler(e)
    }} className='flex flex-col items-center justify-center '>
        <input  value={email}
        onChange={(e)=>{
  setEmail(e.target.value)
        }} required className='border-2 border-emerald-600  rounded-full py-3 px-5 text-xl  outline-none bg-transparent ' type='email ' placeholder='enter your email'>
        </input>
        <input   value={password}
        onChange ={(e)=>{
       setPassword(e.target.value)
        }}required className='border-2 border-emerald-600  rounded-full py-3 px-5 text-xl mt-3 outline-none bg-transparent'type='password' placeholder='enter your password'>
        </input>
        <button  id="btn"className='  border-none rounded-full py-3 px-5 text-xl  outline-none bg-transparent  text-white mt-3  '> Log In</button>
    </form>
    </div>
    </div>
  );
}
export default Login;