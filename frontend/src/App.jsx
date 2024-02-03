// App.jsx

import { LoadingProvider, useLoading } from './Components/LoadingContext';
import LoadingComponent from './Pages/Loading';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginScreen';
import SignupPage from './Pages/SignUpScreen';
import ForgotPasswordPage from './Pages/ForgotPassword';
import HomePage from './Pages/HomePage';
import ProductForm from './Pages/InnovativeProductForm';
import WasteReqForm from './Pages/WasteRequirementForm';
import ProductOverviewTwo from './Pages/ProductOverview';
import ContributorForm from './Pages/ContributorForm';
import ProfilePage from './Pages/ProfilePage';
import SatisfiedRequirementsPage from './Pages/SatisfiedRequirementsPage'

import './App.css';
import { HeroThree } from './Pages/IntroScreen';
import TableOne from './Pages/About';

const MainWithLoading = () => {
  const { isLoading } = useLoading();

  return (
    <>
      {isLoading && <LoadingComponent />}
      <Routes>
        <Route path="/" element={<HeroThree />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/iproductform" element={<ProductForm />} />
        <Route path="/wreqform" element={<WasteReqForm />} />
        <Route path="/product/:id" element={<ProductOverviewTwo />} />
        <Route path="/contribute/:id" element={<ContributorForm />} />
        <Route path="/profile" element={<ProfilePage/>} />
        <Route path="/satisfiedRequirements" element={<SatisfiedRequirementsPage/>} />
        <Route path="/about" element={<TableOne/>} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <LoadingProvider>
      <MainWithLoading />
    </LoadingProvider>
  );
}

export default App;