import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 97vh;
`;
export const Title = styled.h1`
  font-size: 50px;
`;
export const Form = styled.form`
  /* border: 1px solid gray; */
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;
`;

export const FormContainer = styled.div`
  /* border: 2px solid black; */
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 20px;
  font-size: 30px;
`;

export const Lable = styled.label``;
export const Email = styled.div`
  margin: 20px 30px 10px 10px;
`;
export const Input = styled.input`
  width: 30vw;
  height: 30px;
  border-radius: 5px;
  margin-left: 10px;
  margin-bottom: 5px;
  ::placeholder {
    color: gray;
  }
`;
export const PhoneNumber = styled.div`
  margin: 10px 30px 10px 10px;
`;
export const Password = styled.div`
  margin: 10px 30px 10px 10px;
`;
export const ConfirmPassword = styled.div`
  margin: 10px 30px 20px 20px;
`;
export const Button = styled.button`
  padding: 20px;
  font-size: 20px;
  border-radius: 15px;
  border: 1px solid #00b359;
  color: white;
  background-color: #00b359;

  &:hover {
    background-color: white;
    color: #00b359;
    cursor: pointer;
  }
`;