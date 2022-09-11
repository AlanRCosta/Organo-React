export type TInputTextProps = {
  label: string;
  placeholder: string;
  whenChanged: (param: any) => void;
  text: string;
  required?: boolean;
};
