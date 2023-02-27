import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="flex-grow p-8">
        <h2 className="mb-4 text-xl font-bold">Our Story</h2>
        <p className="mb-4">
          We started our food delivery service with the goal of bringing
          delicious, high-quality meals to people's doorsteps. Our team is
          passionate about food and committed to providing our customers with
          the best possible experience.
        </p>
        <p className="mb-8">
          Whether you're looking for a quick and easy dinner after a long day at
          work or planning a special event, we've got you covered. With a wide
          selection of cuisines and dietary options to choose from, there's
          something for everyone on our menu.
        </p>

        <h2 className="mb-4 text-xl font-bold">Our Mission</h2>
        <p className="mb-4">
          Our mission is to make it easy for people to enjoy great food without
          leaving their homes. We believe that everyone should have access to
          high-quality, delicious meals, and we're committed to making that
          vision a reality.
        </p>
        <p>
          We're constantly striving to improve our service and make it even
          easier for you to order and enjoy your favorite dishes. Thank you for
          choosing us for your food delivery needs!
        </p>
      </div>
    </>
  );
};

export default About;
