import React from 'react'
import { useState,useEffect } from 'react'
import "./Landing.css"
import LoadingSpinner from "./LoadingSpinner"

export const Landing = () => {
  const [uid,setuid] = useState("")
  const [password,setpassword] = useState("")
  const [userType, setuserType] = useState('admin') 
  const [isLoading, setisLoading] = useState(true)
  const submitHandler=(event)=>{
    event.preventDefault()
    console.log(uid, password, userType)
  }
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false)
      console.log('Yo')
    }, 500);
  }, [])
  
  return (
    <>
    {isLoading && <LoadingSpinner asOverlay />}
    <div className='grid'>
        <div id="grid1"></div>
        <div id="grid2">
          <form action="" className="loginform" method="post" onSubmit={submitHandler}>

            <select name="userType" className="form-item" id="userType" value={userType} 
            onChange={(e)=>{setuserType(e.target.value)}} >
            <option value="admin">Admin</option>
            <option value="owner">Owner</option>
            <option value="tenant">Tenant</option>
          </select>
          <br />

          <input type="text" className="form-item"
            name="uid" id="uid" value={uid} onChange={(e)=>{setuid(e.target.value)}}
            required placeholder="User Id" autoFocus /> <br />

            <input type="password" className="form-item" name="passowrd" id="passowrd" 
            placeholder="Password" onChange={(e)=>{setpassword(e.target.value)}} /> <br/>

            <button type="login" className="form-item">Login</button>
          </form>
        </div>
    </div>
    </>
  )
}
