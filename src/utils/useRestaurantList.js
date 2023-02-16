import { useEffect, useState } from "react";

const useRestaurantList = () => {
  const [filteredCards, setfilteredCards] = useState();
  const [allCards, setallCards] = useState();

  const filterCards = (value) => {
    //This function is called two times:-
    // 1)When button is clicked to filtercards for particular input hotel....at that time we pass input searchTxt value/value of hotel to be filtered and searched 
    //2)When we click on something else....That is we will call this function that time with no arguments in order to update filteredcards to allcards.
    if (value == undefined) {
      setfilteredCards(allCards);
    }
    else{
        console.log(value)
        const filteredData = filteredCards.filter((element) => {
            return element.data.name.toLowerCase()?.includes(value.toLowerCase());
        });
        setfilteredCards(filteredData);
    }
  };

  async function getCardData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6248966&lng=73.8566087&page_type=DESKTOP_WEB_LISTING"
    );
    const result = await data.json();
    setfilteredCards(result?.data?.cards[2].data?.data?.cards);
    setallCards(result?.data?.cards[2].data?.data?.cards);
  }

  useEffect(() => {
    getCardData();
  }, []);
  return [allCards, filteredCards, filterCards];
};

export default useRestaurantList;
