import React from "react";
import { VipPet } from "./components/VipPet";
import { AllPets } from "./components/AllPets";
import { TotalPets } from "./components/TotalPets";

const App = () => {
  return (
    <>
      <TotalPets />
      <VipPet />
      <AllPets />
    </>
  );
};

export default App;
