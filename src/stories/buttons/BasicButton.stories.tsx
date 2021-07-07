import React from "react";
import { Meta, Story } from "@storybook/react";
import styled from "@emotion/styled";

import { BasicButton, IBasicButtonProps } from "../../components/button";

const Template: Story<IBasicButtonProps> = (args: IBasicButtonProps) => (
  <BasicButtonSample {...args} />
);

const BasicButtonSample: React.VFC<IBasicButtonProps> = ({
  text,
}: IBasicButtonProps) => {
  return (
    <BasicButtonContainer>
      <BasicButton text={text} />
    </BasicButtonContainer>
  );
};

const BasicButtonContainer = styled.div``;

export default {
  title: "Button",
  component: BasicButtonSample,
  argTypes: {
    text: { control: { type: "text" } },
  },
} as Meta;

export const Default = Template.bind({});
Default.args = {
  text: "Submit",
};
