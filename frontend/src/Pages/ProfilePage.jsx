import { useState, useEffect } from 'react';
import axios from 'axios';
import Lottie from 'lottie-react';
import avatardata from '../assets/user_avatar.json';
import { ExampleNavbarFour } from '../Components/NavBarPostLogin';

const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const [showWasteRequests, setShowWasteRequests] = useState(false);
    const [showInnovativeProducts, setShowInnovativeProducts] = useState(false);
    const [showUserContributions, setShowUserContributions] = useState(false);
    const [showSatisfiedRequirements, setShowSatisfiedRequirements] = useState(false);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('http://localhost:5001/profile', { withCredentials: true });
                setUser(response.data);
            } catch (err) {
                setError('Error fetching user data');
                console.error(err);
            }
        };

        fetchUserData();
    }, []);

    if (error) {
        return <div className="text-red-500">Error: {error}</div>;
    }

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <>
        <ExampleNavbarFour/>
        <div className="container mx-auto p-4 flex">
            {/* Left side - User Details */}
            <div className='flex flex-col'>
            <Lottie animationData={avatardata} className='w-52 mr-50'/>
            <div className="user-details mr-6">
                <p className="text-md text-gray-600 font-bold">{user.username}</p>
                <p className="text-md text-gray-600 font-bold">{user.email}</p>
            </div>
            </div>
            {/* Right side - Waste Requests, Innovative Products, User Contributions, Satisfied Requirements */}
            <div className="flex-grow" style={{flex:'1 1 65%'}}>
                {/* Display Waste Requests */}
                <div className="bought-products mb-6">
                    <h2
                        className="text-xl font-bold text-gray-800 mb-2 cursor-pointer"
                        onClick={() => setShowWasteRequests(!showWasteRequests)}
                    >
                        Waste Requests
                    </h2>
                    {showWasteRequests && (
                        <ul>
                            {user.wasteReq.map((waste, index) => (
                                <li key={index} className="mb-12">
                                    <div className="mt-2 p-3 border border-gray-200 flex flex-row shadow-2xl rounded-3xl">
                                        <img src={waste.image} alt="" style={{height:'250px',width:'250px'}} />
                                        <div>
                                        <p className="text-lg text-gray-700 ml-6"><b>Waste Requirement Title: </b>{waste.title}</p>
                                        <p className="text-md text-gray-700 ml-6"><b>Description: </b>{waste.description}</p>
                                        <p className="text-md text-gray-700 ml-6"><b>Material Required: </b>{waste.materialRequired}</p>
                                        <p className="text-md text-gray-700 ml-6"><b>Price: ₹</b>{waste.price}</p>
                                        <p className="text-md text-gray-700 ml-6"><b>Quantity: </b>{waste.quantity}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Display Innovative Products */}
                <div className="innovative-products mb-6">
                    <h2
                        className="text-xl font-bold text-gray-800 mb-2 cursor-pointer"
                        onClick={() => setShowInnovativeProducts(!showInnovativeProducts)}
                    >
                        Innovative Products
                    </h2>
                    {showInnovativeProducts && (
                        <ul>
                            {user.innovativeProds.map((product, index) => (
                                <li key={index} className="mb-12">
                                    <div className="mt-2 p-3 border border-gray-200 flex flex-row shadow-2xl rounded-3xl">
                                        <img src={product.image} style={{height: '250px',width: '250px'}}/>
                                        <div>
                                        <p className="text-lg text-gray-700 ml-6"><b>Product Title:</b> {product.title}</p>
                                        <p className="text-md text-gray-700 ml-6"><b>Description:</b> {product.description}</p>
                                        <p className="text-md text-gray-700 ml-6"><b>Materials Used:</b> {product.materialUsed}</p>
                                        <p className="text-md text-gray-700 ml-6"><b>Price:</b> ₹{product.price}</p>
                                        <p className="text-md text-gray-700 ml-6"><b>Quantity:</b> {product.quantity}</p>
                                        <p className="text-md text-gray-700 ml-6"><b>Dimensions (L x B x H):</b> {product.dimensions}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Display User Contributions */}
                <div className="user-contributions mb-6">
                    <h2
                        className="text-xl font-bold text-gray-800 mb-2 cursor-pointer"
                        onClick={() => setShowUserContributions(!showUserContributions)}
                    >
                        User Contributions
                    </h2>
                    {showUserContributions && (
                        <ul>
                            {user.userContributions.map((contribution, index) => (
                                <li key={index} className="mb-12">
                                    <div className="mt-2 p-3 border border-gray-200 rounded-3xl shadow-2xl">
                                        <p className="text-lg text-gray-700 ml-6"><b>Product ID:</b> {contribution.id}</p>
                                        <p className="text-md text-gray-700 ml-6"><b>Product Title: </b>{contribution.productTitle}</p>
                                        <p className="text-md text-gray-700 ml-6"><b>Product Description:</b> {contribution.productDescription}</p>
                                        <p className="text-md text-gray-700 ml-6"><b>User Contribution:</b> {contribution.userContribution}</p>
                                        <p className="text-md text-gray-700 ml-6"><b>User Address:</b> {contribution.userAddress}</p>
                                        <p className="text-md text-gray-700 ml-6"><b>User Mobile:</b> {contribution.userMobile}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Display User Satisfied requirements */}
                <div className="user-satisfied-requirements mb-6">
                    <h2
                        className="text-xl font-bold text-gray-800 mb-2 cursor-pointer"
                        onClick={() => setShowSatisfiedRequirements(!showSatisfiedRequirements)}
                    >
                        Satisfied Requirements
                    </h2>
                    {showSatisfiedRequirements && (
                        <ul>
                            {user.satisfiedReq.map((satisfiedReq, index) => (
                                <li key={index} className="mb-12">
                                    <div className="mt-2 p-3 border border-gray-200 shadow-2xl rounded-3xl flex flex-row">
                                        <img src={satisfiedReq.image} style={{height:'250px',width:'250px'}}/>
                                        <div>
                                        <p className="text-lg text-gray-700 ml-6"><b>Waste Request Title: </b>{satisfiedReq.title}</p>
                                        <p className="text-md text-gray-700 ml-6"><b>Description: </b>{satisfiedReq.description}</p>
                                        <p className="text-md text-gray-700 ml-6"><b>Material Required: </b>{satisfiedReq.materialRequired}</p>
                                        <p className="text-md text-gray-700 ml-6"><b>Price: ₹</b>{satisfiedReq.price}</p>
                                        <p className="text-md text-gray-700 ml-6"><b>Quantity: </b>{satisfiedReq.quantity}</p>
                                        <button className='px-4 py-2 ml-[32rem] mt-24 text-white bg-[#617a4f] rounded-3xl hover:bg-emerald '>Pay For raw materials</button>
                                        </div>
                                    </div>
                                    {/* Display contributions for this satisfied requirement */}
                                    <ul>
                                        {satisfiedReq.contributions.map((contribution, contributionIndex) => (
                                            <li key={contributionIndex} className="mb-2 ml-4 bg-white rounded-3xl">
                                                <div className="mt-2 p-3 border border-gray-200 shadow-2xl rounded-3xl">
                                                    <p className="text-md text-gray-700 ml-6"><b>Full Name:</b> {contribution.fullName}</p>
                                                    <p className="text-md text-gray-700 ml-6"><b>Email:</b> {contribution.email}</p>
                                                    <p className="text-md text-gray-700 ml-6"><b>Phone:</b> {contribution.phone}</p>
                                                    <p className="text-md text-gray-700 ml-6"><b>Quantity:</b> {contribution.quantity}</p>
                                                    <p className="text-md text-gray-700 ml-6"><b>Address:</b> {contribution.address}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
        </>
    );
};

export default ProfilePage;