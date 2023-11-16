import React, { useEffect } from "react";
import { Image, Text, Heading } from "@chakra-ui/react";
import "../SolutinsCss/Products.css";

function Part3() {
  const imageData = [
    "https://images.ctfassets.net/wl95ljfippl8/72EffP9wpGfwlA7704gHLa/a57d2bcc9ac9762a8fd52dc53dfc0c85/Product_Solution_5A.webp",
    "https://images.ctfassets.net/wl95ljfippl8/4bm9cVaeZ0crSqGHUM1fnY/51ce886a931ff9f56186c91b263d61a2/Product_Solution_5B.png",
    "https://images.ctfassets.net/wl95ljfippl8/3ugrRDzh3UE2lEaRBtQjZ6/ec661ef200469f57fb4436f787d57b3e/Product_Solution_5C.png",
  ];

  const h3Data = [
    "Create a centralized roadmap",
    "Manage sprints and delivery",
    "Keep launches on track",
  ];

  const pData = [
    "Align around a flexible, organization-wide roadmap. Customizable views let any department see their role, and plan accordingly",
    "Keep every team member and every project up to date: run stand- ups, view sprint status, or sync tasks from critical systems like Jira and GitHub.",
    "Speed up work and keep teams moving with automations. You can set reminders, solicit feedback, even request approvals.",
  ];

  const [imageSrc, setimageSrc] = React.useState(
    "https://images.ctfassets.net/wl95ljfippl8/72EffP9wpGfwlA7704gHLa/a57d2bcc9ac9762a8fd52dc53dfc0c85/Product_Solution_5A.webp"
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
      <div className="part1-image">
        <Image src={imageSrc} alt="images" />
      </div>
    </div>
  );
}

export default Part3;
