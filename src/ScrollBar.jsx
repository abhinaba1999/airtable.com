import React from "react";

import styled, { keyframes, css } from "styled-components";

function ScrollBar() {
  const images = [
    "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&uid=R124606927&ga=GA1.1.308265598.1699551194",
    "https://img.freepik.com/free-photo/autumn-season-leafs-plant-scene-generative-ai_188544-7971.jpg?size=626&ext=jpg&uid=R124606927&ga=GA1.1.308265598.1699551194",
    "https://img.freepik.com/free-photo/autumn-leaf-falling-revealing-intricate-leaf-vein-generated-by-ai_188544-9869.jpg?size=626&ext=jpg&uid=R124606927&ga=GA1.1.308265598.1699551194",
    "https://img.freepik.com/free-photo/holy-bible-with-rays-light-coming-out-ai-generative_123827-23906.jpg?size=626&ext=jpg&uid=R124606927&ga=GA1.1.308265598.1699551194",
    "https://img.freepik.com/free-photo/black-white-illustration-man-with-short-hair-black-white-face_188544-12868.jpg?size=626&ext=jpg&uid=R124606927&ga=GA1.1.308265598.1699551194",
    "https://img.freepik.com/free-photo/modern-residential-district-with-green-roof-balcony-generated-by-ai_188544-10276.jpg?size=626&ext=jpg&uid=R124606927&ga=GA1.1.308265598.1699551194",
    "https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds-wallpapers_181624-9331.jpg?size=626&ext=jpg&uid=R124606927&ga=GA1.1.308265598.1699551194",
    "https://img.freepik.com/free-photo/3d-internet-secuirty-badge_1048-18106.jpg?size=626&ext=jpg&uid=R124606927&ga=GA1.1.308265598.1699551194",
    "https://img.freepik.com/free-photo/rpa-concept-with-blurry-hand-touching-screen_23-2149311914.jpg?size=626&ext=jpg&uid=R124606927&ga=GA1.1.308265598.1699551194",
    "https://img.freepik.com/free-photo/transparent-vivid-autumn-leaves_23-2148239689.jpg?size=626&ext=jpg&uid=R124606927&ga=GA1.1.308265598.1699551194",
    
  ];
  return (
    <AppContainer>
      <Warper>
        <Text>Integrate critical workflows</Text>
        <Note>
          Link Airtable to your existing tools, connect important business
          processes, and build more powerful applications.
        </Note>
        <Marquee>
          <MarqueeGroup>
            {images.map((image, index) => (
              <ImageGroup>
                <Image src={image} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {images.map((image, index) => (
              <ImageGroup>
                <Image src={image} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
      </Warper>
    </AppContainer>
  );
}

export default ScrollBar;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  color: #000000;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Warper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.h1`
  font-size: 35px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #02203c;
`;

const Note = styled.p`
  font-size: 18px;
  font-weight: 200;
  margin-bottom: 40px;
  color: #7c8e9a;
`;

const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: none;
`;

const scrollx=keyframes`
 from{
   transform: translateX(0);
 }
 to{
   transform: translateX(-100%);
 }

`

const MarqueeGroup = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap; 
  width: 100%;
  animation: ${scrollx} 20s linear infinite;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmq, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmq, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
