import "./App.css";
import AllRouteElement from "./Elements/AllRouteElement";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Platform from "./Components/Platform";
import Solusation from "./Components/Solusation";
import { Button } from "@chakra-ui/react";
import ScrollBar from "./ScrollBar";
import React, { useEffect } from "react";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header
        id="headar"
        style={{ width: "98%", margin: "auto", padding: "1rem" ,position:"sticky",top:"0",zIndex:"1",background:"white"}}
      >
        <div className="headar-first-text" style={{ textAlign: "center" }}>
          <p>
            Grow with Airtable: Integrate workflows within Airtable to help
            drive rapid iteration{" "}
            <Link
              style={{ color: "#1C3B82" }}
              to="/AutomateyourworkwithAirtable"
            >
              Learn more-->
            </Link>
          </p>
        </div>
        <div
          className="parentNavebar"
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className="navebar-left">
            <div className="logoimage">
              <img
                onClick={() => navigate("/")}
                style={{ width: "2.5rem", background: "none" }}
                src="https://w7.pngwing.com/pngs/444/851/png-transparent-airtable-database-spreadsheet-logo-application-software-slack-logo-angle-rectangle-orange.png"
                alt="main-logo"
              />
              <h2 onClick={() => navigate("/")}>Airtable</h2>
            </div>
            <Platform />
            <Solusation />
          </div>
          <div className="navebar-right">
            <Button
              style={{ background: "noen" }}
              color="black"
              onClick={() => navigate("/Contact-Sales")}
              w={'auto'}
            >
              Contact Sales
            </Button>
            <Button
              style={{ backgroundColor: "#254FAD" }}
              color="#FFFFFF"
              w={'auto'}
              onClick={() => navigate("/sign-up-for-free")}
            >
              Sign up for free
            </Button>
            <Button
              style={{ background: "noen" }}
              onClick={() => navigate("/login")}
              w={'auto'}
            >
              Sign in
            </Button>
          </div>
        </div>
      </header>
      <body style={{ width: "98%", margin: "auto" }}>
        <AllRouteElement />
      </body>

      <footer>
        <div style={{ width: "98%", margin: "20% auto 1rem", height: "100%" }}>
          <ScrollBar />
        </div>
      </footer>
    </div>
  );
}

export default App;
