import { Meta, StoryObj } from '@storybook/react';
import Hero from '../Hero';
const meta = {
  component: Hero,
  tags: ['autodocs'],
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {};
