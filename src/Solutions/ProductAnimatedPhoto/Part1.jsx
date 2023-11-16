import React, { useEffect } from "react";
import { Image, Text, Heading } from "@chakra-ui/react";
import '../SolutinsCss/Products.css'

function Part1() {
  const imageData = [
    "https://images.ctfassets.net/wl95ljfippl8/3n916suBtwL7iX44J9nyUg/38b2b3cb1d65f515e81ea1dd5cc7b546/Product_Solution_3A.png",
    "https://images.ctfassets.net/wl95ljfippl8/3KFQc0uFHLQd5fH836GOYI/08ea96a88086971b09fe0476fe1ec629/Product_Solution_3B.png",
    "https://images.ctfassets.net/wl95ljfippl8/42HWx9YDCh11kOhMjyzMPx/9da21e91c2f4936491a399da39041780/Product_Solution_3C.png",
  ];

  const h3Data = [
    "Create a feedback repository",
    "Triage feedback and link to initiatives",
    "Visualize and interpret trends",
  ];

  const pData = [
    "Connect product insights by pulling all feedback-across every tool and source-into a single, easy-to-find place.",
    "Make sure feedback is assessed, linked out to the right initiative or product area, and automatically routed to the right teams for action: all in one place.",
    "View and prioritize insights on customer feedback in real time with built-in, flexible reports and dashboards",
  ];

  const [imageSrc, setimageSrc] = React.useState(
    "https://images.ctfassets.net/wl95ljfippl8/3n916suBtwL7iX44J9nyUg/38b2b3cb1d65f515e81ea1dd5cc7b546/Product_Solution_3A.png"
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
