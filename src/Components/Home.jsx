import React, { useEffect, useReducer, useRef, useState } from "react";
import HomeTopImageInside from "./Home-images/Home-top-img-inside.png";
import "./ComponentsCss/Home.css";
import { Heading, Button, Text, Image } from "@chakra-ui/react";
import OperationalizeImage from ".//Home-images/Operationalizeyourcriticaldata.png";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import HomeComponent from "./HomeComponent/HomeComponent";

import "./ComponentsCss/Home.css";

function Home() {
  let url1 =
    "https://videos.ctfassets.net/wl95ljfippl8/VFd3XWmGbDVEucDUVZYbR/ecf76f3bc346bfaf092787c9bb819a4f/equinox_compressed.mp4#t=0.5";

  const [ProgressImage, setProgressImage] = React.useState([
    "https://images.ctfassets.net/wl95ljfippl8/43mx2YzU4bpMiOgsQhCcqW/6f0eb61c2b5614218b8ba7a0553680c9/Product.jpg",

    "https://images.ctfassets.net/wl95ljfippl8/67w5wXJatBGiypJYBodExU/600c79276433b0a6b034ff505fd81225/Operations.webp",

    "https://images.ctfassets.net/wl95ljfippl8/7IK2gx05XtMbjmK7r9GZI7/1a0a99f51468e019cc9125c1cf933ef6/Finance.webp",

    "https://images.ctfassets.net/wl95ljfippl8/51zIaGAxKdp4fzSRLW9x6p/cccdc28bd0117c81f415d2479ca32b6c/HR.webp",

    "https://images.ctfassets.net/wl95ljfippl8/6tEm54xJ9y02UNB6qsBwfb/f797006ef9d262ffd96211c20ceaf20b/Marketing_Solution_6B.png",
  ]);

  const [imageUrl, setimageUrl] = useState(
    "https://images.ctfassets.net/wl95ljfippl8/6tEm54xJ9y02UNB6qsBwfb/f797006ef9d262ffd96211c20ceaf20b/Marketing_Solution_6B.png"
  );
  const navigate = useNavigate();
  useEffect(() => {
    let i = 0;

    const updateImageUrl = () => {
      if (i === ProgressImage.length - 1) {
        i = 0;
      }
      if (i < ProgressImage.length) {
        setimageUrl(ProgressImage[i]);

        i++;
        setTimeout(updateImageUrl, 7000);
      }
    };

    setTimeout(updateImageUrl, 7000);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(updateImageUrl);
  }, [ProgressImage]);
  const [value, setValue] = React.useState(0);
  let time;

  useEffect(() => {
    time = setInterval(() => {
      setValue((privvalue) => privvalue + 1);
    }, 100);
  }, []);

  return (
    <div id="home">
      <div id="homeTopImage" style={{ borderRadius: "20px" }}>
        <div style={{ width: "50%", padding: "1rem" }}>
          <Heading as="h2" p={"6"} fontSize={"7xl"}>
            The fastest way to build apps
          </Heading>
          <Text as="p" fontSize={"larger"} p={"6"}>
            Empower your team to work faster and more confidently than ever
            before.
          </Text>
          <div display={"flex"} justifyContent={"space-around"}>
            <Button
              p={"2"}
              m={"3"}
              background={"#1C3B82"}
              color={"white"}
              onClick={() => {
                navigate("/sign-up-for-free");
              }}
            >
              Sign up for free
            </Button>
            <Button m={"2"} onClick={() => navigate("/contact-sales")}>
              Contact Sales
            </Button>
          </div>
        </div>
        <div style={{ width: "50%" }}>
          <img
            style={{ borderRadius: "20px" }}
            src={HomeTopImageInside}
            alt="Home Top Image Inside"
          />
        </div>
      </div>
      <div className="sixbrand">
        <Image
          src="https://images.ctfassets.net/wl95ljfippl8/5NsQDhM8mFERomtb0YnTyy/eaf010080126335cd1c3ff6d44d03adf/coleHaan-grayscale.svg"
          alt="Cole Haan"
        />
        <Image
          src="https://images.ctfassets.net/wl95ljfippl8/3d0dgz7cuh8WMJvduMtnB0/7f6476017b9c8e04aac6454056aa5ab7/expedia-grayscale.svg"
          alt="Expedia"
        />
        <Image
          src="https://images.ctfassets.net/wl95ljfippl8/38Mb9jhrpeEPTjXoP435aU/0ddee3d6a19f78f75cdf34ff2c604e08/levis-grayscale.svg"
          alt="Levis"
        />
        <Image
          src="https://images.ctfassets.net/wl95ljfippl8/1FY36Z77bS6isAXbe68cMV/ddf540991fd643c6333c0689dd3ce42d/time-grayscale.svg"
          alt="Time"
        />
        <Image
          src="https://images.ctfassets.net/wl95ljfippl8/2rX3B5VldAdP4SqQpZTJgh/026b1e9f3045f8a2b58e3b7c63606d10/shopify-grayscale.svg"
          alt="shopify"
        />
        <Image
          src="https://images.ctfassets.net/wl95ljfippl8/6IvvinEh0VFlx2K00AUSwP/11dce8816d7b671f8d98ac2d66eb2a0b/medium-grayscale.svg"
          alt="medium"
        />
      </div>
      <div className="operationalize">
        <Heading as="h2" className="operationalizeHeading">
          Operationalize your critical data, move beyond rigid tools, and
          reimagine workflows with AI. No code required.
        </Heading>
        <Image
          width={"100%"}
          src={OperationalizeImage}
          alt="Operationalize Image"
        />
      </div>
      <div className="player-parent">
        <div className="player-container">
          <ReactPlayer
            className="react-pl ayer"
            playing={true}
            loop
            playIcon={"none"}
            url={
              "https://videos.ctfassets.net/wl95ljfippl8/7zF9WY7AzMowHl5XcvOxFj/537c723d733d71843b824337ef3e515e/PlatformOverview-2000x1500.mp4"
            }
            width={"auto"}
            controls={false}
            muted={true}
          />
        </div>
        <div className="player-text">
          <Heading as="h2">Simple to build. Intuitive to use.</Heading>
          <Text as="p">
            Enable those closest to the real-world details of your business to
            customize the apps that accelerate how work gets done.
          </Text>
        </div>
      </div>
      <div className="parent-progress-data">
        <Heading as="h2" fontSize={"40px"}>
          No matter your workflow,you can build it in Airtable
        </Heading>
        <Text as="p" fontSize={"20px"}>
          End silos with a unique platform that connects every part of your
          work.
        </Text>
      </div>
      <div id="parent-progress-data">
        <div>
          <Image w={"40rem"} src={imageUrl} alt="" />
        </div>
        <div>
          <div
            className="parent-progress-bar"
            onClick={() => navigate("/Solutions/Marketing")}
          >
            <HomeComponent value={value} setValue={setValue} />
            <Heading as="h2" fontSize={"auto"}>
              Marketing
            </Heading>
            <Text fontSize={"auto"} as="p">
              Create custom workflows to run campaigns and track successes.
            </Text>
          </div>
          <div
            className="parent-progress-bar"
            onClick={() => navigate("/Solutions/Product")}
          >
            <HomeComponent value={value} setValue={setValue} />
            <Heading as="h2" fontSize={"auto"}>
              Product
            </Heading>
            <Text as="p" fontSize={"auto"}>
              Build roadmaps and alignment while creating products customers
              love.
            </Text>
          </div>
          <div
            className="parent-progress-bar"
            onClick={() => navigate("/Solutions/Operations")}
          >
            <HomeComponent value={value} setValue={setValue} />
            <Heading as="h2" fontSize={"auto"}>
              Operations
            </Heading>
            <Text as="p" fontSize={"auto"}>
              Bring your data and processes into a single, well-organized place.
            </Text>
          </div>
          <div
            className="parent-progress-bar"
            onClick={() => navigate("/Solutions/Finance")}
          >
            <HomeComponent value={value} setValue={setValue} />
            <Heading as="h2" fontSize={"auto"}>
              Finance
            </Heading>
            <Text as="p" fontSize={"auto"}>
              Streamline requests, manage budgets, and automate reporting.
            </Text>
          </div>
          <div
            className="parent-progress-bar"
            onClick={() => navigate("/Solutions/HumanResources")}
          >
            <HomeComponent value={value} setValue={setValue} />
            <Heading fontSize={"auto"}>Human Resources</Heading>
            <Text fontSize={"auto"}>
              Manage and streamline processes from hire to retire.
            </Text>
          </div>
        </div>
      </div>
      <div id="parent-video-of-ai">
        <div id="aivideo">
          <ReactPlayer
            url={
              "https://videos.ctfassets.net/wl95ljfippl8/1UxBkjvYjPuBfx9JFWeREN/0fe87b440f3b14b6b50977b6f99b4da2/TransformWorfklowsWithAI_2000x857.mp4"
            }
            playing={true}
            loop
            muted={true}
            controls={false}
            width={'auto'}
            height={'auto'}
          />
        </div>
        <div id="aivideo-text" onClick={() => navigate("/platform/Ai")}>
          <Text fontSize={"x-large"} as="bold">
            In beta
          </Text>
          <Heading as="h2">Transform workflows with the power of AI</Heading>
          <Text as="p">
            With our native AI components, dynamic AI functionality is at your
            fingertips in minutes.
          </Text>
          <Button>Learn more</Button>
        </div>
      </div>

      <div className="parent-video-of-equinox" style={{ width: "100%" }}>
        <video width={"100%"} height={"100%"} src={url1} alt="video-of-equinox" autoPlay loop muted />

        <div className="equinox-text">
          <Heading as="h2" color={"white"}>
            E Q U I N O X
          </Heading>
          <Heading as="h2" color={"#F797B0"}>
            40X
          </Heading>
          <Text as="p" color={"white"}>
            more on-demand content
          </Text>
          <Heading as="h2" color={"#C6A9F5"}>
            400%
          </Heading>
          <Text as="p" color={"white"}>
            decrease in publishing time
          </Text>

          <a
            href="https://www.airtable.com/customer-stories/how-equinox-media-publishes-content-4x-faster-with-airtable"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button w={'auto'} background={"none"} color={"white"}>
              Read Equinox case study ->
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
