import React from "react";

const Blog = () => {
  return (
    <div>
      <h1 className="text-center  p-6 text-5xl font-semibold  ">Blog</h1>
      <div
        tabIndex={0}
        className="mt-3 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">What is cors?</div>
        <div className="collapse-content">
          <p>
            CORS stands for Cross-Origin Resource Sharing . It allows us to
            relax the security applied to an API. This is done by bypassing the
            Access-Control-Allow-Origin headers, which specify which origins can
            access the API.
          </p>
        </div>
      </div>
      <div
        tabIndex={1}
        className="mt-3 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          Why are you using firebase? What other options do you have to
          implement authentication?
        </div>
        <div className="collapse-content">
          <p>
            Firebase allows users to authenticate with their phone number,
            email, Google, and Facebook accounts. For the authentication service
            I am using firebase for my project. Other options are : STYTCH,
            Auth0, AWS Cognito, Okta, and Stormpath.
          </p>
        </div>
      </div>
      <div
        tabIndex={2}
        className="mt-3 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          How does the private route work?
        </div>
        <div className="collapse-content">
          <p>
            The react private route component renders child components (
            children ) if the user is logged in. If not logged in the user is
            redirected to the /login page with the return url passed in the
            location state property.
          </p>
        </div>
      </div>
      <div
        tabIndex={3}
        className="mt-3 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is Node? How does Node work?
        </div>
        <div className="collapse-content">
          <p>
            Node.js is an open-source server environment. Node.js is
            cross-platform and runs on Windows, Linux, Unix, and macOS. Node.js
            is a back-end JavaScript runtime environment. Node.js runs on the V8
            JavaScript Engine and executes JavaScript code outside a web
            browser.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
