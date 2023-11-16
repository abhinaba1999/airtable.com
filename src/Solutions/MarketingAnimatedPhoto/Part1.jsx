import React, { useEffect } from "react";
import { Image, Text, Heading } from "@chakra-ui/react";
import '../SolutinsCss/Products.css'

function Part1() {
  const imageData = [
    "https://images.ctfassets.net/wl95ljfippl8/5aoUw4iU79d3WS0QtJNEL1/3328c287fb6695efc819615b9e79a3a4/Marketing_Solution_3A__1_.png",
    "https://images.ctfassets.net/wl95ljfippl8/2oJOcQbEtuBAPUhIzCknyr/926145c4936811023e8de93c3d82aee7/Marketing_Solution_3B.png",
    "https://images.ctfassets.net/wl95ljfippl8/4qs7hXhiWbYdLjlv6dpAs0/edc5afd7153947125454d19449520dc4/Marketing_Solution_3C.png",
  ];

  const h3Data = [
    "Centralize plans across the team",
    "Connect strategy with activities",
    "Prioritize based on budgets and data",
  ];

  const pData = [
    "Bring together project briefs, intake requests and more to make planning more efficient.",
    "Link actions to goals and streamline reporting to see how work connects at every level.",
    "Simplify cross-team prioritization by unifying budgets, capacity, and potential impact.",
  ];

  const [imageSrc, setimageSrc] = React.useState(
    "https://images.ctfassets.net/wl95ljfippl8/5aoUw4iU79d3WS0QtJNEL1/3328c287fb6695efc819615b9e79a3a4/Marketing_Solution_3A__1_.png"
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
      <div className="part1-text">
        {h3Data.map((ele, index) => (
          <>
            <article className="part1-h3" key={index} onClick={() => handleClick(index)}>
              <Heading as="h3">{ele}</Heading>
            </article>
            {open === index && <Text className="part1-p" as="p">{pData[index]}</Text>}
          </>
        ))}
      </div>
      <div className="part1-image">
        <Image src={imageSrc} alt="images" />
      </div>
    </div>
  );
}

export default Part1;
