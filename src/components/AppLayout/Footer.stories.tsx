import { Meta, StoryObj } from '@storybook/react';
import Footer from '../AppLayout/Footer';

const meta = {
  component: Footer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className="w-[1000px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = { args: {} };
