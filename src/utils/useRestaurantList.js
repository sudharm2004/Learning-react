import { useEffect, useState } from "react";
import { restaurantData } from "../config";

const useRestaurantList = () => {
  const [filteredCards, setfilteredCards] = useState();
  const [allCards, setallCards] = useState();
  //The function is created to show the restaurant that user search for
  const filterCards = (value) => {
    console.log("filtercards");
    console.log(value);
    if (value == undefined) {
      setfilteredCards(allCards);
    } else if (value == 0) {
      setfilteredCards(allCards);
    } else if (value.length == 0) {
      setfilteredCards(allCards);
    } else {
      const filteredData = allCards.filter((element) => {
        return element.data.name.toLowerCase()?.includes(value.toLowerCase());
      });
      // setfilteredCards(filteredData);
      console.log(filteredData);
      setfilteredCards(filteredData);
    }
  };

  async function getCardData() {
    try {
      const data = await fetch(
        "https://corsanywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6248966&lng=73.8566087&page_type=DESKTOP_WEB_LISTING"
      );
      const result = await data.json();
      setfilteredCards(result?.data?.cards[2].data?.data?.cards);
      setallCards(result?.data?.cards[2].data?.data?.cards);
    } catch (error) {
      console.log(error);
      setfilteredCards("fetch error");
      setallCards("fetch error");
    }
  }

  useEffect(() => {
    getCardData();
  }, []);
  // console.log("allcards");
  // console.log(allCards);
  return [allCards, filteredCards, filterCards];
};
export default useRestaurantList;
