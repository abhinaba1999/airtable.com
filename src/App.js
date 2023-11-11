import "./App.css";
import AllRouteElement from "./Elements/AllRouteElement";
import { Link, useNavigate } from "react-router-dom";
import Platform from "./Components/Platform";
import Solusation from "./Components/Solusation";
import Resources from "./Components/Resources";
import { Button } from "@chakra-ui/react";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <header
        id="headar"
        style={{ width: "98%", margin: "auto", padding: "1rem" }}
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
                style={{ width: "40px", background: "none" }}
                src="https://w7.pngwing.com/pngs/444/851/png-transparent-airtable-database-spreadsheet-logo-application-software-slack-logo-angle-rectangle-orange.png"
                alt="main-logo"
              />
              <h2 onClick={() => navigate("/")}>Airtable</h2>
            </div>
            <Platform />
            <Solusation />
            <Resources />
            <Button
              style={{ background: "none", border: "no-border" }}
              onClick={() => navigate("/pricing")}
            >
              Pricing
            </Button>
          </div>
          <div className="navebar-right">
            <Button style={{ background: "noen" }} color="black" onClick={() => navigate("/Contact-Sales")}>Contact Sales</Button>
            <Button style={{backgroundColor:"#254FAD"}} color="#FFFFFF" onClick={() => navigate("/sign-up-for-free")}>
              Sign up for free
            </Button>
            <Button style={{ background: "noen" }} onClick={() => navigate("/login")}>Sign in</Button>
          </div>
        </div>
      </header>
      <body style={{ width: "98%", margin: "auto" }}>
        <AllRouteElement />
      </body>
    </div>
  );
}

export default App;
