import { useContext } from "react";
import { AuthContext } from "../Hook/AuthProvider";
import './Login.css'
import { Link } from "react-router-dom";
import { BsGoogle } from 'react-icons/Bs';

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext);

    const popup = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        signIn(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className="form-div">
            <div className="form">
                <h2 style={{ marginBottom: '20px' }}>Login</h2>
                <form onSubmit={handleLogin}>
                    <input name="email" type="email" placeholder="email" className="profileInputs" />
                    <input name="password" type="password" placeholder="password" className="profileInputs" />
                    <input type="submit" className="submit-btn" />
                </form>
                <p className="user-redirect">Don't have an account? <Link to="/register" className="primary">Create an account</Link></p>
            </div>
            <div onClick={popup} className="google-btn"><BsGoogle /> <p>Login with Google</p></div>
        </div>
    );
};

export default Login;