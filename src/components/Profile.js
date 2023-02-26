import { useEffect, useState } from "react";

const Profile = () => {
  const [count, setcount] = useState(1);
  useEffect(() => {
    console.log("useffect");
    return () => {
      console.log("useffect return");
    };
  }, [count]);
  console.log("render");
  return (
    <>
      <h1>This is a profile component</h1>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        Increment
      </button>
    </>
  );
};
export default Profile;
