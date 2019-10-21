import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const TOTAL_PETS_QUERY = gql`
  query TotalPets {
    totalPets
  }
`;

export const TotalPets = () => {
  const { loading, data } = useQuery(TOTAL_PETS_QUERY);

  if (loading) return <p>loading...</p>;

  return <p>Total Pets: {data.totalPets}</p>;
};
