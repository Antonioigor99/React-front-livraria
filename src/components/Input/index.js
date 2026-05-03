import styled from "styled-components";

const Input = styled.input`
  border: 1px solid #fff;
  background: transparent;
  border: 1px solid #fff;
  border-radius: 50px;
  width: 100%;
  max-width: 250px;
  padding:20px 100px;
  color: #fff;
  font-size: 16px;
  margin-bottom: 10px;

  &::placeholder {
    width:100%;
    text-align:center;
    color: #fff;
    font-size: 16px;
  }
`;
export default Input;
