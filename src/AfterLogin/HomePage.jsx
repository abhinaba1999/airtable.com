import React, { useEffect } from "react";
import { Input, Select, Button } from "@chakra-ui/react";
import Navbar from "./Component/Navbar";
import "./HomePage.css";
import MainData from "../MainData.json";
import axios from "axios";
import { AuthContext } from "../AuthContextProvider/AuthContextProvider";
function HomePage() {
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [todo, setTodo] = React.useState(false);
  const [datas, setDatas] = React.useState(MainData.profile);
  const [MainDatas, setMainDatas] = React.useState([]);
  const { setIsLoggedIn, Id } = React.useContext(AuthContext);

  useEffect(() => {
    async function foo() {
      let res = await axios.get(`http://localhost:3004/profile/${Id}`);
      setMainDatas(res.data.TodoData);
    }
    foo();
  }, [todo]);
  async function handleSubmit(e) {
    e.preventDefault();
    datas.forEach((data) => {
      if (data.email === email) {
        data.status = true;
      }
    });
    const status = false;
    try {
      const data = {
        name,
        age,
        email,
        gender,
        status,
      };
      setMainDatas([...MainDatas, data]);

      let res = await axios.patch(`http://localhost:3004/profile/${Id}`, {
        TodoData: [...MainDatas, data],
      });
      let dataof = await res.json();
      setTodo(true);
    } catch (error) {
      console.log(error);
    }
  }

  const handleDelete = async (data) => {
    setMainDatas(MainDatas.filter((item) => item.id !== data));

    try {
      await axios.patch(`http://localhost:3004/profile/${Id}`, {
        TodoData: MainDatas.filter((item) => item.id !== data),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <Navbar datas={datas} todo={todo} setTodo={setTodo} />
      </div>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name">Name:-</label>
        <Input
          w={{ base: "100%", md: "50%" }}
          type="text"
          name="name"
          required
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="age">Age:-</label>
        <Input
          w={{ base: "100%", md: "50%" }}
          type="number"
          name="age"
          required
          placeholder="Enter Age"
          onChange={(e) => setAge(e.target.value)}
        />
        <label htmlFor="email">Email:-</label>
        <Input
          w={{ base: "100%", md: "50%" }}
          type="email"
          name="email"
          required
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="gender">Gender:-</label>
        <Select
          onChange={(e) => setGender(e.target.value)}
          w={{ base: "100%", md: "50%" }}
          name="gender"
          id="gender"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </Select>
        <Button w={{ base: "100%", md: "50%" }} type="submit">
          Add List
        </Button>
      </form>
      {todo && (
        <div>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Delete Todo</th>
                </tr>
              </thead>
              <tbody>
                {MainDatas.map((data) => (
                  <tr className="table" key={data.id}>
                    <td>{data.name}</td>
                    <td>{data.age}</td>
                    <td>{data.email}</td>
                    <td>{data.gender}</td>
                    <td>
                      <Button onClick={() => handleDelete(data.id)}>
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
