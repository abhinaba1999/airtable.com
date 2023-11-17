import { Heading, Button, Text } from "@chakra-ui/react";
import React from "react";
import MainData from "../MainData.json";
import "./AdminePage.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Lorm,
} from "@chakra-ui/react";
function AdminePage() {
  const [todo, settodo] = React.useState(MainData.posts);
  const [contacts, setcontacts] = React.useState(MainData.profile);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [todoStatus, setTodoStatus] = React.useState(false);
  const [contactStatus, setContactStatus] = React.useState(false);
  return (
    <div>
      <div>
        <Heading as="h2">Admin Page</Heading>
        <div>
          <Button onClick={() => setTodoStatus(!todoStatus)}>Todo List</Button>
          <Button onClick={() => setContactStatus(!contactStatus)}>
            Contact Sales Form
          </Button>
          <Button> Sign Out</Button>
        </div>
      </div>

      {contactStatus && (
        <div>
          <Heading textAlign={"center"} style={{ padding: "2rem" }} as="h2">
            Contact Sales Form
          </Heading>
          {todo.map((post) => (
            <div className="adminepage" key={post.id}>
              <p>{post.id}</p>
              <h2>{post.email}</h2>
              <p>{post.firstName}</p>
              <p>{post.lastName}</p>
              <p>{post.phoneNumber}</p>
              <p>{post.companyName}</p>
              <p>{post.TeamFunction}</p>
              <p>{post.JobLevel}</p>
              <p>{post.Howcanourteamhelp}</p>
            </div>
          ))}
        </div>
      )}

      {todoStatus && (
        <div>
          <Heading style={{ padding: "2rem" }} textAlign={"center"} as="h2">
            Todo List
          </Heading>
          {contacts.map((post) => (
            <div className="adminepage" key={post.id}>
              <p>{post.id}</p>
              <h2>{post.email}</h2>
              <p>{post.password}</p>
              <Button onClick={onOpen}>Todo Data</Button>

              <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Todo Data</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                      padding: "1rem",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {post?.TodoData?.map((post) => (
                      <div>
                        <p>{post?.name}</p>
                        <p>{post?.age}</p>
                        <p>{post?.email}</p>
                        <p>{post?.gender}</p>
                        <p>{post?.status}</p>
                      </div>
                    ))}
                  </ModalBody>
                  <ModalFooter>
                    <Button onClick={onClose}>Close</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AdminePage;
