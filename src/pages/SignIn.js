import React, { useState } from "react";
import Userpage from "./Userpage";
import { useForm } from "react-hook-form";

function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    e.preventDefault();
    let userEmail = localStorage.getItem("SubmissionEmail");
    let userPass = localStorage.getItem("SubmissionPassword");
    if (!userEmail || !userPass) {
    }
  };

  return (
    <div className="col-12 py-5 my-5 mx-5 px-5">
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
                        <input type="text" className={errors?.email ? "is-invalid form control" : "form-control"} placeholder="emailpengguna@mail.com" id="email" autocomplete="off" />
                        <div className="invalid-feedback">{errors.email && errors.email.type === "required" && "masukan email anda"} </div>
                      </div>
                    </div>

                    <div className="mb-2">
                      <label for="password" className="form-label">
                        Password
                      </label>
                      <div className="input-group mb-1">
                        <span className="input-group-text" id="basic-addon1">
                          <i className="far fa-lock"></i>
                        </span>
                        <input type="password" className="form-control" placeholder="minimal 8 karakter" id="password" autocomplete="off" />
                      </div>
                    </div>

                    <div className="mb-3 form-check">
                      <input type="checkbox" className="form-check-input" id="showPassword" />
                      <label className="form-check-label" for="showPassword">
                        Tampilkan password
                      </label>
                    </div>

                    <div className="d-grid col-12 mt-md-4 mt-3">
                      <button type="submit" className="btn btn-sm btn-main">
                        Masuk
                      </button>
                    </div>
                  </form>

                  <div className="mt-4">
                    <p className="mb-0">
                      Belum punya akun?{" "}
                      <a href="#" className="text-primary text-decoration-none">
                        Daftar
                      </a>
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
export default SignIn;
