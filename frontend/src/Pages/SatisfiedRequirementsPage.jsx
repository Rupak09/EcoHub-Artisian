import  { useState, useEffect } from 'react';
import axios from 'axios';

const SatisfiedRequirementsPage = () => {
    const [satisfiedRequirements, setSatisfiedRequirements] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchSatisfiedRequirements = async () => {
            try {
                const response = await axios.get('http://localhost:5001/satisfiedRequirement', {withCredentials: true});
                setSatisfiedRequirements(response.data);
            } catch (err) {
                setError('Error fetching satisfied requirements');
                console.error(err);
            }
        };

        fetchSatisfiedRequirements();
    }, []);

    if (error) {
        return <div className="text-red-500">Error: {error}</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Satisfied Requirements</h1>
            <ul>
                {satisfiedRequirements.map((requirement, index) => (
                    <li key={index} className="mb-12">
                        <div className="p-3 border border-gray-200 flex flex-row shadow-2xl rounded-3xl">
                            <img src={requirement.image} style={{height: '250px',width: '250px'}}/>
                            <div>
                            <p className="text-lg text-gray-700 ml-6"><b>Title : </b> {requirement.title}</p>
                            <p className="text-md text-gray-700 ml-6"><b>Description : </b> {requirement.description}</p>
                            <p className="text-md text-gray-700 ml-6"><b>Materials Required :</b> {requirement.materialRequired}</p>
                            <p className="text-md text-gray-700 ml-6"><b>Price :₹</b>{requirement.price}</p>
                            <p className="text-md text-gray-700 ml-6"><b>Quantity : </b> {requirement.quantity}</p>
                            </div>
                            {/* Add more details as needed */}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SatisfiedRequirementsPage;