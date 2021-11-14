import React from "react";
import Card from "../components/Card";
import "../style/index.css";

export default function Userpage() {
  const nama = "Agung";
  const email = "agung@gmail.com";

  return (
    <div className="profil col-12 px-5 py-5 mt-5 ">
      <figure className="figure">
        <img src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png" height="50px" width="50px" className="figure-img img-fluid rounded" alt="..." />
        <figcaption className="figure-caption">{nama}</figcaption>
        <figcaption className="figure-caption">{email}</figcaption>
      </figure>

      <div className="container py-5 mt-5">
        <div className="row">
          <div className="col-12 text-center">
            <h4 className="fw-bold">Daftar Wishlist</h4>
          </div>
        </div>
      </div>

      <section>
        <div className="col-12 px-5">
          <div className="">
            <Card
              src="https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=873&q=80"
              nama="Townhouse Bali"
              lokasi="Jimbaran, Lombok"
              agen="Agung Estate"
              harga="IDR 600M"
              top="House"
            />
          </div>
          <div className="row-3">
            <Card
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
              nama="Townhouse Bali"
              lokasi="Jimbaran, Bali"
              agen="Futurehome Agency"
              harga="IDR 600M"
              top="House"
            />
          </div>
        </div>
        <div className="col-12 px-5">
          <div className="">
            <Card
              src="https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=873&q=80"
              nama="Townhouse Bali"
              lokasi="Jimbaran, Lombok"
              agen="Agung Estate"
              harga="IDR 600M"
              top="House"
            />
          </div>
          <div className="row-3">
            <Card
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
              nama="Townhouse Bali"
              lokasi="Jimbaran, Bali"
              agen="Futurehome Agency"
              harga="IDR 600M"
              top="House"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
