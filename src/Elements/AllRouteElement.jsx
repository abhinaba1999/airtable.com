import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import AutomateyourworkwithAirtable from "../Components/AutomateyourworkwithAirtable";
import Pricing from "../Components/Pricing";
import Platform from "../Components/Platform";
import AppBuilding from "../Platform/AppBuilding";
import Ai from "../Platform/Ai";
import ConnectedData from "../Platform/ConnectedData";
import GovernanceandScale from "../Platform/GovernanceandScale";
import Finance from "../Solutions/Finance";
import Sales from "../Solutions/Sales";
import HumanResources from "../Solutions/HumanResources";
import PlatformMain from "../Components/PlatformMain";
import Operations from "../Solutions/Operations";
import Marketing from "../Solutions/Marketing";
import Product from "../Solutions/Product";
import SignupForFree from "../Components/SignUpForFree";
import ContactSales from "../Components/ContactSales";
import Signin from "../Components/Signin";
import AdminePage from "../Components/AdminePage";
import LoginAdmine from "../Components/LoginAdmine";
import { AuthContext } from "../AuthContextProvider/AuthContextProvider";
function AllRouteElement() {
  const {admineLogin, setAdmineLogin}=React.useContext(AuthContext)
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Signin />} />
        <Route
          path="/AutomateyourworkwithAirtable"
          element={<AutomateyourworkwithAirtable />}
        />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/platform" element={<PlatformMain />} />
        <Route path="/platform/App-Building" element={<AppBuilding />} />
        <Route path="/platform/Ai" element={<Ai />} />
        <Route path="/platform/Connected-Data" element={<ConnectedData />} />
        <Route
          path="/platform/Governance-and-Scale"
          element={<GovernanceandScale />}
        />
        <Route path="/adminlogin" element={<LoginAdmine />} />

        {admineLogin && <Route path="/admin" element={<AdminePage />} />}
        <Route path="/Contact-Sales" element={<ContactSales />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up-for-free" element={<SignupForFree />} />
        <Route path="/Solutions/Product" element={<Product />} />
        <Route path="/Solutions/Marketing" element={<Marketing />} />
        <Route path="/Solutions/Operations" element={<Operations />} />
        <Route path="/Solutions/HumanResources" element={<HumanResources />} />
        <Route path="/Solutions/Sales" element={<Sales />} />
        <Route path="/Solutions/Finance" element={<Finance />} />
      </Routes>
    </div>
  );
}

export default AllRouteElement;
