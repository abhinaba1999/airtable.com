import React from "react";
import Datas from "../Components/PlatformMain/Data.json";
import { useEffect } from "react";
import "../Components/ComponentsCss/PlatformMain.css";

import { Heading, Text, Image } from "@chakra-ui/react";
import { Button } from "react-bootstrap";
import ReactPlayer from "react-player";
import Images from "../Components/PlatformMain/data2.json";
import { useNavigate } from "react-router-dom";
function PlatformMain() {
  const [open, setOpen] = React.useState([]);
  const navigate = useNavigate();

  const toggleOpen = (index) => {
    if (open === index) {
      setOpen(null);
    } else {
      setOpen(index);
    }
  };

  return (
    <div className="main">
      <div className="transformBusiness">
        <div className="heading">
          <Heading is="h2" fontSize={"65px"}>
            Transform how your business operates
          </Heading>
          <Text is="p">
            Empower teams to build apps that connect the organization and drive
            outcomes—no code needed.
          </Text>
          <div className="transform-buttons">
            <Button
              style={{
                backgroundColor: "#254FAD",
                color: "white",
                padding: "10px 20px",
                borderRadius: "5px",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
              onClick={() => {
                navigate("/sign-up-for-free");
              }}
            >
              Sign up for free
            </Button>
            <Button
              style={{
                backgroundColor: "#DEE9F8",
                padding: "1rem",
                borderRadius: "5px",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
              onClick={() => {
                navigate("/contact-sales");
              }}
            >
              Contact sales
            </Button>
          </div>
        </div>
        <div className="Transform-Video">
          <ReactPlayer
            url={
              "https://videos.ctfassets.net/wl95ljfippl8/2C0u7sdiofzmOtPE2ZaAWt/d4bc1bc5c022010c6d33e59982bc6393/Tier1_Launch_Hero_2560x1920.mp4"
            }
            playing={true}
            loop
            controls={false}
          />
        </div>
      </div>
      <div className="Used-by-teams">
        <Text as={"p"}>
          Used by teams at over 450,000 forward-thinking organizations
        </Text>
        <div className="teams-image">
          {Images?.map((ele) => (
            <div key={ele.id}>
              <Image src={ele?.Url} alt={ele?.title} />
            </div>
          ))}
        </div>
      </div>
      <div className="A-next-gen-app">
        <div>
          <Heading as={"h2"}>
            A next-gen app platform designed to scale with you
          </Heading>
        </div>
        <div>
          <ReactPlayer
            url={
              "https://videos.ctfassets.net/wl95ljfippl8/6Cel5wiL6sEbs0s5bANoYc/c366d5ba19a0cc215d3f3c6786e1fae5/4Pillars-2560x850__1_.mp4"
            }
            style={{ borderRadius: "10px" }}
            playing={true}
            loop
            controls={false}
            width={"100%"}
            height={"100%"}
          />
        </div>
      </div>
      <div className="use-custom-business-apps--drive-results">
        <div
          style={{ width: "50%", height: "100%", gap: "30px" }}
          className="use-custom-business-apps--drive-results-text"
        >
          <Heading as={"h2"}>Use custom business apps to drive results</Heading>
          <Text as={"p"}>
            Enable teams to work smarter and innovate faster by building and
            connecting powerful apps, without code.
          </Text>
          <Button onClick={() => navigate("/platform/App-Building")}>
            {"Learn more -->"}
          </Button>
        </div>
        <div style={{ width: "50%", height: "auto" }}>
          <ReactPlayer
            url={
              "https://videos.ctfassets.net/wl95ljfippl8/6TMmu8yHACZvkUBgxIfeqU/a3794e6c3adaeca19ae1ff9b8326b539/Build_Anim_2000x1500.mp4"
            }
            playing={true}
            loop
            controls={false}
            width={"100%"}
          />
        </div>
      </div>
      <div className="use-custom-business-apps--drive-results">
        <div style={{ width: "50%", height: "auto" }}>
          <ReactPlayer
            url={
              "https://videos.ctfassets.net/wl95ljfippl8/4bD3FKORUDsfFYga6nByvg/8b65ac19163dfa6d5262338a7ba0f68b/TransformWorfklowsWithAI_2000x1500.mp4"
            }
            playing={true}
            loop
            controls={false}
            width={"100%"}
          />
        </div>
        <div
          style={{ width: "50%", height: "100%", gap: "30px" }}
          className="use-custom-business-apps--drive-results-text"
        >
          <Heading as={"h2"}>
            Transform every workflow with the power of AI
          </Heading>
          <Text as={"p"}>
            Boost productivity and efficiency across your organization by
            embedding AI directly into every workflow.
          </Text>
          <Button onClick={() => navigate("/platform/Ai")}>
            {"Learn more -->"}
          </Button>
        </div>
      </div>
      <div className="use-custom-business-apps--drive-results">
        <div
          style={{ width: "50%", height: "100%", gap: "30px" }}
          className="use-custom-business-apps--drive-results-text"
        >
          <Heading as={"h2"}>
            Drive org-wide alignment through shared data
          </Heading>
          <Text as={"p"}>
            Create a single source of truth and reduce risk by giving teams
            across your organization access to accurate, verified data.
          </Text>
          <Button onClick={() => navigate("/platform/Connected-Data")}>
            {"Learn more -->"}
          </Button>
        </div>
        <div style={{ width: "50%", height: "auto" }}>
          <ReactPlayer
            url={
              "https://videos.ctfassets.net/wl95ljfippl8/7BFWCiPPeoIjTqOPPA5n9K/3aa772f83fd21b4db8c40eecf8529cdc/Data-2000x1500.mp4"
            }
            playing={true}
            loop
            controls={false}
            width={"100%"}
          />
        </div>
      </div>
      <div className="use-custom-business-apps--drive-results">
        <div style={{ width: "50%", height: "auto" }}>
          <ReactPlayer
            url={
              "https://videos.ctfassets.net/wl95ljfippl8/e3746bEe9AZDPGTxYqiE1/2638703eae74b29613e4ede0a997cab4/Governance_Anim_2000x1500.mp4"
            }
            playing={true}
            loop
            controls={false}
            width={"100%"}
          />
        </div>
        <div
          style={{ width: "50%", height: "100%", gap: "30px" }}
          className="use-custom-business-apps--drive-results-text"
        >
          <Heading as={"h2"}>Manage, grow, and scale with confidence</Heading>
          <Text as={"p"}>
            Scale across your organization without slowing teams down, while
            ensuring you have the security you need in place.
          </Text>
          <Button onClick={() => navigate("/platform/Governance-and-Scale")}>{"Learn more -->"}</Button>
        </div>
      </div>
      <div className="wrapper">
        <Heading color="#8E949D" m={"3rem"}>
          FAQ
        </Heading>
        <Heading m={"3rem"} fontSize={"3rem"}>
          You have questions? We have answers.
        </Heading>
        {Datas?.map((data, index) => (
          <div key={index} className="container">
            <article onClick={() => toggleOpen(index)} className="question">
              <h1>{data?.question}</h1>
              <Button>{open === index ? "-" : "+"}</Button>
            </article>

            {open === index  && (
              <article className="answer">
                <p className="answer">{data?.answer}</p>
              </article>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlatformMain;
