import React, { useContext } from "react";
import { Button } from "@chakra-ui/react";
import { AuthContext } from "../AuthContextProvider/AuthContextProvider";
import axios from "axios";
import "./ContactSales/ContactSales.css";
import { useToast } from "@chakra-ui/react";
function ContactSales() {
  const { contectSelsFeedback, setContectSelsFeedback } =
    useContext(AuthContext);

  const [datas, setData] = React.useState({
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    companyName: "",
    TeamFunction: "",
    JobLevel: "",
    Howcanourteamhelp: "",
  });

  const toast = useToast();

  const handleSubmit = async () => {
    let temp = {
      email: datas.email,
      firstName: datas.firstName,
      lastName: datas.lastName,
      phoneNumber: datas.phoneNumber,
      companyName: datas.companyName,
      TeamFunction: datas.TeamFunction,
      JobLevel: datas.JobLevel,
      Howcanourteamhelp: datas.Howcanourteamhelp,
    };
    setContectSelsFeedback([...contectSelsFeedback, datas]);
    let res = await axios.post("http://localhost:3004/posts", temp);
    console.log(res.status);
    if (res.status === 201) {
      toast({
        description: "Thank you for your feedback",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } else {
      toast({
        description: "Something went wrong",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <div>
      <form
        className="contact-sales-form"
        onSubmit={(e) => {
          e.preventDefault();

          handleSubmit();
        }}
      >
        <fieldset>
          <legend className="contact-sales-legend">Contact Sales</legend>
          <label htmlFor="email">Business Email:</label> <br />
          <input
            type="email"
            name="email"
            placeholder="Business Email"
            onChange={(e) =>
              setData({
                ...datas,
                [e.target.name]: e.target.value,
              })
            }
            id="email"
          />{" "}
          <br />
          <label htmlFor="firstName">First Name</label> <br />
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={(e) =>
              setData({
                ...datas,
                [e.target.name]: e.target.value,
              })
            }
            id="firstName"
          />{" "}
          <br />
          <label htmlFor="lastName">Last Name</label> <br />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={(e) =>
              setData({
                ...datas,
                [e.target.name]: e.target.value,
              })
            }
            id="lastName"
          />{" "}
          <br />
          <label htmlFor="phoneNumber">Phone Number</label> <br />
          <input
            type="number"
            name="phoneNumber"
            placeholder="Phone Number"
            onChange={(e) =>
              setData({
                ...datas,
                [e.target.name]: e.target.value,
              })
            }
            id="phoneNumber"
          />{" "}
          <br />
          <label htmlFor="companyName">Company Name</label> <br />
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            onChange={(e) =>
              setData({
                ...datas,
                [e.target.name]: e.target.value,
              })
            }
            id="companyName"
          />{" "}
          <br />
          <label htmlFor="TeamFunction">Team Function</label> <br />
          <select
            name="TeamFunction"
            placeholder="Team Function"
            id="TeamFunction"
            onChange={(e) =>
              setData({
                ...datas,
                [e.target.name]: e.target.value,
              })
            }
          >
            <option value="--">Select</option>
            <option value="Creative Production">Creative Production</option>
            <option value="Customer Service">Customer Service</option>
            <option value="Engineering">Engineering</option>
            <option value="Finance">Finance</option>
            <option value="Hr & Legal">Hr & Legal</option>
            <option value="It Support">It Support</option>
            <option value="Manufacturing">Manufacturing</option>
            <option value="Marketing">Marketing</option>
            <option value="Operations">Operations</option>
            <option value="Product & Design">Product & Design</option>
            <option value="Sales & Account Management">
              Sales & Account Management
            </option>
            <option value="Others">Others</option>
          </select>{" "}
          <br />
          <label htmlFor="Job Level">Job Level</label> <br />
          <select
            name="JobLevel"
            onChange={(e) =>
              setData({
                ...datas,
                [e.target.name]: e.target.value,
              })
            }
            id="JobLevel"
          >
            <option value="--">Select</option>
            <option value="C Suite">C Suite</option>
            <option value="VP">VP</option>
            <option value="Director">Director</option>
            <option value="Senior Manager">Senior Manager</option>
            <option value="Manager">Manager</option>
            <option value="IC">IC</option>
          </select>{" "}
          <br />
          <label
            htmlFor="Howcanourteamhelp

"
          >
            How can our team help?
          </label>{" "}
          <br />
          <select
            name="Howcanourteamhelp"
            id="Howcanourteamhelp"
            onChange={(e) =>
              setData({
                ...datas,
                [e.target.name]: e.target.value,
              })
            }
          >
            <option value="--">Select</option>
            <option value="Upgrade to Business or Enterprise Scale">
              Upgrade to Business or Enterprise Scale
            </option>
            <option value="Request a Sales Demo">Request a Sales Demo</option>
            <option value="Billing & Invoicing">Billing & Invoicing</option>
            <option value="Technical & Product Support">
              Technical & Product Support
            </option>
            <option value="Other">Other</option>
          </select>{" "}
          <br />
          <Button
            type="submit"
            w="100%"
            colorScheme="blue"
            style={{ marginBottom: "1rem" }}
          >
            Submit
          </Button>
        </fieldset>
      </form>
    </div>
  );
}

export default ContactSales;
