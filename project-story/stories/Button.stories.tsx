import React from "react";
import { Story, Meta } from "@storybook/react";
import { Button } from "../components/atoms/Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    purpose: { description: "ボタンの役割" },
  },
} as Meta;

export const Default: Story = () => <Button>Primary</Button>;

export const Danger: Story = () => <Button purpose="danger">Danger</Button>;

export const Sucsess: Story = () => <Button purpose="success">Danger</Button>;
