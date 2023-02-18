import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Not authenticated",
    gmail: "dummy@gmail.com",
  },
});

UserContext.displayName = "UserContext";

export default UserContext;
