import { TCollaborator } from "./types";

import * as s from "./styles";

export const Collaborator: React.FC<TCollaborator> = ({
  name,
  image,
  office,
  cardColor,
}) => {
  return (
    <s.Container>
      <s.Avatar style={{ backgroundColor: cardColor }}>
        <img src={image} alt={name} />
      </s.Avatar>
      <s.Infos>
        <s.Name>{name}</s.Name>
        <s.Office>{office}</s.Office>
      </s.Infos>
    </s.Container>
  );
};

export default Collaborator;
