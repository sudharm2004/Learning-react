import Header from "../components/Header";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store/store";
import { StaticRouter } from "react-router-dom/server";

test("testing whether the header logo image is loaded or not", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const headerLogo = header.getByTestId("header-logo");
  console.log(headerLogo.src);
  expect(headerLogo.src).toBe("http://localhost/dummyLogo");
});

test("testing whether cart items has 0 items when loaded", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const cart = header.getByTestId("cart-header");
  console.log(cart.innerHTML);
  expect(cart.innerHTML).toBe("Cart - 0");
});
