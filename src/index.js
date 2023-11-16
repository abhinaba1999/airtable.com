import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import AuthContextProvider from "./AuthContextProvider/AuthContextProvider";
import { AuthContext } from "./AuthContextProvider/AuthContextProvider";
import HomePage from "./AfterLogin/HomePage";
import { GoogleOAuthProvider } from "@react-oauth/google";
const root = ReactDOM.createRoot(document.getElementById("root"));

function RootComponent() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <ChakraProvider>{isLoggedIn ? <HomePage /> : <App />}</ChakraProvider>
    </BrowserRouter>
  );
}

root.render(
  <AuthContextProvider>
    <RootComponent />
  </AuthContextProvider>
);
