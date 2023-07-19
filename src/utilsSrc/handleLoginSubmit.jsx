import { redirect } from "react-router-dom";
// import Main from "../Components/Main/Main";

export default function handleLoginSubmit (e, loginData) {
    e.preventDefault();
    
    if(loginData[0].username === 'abc' && loginData[0].password === 'xyz') {
        console.log('login successfull')
        return redirect('/home');
    } else {
        console.log('login failed.')
        return <h2>Login failed ! Please try again</h2>
    }

}