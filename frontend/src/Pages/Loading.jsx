// LoadingComponent.jsx

import Lottie from 'react-lottie';
import animationData from '../assets/Loading.json';

const LoadingComponent = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-white bg-opacity-50">
      <Lottie options={defaultOptions} height={150} width={150} />
    </div>
  );
}

export default LoadingComponent;
