import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Stack,
  Text,
  Image,
  Img,
} from "@chakra-ui/react";
import "../App.css";
import AppBPng from "../image/App-Building.png";
import AiPng from "../image/ai.png";
import ConnectedData from "../image/Connected-data.png";
import GovernanceandScale from "../image/GovernanceandScale.png";
import { useNavigate } from "react-router-dom";

function Platform() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const navigate = useNavigate();

  return (
    <>
      <Button ref={btnRef} bg="none" color="black" m="none" onClick={onOpen}>
        Platform
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="lg"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Platform </DrawerHeader>

          <DrawerBody>
            <Stack
              onClick={() => {
                onClose();
                navigate("/platform");
              }}
            >
              <Text fontSize="3xl" color="#181D26">
                Platform Overview
              </Text>
              <Text fontSize="md" color="#040E20B0">
                Unlock the power of a next-gen app-building platform
              </Text>
            </Stack>
          </DrawerBody>
          <DrawerBody>
            <Stack
              onClick={() => {
                onClose();
                navigate("/platform/App-Building");
              }}
            >
              <div style={{ display: "flex" }}>
                <Image w="50px" h="50px" src={AppBPng} alt="App Building Png" />
                <Text fontSize="3xl" color="#181D26">
                  App Building
                </Text>
              </div>
              <Text fontSize="md" color="#040E20B0">
                Enable teams to build custom business apps—no code needed
              </Text>
            </Stack>
          </DrawerBody>
          <DrawerBody>
            <Stack onClick={()=>{onClose();navigate("/platform/Ai");}}>
              <div style={{ display: "flex" }}>
                <Image src={AiPng} w="50px" h="50px" m="5px" />
                <Text fontSize="3xl" color="#181D26">
                  AI
                </Text>
              </div>
              <Text fontSize="md" color="#040E20B0">
                Transform business workflows with the power of AI
              </Text>
            </Stack>
          </DrawerBody>
          <DrawerBody>
            <Stack onClick={()=>{onClose(); navigate("/platform/Connected-Data");}}>
              <div style={{ display: "flex" }}>
                <Image
                  w="50px"
                  h="50px"
                  src={ConnectedData}
                  alt="Connected Data"
                />
                <Text fontSize="3xl" color="#181D26">
                  Connected Data
                </Text>
              </div>
              <Text fontSize="md" color="#040E20B0">
                Connect data from apps, workflows, and tools to create a source
                of truth
              </Text>
            </Stack>
          </DrawerBody>
          <DrawerBody>
            <Stack onClick={()=>{onClose(); navigate("/platform/Governance-and-Scale");}}>
              <div style={{ display: "flex" }}>
                <Image
                  h="50px"
                  w="50px"
                  src={GovernanceandScale}
                  alt="Governance and Scale"
                />
                <Text fontSize="3xl" color="#181D26">
                  Governance and Scale
                </Text>
              </div>
              <Text fontSize="md" color="#040E20B0">
                Centrally manage security, permissions and data protection at
                scale
              </Text>
            </Stack>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Platform;
