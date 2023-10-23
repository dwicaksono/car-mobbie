import { Meta, StoryObj } from "@storybook/react";
import Button from "../Button";
const meta = {
	component: Button,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
	args: {
		title: "Submit",
	},
};
