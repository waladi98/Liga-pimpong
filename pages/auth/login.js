import React from "react";
import LayoutGuest from "../../components/LayoutGuest";
import { useRouter } from "next/router";
import { FaLock } from "react-icons/fa";
const login = () => {
  const currentYear = new Date().getFullYear();

  const router = useRouter();
  const handleLogin = async (e) => {
    e.preventDefault();
    router.push("/dashboard");
  };
  return (
    <LayoutGuest title="Login">
      <div className="container ">
        <div className=" flex justify-center items-center lg:pt-24 ">
          <div className="flex justify-center items-center bg-white rounded-lg shadow-xl ">
            <div className="flex flex-col md:flex-row ">
              <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                <div className="w-full  ">
                  <div>
                    <div className="flex justify-center"></div>
                    <h1 className="text-left text-2xl mb-2 text-gray-600 font-bold font-sans">
                      Hi, Selamat Datang Kembali!
                    </h1>
                    <h4 className="text-gray-400">
                      Mulai perjalanan anda di sini
                    </h4>
                    <form>
                      <div>
                        <label
                          className="text-gray-800 font-semibold block my-3 text-md"
                          htmlFor="username"
                        >
                          Username
                        </label>
                        <input
                          className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                          type="text"
                          name="username"
                          id="username"
                          placeholder="username"
                        />
                      </div>
                      <div>
                        <label
                          className="text-gray-800 font-semibold block my-3 text-md"
                          htmlFor="password"
                        >
                          Password
                        </label>
                        <input
                          className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                          type="password"
                          name="password"
                          id="password"
                          placeholder="password"
                        />
                      </div>
                      <div className="flex items-center justify-between py-6">
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="remember"
                            className="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200 text-blue-600"
                          />
                          <label
                            htmlFor="remember"
                            className="text-sm  text-gray-500"
                          >
                            Ingat Saya
                          </label>
                        </div>
                        <div className="text-sm ml-auto ">
                          <a
                            href="#"
                            className="text-blue-600 hover:text-purple-600"
                          >
                            Lupa Kata Sandi ?
                          </a>
                        </div>
                      </div>

                      <button
                        onClick={handleLogin}
                        className="w-full  bg-primary rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans "
                      >
                        <span className="flex items-center justify-center ">
                          <FaLock className="mx-2" />
                          Masuk
                        </span>
                      </button>

                      {/* <div className="flex items-center justify-center py-6">
                      <div className="text-sm ">
                        <p className="text-gray-400">
                          Don'thave an account?{" "}
                          <a
                            href="/register"
                            className="text-sm text-purple-700 hover:text-purple-700 font-medium"
                          >
                            Sign Up
                          </a>
                        </p>
                      </div>
                    </div> */}
                    </form>
                    <div className="text-center text-xs text-gray-400 pt-8">
                      <p className="py-1">
                        Privacy Policy and{" "}
                        <a href="#" className="text-blue-600">
                          Terms Of Us
                        </a>
                      </p>
                      <p>©{currentYear} All Right Reserved by MONALISA</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-5   invisible sm:visible ">
                <div>
                  <img
                    className="object-cover w-full h-full rounded-r-lg "
                    src="../bg-login.svg"
                    alt=""
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutGuest>
  );
};

export default login;
