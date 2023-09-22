import React, { useState } from 'react'
import './LoginS.css'
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {

  const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const navigate=useNavigate();
    const formHandler=(event)=>{ 
      event.preventDefault();
      if(username.length===0){
        alert("Enter Username!")
      }
      else if(password.length===0){
        alert("Enter Password!")
      }
   else{
      navigate("/HomeS")
   }}
  return (
    <div>
    
    <img className='song'   src='https://c1.wallpaperflare.com/preview/951/783/595/guitar-music-acoustic-instrument-thumbnail.jpg' alt='imgbg' width='1536' height='782.7'></img>
    <img className='white' src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHYApwMBIgACEQEDEQH/xAAZAAADAQEBAAAAAAAAAAAAAAAAAgMBBAf/xAAbEAEBAQEBAQEBAAAAAAAAAAAAAQIRMSFREv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD07MUzC5iuIBsxSRmZ+KSAJDwSHkASN42GkAvG8PwcAn8jh+DgJ2Dh6WwE7C2Kl1ARsT1F7E9QENRPUX1E9QHPqMU1AB8xXMTxFswDZimYzMPIBpDSCQ0gNkbIIeQGSN40cBg43g4BbC2KFsBOwtUsLYCVhNRXhLAR1ErF9RPUBz6gNqAD5imCYVyB8qZJFIBpDwuTwG5MyGgANAADgBjKYtAthFLCUE6WxSk0CWolr4trxLX0EdBup9AGyplPKuAUkPCZUA+TQuTQDxrIaAGsaAAAMY1lBhKYuvQJolPolBOp6U14noEqBoA3KmUsK4BXJ4nlSUFMmhIeAeNLPDQGtYAaGAAwMoAlNaQC6JT0mgT0nqxTSWvAToLqgBlXKOFc0FsqZqWaeUFJTypynlA8p0+mlA4hWgZjAAoYy0GapbW2ktBlJqmvidoF0no+ktUCaBdgC5quahmqZoOjNUlQzVJQWzTxGHzQVlN1OVsoKdHSdb0D9HS9Z0DWs6W1loNtL1lpbQFqeqa1PVBmqlqt1U9UC6v0E1QBc1XF+AApm/FM0AFJTygA2U8oANHQAHaOgAOs6wAWsoAJ6pNUAE9VLVABLVAAP//Z' alt='grey'></img> 
    <div className='Login'>
        <h2>Login</h2>
      </div>

      <label className='name' htmlFor="myInput"><h3>Username :</h3></label>
      <input className='namein' type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

      <label className='password' htmlFor="myInput"><h3>Password :</h3></label>
      <input className='passin' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <h3 onClick={formHandler} className='cont'>Continue</h3>
      <Link to="/SignupS"><h3 className='losign'>Sign Up!</h3></Link>
    </div>
  )
}
