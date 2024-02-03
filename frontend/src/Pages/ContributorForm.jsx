import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useLoading } from '../Components/LoadingContext';
import { Slide, ToastContainer,toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
function ContributorForm() {
  const { setIsLoading } = useLoading();
  const { id } = useParams(); // Retrieve the id parameter
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [quantity, setQuantity] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const payload = {
        fullName,
        email,
        phone,
        quantity,
        address,
      };
      const response = await axios.put(`http://localhost:5001/contribute/${id}`, payload, {withCredentials: true});
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
      
      // Clear the form fields
      setFullName('');
      setEmail('');
      setPhone('');
      setQuantity('');
      setAddress('');
    } catch (error) {
      console.error('Error contributing:', error);
      toast.error('An error occurred while submitting the form.', {
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
    } finally {
    setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[url(src/assets/low-poly-grid-haikei.svg)] p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 className='font-semibold text-center'>Contributor Form</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="fullName" className="text-sm font-semibold text-gray-700">Full Name</label>
            <input 
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="mt-1 w-full p-2 text-sm border border-gray-300 rounded-md"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email</label>
            <input 
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full p-2 text-sm border border-gray-300 rounded-md"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="text-sm font-semibold text-gray-700">Phone</label>
            <input 
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 w-full p-2 text-sm border border-gray-300 rounded-md"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div>
            <label htmlFor="quantity" className="text-sm font-semibold text-gray-700">Quantity</label>
            <input 
              id="quantity"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="mt-1 w-full p-2 text-sm border border-gray-300 rounded-md"
              placeholder="Enter quantity"
              required
            />
          </div>

          <div>
            <label htmlFor="address" className="text-sm font-semibold text-gray-700">Address</label>
            <textarea 
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="mt-1 w-full p-2 text-sm border border-gray-300 rounded-md"
              placeholder="Enter your address"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full p-2 text-sm text-white font-semibold  bg-[#617a4f] rounded-md hover: bg-[#617a4f]"
          >
            Contribute
          </button>
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
        </form>
      </div>
    </div>
  );
}

export default ContributorForm;