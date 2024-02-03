// src/components/SignupPage.js

import { useState } from 'react';
import logo from '../assets/logomain.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Slide, ToastContainer,toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import Lottie from 'lottie-react';
import signupanimation from '../assets/login.json';

function SignupPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:5001/signup', {
        username,
        email,
        password,
        cPassword: confirmPassword,
      });
      if(response.data.msg === "User created successfully" && response.status === 200){
        toast.success(response.data.msg, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Slide,
          });
          await new Promise((resolve) => setTimeout(resolve, 2000));
          navigate('/login');
      }
      else{
        toast.warn(response.data.msg, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Slide,
          })
      }// Display the message in an alert
    } catch (err) {
      // Handle errors
      console.error('Signup error:', err.response.data);
      toast.error('An Error Occured While Signup.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
        }); // Display an error alert
    }
  };

  return (
    <div className="flex flex-row items-center justify-center min-h-screen bg-[url('src/assets/blob-scene-haikei.svg')]">
      <div className='mr-60'>
        <Lottie animationData={signupanimation} />
      </div>
      <form  className="p-6 bg-neutral-100 rounded-3xl shadow-2xl w-96">
      <img src={logo} alt="Logo" className="mx-auto h-24" />
        <h2 className="text-lg font-semibold mb-4 text-black text-center font-gilroy">Artisan Sign Up</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">
          <FontAwesomeIcon icon={faEnvelope} className="text-gray-500 mr-2" />
            Email
            </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-3xl w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="username" className="block mb-2 text-sm font-medium text-black">
          <FontAwesomeIcon icon={faUser} className="text-gray-500 mr-2" />
            Username
            </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-3xl w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-black">
            <FontAwesomeIcon icon={faLock} className="text-gray-500 mr-2" />
            Password
            </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-3xl w-full"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-black">
            <FontAwesomeIcon icon={faLock} className="text-gray-500 mr-2" />
            Confirm Password
            </label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-3xl w-full"
          />
        </div>
        <button className="px-4 py-2 my-2 text-white bg-[#617a4f] rounded-3xl hover:bg-emerald w-full mb-6" type="button" onClick={handleSignup}>Signup</button>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
          theme="light"
          transition={Slide}
        />
        <Link to="/login" className='ml-20'>
          Have an account? <b>Login</b>
        </Link>
      </form>
    </div>
  );
}

export default SignupPage;
