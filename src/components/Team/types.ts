import { TCollaborator } from "../Collaborator/types";
export type TTeam = {
  team: string;
  cardColor: string;
  backgroundColor: string;
  collaborators: TCollaborator[];
  noRender: null;
};
