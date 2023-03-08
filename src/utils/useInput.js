import { useEffect, useState } from "react";

//This was the code initally written for handling search-inputs
// const useInput = (inputId) => {
//   const [value, setvalue] = useState("");

//This was the code initally written for handling search-inputs
// const updateSearchBtn = (event) => {
//   console.log("event");
//   console.log(event.target.value);
//   setvalue(event.target.value);
// };

//   return [value, updateSearchBtn];
// };

//This was the code to take filtercards function as parameters and call it after value has been set
const useInput = (filterCards) => {
  const [value, setvalue] = useState("");

  useEffect(() => {
    console.log("input useeffect");
    console.log(event.target.value);
    console.log(value);
    filterCards(event.target.value);
  }, [value]);

  const updateSearchBtn = (event) => {
    setvalue(event.target.value);
  };

  return [value, updateSearchBtn];
};

export default useInput;
