import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { FaGoogle, FaGithub } from "react-icons/fa";

const LoginPage = () => {
  const [error, setError] = useState("");

  const { signIn, setLoading, providerLogin, providerGithubLogin } =
    useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        if (user.uid) {
          navigate(from, { replace: true });
        } else {
          toast.error("Log in failed");
        }
      })
      .catch((error) => setError(error.message));
  };
  const handleGithubSignIn = () => {
    providerGithubLogin(githubProvider)
      .then((result) => {
        console.log(result);
        const user = result.user;
        console.log(user);
        if (user.uid) {
          navigate(from, { replace: true });
        } else {
          toast.error("Log in failed");
        }
      })
      .catch((error) => setError(error.message));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        if (user.uid) {
          navigate(from, { replace: true });
        } else {
          toast.error("Log in failed");
        }
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full max-w-md bg-base-200 p-8 rounded-lg">
        <div className="text-center ">
          <h1 className=" text-5xl font-semibold ">Login</h1>
        </div>
        <div className=" mt-5">
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <label className="">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  required
                  className="w-full input input-bordered"
                />
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <label className="">
                <input
                  name="password"
                  type="password"
                  placeholder="Enter Password"
                  required
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="mt-2 text-center">
              <p>
                Don't have an account yet?{" "}
                <Link to="/register" className="text-blue-400 underline ">
                  Register
                </Link>
              </p>
            </div>
            <div className="text-center">
              <p className="text-red-700">{error}</p>
            </div>
            <div className="text-center my-2">
              <button className=" py-2 text-white bg-black w-full text-lg rounded">
                Login
              </button>
            </div>
          </form>
        </div>
        <p className="text-center text-lg">or login with</p>
        <div className="flex justify-center pt-4">
          <div className="px-3">
            <button onClick={handleGoogleSignIn} className="btn btn-outline">
              <FaGoogle />
            </button>
          </div>
          <div className="px-3">
            <button onClick={handleGithubSignIn} className="btn btn-outline">
              <FaGithub />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
