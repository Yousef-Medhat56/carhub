export interface CustomButtonProps {
  title: string;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  containerStyles?: string;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface SearchManufacturerProps{
  manufacturer:string|null
  setManufacturer:React.Dispatch<React.SetStateAction<string|null>>
}
