//This hook is used to fetch data of a dish from api

import { useEffect, useState } from "react";

const useRestaurantDetails = (id) => {
  const [Restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantDetails();
  }, []);

  async function getRestaurantDetails() {
    const data = await fetch(
      "https://corsanywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/v4/full?lat=18.6248966&lng=73.8566087&menuId=" +
        id
    );
    const result = await data.json();
    setRestaurant(result);
  }
  return Restaurant;
};
export default useRestaurantDetails;

// The hook returns the current value of the Restaurant state, which is initially set to null. However, once the API call is finished and the state is updated with the data from the API, the hook will return the updated value of Restaurant the next time it is called.

// The hook does not stop executing after it returns its initial value. Instead, it continues to run in the background, listening for changes to the state or props in its dependency array. When the state is updated, React re-renders the component that is using the hook, causing it to return the updated value of Restaurant.

// This is the basic idea of how state updates and re-renders work in React. When a state is updated, React re-renders the component and calls all the hooks again, which allows them to return the updated state values.

// The state created using useState is stored in memory and tracked by React, even after the function that creates it has returned. When the state is updated using the setRestaurant function, React automatically triggers a re-render of the component that uses the hook, causing the hook to return the updated value of Restaurant. This allows you to manage and update the state of your component over time, even after the initial render has completed.
