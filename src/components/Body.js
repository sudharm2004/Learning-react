import Restaurantlist from "./Restaurantlist";
import Shimmer from "./Shimmer";
import useOnline from "../utils/useOnline";
import useInput from "../utils/useInput";
import useRestaurantList from "../utils/useRestaurantList";
import Counter from "./Counter";
const Body = () => {
  const isonline = useOnline();

  const [searchTxt, updateSearchTxt] = useInput("Search-Btn");

  const [allcards, filteredCards, filterCards] = useRestaurantList();

  if (!isonline) {
    return <h1>Oops it looks like you went offline</h1>;
  }
  return (
    <div data-testid="body" className="Body flex flex-col items-start">
      <div className="SearchInputContainer my-4 mx-6">
        <input
          type="text"
          className="mx-3 rounded border-2 border-black p-1"
          id="Search-Btn"
          placeholder="Enter the Restaurant"
          value={searchTxt}
          onChange={updateSearchTxt}
        />

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
