import Restaurantlist from "./Restaurantlist";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import useOnline from "../utils/useOnline";
import { filterCards } from "../utils/helper";
import UserContext from "../utils/Usercontext";
import useInput from "../utils/useInput";
// import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
  const { user, setUser } = useContext(UserContext);
  const isonline = useOnline();

  const searchTxt = useInput("Search-Btn");

  // const [allcards,filteredCards,filterCards]=useRestaurantList();

  const [filteredCards, setfilteredCards] = useState();
  const [allCards, setallCards] = useState();
  async function getCardData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6248966&lng=73.8566087&page_type=DESKTOP_WEB_LISTING"
    );
    const result = await data.json();
    console.log("GetCardData");
    console.log(result);
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
      <div className="my-4">
        <input
          type="text"
          className="mx-3 rounded border-2 border-black p-1"
          id="Search-Btn"
          placeholder="Enter the Restaurant"
          value={searchTxt}
        />
        <button
          className="rounded-md bg-black p-1 text-white"
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

        <input
          type="text"
          className="mx-3 rounded border-2 border-black p-1"
          id="Search-Btn"
          placeholder="Enter the Restaurant"
          value={user.name}
          onChange={(e) => {
            setUser({ ...user, name: e.target.value });
          }}
        />

        {/* <button
        id="filterCardsButton"
          onClick={()=>{filterCards(searchTxt)}}
          onBlur={filterCards}
        >
          Search Restaurant
        </button> */}
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
