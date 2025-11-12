import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FaGoogle } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { FaEye } from "react-icons/fa6";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import UseTitle from "../hooks/UseTitle";

const Login = () => {
  UseTitle("Login || Billify");
  const [showPassword, SetShowPassword] = useState(false);
  const { setUser, loginEmailAndPassword, loginGoogle, setLoading } =
    use(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email?.value;
    const password = e.target.password?.value;

    loginEmailAndPassword(email, password)
      .then((res) => {
        setLoading(false);
        setUser(res.user);
        toast.success("Login successful");
        navigate(location.state || "/");
      })
      .catch((er) => {
        toast.error(er.message);
        setLoading(false);
      });
  };

  const handleGooglSignin = () => {
    loginGoogle()
      .then((res) => {
        setLoading(false);
        setUser(res.user);
        toast.success("Login successful");
        navigate(location.state || "/");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  return (
    <div className="card bg-base-100 w-11/12 mx-auto max-w-sm shrink-0 shadow-2xl border border-pink-500/20 my-30 md:my-17">
      <div className="card-body">
        <h1 className="text-3xl font-bold text-center">Login</h1>
        <form onSubmit={handleLogIn}>
          <fieldset className="fieldset">
            {/* Name */}
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="input w-full rounded focus:border-0 focus:outline-sky-300"
              placeholder="Email"
              required
            />

            {/* Password */}
            <div className="relative space-y-2">
              <label className="block mt-1">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input w-full rounded focus:border-0 focus:outline-sky-300"
                required
              />
              <span
                onClick={() => SetShowPassword(!showPassword)}
                className="absolute text-lg right-4 top-10 cursor-pointer z-50"
              >
                {showPassword ? <FaEye /> : <IoEyeOff />}
              </span>

              {/* Forget password */}
              <Link
                type="button"
                className="flex justify-end items-center hover:underline cursor-pointer hover:text-blue-500 text-sm"
              >
                Forget Password?
              </Link>
            </div>

            <button className="btn text-white mt-4 rounded bg-linear-to-r from-blue-700 to-pink-700 hover:from-blue-800 hover:to-pink-800 transition-colors duration-300">
              Login
            </button>
          </fieldset>
        </form>

        {/* Divider */}
        <div className="flex items-center justify-center gap-2 my-2">
          <div className="h-px w-16 bg-gray-500"></div>
          <span className="text-sm">or</span>
          <div className="h-px w-16 bg-gray-500"></div>
        </div>

        {/* Google */}
        <button
          onClick={handleGooglSignin}
          className="btn bg-white text-black border-[#e5e5e5]"
        >
          <svg
            aria-label="Google logo"
            width="18"
            height="18"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>

        <p className="text-center">
          Don't have an account? Please{" "}
          <Link
            className="text-blue-500 hover:text-blue-800 underline"
            to="/register"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
