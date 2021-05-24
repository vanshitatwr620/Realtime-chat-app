import { useState } from "react"
import axios from "axios"

const LoginForm = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();

        const authObject = {'Project-ID' : "6960c5db-a87b-4ea2-99b1-c995dbd94ef5", 'User-Name' : username,
                            'User-Secret' : password}

        try {
            await axios.get('https://api.chatengine.io/chats', {headers : authObject});
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
            
        } catch (error) {
            setError("Oops! Incorrect Credentials :(")
        }
    }

    return(
        <div className = "wrapper">
            <div className = "form">
                <h1 className = "title">Chat Application</h1>
                <form onSubmit = {handleSubmit}>
                    <input type = "text" value = {username} onChange = {(e) => setUserName(e.target.value)} className = "input" placeholder = "Username" required/>
                    <input type = "password" value = {password} onChange = {(e) => setPassword(e.target.value)} className = "input" placeholder = "Password" required/>
                    <div align = "center">
                        <button type = "submit" className ="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className = "error">{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm