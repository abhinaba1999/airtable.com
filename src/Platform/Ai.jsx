import React from "react";
import Datas from "../Components/PlatformMain/Data.json";
import { useNavigate } from "react-router-dom";
import { Heading, Button, Text, Image } from "@chakra-ui/react";
import "../Platform/PlatformCss/Ai.css";
import ReactPlayer from "react-player";

function Ai() {
  const [open, setOpen] = React.useState("");
  const navigate = useNavigate();

  const toggleOpen = (index) => {
    if (open === index) {
      setOpen(null);
    } else {
      setOpen(index);
    }
  };
  return (
    <>
      <div className="parent">
        <div className="way-to-deploy-ai">
          <Heading as={"h2"}>The fastest and easiest way to deploy AI</Heading>
          <Text as={"p"}>Now available in beta for current Airtable users</Text>
          <div style={{ display: "flex", gap: "1rem", padding: "2rem" }}>
            <Button
              style={{
                background: "#257AF9",
                color: "white",
                fontSize: "18px",
              }}
              onClick={() => {
                navigate("/sign-in");
              }}
            >
              Join the beta
            </Button>
            <Button
              fontSize={"18px"}
              onClick={() => {
                navigate("/sign-in");
              }}
            >
              Watch a demo
            </Button>
          </div>
        </div>
        <div className="video-player-top">
          <ReactPlayer
            url={
              "https://videos.ctfassets.net/wl95ljfippl8/tiaWEJEBEnBbTqS3yPybM/7df0fbbcf05c333022fa938e61e249b8/TransformWorfklowsWithAI_2000x1125.mp4"
            }
            playing={true}
            loop
            muted
            width="100%"
            height="100%"
          />
        </div>
        <div className="parent-generative-ai">
          <div className="parent-generative-ai-text">
            <Heading
              as={"h2"}
              style={{ padding: "1rem", color: "white", fontSize: "3rem" }}
            >
              Transform every workflow with generative AI
            </Heading>
            <Text style={{ padding: "1rem", color: "white" }} as={"p"}>
              Effortlessly add advanced AI models directly to your apps in
              minutes. Only Airtable makes AI accessible enough that your team
              can integrate it into every piece of their work.
            </Text>
          </div>
          <div className="parent-generative-ai-video-player">
            <ReactPlayer
              url={
                "https://videos.ctfassets.net/wl95ljfippl8/6P6LaCsJSGb45DKz3jCYH/e7c4d73a3e9ab6f29990af042fe582e2/01_AI_Transform_Every_Workflow_2560x1920__1_.mp4"
              }
              playing={true}
              loop
              muted
              width="100%"
              height="100%"
            />
          </div>
        </div>
        <div className="parent-generative-ai">
          <div className="parent-generative-ai-video-player">
            <ReactPlayer
              url={
                "https://videos.ctfassets.net/wl95ljfippl8/6K45zuCZWli79LeZbATNZN/aa6def3d69d8ffd47a3cf3e248820d5c/02_AI_QuickToDeploy_2560x1920__1___1_.mp4"
              }
              playing={true}
              loop
              muted
              width="100%"
              height="100%"
            />
          </div>
          <div className="parent-generative-ai-text">
            <Heading
              as={"h2"}
              style={{ padding: "1rem", color: "white", fontSize: "3rem" }}
            >
              Quick to deploy. Easy to iterate.
            </Heading>
            <Text style={{ padding: "1rem", color: "white" }} as={"p"}>
              Airtable's intuitive platform speeds up AI enablement across your
              organization. Rapidly iterate and refine your AI workflows as you
              build internal know-how.
            </Text>
          </div>
        </div>
        <div className="parent-generative-ai">
          <div className="parent-generative-ai-text">
            <Heading
              as={"h2"}
              style={{ padding: "1rem", color: "white", fontSize: "3rem" }}
            >
              One platform. Countless AI workflows.
            </Heading>
            <Text style={{ padding: "1rem", color: "white" }} as={"p"}>
              No extra tools needed. Leverage Airtable’s flexible relational
              database and your real-time shared data to supercharge every
              workflow across the organization.
            </Text>
          </div>
          <div className="parent-generative-ai-video-player">
            <ReactPlayer
              url={
                "https://videos.ctfassets.net/wl95ljfippl8/3ufTG5OfhJ7nTkm7UFtr7l/402792ff0f3e95bc84f835116292491d/03_AI_OnePlatform_2560x1920__4_.mp4"
              }
              playing={true}
              loop
              muted
              width="100%"
              height="100%"
            />
          </div>
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

            {open === index && (
              <article className="answer">
                <p className="answer">{data?.answer}</p>
              </article>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Ai;
