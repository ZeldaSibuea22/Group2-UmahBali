/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Navigate } from "react-router";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();

    if (data.password === data.passwordconfirm) {
      localStorage.setItem("SubmissionName", data.name);
      localStorage.setItem("SubmissionEmail", data.email);
      localStorage.setItem("SubmissionPassword", data.password);
      console.log("Simpan di Local Storage");
    }
  };

  // ------------------------------------------------------

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login, setLogin] = useState(true);

  // on form submit
  function handleFormSubmit(e) {
    e.preventDefault();

    localStorage.setItem("SubmissionName", JSON.stringify(name));
    localStorage.setItem("SubmissionEmail", JSON.stringify(email));
    localStorage.setItem("SubmissionPassword", JSON.stringify(password));
    console.log("Simpan di Local Storage");
  }
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisiblity = () => {
    setShowPassword(showPassword ? false : true);
  };

  return (
    <div>
      <main className="d-flex min-vh-100 justify-content-center align-items-center p-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-12 col-xl-10 shadow rounded-6">
              <div className="row justify-content-center py-md-0 py-5">
                <div className="text-center d-md-none">
                  <h4>Selamat datang di UmahBali</h4>
                  <p className="text-secondary mt-1">Daftarkan akun anda dan dapatkan promo dan informasi menarik seputar properti</p>
                </div>
                <div className="col-lg-5 col-md-5 col-7 p-2 my-auto">
                  <img src="https://t3.ftcdn.net/jpg/02/22/46/52/360_F_222465278_7iugd1RGKKwm6p4AbQPAInFSHLOVvhpt.jpg" className="img-fluid w-100" alt="Eco Shopping" />
                </div>

                <div className="col-lg-6 col-md-6 col-12 p-lg-5 px-4 pe-md-2 py-md-5">
                  <div className="mb-4 d-none d-md-block">
                    <h4>Selamat datang di UmahBali</h4>
                    <p className="text-secondary mt-1">Daftarkan akun anda dan dapatkan promo dan informasi menarik seputar properti</p>
                  </div>

                  {/* Input Nama */}
                  <form onSubmit={handleSubmit(onSubmit)} id="registForm">
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Nama
                      </label>
                      <div className="input-group">
                        <span className="input-group-text" id="basic-addon1">
                          <i className="far fa-user"></i>
                        </span>
                        <input
                          type="text"
                          className={`form-control ${errors.name && "invalid"}`}
                          {...register("name", { required: "Nama tidak boleh kosong" })}
                          onKeyUp={() => {
                            trigger("name");
                          }}
                          placeholder="Harry Potter"
                          id="name"
                          autoComplete="off"
                        />
                      </div>
                      {errors.name && <small className="text-danger">{errors.name.message}</small>}
                    </div>

                    {/* Input Email */}
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <div className="input-group">
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
                          placeholder="pengguna@gmail.com"
                          id="email"
                          autoComplete="off"
                          onKeyUp={() => {
                            trigger("email");
                          }}
                        />
                      </div>
                      {errors.email && <small className="text-danger">{errors.email.message}</small>}

                      {/* form password */}
                      <div className="mb-3 mt-3">
                        <label htmlFor="password" className="form-label">
                          Password
                        </label>
                        <div className="input-group">
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
                            autoComplete="off"
                          />
                        </div>
                        {errors.password && <small className="text-danger">{errors.password.message}</small>}
                      </div>

                      {/* konfirmasipassword */}
                      <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                          Konfirmasi Password
                        </label>
                        <div className="input-group">
                          <span className="input-group-text" id="basic-addon1">
                            <i className="far fa-lock"></i>
                          </span>
                          <input
                            type={showPassword ? "text" : "password"}
                            className={`form-control ${errors.password && "invalid"}`}
                            {...register("passwordconfirm", {
                              required: true,
                              pattern: {
                                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                message: "password tidak cocok",
                              },
                            })}
                            placeholder="masukan password"
                            id="password"
                            autoComplete="off"
                          />
                        </div>
                        {errors.passwordconfirm && <small className="text-danger">{errors.passwordconfirm.message}</small>}
                      </div>

                      <div className="mb-3 form-check">
                        <input type="checkbox" onClick={() => togglePasswordVisiblity()} className="form-check-input" id="showPassword" />
                        <label className="form-check-label" htmlFor="showPassword">
                          Tampilkan password
                        </label>
                      </div>

                      <div className="d-grid col-12 mt-md-4 mt-4">
                        <button type="submit" className="btn btn-sm btn-main">
                          Daftar
                        </button>
                      </div>
                    </div>
                  </form>

                  <div className="mt-4">
                    <p className=" mb-0">
                      Sudah punya akun?{" "}
                      <Link to="/sign-in" className="text-primary text-decoration-none">
                        Masuk
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
  );
}
export default SignUp;
