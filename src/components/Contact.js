import React from "react";

const Contact = () => {
  return (
    <div className="flex-grow p-8">
      <p className="mb-4">
        You can reach out to me using any of the following methods:
      </p>

      <ul className="mb-8 list-inside list-disc">
        <li>
          <a
            href="mailto:youremail@example.com"
            className="text-blue-500 hover:underline"
          >
            Email me
          </a>
        </li>
        <li>
          <a
            href="https://github.com/yourgithubusername"
            className="text-blue-500 hover:underline"
          >
            Check out my GitHub
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/yourtwitterusername"
            className="text-blue-500 hover:underline"
          >
            Follow me on Twitter
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/yourlinkedinusername"
            className="text-blue-500 hover:underline"
          >
            Connect with me on LinkedIn
          </a>
        </li>
      </ul>

      <p>Looking forward to hearing from you!</p>
    </div>
  );
};

export default Contact;
