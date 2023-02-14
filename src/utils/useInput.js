import { useEffect, useState } from "react";

const useInput = (inputId) => {

  const [searchTxt, setsearchTxt] = useState("");
  const updateSearchBtn = (event) => {
    setsearchTxt(event.target.value);
  };
  useEffect(() => {
    const inputBtn = document.getElementById(inputId);
    if(inputBtn)
    {

        inputBtn.addEventListener("change", updateSearchBtn);
        
        return () => {
            inputBtn.removeEventListener("change", updateSearchBtn);
        };
    }
  }, [inputId]);

  return searchTxt;
};

export default useInput;
