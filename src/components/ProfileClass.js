import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    //Declaring states
    this.state = {
      count: 1,
      count2: 2,
    };
    console.log("constructor " + this.props.name);
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("namste react op");
    }, 1000);
    console.log("componenetDidMount " + this.props.name);
    // This Method is called once when it is mounted in commit phase after actual changes are done to real dom...AFter render phase
    // We generally make an api call here
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componenetDidUpdate " + this.props.name);
    if (this.state.count !== prevState.count) {
      console.log("Code to be executed if count if updated");
    }
    //This method is called everytime there is re-rendering or state/props changes
    //We use this to execute a block of code when a state/prop updates
  }

  componentWillUnmount() {
    console.log("componenetwillUnMount " + this.props.name);
    //This method is called before unmounting of the component
    //If you did not cleared the interval then even if your component was unmounted the timer interval will still be there and logging namaste react op in console and if you came to this component again it will again call setInterval and your logging time will increase

    //comment the below code of line and then check your console
    clearInterval(this.timer);
  }

  render() {
    console.log("render " + this.props.name);
    return (
      <>
        <h1>This is a profile class component</h1>
        <b>State:-{this.state.count}</b>
      </>
    );
  }
}

export default ProfileClass;
