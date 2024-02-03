import { useState} from 'react';
import logo from '../assets/logomain.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import loginscreen from '../assets/signup.json'
import Lottie from 'lottie-react';
import { Slide, ToastContainer,toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
// import { useLoading } from '../Components/LoadingContext';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignin = async () => {
    try {
      const response = await axios.post('http://localhost:5001/signin', { email, password }, { withCredentials: true });
      if(response.data.msg === "Login successful" && response.status === 200){
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
          navigate('/homepage');
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
      } // Display the message in an alert
    } catch (err) {
      // Handle errors
      console.error('Signup error: ', err.response.data);
      toast.error('An Error Occured While Login.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
        });// Display an error alert
    }

  };

  // const { setIsLoading } = useLoading();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setIsLoading(true); // Start loading
  //       const response = await fetch('http://localhost:5001/signin');
  //       const data = await response.json();
  //       // Handle your data
  //     } catch (error) {
  //       // Handle error
  //     } finally {
  //       setIsLoading(false); // Stop loading regardless of success or error
  //     }
  //   };

  //   fetchData();
  // }, [setIsLoading]);

  return (
    <div className="flex flex-row items-center justify-center min-h-screen bg-[url('src/assets/wave-haikei-og.svg')] bg-cover">
      <div className='mr-56 mb-24'>
      <Lottie animationData={loginscreen} style={{height:"300px",width:"300px"}}/>
      </div>
      <form className="p-6 bg-neutral-100 rounded-3xl shadow-xl w-96 mb-24">
      <img src={logo} alt="Logo" className="mx-auto h-24" />
        <h2 className="text-lg font-semibold mb-4 text-black text-center">Login</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block mb-2 text-sm font-medium text-black">
           <FontAwesomeIcon icon={faUser} className="text-gray-500 mr-2" />
            Email
            </label>
          <input
            type="text"
            id="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <button className="px-4 py-2 my-2 text-white bg-[#617a4f] rounded-3xl hover:bg-emerald w-full" type="button" onClick={handleSignin}>Login</button>
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
        <div className="flex justify-between mt-4">
        {/* <Link to="/forgotpassword" className="text-sm text-black-400 hover:underline focus:outline-none">
          Forgot Password?
        </Link> */}
        <Link to="/signup" className=" ml-56 text-sm text-black-400 hover:underline focus:outline-none">
          Create Account
        </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;