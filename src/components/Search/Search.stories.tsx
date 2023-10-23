import { Meta, StoryObj } from '@storybook/react';
import Search from '../Search';

const meta = {
  component: Search,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className="w-full drop-shadow rounded">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof Search>;

export const Default: Story = {};
