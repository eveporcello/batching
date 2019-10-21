import React from "react";
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

export const VipPet = () => {
  const { data, loading } = useQuery(VIP_PET_QUERY);
  if (loading) return "loading...";
  return (
    <div>
      <h1>{data.petById.name}</h1>
      <p>A Real VIP</p>
    </div>
  );
};
