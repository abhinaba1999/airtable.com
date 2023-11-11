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
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

function Solusation() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const navigate=useNavigate()
  return (
    <>
      <Button ref={btnRef} bg="none" color="black" m="none" onClick={onOpen}>
        Solutions
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
          <DrawerHeader>Solutions </DrawerHeader>

          <DrawerBody>
            <Stack
              onClick={() => {
                onClose();
                navigate("/Solutions/Product");
              }}
            >
              <Text fontSize="3xl" color="#181D26">
                Product
              </Text>
              <Text fontSize="md" color="#040E20B0">
                Build roadmaps and alignment while creating products customers
                will love
              </Text>
            </Stack>
          </DrawerBody>
          <DrawerBody>
            <Stack
              onClick={() => {
                onClose();
                navigate("/Solutions/Marketing");
              }}
            >
              <>
                <Text fontSize="3xl" color="#181D26">
                  Marketing
                </Text>
              </>
              <Text fontSize="md" color="#040E20B0">
                Create custom workflows to run campaigns and track successes
              </Text>
            </Stack>
          </DrawerBody>
          <DrawerBody>
            <Stack
              onClick={() => {
                onClose();
                navigate("/Solutions/Operations");
              }}
            >
              <>
                <Text fontSize="3xl" color="#181D26">
                  Operations
                </Text>
              </>
              <Text fontSize="md" color="#040E20B0">
                Bring your data and processes into a single, well-organized
                place
              </Text>
            </Stack>
          </DrawerBody>
          <DrawerBody>
            <Stack
              onClick={() => {
                onClose();
                navigate("/Solutions/HumanResources");
              }}
            >
              <>
                <Text fontSize="3xl" color="#181D26">
                  Human Resources
                </Text>
              </>
              <Text fontSize="md" color="#040E20B0">
                Manage and streamline processes from hire to retire
              </Text>
            </Stack>
          </DrawerBody>
          <DrawerBody>
            <Stack
              onClick={() => {
                onClose();
                navigate("/Solutions/Sales");
              }}
            >
              <>
                <Text fontSize="3xl" color="#181D26">
                  Sales
                </Text>
              </>
              <Text fontSize="md" color="#040E20B0">
                Win loyal customers with smarter workflows and connected data
              </Text>
            </Stack>
          </DrawerBody>
          <DrawerBody>
            <Stack
              onClick={() => {
                onClose();
                navigate("/Solutions/Finance");
              }}
            >
              <>
                <Text fontSize="3xl" color="#181D26">
                  Finance
                </Text>
              </>
              <Text fontSize="md" color="#040E20B0">
                Streamline requests, manage budgets, and automate reporting
              </Text>
            </Stack>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Solusation;
