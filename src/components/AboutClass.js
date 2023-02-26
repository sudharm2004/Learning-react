import React from "react";
import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";

class AboutClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("AboutClass Constructor");
  }

  componentDidMount() {
    console.log("AboutClass componentDidMount");
  }

  componentDidUpdate() {
    console.log("AboutClass componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("AboutClass componentWillUnmount");
  }

  render() {
    console.log("AboutClass Render");
    return (
      <>
        <h1>Hello, User</h1>
        <p>This is a food app</p>
        <ProfileClass name="child1" />
        <ProfileClass name="child2" />
      </>
    );
  }
}

export default AboutClass;
