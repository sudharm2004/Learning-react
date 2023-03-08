import Restaurantlist from "./Restaurantlist";
import Shimmer from "./shimmers/Shimmer";
import useOnline from "../utils/useOnline";
import useInput from "../utils/useInput";
import useRestaurantList from "../utils/useRestaurantList";
const Body = () => {
  const isonline = useOnline();

  const [allcards, filteredCards, filterCards] = useRestaurantList();
  const [searchTxt, updateSearchTxt] = useInput(filterCards);

  if (!isonline) {
    return <h1>Oops it looks like you went offline</h1>;
  }
  return (
    <div data-testid="body" className="Body flex flex-col items-start">
      <div className="SearchInputContainer my-4  flex w-full justify-center">
        <input
          type="text"
          className="mx-3 w-1/2 rounded border-2 border-black p-1"
          id="Search-Btn"
          placeholder="Enter the Restaurant"
          value={searchTxt}
          onChange={(event) => {
            updateSearchTxt(event, filterCards);
            // filterCards(searchTxt);
          }}
        />
        {/* onBlur={() => {
            filterCards(undefined);
          }} */}
        {/* 
        <button
          className="rounded-md bg-black p-1 text-white"
          id="filterCardsButton"
          onClick={() => {
            filterCards(searchTxt);
          }}
          onBlur={() => {
            filterCards(undefined);
          }}
        >
          Search Restaurant
        </button> */}
      </div>

      {filteredCards === undefined ? (
        <Shimmer />
      ) : (
        <Restaurantlist cards={filteredCards} />
      )}
      {/* 
      {filteredCards.length === 0 ? (
        <span>No Such Restaurant around YOu!:(</span>
      ) : (
        <Restaurantlist cards={filteredCards} />
      )} */}
    </div>
  );
};

export default Body;
