import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Hook/AuthProvider";
import { BsGoogle } from 'react-icons/Bs';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');

        // if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
        //     toast.info('Password requires minimum eight characters, at least one letter and one number', {
        //         position: "top-right",
        //         autoClose: 5000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //         theme: "light",
        //     });
        //     return;
        // }

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                toast.success('Account created successfully', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className="form-div">
            <div className="form">
                <h2 style={{ marginBottom: '20px' }}>Register</h2>
                <form onSubmit={handleRegister}>
                    <input name="name" type="name" placeholder="name" className="profileInputs" />
                    <input name="email" type="email" placeholder="email" className="profileInputs" />
                    <input name="password" type="password" placeholder="password" className="profileInputs" />
                    <input type="submit" className="submit-btn" />
                </form>
                <p className="user-redirect">Already have an account? <Link to="/login" className="primary">Login</Link></p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;