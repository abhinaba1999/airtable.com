import React from "react";
import { Button, Input } from "@chakra-ui/react";
import MainData from "../MainData.json";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "./ComponentsCss/Signin.css";
import { AuthContext } from "../AuthContextProvider/AuthContextProvider";
function LoginAdmine() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const toast = useToast();
  const [datas, setDatas] = React.useState(MainData.adminlogin);
  const navigate = useNavigate();
  const {admineLogin, setAdmineLogin}=React.useContext(AuthContext)


  const handleSubmit = (datas, email, password) => {
    datas.forEach((user) => {
      console.log(email, password);
      if (user.email === email && user.password === password) {
        toast({
          title: "Login Successful",
          description: "You have successfully logged in.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        setAdmineLogin(true);
        admineLogin && navigate("/admin");
      } else {
        toast({
          title: "Login Failed",
          description: "Invalid email or password.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    });
  };
  return (
    <div className="signin-container">
      <div className="signin-heading">
        <h3>Admin Login</h3>

        <div className="signin-form">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(datas, email, password);
            }}
          >
            <Input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />{" "}
            <br />
            <Input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <Button type="submit" value={"submit"}>
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginAdmine;
