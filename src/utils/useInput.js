import { useEffect, useState } from "react";

const useInput = (inputId) => {
  console.log("hel");
  const [value, setvalue] = useState("");
  const updateSearchBtn = (event) => {
    setvalue(event.target.value);
  };
  // useEffect(() => {
  //   const inputBtn = document.getElementById(inputId);

  //   inputBtn.addEventListener("input", updateSearchBtn);

  //   return () => {
  //     inputBtn.removeEventListener("input", updateSearchBtn);
  //   };
  // }, []);

  // return value;
  return [value, updateSearchBtn];
};

export default useInput;
