import React from "react";
import github from "../assets/img/github.png";
import mail from "../assets/img/mail.png";
import twitter from "../assets/img/twitter.png";
import me from "../assets/img/me.jpg";

const Aboutme = () => {
  return (
    <div className="border-1 flex w-80 flex-col items-center space-y-4 rounded-lg border-black p-2 shadow-xl">
      <h1 className="bold text-2xl">About me</h1>
      <img
        className="h-[150px] w-[150px] rounded-full border-2 border-black"
        src={me}
      />
      <span>Sudharm Jadhav</span>
      <p className="text-center">
        React.js Developer l JavaScript | HTML5 | CSS3 | TailwindCSS | Front End
        Developer
      </p>
      <div className="flex space-x-1">
        <a href="https://www.linkedin.com/in/sudharm-jadhav-2b836a229/">
          <img className="w-16" src={github}></img>
        </a>
        <a href="https://twitter.com/SudharmJadhav">
          <img className="w-16" src={twitter}></img>
        </a>
        <a href="mailto:sudharmjadhav2004@gmail.com">
          <img className="w-16" src={mail}></img>
        </a>
      </div>
    </div>
  );
};

export default Aboutme;
