import React, { useEffect, useState } from "react";
import {
  Button,
  Email,
  Form,
  FormContainer,
  Header,
  Input,
  Lable,
  Password,
  PhoneNumber,
  Title,
} from "../styles/register";
import axios from "axios";

function LogIn({ history }) {
  const [uname,setUname] = useState('');
  const [loginTrue, setLoginTrue] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [credentials, setCredentials] = useState({
    identifier: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a request to your server to check the credentials
      const response = await axios.post(
        "http://localhost:3001/login",
        credentials
      );

      // If the credentials are correct, redirect to the homepage
      if (response.data.success) {
        setLoginTrue(true);
        window.location.replace('http://localhost:3000/') 
        
      } else {
        window.alert("Incorrect email/phone or password");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Header>
        <Title>Log In</Title>
        <Form onSubmit={handleSubmit}>
          <FormContainer>
            <Email>
              <Lable htmlFor="email">Email or Phone Number</Lable>
              <Input
                type="text"
                name="identifier"
                value={credentials.identifier}
                onChange={handleChange}
                required
              />
            </Email>
            {/* <PhoneNumber>
              <Lable htmlFor="Pnumber">Phone Number:</Lable>
              <Input
                type="number"
                name="number"
                id="number"
                value={formData.phoneNumber}
                inputMode="numeric"
                pattern="[0-9]{10,12}" // Set pattern to require 10 to 12 numeric characters
                required // Set the input as required
                onChange={(e) => {
                  // Remove non-numeric characters
                  const sanitizedValue = e.target.value.replace(/[^0-9]/g, "");

                  // Limit to 12 characters
                  const truncatedValue = sanitizedValue.slice(0, 12);
                  setFormData({
                    phoneNumber: truncatedValue,
                  });
                }}
              />
            </PhoneNumber> */}
            <Password>
              <Lable htmlFor="Password">Password:</Lable>
              <Input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                required
              />
            </Password>
          </FormContainer>
          <Button>Log In</Button>
        </Form>
      </Header>
    </div>
  );
}

export default LogIn;
