import React, { useEffect } from "react";
import { Image, Text, Heading } from "@chakra-ui/react";
import "../SolutinsCss/Products.css";

function Part3() {
  const imageData = [
    "https://images.ctfassets.net/wl95ljfippl8/5KBHiAHtwf6syjB910oKuo/bfa1a57fafdfb0ca9517cd67ddcabfdf/Marketing_Solution_5A__4_.png",
    "https://images.ctfassets.net/wl95ljfippl8/1LiN1mtr9C1OglDWPN5aEy/1254d943290277226b3a6639ff3a75b2/Marketing_Solution_5B.png",
    "https://images.ctfassets.net/wl95ljfippl8/31mUJzyOiAuz7hERYeYwmk/ea01e2acf44e28f7b31e3061424ca0cf/Marketing_Solution_5C.png",
  ];

  const h3Data = [
    "Share assets across the organization",
    "Use insights to guide optimization at scale",
    "Sync files and automate distribution with integrations",
  ];

  const pData = [
    "Organize and share assets across teams with a flexible, adaptable content and asset library",
    "Visualize how vendors, assets, and more, are being used across teams and channels.",
    "Easily centralize assets across different sources and automate publishing across promotional platforms like social media, CMS, and more.",
  ];

  const [imageSrc, setimageSrc] = React.useState(
    "https://images.ctfassets.net/wl95ljfippl8/5KBHiAHtwf6syjB910oKuo/bfa1a57fafdfb0ca9517cd67ddcabfdf/Marketing_Solution_5A__4_.png"
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
