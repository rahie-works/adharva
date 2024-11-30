import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const simpleAnimation = keyframes`${fadeIn}`;

export const StyledForm = styled.form`
  width: 70%;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const StyledLabel = styled.label`
  display: block;
  margin: 3vmin 0px;
  font-size: 1.6vmin;
  color: white;
`;
export const StyledCheckBox = styled.label`
  display: block;
  margin: 1vmin 0px;
  font-size: 1.6vmin;
  color: white;
`;

export const StyledDisabledCheckBox = styled.label`
  display: block;
  margin: 1vmin 0px;
  font-size: 1.6vmin;
  color: grey;
`;
export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 30px;
`;
export const StyledButton = styled.button`
  display: flex;
  background-color: ${({ colorchange }) => (!colorchange ? "blue" : "gray")};
  width: auto;
  padding: 10px;
  margin: 30px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 2vmax;
  color: white;
  justify-content: center;
`;

export const StyledRegistrationForm = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-bottom: 10px;
  gap: 3vw;
  justify-content: center;
  align-items: center;
  animation: 2.5s ${simpleAnimation};
`;