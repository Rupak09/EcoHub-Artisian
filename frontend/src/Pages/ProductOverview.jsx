import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";

function WasteReqOverview() {
  const [wasteReq, setWasteReq] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWasteReqById = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/getWasteReq/${id}`);
        setWasteReq(response.data);
      } catch (error) {
        console.error("Error fetching waste request by ID:", error);
      }
    };

    fetchWasteReqById();
  }, [id]);

  const handleContribute = () => {
    console.log(`Contributed to ${wasteReq.title}`);
    // Implement your contribution logic here
    navigate(`/contribute/${wasteReq._id}`);
  };

  if (!wasteReq) {
    return <div>.</div>;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 md:px-8 2xl:px-16 pt-8">
      <div className="flex items-center">
        <ol className="flex w-full items-center overflow-hidden">
          <li className="text-body hover:text-heading px-2.5 text-sm transition duration-200 ease-in first:pl-0 last:pr-0">
            <Link to="/homepage">Home</Link>
          </li>
          <li className="text-body mt-0.5 text-base">/</li>
          <li className="text-body hover:text-heading px-2.5 text-sm transition duration-200 ease-in first:pl-0 last:pr-0">
            <Link to="/products">Products</Link>
          </li>
          <li className="text-body mt-0.5 text-base">/</li>
          <li className="text-body hover:text-heading px-2.5 text-sm transition duration-200 ease-in first:pl-0 last:pr-0">
            {wasteReq.title}
          </li>
        </ol>
      </div>
      <div className="block grid-cols-9 items-start gap-x-10 pb-10 pt-7 lg:grid lg:pb-14 xl:gap-x-14 2xl:pb-20">
  <div className="col-span-6">
    <div className="duration-150 ease-in hover:opacity-90 mr-16">
      <img
        src={wasteReq.image}
        alt={wasteReq.title}
        className="w-full object-cover"
      />
    </div>
  </div>
  <div className="col-span-3 pt-8 lg:pt-0 ">
          <div className="mb-7 border-b border-gray-300 pb-7">
            <h2 className="text-heading mb-3.5 text-lg font-bold md:text-xl lg:text-2xl 2xl:text-3xl">
              {wasteReq.title}
            </h2>
            <p className="text-body text-sm leading-6  lg:text-base lg:leading-8">
              {wasteReq.description}
            </p>
            <div className="mt-5">
              <h3 className="text-lg font-semibold">Materials Required:</h3>
              <span className="ml-2">{wasteReq.materialRequired}</span>
            </div>
            <div className="mt-2">
              <h3 className="text-lg font-semibold">Price:</h3>
              <span className="ml-2">₹{wasteReq.price}</span>
            </div>
            <div className="mt-2">
              <h3 className="text-lg font-semibold">Quantity Available:</h3>
              <span className="ml-2">{wasteReq.quantity}</span>
            </div>
          </div>
          <div className="space-s-1 3xl:pr-48 flex items-center gap-2 border-b border-gray-300  md:pr-32 lg:pr-12 2xl:pr-32">
            <button
              type="button"
              className="h-11 w-full rounded-md bg-[#617a4f] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              onClick={handleContribute}
            >
              Contribute
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WasteReqOverview;