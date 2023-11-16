import { Heading, Text, Button, Image } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../Solutions/SolutinsCss/HumanResources.css";
function HumanResources() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="human-resources">
        <Heading as={"h2"}>
          Strategic HR teams use Airtable to create high performing teams
        </Heading>
        <Text as={"p"}>
          Manage recruiting pipeline, streamline your onboarding processes, and
          keep your team aligned as your company grows.
        </Text>
        <div className="human-resources-button">
          <Button
            onClick={() => navigate("/sign-up-for-free")}
            style={{ background: "#254FAD", color: "white" }}
          >
            Sign Up For Free
          </Button>
          <Button onClick={() => navigate("/Contact-Sales")}>
            Contact Sales
          </Button>
        </div>
      </div>

      <div className="human-resources-image-container-parent">
        <div className="human-resources-image-container-text-left">
          <Heading as={"h2"}>Streamline new hire onboarding</Heading>
          <Text as={"p"}>
            Create a standard process for onboarding to ensure new employees are
            set up for success - and easily adapt your process as your org
            matures.
          </Text>
        </div>
        <div className="human-resources-image-container-image-right">
          <Image
            src="https://images.ctfassets.net/wl95ljfippl8/6z5R5DPgditbzLHgrO9TL8/2b37b0a9fcaceae801d56cff14102788/Group_1341__1_.png?w=1920"
            alt="onboarding"
          />
        </div>
      </div>

      <div className="human-resources-image-hiring-process-parent">
        <div className="human-resources-image-hiring-process-text-left">
          <Heading as={"h2"}>
            Keep your team aligned throughout the hiring process
          </Heading>
          <Text as={"p"}>
            Easily collaborate on hiring plans, interview needs, and more to
            attract and hire top talent.
          </Text>
        </div>
        <div className="human-resources-image-hiring-process-image-right">
          <Image
            src="https://images.ctfassets.net/wl95ljfippl8/v696xuKvipLDQIxp2Byqi/ba2f562233fb191fc7e3aee3eb0374f0/functions-hr-lp_feature-2_v2.png?w=1920"
            alt="hiring process"
          />
        </div>
      </div>

      <div className="human-resources-image-hiring-process-parent">
        <div className="human-resources-image-hiring-process-image-right">
          <Image
            src="https://images.ctfassets.net/wl95ljfippl8/7zMuF9K5SXil6L6sU7qkTt/0a9ec1e4ad004131fddcdfbbf47bce6f/functions-hr-lp_feature-3.png?w=1920"
            alt="hiring process"
          />
        </div>
        <div className="human-resources-image-hiring-process-text-left">
          <Heading as={"h2"}>
            Create a single source of truth for your HR policies
          </Heading>
          <Text as={"p"}>
            Easily organize and update all your HR info and resources in one
            place, so your team can find what they need when they need it.
          </Text>
        </div>
      </div>

      <div className="human-resources-image-hiring-process-parent">
        <div className="human-resources-image-hiring-process-text-left">
          <Heading as={"h2"}>Get a full picture of your organization</Heading>
          <Text as={"p"}>
            Visualize your org chart and people data to keep your entire company
            connected and adapt quickly as your team grows and changes.
          </Text>
        </div>
        <div className="human-resources-image-hiring-process-image-right">
          <Image
            src="https://images.ctfassets.net/wl95ljfippl8/65km9hFmnIffYMVtIa8PU6/a2ae306633bfa04e425167d2481fbd71/functions-hr-lp_feature-4_v2.png?w=1920"
            alt="hiring process"
          />
        </div>
      </div>
    </div>
  );
}

export default HumanResources;
