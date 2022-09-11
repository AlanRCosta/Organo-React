import { TTeam } from "./types";
import * as s from "./styles";
import Collaborator from "../Collaborator";

const Team: React.FC<TTeam> = ({
  team,
  cardColor,
  backgroundColor,
  collaborators,
  noRender,
}) => {
  return collaborators.length > 0 ? (
    <s.Container style={{ backgroundColor: backgroundColor }}>
      <s.TeamName style={{ borderColor: cardColor }}>{team}</s.TeamName>
      <s.Collaborators>
        {collaborators.map((item) => (
          <Collaborator
            key={item.name}
            name={item.name}
            image={item.image}
            office={item.office}
            team={item.team}
            cardColor={cardColor}
          />
        ))}
      </s.Collaborators>
    </s.Container>
  ) : (
    noRender
  );
};

export default Team;
