import React, { useState } from "react";
import { Button, Input, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import datas from "../MainData.json";
import "./ComponentsCss/SignUp.css";
import axios from "axios";

function SignUpForFree() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailPass, setEmailPass] = useState(datas.profile);
  const toast = useToast();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const foundedUser = emailPass.find(
      (user) => user.email === email || user.password === password
    );

    
    try {
      // Check if the user already exists based on email or password

      if (foundedUser.status) {
        // If the user already exists, show an error message
        toast({
          title: "Error",
          description: "Already have an account",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        navigate("/login"); // Redirect to login page
      } else {
        // Create a new account
        const response = await axios.post("http://localhost:3004/profile", {
          email: email,
          password: password,
          status: false,
          TodoData: [],
        });
         console.log(response.status);
        if (response.status === 201) {
          // If account creation is successful, show a success message
          toast({
            title: "Account created.",
            description: "We've created your account for you.",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          navigate("/login"); // Redirect to login page
        } else {
          // If account creation fails, show an error message
          toast({
            title: "Error",
            description: "Something went wrong",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  console.log(email, password);
  return (
    <div className="sign-up">
      <div className="sign-up-heading">
        <Heading as={"h2"}>Sign Up For Free</Heading>
      </div>
      <form onSubmit={(e) => handleSubmit(e)} className="sign-up-form">
        <Input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          id="email"
          required
          placeholder="Enter your email"
        />

        <Input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          id="password"
          required
          placeholder="Enter your password"
        />
        <Button type="submit">Sign Up</Button>
      </form>
      <div className="sign-up-footer">
        <Text>
          Already have an account?{" "}
          <Link style={{ color: "blue" }} to="/login">
            Log in
          </Link>
        </Text>
      </div>
    </div>
  );
}

export default SignUpForFree;
