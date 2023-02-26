import { render, waitFor } from "@testing-library/react";
import Body from "../components/Body";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";
import store from "../store/store";
import { restaurantData } from "../mocks/mockData";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(restaurantData);
    },
  });
});

test("All body elements has been loaded on the page(searchdiv and restaurantlist)", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  const shimmer = body.getByTestId("body");
  expect(shimmer.children.length).toBe(2);
});

test("Test shimmer has been loaded on the page", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  const shimmer = body.getByTestId("shimmer");
  expect(shimmer.children.length).toBe(20);
});

test("Restaurants should load on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => {
    expect(body.getByTestId("restaurant-list")).toBeTruthy();

    const resList = body.getByTestId("restaurant-list");

    expect(resList.children.length).toBe(15);
  });
});
