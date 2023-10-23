import { Meta, StoryObj } from '@storybook/react';
import CardLoading from '../CardLoading';

const meta = {
  component: CardLoading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CardLoading>;

export default meta;
type Story = StoryObj<typeof CardLoading>;

export const Default: Story = {};
