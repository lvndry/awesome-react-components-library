import React from "react";
import styled from "@emotion/styled";

export interface IBasicButtonProps {
  text?: string;
  onClick?: () => void;
}

export const BasicButton: React.FC<IBasicButtonProps> = ({ text, onClick }) => {
  return (
    <Button onClick={() => onClick && onClick()}>{text || "Click me!"}</Button>
  );
};

const Button = styled.button`
  color: #f8f5f5aa;
  background-color: #246ab9;
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 1em 3em;
  font-size: 1rem;
  line-height: 1.25em;

  :hover {
    transform: scale(1.07);
  }
`;
