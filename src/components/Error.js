import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  // console.log(error);
  return (
    <>
      <h1>Oops!!</h1>
      <h2>Something went wrong</h2>
      <h3>{error.status}</h3>
    </>
  );
};

export default Error;
