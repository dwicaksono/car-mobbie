import { MouseEventHandler } from 'react';

export interface ButtonProps {
  title: string;
  clickButton: MouseEventHandler<HTMLDivElement>;
}

export interface SearchBrandsProps {
  brand: string;
  setBrand: (brand: string) => void;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface SelectFilterProps {
  title: string;
  options: OptionProps[];
}

export interface Itransmisi {
  [key: string]: string;
}

export interface ContentDetailProp {
  title: string;
  content: string | number;
}

export interface CarProp {
  id: string;
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface ModalDetailProp {
  open: boolean;
  onClose: () => void;
  data: CarProp;
}
