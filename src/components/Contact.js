import React from "react";
import Aboutme from "./Aboutme";

const Contact = () => {
  return (
    <div className="flex  justify-evenly p-8">
      <Aboutme />
      <div className="w-[800px] pl-2">
        <h1 className="bold mb-2 text-2xl">About Me</h1>
        Hello and welcome to my personal website! My name is Sudharm Jadhav, and
        I am a student with a passion for learning and exploring new ideas. As a
        student, I am constantly seeking out new challenges and opportunities to
        grow. I am currently pursuing a degree in BBA-CA and have a strong
        academic record. In addition to my academic pursuits, I am also involved
        in a number of extracurricular activities on campus. I am a member of
        Alpha Coding Club,MITACSC and have held several leadership positions
        during my time with the group In my free time, I enjoy doing
        workout,reading and am always on the lookout for new ways to expandmy
        horizons and learn something new. As I look toward the future, I am
        excited to see where my passion for learning will take me. Whether it's
        pursuing further education or diving into a new career, I am confident
        that I have the drive and determination to succeed. Thank you for taking
        the time to learn more about me. Please feel free to get in touch if you
        have any questions or if you'd like to chat about web development,
        Anime, or Gym. I look forward to hearing from you!
      </div>
    </div>
  );
};

export default Contact;
