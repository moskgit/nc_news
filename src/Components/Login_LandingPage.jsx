import loadingGif from '../assets/icons/loading.webp'
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "../utilsSrc/api";
import { UserContext } from '../user/user';

export default function LoginLandingPage () {

    const[firstname, setFirstname] = useState('');
    const[lastname, setLastname] = useState('');
    const[username, setUsername] = useState('tickle122');
    const[password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const {setUser} = useContext(UserContext);
    const navigate = useNavigate();
    
    useEffect(() => {
        fetchUsers()
        .then(( {users} ) => {
            setUsers(() => users);
            setIsLoading(false);
        })
    }, [])

    if (isLoading) return <h2><img src={loadingGif} className="loading-img" alt="Loading..." />  Loading... Please wait</h2>

    function handleLoginSubmit() {
    
        const usersList = users.map(user => user.username);
        
        if (usersList.includes(username) && password === 'xyz') {
            setFirstname(''); setLastname(''); setUsername(''); setPassword('');
            setUser(username);
            navigate('/home');
        } else {
            console.log("Details didn't match our record. Please try again.")
            return <h3>Invalid details</h3>
        }
    
    }    

    return <>
        <h1> Hello, Welcome to Northcoders' amazing Articles World!</h1>
        <h2> We are very pleased to have you </h2>
        <h3> tip: Mouse pointer popup messages are a useful guide on the go!  </h3>
        <h3> Enjoy...</h3>

        <form className="login-form" onSubmit={(e)=>{
            e.preventDefault()
                handleLoginSubmit({firstname, setFirstname, lastname, setLastname, username, setUsername, password, setPassword});
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