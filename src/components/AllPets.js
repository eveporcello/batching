import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const ALL_PETS_QUERY = gql`
  query {
    allPets {
      id
      name
      category
    }
  }
`;

export const AllPets = () => {
  const { data, loading } = useQuery(ALL_PETS_QUERY);
  if (loading) return "loading...";
  return (
    <div>
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
