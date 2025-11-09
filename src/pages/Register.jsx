import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FaEye } from "react-icons/fa6";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";
import { IoEyeOff } from "react-icons/io5";
import UseTitle from "../hooks/UseTitle";

const Register = () => {
  UseTitle("Register || Billify");
  const [showPassword, SetShowPassword] = useState(false);
  const emailRef = useRef(null);
  const {
    registerEmailAndPassword,
    loginGoogle,
    setLoading,
    setUser,
    profileUpdate,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleRegister = (e) => {
    e.preventDefault();
    const displayName = e.target.displayName.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error("Password must include at least one uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      toast.error("Password must include at least one lowercase letter.");
      return;
    }


    registerEmailAndPassword(email, password)
      .then(() => {
        profileUpdate(
          displayName,
          photoURL ||
            "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        )
          .then(() => {
            toast.success("Account created successfully!", {
              id: "create-user",
            });
            navigate(location.state || "/");
          })
          .catch((err) => {
            toast.error("Profile update failed!", err);
          });
      })
      .catch((e) => {
        if (e.code === "auth/email-already-in-use") {
          toast.error(
            "This email is already registered. Please login instead."
          );
        } else if (e.code === "auth/weak-password") {
          toast.error(
            "Your password is too weak. Please use at least 6 characters."
          );
        } else if (e.code === "auth/invalid-email") {
          toast.error("Invalid email address. Please check and try again.");
        } else if (e.code === "auth/user-not-found") {
          toast.error(
            "No account found with this email. Please register first."
          );
        } else if (e.code === "auth/wrong-password") {
          toast.error("Incorrect password. Please try again.");
        } else if (e.code === "auth/user-disabled") {
          toast.error(
            "This account has been disabled. Please contact support."
          );
        } else if (e.code === "auth/too-many-requests") {
          toast.error("Too many login attempts. Please try again later.");
        } else if (e.code === "auth/operation-not-allowed") {
          toast.error(
            "This operation is currently not allowed. Please contact support."
          );
        } else if (e.code === "auth/network-request-failed") {
          toast.error(
            "Network error. Please check your internet connection and try again."
          );
        } else {
          toast.error(
            e.message || "An unexpected error occurred. Please try again."
          );
        }
      });
  };

  // Goole Login
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
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl border border-pink-500/20 my-2">
      <div className="card-body">
        <h1 className="text-3xl font-bold text-center">Register Now</h1>
        <form onSubmit={handleRegister}>
          <fieldset className="fieldset">
            {/* Name */}
            <label className="">Name</label>
            <input
              type="text"
              name="displayName"
              className="input rounded w-full focus:border-0 focus:outline-sky-300"
              placeholder="Name"
              required
            />
            {/* Photo */}
            <label className="">PhotoURL</label>
            <input
              type="url"
              name="photoURL"
              className="input rounded w-full focus:border-0 focus:outline-sky-300"
              placeholder="Photo URL"
              required
            />
            {/* Email */}
            <label className="">Email</label>
            <input
              type="email"
              name="email"
              ref={emailRef}
              className="input rounded w-full focus:border-0 focus:outline-sky-300"
              placeholder="Email"
              required
            />

            {/* Password */}
            <div className="relative space-y-2">
              <label className="block">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input rounded w-full focus:border-0 focus:outline-sky-300"
                required
              />
              <span
                onClick={() => SetShowPassword(!showPassword)}
                className="absolute text-lg right-4 top-9 cursor-pointer z-50"
              >
                {showPassword ? <FaEye /> : <IoEyeOff />}
              </span>
            </div>

            <button className="btn text-white mt-4 rounded bg-linear-to-r from-blue-700 to-pink-700 hover:from-blue-800 hover:to-pink-800 transition-colors duration-300">
              Register
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
          Already have an account? Please{" "}
          <Link
            className="text-blue-500 hover:text-blue-800 underline"
            to="/login"
          >
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Register;
