import React, { useState } from 'react'

const Login = ({setUserName}) => {
  const [txt,setTxt] = useState(null)
  const handleChange = (e) => {
    setTxt(e.target.value)
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    setUserName(txt)
  }
  return (  
    <form className="Login" onSubmit={handleSubmit}>
      <p>Username</p>
      <input type="text" onChange={handleChange}/>
      <button>Login</button>
    </form>
  );
}
 
export default Login;