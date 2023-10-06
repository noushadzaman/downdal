import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Hook/AuthProvider";

const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        createUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className="form">
            <h2 style={{ marginBottom: '20px' }}>Register</h2>
            <form onSubmit={handleLogin}>
                <input name="name" type="name" placeholder="name" className="profileInputs" />
                <input name="email" type="email" placeholder="email" className="profileInputs" />
                <input name="password" type="password" placeholder="password" className="profileInputs" />
                <input type="submit" className="submit-btn" />
            </form>
            <p className="user-redirect">Already have an account? <Link to="/login" className="primary">Login</Link></p>
        </div>
    );
};

export default Register;