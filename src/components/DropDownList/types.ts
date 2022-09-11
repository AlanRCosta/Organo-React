export type TDropDownList = {
  items: string[];
  label: string;
  required: boolean;
  text: string;
  whenChanged: (param: any) => void;
};
