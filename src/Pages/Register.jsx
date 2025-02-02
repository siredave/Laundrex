import React, { useState } from "react";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";
import {API_URI} from "../Apis/Api"

const Register2 = () => {
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
    name: "",
  });
  const handleChange = (event) => {
    setFormFields({
      ...formFields,
      [event.target.name]: event.target.value,
    });
  };

  const Post = (e) => {
    e.preventDefault();
    // validation: to prevent the user for submitting an empty folder
    if (
      formFields.name == "" ||
      formFields.email == "" ||
      formFields.password == ""
    ) {
      alert("please enter all fields");
    }
    // posting to axio
    axios
      .post(`${API_URI}/users/`, {
        ...formFields,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <div className="flex flex-row h-screen w-full">
        <div className="w-[45%] pt-10">
          <div className="flex flex-row justify-center items-center pt-1 pr-[300px] gap-3">
            <img
              src="/logo.jpg"
              alt="logo"
              className="h-[50px] w-[50px] rounded-3xl object-fill"
            />
          </div>
          <div className="flex flex-col justify-center pt-5 ">
            <h1 className="text-[#3272A4] font-extrabold text-[35px] pl-28">
              New to Laundrex ?
            </h1>
          </div>
          <form className="flex flex-col pt-7 pl-28 gap-5" onSubmit={Post}>
            <div className="flex flex-col">
              <span> Full Name </span>
              <input
                type="text"
                className="border-0 outline-0 focus:border-red-900 border-b-2 border-[#3272A4] w-[350px] leading-3"
                value={formFields.name}
                onChange={handleChange}
                name="name"
              />
            </div>

            <div className="flex flex-col">
              <span>Email</span>
              <input
                type="email"
                className="border-0 outline-0 focus:border-red-900 border-b-2 border-[#3272A4] w-[350px] leading-3"
                value={formFields.email}
                onChange={handleChange}
                name="email"
              />
            </div>
            <div className="flex flex-col">
              <span>Password</span>
              <input
                type="password"
                className="border-0 outline-0 focus:border-red-900 border-b-2 border-[#3272A4] w-[350px] leading-3"
                value={formFields.password}
                onChange={handleChange}
                name="password"
              />
            </div>
            <div className="flex flex-row justify-between w-[350px]">
              <div className="flex flex-row items-start ">
                <input type="checkbox" className="h-[15px] " />
                <p className="pl-[10px] text-[11px]">
                  Accept Terms and Conditions
                </p>
              </div>
            </div>
            <div className="pt-8">
              <button className="w-[350px] h-[40px] rounded-xl bg-[#3272A4]">
                <p className="text-white">
                  <button type="button">CREATE ACCOUNT </button>
                </p>
              </button>
            </div>
            <div className="flex flex-row items-center ml-3 mt-5 gap-1">
              <hr className="h-[2px] w-[100px] bg-[#3272A4]" />
              <p className="pb"> or sign up with </p>
              <hr className="h-[2px] w-[100px] bg-[#3272A4]" />
            </div>
            <div className="flex flex-row items-center gap-7 ml-[110px]">
              <FcGoogle className="size-full max-w-[35px]" />
              <FaFacebook className="size-full max-w-[35px] fill-blue-800" />
            </div>
            <div className="-mt-3">
              <p className="text-[#3272A4] text-[11px] font-light">
                Already have an account?{" "}
                <b className="font-semibold">
                  {" "}
                  <Link to="/login">Login</Link>{" "}
                </b>
              </p>
            </div>
          </form>
        </div>
        <div
          className="w-[55%] h-screen bg-cover bg-center"
          style={{ backgroundImage: "url('/register.jpg')" }}
        ></div>
      </div>
    </>
  );
};

export default Register2;
