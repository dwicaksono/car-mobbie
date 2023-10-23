import { Meta, StoryObj } from '@storybook/react';
import ModalDetail from '../ModalDetail';

const dummy = {
  id: 'acdns',
  city_mpg: 19,
  class: 'minivan',
  combination_mpg: 22,
  cylinders: 6,
  displacement: 3.5,
  drive: 'fwd',
  fuel_type: 'gas',
  highway_mpg: 28,
  make: 'honda',
  model: 'odyssey',
  transmission: 'a',
  year: 2022,
};

const meta = {
  component: ModalDetail,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ModalDetail>;

export default meta;
type Story = StoryObj<typeof ModalDetail>;

export const Default: Story = {
  args: {
    open: true,
    data: dummy,
  },
};
