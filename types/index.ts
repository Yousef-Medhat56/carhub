export interface CustomButtonProps {
  title: string;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  containerStyles?: string;
  rightIcon?: string;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface SearchManufacturerProps {
  manufacturer: string | null;
  setManufacturer: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface CarProps {
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

export interface CarDetailsProps {
  car: CarProps;
  isOpen: boolean;
  closeModal: () => void;
}
