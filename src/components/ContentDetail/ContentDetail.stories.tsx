import { Meta, StoryObj } from '@storybook/react';
import ContentDetail from '../ContentDetail';

const meta = {
  component: ContentDetail,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ContentDetail>;

export default meta;
type Story = StoryObj<typeof ContentDetail>;

export const Default: Story = {
  args: {
    content: 'Gas',
    title: 'Flue',
  },
};
