import React, { useState } from "react";
import Userpage from "./Userpage";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Layout from "../layouts";

function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisiblity = () => {
    setShowPassword(showPassword ? false : true);
  };

  const onSubmit = (data) => {
    let inputEmail = data.email;
    let inputPassword = data.password;

    let userEmail = localStorage.getItem("SubmissionEmail");
    let userPassword = localStorage.getItem("SubmissionPassword");
    console.log(inputEmail, inputPassword, userEmail, userPassword);
    if (inputEmail == userEmail && inputPassword == userPassword) {
      localStorage.setItem("isLogin", "true");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <main className="d-flex min-vh-100 justify-content-center align-items-center">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-lg-10 col-xl-8 shadow rounded-6">
                  <div className="row justify-content-center py-md-0 py-5">
                    <div className="text-center d-md-none">
                      <h4>Hallo !</h4>
                      <p className="text-secondary mt-1 mb-2">Selamat datang di UmahBali</p>
                    </div>
                    <div className="col-lg-5 col-md-5 col-7 p-2 my-auto">
                      <img src="https://t3.ftcdn.net/jpg/02/22/46/52/360_F_222465278_7iugd1RGKKwm6p4AbQPAInFSHLOVvhpt.jpg" class="img-fluid w-100" alt="property pict" />
                    </div>

                    <div className="col-lg-5 col-md-6 col-12 p-lg-5 px-4 pe-lg-2 py-md-5">
                      <div className="mb-4 d-none d-md-block">
                        <h4 className="">Halo !</h4>
                        <p className="text-secondary mt-1">Selamat datang di UmahBali</p>
                      </div>

                      <form noValidate onSubmit={handleSubmit(onSubmit)} id="loginForm">
                        <div className="mb-3">
                          <label htmlFor="text" className="form-label">
                            Email
                          </label>
                          <div className="input-group mb-1">
                            <span className="input-group-text" id="basic-addon1">
                              <i className="far fa-at"></i>
                            </span>
                            <input
                              type="text"
                              className={`form-control ${errors.email && "invalid"}`}
                              {...register("email", {
                                required: "Email tidak boleh kosong",
                                pattern: {
                                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                  message: "Email tidak valid",
                                },
                              })}
                              placeholder="pengguna@mail.com"
                              id="email"
                              autocomplete="off"
                              onKeyUp={() => {
                                trigger("email");
                              }}
                            />
                          </div>
                          {errors.email && <small className="text-danger">{errors.email.message}</small>}
                        </div>

                        <div className="mb-2">
                          <label for="password" className="form-label">
                            Password
                          </label>
                          <div className="input-group mb-1">
                            <span className="input-group-text" id="basic-addon1">
                              <i className="far fa-lock"></i>
                            </span>
                            <input
                              type={showPassword ? "text" : "password"}
                              className={`form-control ${errors.password && "invalid"}`}
                              {...register("password", {
                                required: "Password tidak boleh kosong",
                                pattern: {
                                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                  message: "Min. 8 karakter, huruf dan angka",
                                },
                              })}
                              placeholder="masukan password"
                              id="password"
                              autocomplete="off"
                            />
                          </div>
                          {errors.password && <small className="text-danger">{errors.password.message}</small>}
                        </div>

                        <div className="mb-3 form-check">
                          <input type="checkbox" onClick={() => togglePasswordVisiblity()} className="form-check-input" id="showPassword" />
                          <label className="form-check-label" for="showPassword">
                            Tampilkan password
                          </label>
                        </div>

                        <div className="d-grid col-12 mt-md-4 mt-3">
                          <Link to="/">
                            <button type="submit" className="btn btn-sm btn-main">
                              Masuk
                            </button>
                          </Link>
                        </div>
                      </form>

                      <div className="mt-4">
                        <p className="mb-0">
                          Belum punya akun?{" "}
                          <Link to="/SignUp" className="text-primary text-decoration-none">
                            Daftar
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
export default SignIn;
