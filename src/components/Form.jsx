import React from "react";
import { useState } from "react";
import Success from "./Success";
export default function Form({ setIsSuccess }) {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  });

  const [newErrors, setNewErrors] = useState({
    email: "",
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setErrors({
      ...errors,
      firstName: !values.firstName,
      lastName: !values.lastName,
      password: !values.password,
    });

    if (!values.email) {
      setNewErrors({
        ...newErrors,
        email: "Email cannot be empty",
      });
    } else if (!emailRegex.test(values.email)) {
      setNewErrors({
        ...newErrors,
        email: "Looks like this is not an email",
      });
    } else {
      setNewErrors({
        ...newErrors,
        email: "",
      });
    }
    if (
      !errors.firstName &&
      !errors.lastName &&
      !errors.password &&
      !errors.email
    ) {
      setIsSuccess(true);
    }
  };

  return (
    <main className="mb-[50px] mt-[24px] rounded-[10px] bg-[#FFF] lg:ml-[200px] lg:w-[540px] lg:my-[24px] lg:ml-[200px]">
      <form
        onSubmit={handleSubmit}
        class="m-[24px] "
      >
        <div>
          <input
            type="text"
            id="firstName"
            placeholder="First name"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            class={`w-[100%] h-[56px] mt-[24px]  border border-[#DEDEDE] rounded-[5px] pl-[15px] lg:w-[460px] ${
              newErrors.email &&
              "bg-[url(./images/icon-error.svg)]"
            } bg-no-repeat bg-right`}
          />
          {errors.firstName && (
            <p class="text-[#FF7979]  mt-[10px] font-poppins text-[11px] font-medium text-right lg:mr-[30px]">
              First Name cannot be empty
            </p>
          )}
        </div>
        <div>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            value={values.lastName}
            onChange={handleChange}
            class={`w-[100%] h-[56px] mt-[24px]  border border-[#DEDEDE] rounded-[5px] pl-[15px] lg:w-[460px] ${
              newErrors.email &&
              "bg-[url(./images/icon-error.svg)]"
            } bg-no-repeat bg-right`}
          />
          {errors.lastName && (
            <p class="text-[#FF7979]  mt-[10px] font-poppins text-[11px] font-medium text-right lg:mr-[30px]">
              Last Name cannot be empty
            </p>
          )}
        </div>

        <div>
          <input
            type="text"
            value={values.email}
            onChange={handleChange}
            placeholder="Email Address"
            id="email"
            name="email"
            class={`w-[100%] h-[56px] mt-[24px]  border border-[#DEDEDE] rounded-[5px] pl-[15px] lg:w-[460px] ${
              newErrors.email &&
              "bg-[url(./images/icon-error.svg)]"
            } bg-no-repeat bg-right`}
          />

          {newErrors.email && (
            <p class="text-[#FF7979]  mt-[10px] font-poppins text-[11px] font-medium text-right lg:mr-[30px]">
              {newErrors.email}
            </p>
          )}
        </div>

        <div>
          <input
            type="text"
            id="password"
            name="password"
            value={values.password}
            placeholder="Password"
            onChange={handleChange}
            class={`w-[100%] h-[56px] mt-[24px]  border border-[#DEDEDE] rounded-[5px] pl-[15px] lg:w-[460px] ${
              newErrors.email &&
              "bg-[url(./images/icon-error.svg)]"
            } bg-no-repeat bg-right
            `}
          />
          {errors.password && (
            <p class="text-[#FF7979]  mt-[10px] font-poppins text-[11px] font-medium text-right lg:mr-[30px]">
              Password cannot be empty
            </p>
          )}
        </div>
        <div class="mt-[27px] bg-[#38CC8B] w-[100%] h-[56px] text-center rounded-[10px] font-poppins text-[15px] font-semibold lg:w-[460px]">
          <button
            type="submit"
            class="mt-[15px] text-[#FFF;] "
          >
            CLAIM YOUR FREE TRIAL
          </button>
        </div>
      </form>
      <div class="ml-[24px] mr-[24px]  mb-[24px] text-center  ">
        <p class="pb-[2%] font-poppins text-[#BAB7D4] font-medium text-[11px] mx-[24px] ">
          By clicking the button, you are agreeing
          to our{" "}
          <span class="text-[#FF7979] font-bold text-[11px]">
            Terms and Services
          </span>
        </p>
      </div>
    </main>
  );
}
