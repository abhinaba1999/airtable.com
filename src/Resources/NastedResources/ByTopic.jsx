import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Text,
  Stack,
  Image,
  Heading,
} from "@chakra-ui/react";
import LearningCenter from "./image/LearningCenter.png";
import GettingStarted from './image/GettingStarted.png'
import HowToToolsTips from './image/How-To-Tools-Tips.png'
import ProductUpdates from './image/ProductUpdates.png'
 
function ByTopic() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <div>
      <Button
        background={"none"}
        color={"default"}
        w={"100%"}
        p={"1rem"}
        ref={btnRef}
        colorScheme="teal"
        onClick={onOpen}
      >
        ByTopic
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>AIRTABLE 101</DrawerHeader>

          <DrawerBody>
            <Stack>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "1rem",
                }}
              >
                <Image
                  w={"50px"}
                  h={"50px"}
                  src={LearningCenter}
                  alt="LearningCenter"
                />
                <Heading fontSize={"xl"}>Learning Center</Heading>
              </div>
              <Text>Hands-on resources to expand your skills</Text>
            </Stack>
          </DrawerBody>
          <DrawerBody>
            <Stack>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "1rem",
                }}
              >
                <Image
                  w={"50px"}
                  h={"50px"}
                  src={GettingStarted}
                  alt="LearningCenter"
                />
                <Heading fontSize={"xl"}>Getting Started</Heading>
              </div>
              <Text>Begin with Airtable basics and set-up</Text>
            </Stack>
          </DrawerBody>
          <DrawerBody>
            <Stack>
              <div
                style={{
                  display: "flex",
                  gap:'2px',
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "1rem",
                }}
              >
                <Image
                  w={"50px"}
                  h={"50px"}
                  src={HowToToolsTips}
                  alt="LearningCenter"
                />
                <Heading fontSize={"xl"}>How-To: Tools & Tips</Heading>
              </div>
              <Text>Learn features, strategies, and flows</Text>
            </Stack>
          </DrawerBody>
          <DrawerBody>
            <Stack>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "1rem",
                }}
              >
                <Image
                  w={"50px"}
                  h={"50px"}
                  src={ProductUpdates}
                  alt="LearningCenter"
                />
                <Heading fontSize={"xl"}>Product Updates</Heading>
              </div>
              <Text>Airtable product news and feature releases</Text>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default ByTopic;
