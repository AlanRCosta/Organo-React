import { useState } from "react";
import Banner from "./components/Banner";
import { TCollaborator } from "./components/Collaborator/types";
import Form from "./components/Form";
import Team from "./components/Team";
import Globalstyle from "./styles/Globalstyle";

function App(): JSX.Element {
  const Teams = [
    {
      name: "Programação",
      primaryColor: "#57c278",
      secondaryColor: "#d9f7e9",
    },
    {
      name: "Front-End",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF",
    },
    {
      name: "Data Science",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2",
    },
    {
      name: "Devops",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8",
    },
    {
      name: "UX e Design",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5",
    },
    {
      name: "Mobile",
      primaryColor: "#FFBA05",
      secondaryColor: "#FFF5D9",
    },
    {
      name: "Inovação e Gestão",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF",
    },
  ];

  const [collaborators, setCollaborators] = useState<TCollaborator[]>([]);

  const NewCollaboratorAdded = (collaborator: TCollaborator) => {
    console.log(collaborators);
    setCollaborators([...collaborators, collaborator]);
  };
  return (
    <>
      <Globalstyle />
      <Banner />
      <Form
        teamName={Teams.map((item) => item.name)}
        registeredCollaborator={(collaborator) =>
          NewCollaboratorAdded(collaborator)
        }
      />
      {Teams.map((item) => (
        <Team
          key={item.name}
          team={item.name}
          cardColor={item.primaryColor}
          backgroundColor={item.secondaryColor}
          collaborators={collaborators.filter(
            (collaborator) => collaborator.team === item.name
          )}
          noRender={null}
        />
      ))}
    </>
  );
}

export default App;
