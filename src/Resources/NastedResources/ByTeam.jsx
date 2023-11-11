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
import Product from './image/Product.png'

import Marketing from './image/Marketing.png';

function ByTeam() {
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
          <DrawerHeader>TEAM</DrawerHeader>

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
                  src={Product}
                  alt="Product"
                />
                <Heading fontSize={"xl"}>Product</Heading>
              </div>
              <Text>Stay aligned while creating beloved productsMarketing</Text>
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
                  src={Marketing}
                  alt="Marketing"
                />
                <Heading fontSize={"xl"}>Marketing</Heading>
              </div>
              <Text>Create custom workflows to run campaigns</Text>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default ByTeam;
