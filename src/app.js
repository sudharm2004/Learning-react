import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantDetails from "./components/RestaurantDetails";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/Usercontext";
import { Provider } from "react-redux";
import store from "./store/store";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
// import ProfileClass from './components/ProfileClass'
// import AboutClass from './components/AboutClass';

const Applayout = () => {
  const [user, setUser] = useState({
    name: "sudharm jadhav",
    gmail: "sudharmjadhav@gmail.com",
  });
  return (
    <>
      <Provider store={store}>
        <UserContext.Provider value={{ user, setUser }}>
          <Header />
          <Outlet />
        </UserContext.Provider>
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Body />
            <Footer />
          </>
        ),
      },
      {
        path: "/about",
        element: (
          <>
            <About />
            <Footer />
          </>
        ),
        // element:<AboutClass/>,
        children: [
          {
            path: "profile",
            element: <Profile />,
            // element:<ProfileClass/>
          },
        ],
      },
      {
        path: "/restaurant/:id",
        element: (
          <>
            <RestaurantDetails />,
            <Footer />
          </>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/contact",
        element: (
          <>
            <Contact />
            <Footer />
          </>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
