import React, { useEffect } from "react";
import { Image, Text, Heading } from "@chakra-ui/react";
import "../SolutinsCss/Products.css";

function Part2() {
  const imageData = [
    "https://images.ctfassets.net/wl95ljfippl8/7tO8x5Y3e4PDjbtYhuvi7d/a4cbbff237d6dbaa0bdffa9719ba3a6d/Marketing_Solution_4A.png",
    "https://images.ctfassets.net/wl95ljfippl8/47JNi0aMILC2Q2riHseofO/6dc39df5c55339f8322a92e9eb96affd/Marketing_Solution_4B.png",
    "https://images.ctfassets.net/wl95ljfippl8/1aIIdocdElbpuXHFFD0CON/75afbcb06ae3e6a2e4cba4cb3049fa2f/Marketing_Solution_4C.png",
  ];

  const h3Data = [
    "Manage campaigns that change fast",
    "See dates, deliverables, and resources",
    "Speed up approvals and requests",
  ];

  const pData = [
    "Visually track the creation, goals, and status of cross-channel campaigns in real time.",
    "Get a unified view of what needs to be delivered, when it's launching, and who owns tasks at every stage.",
    "Send approval requests in Airtable. You'll see status, request volume, and other insights too.",
  ];

  const [imageSrc, setimageSrc] = React.useState(
    "https://images.ctfassets.net/wl95ljfippl8/7tO8x5Y3e4PDjbtYhuvi7d/a4cbbff237d6dbaa0bdffa9719ba3a6d/Marketing_Solution_4A.png"
  );

  const [open, setopen] = React.useState(null);

  useEffect(() => {
    const temp = setInterval(() => {
      const newIndex = (imageData.indexOf(imageSrc) + 1) % imageData.length;
      setimageSrc(imageData[newIndex]);
    }, 6000);

    return () => {
      clearInterval(temp);
    };
  }, [imageSrc]);

  const handleClick = (value) => {
    if (open === value) {
      setopen(null);
    } else {
      setimageSrc(imageData[value]);
      setopen(value);
    }
  };

  return (
    <div className="part1-container">
      <div className="part1-image">
        <Image src={imageSrc} alt="images" />
      </div>
      <div className="part1-text">
        {h3Data.map((ele, index) => (
          <>
            <article
              className="part1-h3"
              key={index}
              onClick={() => handleClick(index)}
            >
              <Heading as="h3">{ele}</Heading>
            </article>
            {open === index && (
              <Text className="part1-p" as="p">
                {pData[index]}
              </Text>
            )}
          </>
        ))}
      </div>
    </div>
  );
}

export default Part2;
