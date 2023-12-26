import React from "react";

import { useEffect, useState } from "react";
import { ConfirmPassword, Email, Form, FormContainer, Header, Input, Lable, Password, PhoneNumber, Title , Button } from "../styles/register";
import axios from "axios";




function SignUp() {
 const [email, setEmail] = useState('');
 const [pNumber, setPnumber] = useState(0);
 const [pass, setPass] = useState('');
 const [cpass, setCpass] = useState('');

  // useEffect to reset form values on component mount
 // The empty dependency array ensures that this effect runs only once on mount

  // Event handler to update form values

  // Event handler for form submission
  const handleSubmit =async (e) => {
    e.preventDefault();
    // Add logic for form submission
    if (pass!==cpass || email==="" || pNumber ===0 || 
    pass==="") {
      window.alert("Please Enter Data correctly");
    }else{
      try{
        await axios.post('http://localhost:3001/signup',{
          email:email,
          PhoneNumber: pNumber,
          password:pass,
          
        });

        window.location.replace('http://localhost:3000/login')
        
        
      }
      catch (error) {
        // Handle errors
        console.error('Error:', error);
      }
      
    }
    
  };



  return (
    <div>
      <Header>
        <Title>Sign Up</Title>
        <Form onSubmit={handleSubmit}>
          <FormContainer>
            <Email>
              <Lable htmlFor="email">Email Address:</Lable>
              <Input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
            </Email>
            <PhoneNumber>
              <Lable htmlFor="Pnumber">Phone Number:</Lable>
              <Input
                type="number"
                name="number"
                id="number"
                value={pNumber}
                onChange={(e) => {
                  setPnumber(e.target.value)
                }}
                
              />
            </PhoneNumber>
            <Password>
              <Lable htmlFor="Password">Password:</Lable>
              <Input
                type="password"
                name="password"
                id="password"
                value={pass}
                onChange={(e) => {
                  setPass(e.target.value)
                
                }}
              />
            </Password>
            <ConfirmPassword>
              <Lable htmlFor="CPassword">Confirm Password:</Lable>
              <Input
                type="password"
                name="CPassword"
                id="CPassword"
                value={cpass}
                onChange={(e) => {
                  setCpass(e.target.value);
                }}
              />
            </ConfirmPassword>
          </FormContainer>

          <Button type="submit">Submit</Button>
        </Form>
      </Header>
    </div>
  );
}

export default SignUp;
