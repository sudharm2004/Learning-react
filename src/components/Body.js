import Restaurantlist from "./Restaurantlist";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useOnline from "../utils/useOnline";
import { filterCards } from "../utils/helper";
import useInput from "../utils/useInput";

const Body = () => {
  const isonline = useOnline();

  const searchTxt=useInput('Search-Btn');

  // const [searchTxt, setsearchTxt] = useState("Enter the dish name");
  const [allCards, setallCards] = useState();
  const [filteredCards, setfilteredCards] = useState();

  // const filterCards = (cards,value) => {
  //   const filteredData = filteredCards.filter((element) => {
  //     return element.data.name.toLowerCase()?.includes(searchTxt.toLowerCase());
  //   });
  //   setfilteredCards(filteredData);
  // };

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

  if (!isonline) {
    return <h1>Oops it looks like you went offline</h1>;
  }
  return (
    <div className="Body">
      <div className="Search-container">
        {/* <input
          type="text"
          value={searchTxt}
          className="Search-Btn"
          onChange={(e) => {
            console.log(e.target.value)
            setsearchTxt(e.target.value);
          }}
        /> */}
        <input
          type="text"
          className="Search-Btn"
          id="Search-Btn"
          placeholder="Enter the Restaurant"
          value={searchTxt}
        />
        <button
        id="filterCardsButton"
          onClick={() => {
            setfilteredCards(filterCards(filteredCards, searchTxt));
          }}
          onBlur={() => {
            setfilteredCards(allCards);
          }}
        >
          Search Restaurant
        </button>
      </div>

      {filteredCards === undefined ? (
        <Shimmer />
      ) : (
        <Restaurantlist cards={filteredCards} />
      )}
    </div>
  );
};

export default Body;
