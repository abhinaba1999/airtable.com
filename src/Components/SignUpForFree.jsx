import React, { useState } from "react";
import { Button, Input, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import datas from "../MainData.json";
import "./ComponentsCss/SignUp.css";
function SignUpForFree() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailPass, setEmailPass] = useState(datas.profile);
  const toast = useToast();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      // foundedUser basically checks if the user already has an account or not.
      const foundedUser = emailPass.find(
        (user) => user.email === email || user.password === password
      );
      // if the user already has an account then it will show an error
      if (foundedUser) {
        toast({
          title: "Error",
          description: "Already have an account",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        navigate("/login");
      } else {
        // else it will create a new account
        const response = await fetch("http://localhost:3004/profile", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
            status: false,
          }),
        });
        // if the account is created then it will show a success message
        if (response.ok) {
          toast({
            title: "Account created.",
            description: "We've created your account for you.",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          navigate("/login");
        } else {
          // if the account is not created then it will show an error.
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
  console.log(datas);

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
