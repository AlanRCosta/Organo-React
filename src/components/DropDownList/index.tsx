import { TDropDownList } from "./types";

import * as s from "./style";

const DropDownList: React.FC<TDropDownList> = ({
  items,
  label,
  text,
  required,
  whenChanged,
}) => {
  return (
    <s.Container>
      <s.TitleList>{label}</s.TitleList>
      <s.List
        onChange={(e) => whenChanged(e.target.value)}
        value={text}
        required={required}
      >
        <option value="" />
        {items.map((item) => (
          <s.ItemList key={item}>{item}</s.ItemList>
        ))}
      </s.List>
    </s.Container>
  );
};

export default DropDownList;
