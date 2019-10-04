import React from "react";
import "./App.css";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const VIP_PET_QUERY = gql`
  query {
    petById(id: "C-1") {
      id
      name
      weight
    }
  }
`;

const VipPet = () => {
  const { data, loading } = useQuery(VIP_PET_QUERY);
  if (loading) return "loading...";
  return (
    <div>
      <h1>{data.petById.name}</h1>
      <p>A Real VIP</p>
    </div>
  );
};

const PET_QUERY = gql`
  query {
    allPets {
      id
      name
      category
    }
  }
`;

const App = () => {
  const { data, loading } = useQuery(PET_QUERY);
  if (loading) return "loading...";
  return (
    <div>
      <VipPet />
      <ul>
        {data.allPets.map(pet => (
          <li key={pet.id}>
            {pet.name}
            <span>
              {pet.category === "CAT"
                ? "😸"
                : pet.category === "DOG"
                ? "🐶"
                : pet.category === "RABBIT"
                ? "🐰"
                : pet.category === "STINGRAY"
                ? " -- future stingray emoji"
                : null}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
