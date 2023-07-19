import { useState } from "react";
import handleLoginSubmit from "../utilsSrc/handleLoginSubmit";

export default function () {

    const [loginData, setLoginData] = useState('');

    const[firstname, setFirstname] = useState('');
    const[lastname, setLastname] = useState('');
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');


    return <>
        <h1> Hello, Welcome to Northcoders' amazing Articles World!</h1>
        <h2> We are very pleased to have you </h2>
        <h3> tip: Mouse pointer popup messages are a useful guide on the go!  </h3>
        <h3> Enjoy...</h3>

        <form className="login-form" onSubmit={(e)=>{
                const data = [{firstname, lastname, username, password}]
                setLoginData(data);
                handleLoginSubmit(e, loginData);
            }} captioin="Login Form">

            <label htmlFor="fname" >First Name: </label>
            <input type="text" name="firstName" placeholder="First Name" onChange={(e)=>{
                setFirstname(e.target.value)
            }} />

            <label htmlFor="lname" >Last Name: </label>
            <input type="text" name="lastName" placeholder="Last Name" onChange={(e)=>{
                setLastname(e.target.value)
            }} />

            <label htmlFor="username">Username: </label>
            <input type="text"  name="username" placeholder="Username" onChange={(e)=>{
                setUsername(e.target.value)
            }} />

            <label htmlFor="password" >Password: </label>
            <input type="password" name="password" placeholder="8 or more Characters" onChange={(e)=>{
                setPassword(e.target.value)
            }} />

            <input type="submit" value='Submit' />
        </form>
    </>
}