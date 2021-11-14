import React from "react";
import Card from "../components/Card";
import "../style/index.css";

export default function Userpage() {
  const nama = "Agung";
  const email = "agung@gmail.com";

  return (
    <div className="profil col-12 px-5 mt-5 ">
      <figure className="figure">
        <img src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png" height="50px" width="50px" className="figure-img img-fluid rounded" alt="..." />
        <figcaption className="figure-caption">{nama}</figcaption>
        <figcaption className="figure-caption">{email}</figcaption>
      </figure>

      <section>
        <Card />
        <div className="container py-5 mt-5">
          <div className="row">
            <div className="col-12 text-center">
              <h4 className="fw-bold">Daftar Wishlist</h4>
            </div>
          </div>

          <div className="row mt-1 gx-0 gy-4 gx-md-4">
            <div className="col-md-6">
              <div className="card">
                <a href="">
                  <img
                    src="https://images.unsplash.com/photo-1604142484923-2cc1b626c481?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    className="card-img-top max-h-20 object-cover"
                    alt="House"
                  />
                </a>
                <div className="card-body">
                  <div className="row">
                    <div className="col-12 col-lg-8 order-1 order-lg-0">
                      <a href="" className="text-decoration-none">
                        <h5 className="card-title fw-bold text-dark">Townhouse Bagus 2 Lantai</h5>
                        <p className="text-secondary">Jimbaran, Badung</p>
                      </a>
                    </div>

                    <div className="col-12 col-lg-4 text-start text-lg-end mb-3 mb-lg-0">
                      <span class="badge rounded-pill bg-primary">New</span>
                      <span class="badge rounded-pill bg-warning ms-1">Rent</span>
                    </div>
                  </div>

                  <div className="row mt-4">
                    <div className="col-12 col-md-6">
                      <p className="text-secondary">
                        <i class="fas fa-user-circle"></i> Zelda Happiness
                      </p>
                    </div>
                    <div className="col-12 col-md-6 text-start text-md-end">
                      <h4 className="fw-bold">IDR. 600 M</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card">
                <a href="">
                  <img
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                    className="card-img-top max-h-20 object-cover"
                    alt="House"
                  />
                </a>
                <div className="card-body">
                  <div className="row">
                    <div className="col-12 col-lg-8 order-1 order-lg-0">
                      <a href="" className="text-decoration-none">
                        <h5 className="card-title fw-bold text-dark">Townhouse Bagus 2 Lantai</h5>
                        <p className="text-secondary">Jimbaran, Badung</p>
                      </a>
                    </div>

                    <div className="col-12 col-lg-4 text-start text-lg-end mb-3 mb-lg-0">
                      <span class="badge rounded-pill bg-primary">New</span>
                      <span class="badge rounded-pill bg-danger ms-1">Sold</span>
                    </div>
                  </div>

                  <div className="row mt-4">
                    <div className="col-12 col-md-6">
                      <p className="text-secondary">
                        <i class="fas fa-user-circle"></i> Nurudin Group
                      </p>
                    </div>
                    <div className="col-12 col-md-6 text-start text-md-end">
                      <h4 className="fw-bold">IDR. 600 M</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card">
                <a href="">
                  <img
                    src="https://images.unsplash.com/photo-1627141234469-24711efb373c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                    className="card-img-top max-h-20 object-cover"
                    alt="House"
                  />
                </a>
                <div className="card-body">
                  <div className="row">
                    <div className="col-12 col-lg-8 order-1 order-lg-0">
                      <a href="" className="text-decoration-none">
                        <h5 className="card-title fw-bold text-dark">Townhouse Bagus 2 Lantai</h5>
                        <p className="text-secondary">Jimbaran, Badung</p>
                      </a>
                    </div>

                    <div className="col-12 col-lg-4 text-start text-lg-end mb-3 mb-lg-0">
                      <span class="badge rounded-pill bg-primary">New</span>
                      <span class="badge rounded-pill bg-danger ms-1">Sold</span>
                    </div>
                  </div>

                  <div className="row mt-4">
                    <div className="col-12 col-md-6">
                      <p className="text-secondary">
                        <i class="fas fa-user-circle"></i> Lisa Land
                      </p>
                    </div>
                    <div className="col-12 col-md-6 text-start text-md-end">
                      <h4 className="fw-bold">IDR. 600 M</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card">
                <a href="">
                  <img
                    src="https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
                    className="card-img-top max-h-20 object-cover"
                    alt="House"
                  />
                </a>
                <div className="card-body">
                  <div className="row">
                    <div className="col-12 col-lg-8 order-1 order-lg-0">
                      <a href="" className="text-decoration-none">
                        <h5 className="card-title fw-bold text-dark">Townhouse Bagus 2 Lantai</h5>
                        <p className="text-secondary">Jimbaran, Badung</p>
                      </a>
                    </div>

                    <div className="col-12 col-lg-4 text-start text-lg-end mb-3 mb-lg-0">
                      <span class="badge rounded-pill bg-primary">New</span>
                      <span class="badge rounded-pill bg-danger ms-1">Sold</span>
                    </div>
                  </div>

                  <div className="row mt-4">
                    <div className="col-12 col-md-6">
                      <p className="text-secondary">
                        <i class="fas fa-user-circle"></i> Jess Homeco
                      </p>
                    </div>
                    <div className="col-12 col-md-6 text-start text-md-end">
                      <h4 className="fw-bold">IDR. 600 M</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
