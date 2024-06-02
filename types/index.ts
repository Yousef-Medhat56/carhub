export interface CustomButtonProps {
  title: string;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  containerStyles?: string;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}
