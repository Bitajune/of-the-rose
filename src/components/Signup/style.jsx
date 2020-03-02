import styled from "styled-components";

export const Wrapper = styled.div`
font-family: "Abril Fatface";
text-align: center;
  font-size: 20px;
  letter-spacing: 4px;
  font-weight: normal;
  margin-top: 20px;
  width: 800px;
  margin: auto;
//   background-color: ${props => (props.color ? props.color : "white")};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: auto;
  > input {
    margin-bottom: 0.2rem;
  }
`;
