import React from "react";
import Card from "../components/Card";
import "../style/index.css";

export default function Userpage() {
  const nama = "Agung";
  const email = "agung@gmail.com";

  return (
    <div className="row">
      <div className="col-12 col-md-8">
        <div className="col-12 col-md-4 text-md-end">
          <figure className="figure">
            <img src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png" height="50px" width="50px" className="figure-img img-fluid rounded" alt="..." />
            <figcaption className="nama figure-caption">{nama}</figcaption>
            <figcaption className="email figure-caption">{email}</figcaption>
          </figure>
        </div>
      </div>

      <div className="container py-5 mt-5">
        <div className="row">
          <div className="col-12 text-center">
            <h4 className="fw-bold">Daftar Wishlist</h4>
          </div>
        </div>
      </div>

      <section>
        <div className="container py-5 mt-5">
          <div className="row mt-1 gx-0 gy-4 gx-md-4">
            <div className="col-md-6 col-xl-4">
              <Card
                src="https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
                tipe="Rumah"
                nama="Townhouse Bagus 2 Lantai"
                lokasi="Jimbaran, Badung"
                harga="IDR. 600 M"
                agen="Futurehomy Agency"
                href="/searchProperty/1"
              />
            </div>

            <div className="col-md-6 col-xl-4">
              <Card
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                tipe="Rumah"
                nama="Townhouse Bagus 2 Lantai"
                lokasi="Jimbaran, Badung"
                harga="IDR. 600 M"
                agen="Futurehomy Agency"
                href="/searchProperty/1"
              />
            </div>

            <div className="col-md-6 col-xl-4">
              <Card
                src="https://images.unsplash.com/photo-1627141234469-24711efb373c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                tipe="Rumah"
                nama="Townhouse Bagus 2 Lantai"
                lokasi="Jimbaran, Badung"
                harga="IDR. 600 M"
                agen="Futurehomy Agency"
                href="/searchProperty/1"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
