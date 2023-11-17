import React, { useContext, useEffect, useState } from "react";
import { Button, Input } from "@chakra-ui/react";
import { AuthContext } from "../AuthContextProvider/AuthContextProvider";
import { useToast } from "@chakra-ui/react";
import { Link, Navigate } from "react-router-dom";
import "./ComponentsCss/Signin.css";
import { useNavigate } from "react-router-dom";
import DataBase from "../MainData.json";
function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailPass, setEmailPass] = useState(null);
  const [datas, setDatas] = useState(DataBase.profile);
  const { setIsLoggedIn, setId } = useContext(AuthContext);
  const toast = useToast();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const foundUser = datas.find(
      (user) => user.email === email && user.password === password
    );
    datas.forEach((data) => {
      if (data.email === email && data.password === password) {
        data.status = true;
        setId(data.id);
      }
    });
    if (foundUser.status) {
      toast({
        title: "Login Successful",
        description: "You have successfully logged in.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      setIsLoggedIn(true);
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid email or password.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  }

  return (<>
  
  
    <div className="signin-container">
      <div className="signin-heading">
        <h1>Signin</h1>
      </div>
      <div className="signin-form">
        <form onSubmit={handleSubmit}>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            value={email}
          />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            value={password}
          />
          <Button type="submit">Log In</Button>
        </form>
      </div>

      <div>
        <h2>
          Don't have an account?{" "}
          <Link className="link" to="/Sign-up-for-free">
            Sign up
          </Link>
        </h2>
      </div>
    </div>
      <div >
        <Button
          colorScheme="teal"
          w={"auto"}
          onClick={() => navigate("/adminlogin")}
         m={"auto"}
        >
          Admin Login
        </Button>
      </div>
  </>
  );
}

export default Signin;
