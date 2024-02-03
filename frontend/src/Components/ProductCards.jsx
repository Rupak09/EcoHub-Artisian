import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

export function ProductThree() {
  const [wasteReqData, setWasteReqData] = useState([]);
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  useEffect(() => {
    // Fetch waste request data when the component mounts
    const fetchWasteReqData = async () => {
      try {
        const response = await axios.get("http://localhost:5001/getWasteReq",{ withCredentials: true });
        setWasteReqData(response.data);
      } catch (error) {
        console.error("Error fetching waste request data:", error);
      }
    };

    fetchWasteReqData();
  }, []);

  // Function to truncate the description text
  const truncateDescription = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "...";
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {wasteReqData.map((wasteReq, index) => (
        <Link to={`/product/${wasteReq._id}`} key={index}>
          <motion.div 
            key={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
          >
            <img src={wasteReq.image} alt="Waste Request" className="w-96 h-72 object-cover" />
            <div className="p-4">
              <h5 className="text-lg font-semibold mb-2">{wasteReq.title}</h5>
              <p className="text-gray-700 text-sm">{truncateDescription(wasteReq.description, 100)}</p>
              {/* Add more details here */}
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}
