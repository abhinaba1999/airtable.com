import React, { useEffect } from "react";
import { Image, Text, Heading } from "@chakra-ui/react";
import "../SolutinsCss/Products.css";

function Part2() {
  const imageData = [
    "https://images.ctfassets.net/wl95ljfippl8/5X7LEHWlP9y6xBhLAWAswF/659fb6ad4e78be300c299c8bf7428491/Product_Solution_4A.png",
    "https://images.ctfassets.net/wl95ljfippl8/3bZYJX3d7NU8qnNF8sU0is/6ba901580525fa615e1055739e52b031/Product_Solution_4B.png",
    "https://images.ctfassets.net/wl95ljfippl8/6K98OO1uI4CPqwQlhUtpUB/bed4d9f8e1b6092d4e7a37d06e1439b6/Product_Solution_4C.png",
  ];

  const h3Data = [
    "Set key initiatives and align teams",
    "Keep tabs on OKR progress",
    "Prioritize features to inform your roadmap",
  ];

  const pData = [
    "An executive dashboard lets you get granular with KRS. See health, status, and associated information like objectives or projects",
    "Custom views give stakeholders insight into OKR status, completion rates, risk scores, and more-all in real time.",
    "Automatically score and prioritize features-linked to specific OKRS and customer feedback-using custom criteria.",
  ];

  const [imageSrc, setimageSrc] = React.useState(
    "https://images.ctfassets.net/wl95ljfippl8/5X7LEHWlP9y6xBhLAWAswF/659fb6ad4e78be300c299c8bf7428491/Product_Solution_4A.png"
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
