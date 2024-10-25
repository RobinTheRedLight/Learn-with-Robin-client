import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { GiBookCover } from "react-icons/gi";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="navbar font-medium px-5 bg-black text-white py-5 rounded mt-5">
        <div className="navbar-start">
          <div className="dropdown ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52 bg-black"
            >
              <div>
                <div className="pt-1">
                  <Link>
                    {user?.photoURL && (
                      <img
                        className="h-8 rounded-full"
                        src={user?.photoURL}
                        alt=""
                      />
                    )}
                  </Link>
                </div>
                <div>
                  {user?.uid ? (
                    <>
                      <span>{user?.displayName}</span>
                      <Link onClick={handleLogOut} className="  block">
                        Logout
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link className=" pt-3 block" to="/login">
                        Login
                      </Link>
                      <Link className=" pt-3 block" to="/register">
                        Register
                      </Link>
                    </>
                  )}
                </div>
              </div>
              <Link className="pt-3" to="/courses">
                Courses
              </Link>
              <Link className="pt-3">FAQ</Link>
              <Link className="pt-3" to="/Blog">
                Blog
              </Link>
            </ul>
          </div>
          <Link
            className="pr-5 font-mono font-normal normal-case text-2xl hidden lg:block"
            to="/"
          >
            Learn With Robin
          </Link>
          <div className="block  md:hidden pr-2">
            <p className="flex gap-1 text-xl">
              <span>Learn</span>
              <span>With</span>
              <span>Robin</span>
            </p>
          </div>
          <div>
            <GiBookCover className="text-3xl" />
          </div>
        </div>

        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0 ">
            <div className="flex">
              <div className="">
                {user?.uid ? (
                  <></>
                ) : (
                  <>
                    <Link className="text-xl  px-3" to="/login">
                      Login
                    </Link>
                    <Link className="text-xl  px-3" to="/register">
                      Register
                    </Link>
                  </>
                )}
              </div>
              <div className="">
                <Link>
                  {user?.photoURL && (
                    <img
                      title={user.displayName}
                      className="h-8 rounded-full"
                      src={user?.photoURL}
                      alt=""
                    />
                  )}
                </Link>
              </div>
            </div>
            <Link className=" text-xl  px-3" to="/courses">
              Courses
            </Link>
            <Link className=" text-xl  px-3">FAQ</Link>
            <Link className=" text-xl  px-3" to="/Blog">
              Blog
            </Link>
            {user?.uid ? (
              <>
                <Link onClick={handleLogOut} className=" text-xl  px-3 ">
                  Logout
                </Link>
              </>
            ) : (
              <></>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
