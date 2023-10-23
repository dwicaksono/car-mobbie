import { Meta, StoryObj } from '@storybook/react';
import SelectFilter from '../SelectFilter';
import { engine } from '../../constants/index';

const meta = {
  component: SelectFilter,
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
} satisfies Meta<typeof SelectFilter>;

export default meta;
type Story = StoryObj<typeof SelectFilter>;

export const Default: Story = {
  args: {
    options: engine,
  },
};
