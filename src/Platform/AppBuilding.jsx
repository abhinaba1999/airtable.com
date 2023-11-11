import { Heading, Text, Button,Image } from "@chakra-ui/react";
import React from "react";
import '../Components/ComponentsCss/AppBuilding.css'
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import { FcApproval } from "react-icons/fc";

function AppBuilding() {
  const navigate = useNavigate();
  return (
    <>
      <div className="AppBuilding-top-section">
        <div className="AppBuilding-top-section-text">
          <Heading as={"h2"}>Create apps that drive business impact</Heading>
          <Text as={"p"}>
            The fastest way to build, customize, and share powerful
            applications.
          </Text>
          <div className="AppBuilding-top-section-button">
            <Button
              background={"#254FAD"}
              color={"white"}
              onClick={() => navigate("/sign-up-for-free")}
            >
              Sign Up For Free
            </Button>
            <Button onClick={() => navigate("/Contact-Sales")}>
              Contact Sales
            </Button>
          </div>
        </div>
        <div className="AppBuilding-top-section-video">
          <ReactPlayer
            url={
              "https://videos.ctfassets.net/wl95ljfippl8/6TMmu8yHACZvkUBgxIfeqU/a3794e6c3adaeca19ae1ff9b8326b539/Build_Anim_2000x1500.mp4"
            }
            playing={true}
            loop
            muted
            width={"100%"}
            height={"100%"}
          />
        </div>
      </div>
      <div className="Strong-foundation-parent-section">
        <div className="Strong-foundation-image">
          <Image
            src="https://images.ctfassets.net/wl95ljfippl8/6c523SQY3ml50diKE6NbBO/2e9fad6c6c5d9a8ab623a9ae76fb3361/1.jpg?w=1920"
            alt="marketing image"
          />
        </div>
        <div className="Strong-foundation-ul-list">
          <Heading as={"h2"}>Create a strong foundation</Heading>
          <ul>
            <li>
              Build a database for your workflow using tables, records, and
              custom fields
            </li>
            <li>
              Link data across tables to make it actionable and connect work
            </li>
            <li>
              Link data across tables to make it actionable and connect work
              Visualize work in various ways with customizable views
            </li>
          </ul>
        </div>
      </div>
      <div className="Strong-foundation-parent-section">
        <div className="Strong-foundation-ul-list">
          <Heading as={"h2"}>Design and customize apps</Heading>
          <ul>
            <li>
              Create apps in minutes from your existing data with Interface
              Designer
            </li>
            <li>
              Drag and drop elements to make information digestible and
              actionable
            </li>
            <li>Start from pre-built layouts that flex to meet your needs</li>
          </ul>
        </div>
        <div className="Strong-foundation-image">
          <Image
            src="https://images.ctfassets.net/wl95ljfippl8/4ZCamBlOazvFKU7oCWjVQ5/7c79ac8b6afffd49bc6befb0edf12b99/2.jpg?w=1920"
            alt="marketing image"
          />
        </div>
      </div>
      <div className="Strong-foundation-parent-section">
        <div className="Strong-foundation-image">
          <Image
            src="https://images.ctfassets.net/wl95ljfippl8/7230f9xjofxAOX6rT0u3uX/c08ee870fb0c282f1544740a51913cb4/3.png?w=1920"
            alt="marketing image"
          />
        </div>
        <div className="Strong-foundation-ul-list">
          <Heading as={"h2"}>Share apps across your organization</Heading>
          <ul>
            <li>Control how apps are shared by user, team, or organization</li>
            <li>
              Create personalized experiences with key information for each
              teammate
            </li>
            <li>
              Set custom permissions so the right people have the right info
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default AppBuilding;
