import { FooterThree } from "../Components/Footer"
import { ExampleNavbarFour } from "../Components/NavBarPostLogin"
import { ProductThree } from "../Components/ProductCards"
// import { useLoading } from "../Components/LoadingContext";
// import { useEffect } from "react";

function HomePage() {
  

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
    <div>
        <ExampleNavbarFour/>
        <ProductThree />
        <FooterThree/>
    </div>
  )
}

export default HomePage
