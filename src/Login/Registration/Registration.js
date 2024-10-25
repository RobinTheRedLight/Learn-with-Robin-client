import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Registration = () => {
  const [error, setError] = useState("");
  const { createUser, updateUserProfile, verifyEmail } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        handleUpdateUserProfile(name, photoURL);
        handleEmailVerification();
        toast.success("Please verify your email address.");
        if (user.uid) {
          navigate(from, { replace: true });
        } else {
          toast.error("Log in failed");
        }
      })
      .catch((e) => {
        console.error(e);
        setError(e.message);
      });
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };

    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const handleEmailVerification = () => {
    verifyEmail()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full max-w-md bg-base-200 p-8 rounded-lg">
        <div className="text-center">
          <h1 className=" text-5xl font-semibold "> Register</h1>
        </div>
        <div className=" mt-5">
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="hidden sm:block label-text">Full Name</span>
              </label>
              <label className="">
                <input
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  required
                  className="w-full input input-bordered"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="hidden sm:block label-text">Photo URL</span>
              </label>
              <label className="">
                <input
                  name="photoURL"
                  type="text"
                  placeholder="Phot URL"
                  required
                  className="w-full input input-bordered"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="hidden sm:block label-text">
                  Email Address
                </span>
              </label>
              <label className="">
                <input
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  required
                  className="w-full input input-bordered"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="hidden sm:block label-text">Password</span>
              </label>
              <label className="">
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                  className="w-full input input-bordered"
                />
              </label>
            </div>
            <div className="mt-2 text-center">
              <p>
                Already have an account?{" "}
                <Link to="/login" className="text-blue-400 underline ">
                  Login
                </Link>
              </p>
            </div>
            <div>
              <p className="text-red-700">{error}</p>
            </div>
            <div className="text-center mt-4">
              <button className=" py-2 text-white bg-black w-full text-lg rounded">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
