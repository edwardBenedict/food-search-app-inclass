import React from "react";
import { Button, FoodInput, FormContainer, Select } from "./headerStyle";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
    // getData()
  };
  return (
    <FormContainer onSubmit={handleSubmit}>
      <FoodInput type="text" placeholder="Search" />
      <Button>Search</Button>
      <Select name="mealTypes" id="mealTypes"></Select>
    </FormContainer>
  );
};

export default Form;
