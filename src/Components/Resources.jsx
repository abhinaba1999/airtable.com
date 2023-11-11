import React from 'react'
import ByTopic from '../Resources/NastedResources/ByTopic';
import ByTeam from '../Resources/NastedResources/ByTeam';
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

function Resources() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
  return (
    <>
      <Button ref={btnRef} bg="none" color="black" m="none" onClick={onOpen}>
        Resources
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
          <DrawerHeader>Resources</DrawerHeader>

          <DrawerBody>
            <Stack>
              <ByTopic />
            </Stack>
          </DrawerBody>
          <DrawerBody>
            <Stack>
              <ByTeam />
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Resources
