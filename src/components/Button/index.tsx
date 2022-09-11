import { TButton } from "./types";
import * as s from "./styles";

const Button: React.FC<TButton> = ({ text }) => <s.Button>{text}</s.Button>;
export default Button;
