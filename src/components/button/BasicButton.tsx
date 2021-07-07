import styled from "@emotion/styled";
import React from "react";

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
  border-radius: 4px;
  background-color: #ffff;
  border: 1px solid #ffead0;
  padding: 8px 64px;
`;
