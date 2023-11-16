import React, { useEffect } from "react";
import { Image, Text, Heading } from "@chakra-ui/react";
import "../SolutinsCss/Products.css";

function Part4() {
  const imageData = [
    "https://images.ctfassets.net/wl95ljfippl8/2n0LvbqeAZhxQyUmxUZwNa/a72621ee97db24513f7b9def4d92672d/Marketing_Solution_6C.png",
    "https://images.ctfassets.net/wl95ljfippl8/6tEm54xJ9y02UNB6qsBwfb/f797006ef9d262ffd96211c20ceaf20b/Marketing_Solution_6B.png",
    "https://images.ctfassets.net/wl95ljfippl8/6ctrNCjKTyNWD2bcnEQKm3/062e99469a1bceee988895bc4d722403/Marketing_Solution_6A.png",
  ];

  const h3Data = [
    "Get answers from your marketing data",
    "Gain insights into workload efficiency",
    "Understand cross-channel campaign impact",
  ];

  const pData = [
    "Integrations and charting help connect operational data and performance metrics, driving more strategic decisions.",
    "Pinpoint hotspots so teams can deliver on time and on budget.",
    "Create customized dashboards highlighting performance across teams and channels.",
  ];

  const [imageSrc, setimageSrc] = React.useState(
    "https://images.ctfassets.net/wl95ljfippl8/2n0LvbqeAZhxQyUmxUZwNa/a72621ee97db24513f7b9def4d92672d/Marketing_Solution_6C.png"
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

export default Part4;
