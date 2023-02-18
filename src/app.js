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
// import ProfileClass from './components/ProfileClass'
// import AboutClass from './components/AboutClass';

const Instamart = lazy(() => import("./components/Instamart"));

const Applayout = () => {
  const [user, setUser] = useState({
    name: "sudharm jadhav",
    gmail: "sudharmjadhav@gmail.com",
  });
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
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
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
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
        element: <RestaurantDetails />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
