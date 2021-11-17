import React from "react";
import { useContext } from "react";
import Card from "../components/Card";
import "../style/index.css";

import { PropertiesContext } from "../context/property-context";
import { AgentsContext } from "../context/agent-context";
import Layout from "../layouts";
import { useNavigate } from "react-router";

export default function Userpage() {
  let isLogin = localStorage.getItem("isLogin");

  let navigate = useNavigate();
  if (isLogin === null) {
    navigate("/sign-in");
  }

  const nama = localStorage.getItem("SubmissionName");
  const email = localStorage.getItem("SubmissionEmail");

  const { properties, loading } = useContext(PropertiesContext);
  const { agents, agentLoading } = useContext(AgentsContext);

  let idCard = localStorage.getItem("wishlist");
  idCard = JSON.parse(idCard);
  let context = {};
  for (let key in properties) {
    if (key == idCard) {
      context = properties[key];
    }
  }
  console.log(context);

  let wishlistUser = [];
  if (!loading && idCard) {
    wishlistUser = idCard.map((element) => properties.find((property) => property.id === element));
    console.log(wishlistUser);
  }

  const formatPrice = (price) => {
    if (price > 999 && price < 1000000) {
      return `${(price / 1000).toFixed(1)} K`;
    } else if (price >= 1000000 && price < 1000000000) {
      return `${(price / 1000000).toFixed(1)} M`;
    } else if (price >= 1000000000) {
      return `${(price / 1000000000).toFixed(1)} B`;
    } else {
      return price;
    }
  };

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-12 text-end p-5">
            {/* <div className="col-12 col-md-4 text-md-end"> */}
            <figure className="figure">
              <img src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png" height="50px" width="50px" className="figure-img img-fluid rounded" alt="..." />
              <figcaption className="nama figure-caption">{nama}</figcaption>
              <figcaption className="email figure-caption">{email}</figcaption>
            </figure>
            {/* </div> */}
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
                {!loading && !agentLoading
                  ? wishlistUser.map((value) => {
                      let agent = agents.find((agent) => agent.id == value.agent);
                      return (
                        <div className="col-md-6 col-xl-4">
                          <Card src={value.img[0]} tipe={value.propertyType} nama={value.propertyName} lokasi={`${value.kota}, Bali`} harga={`IDR. ${formatPrice(value.price)}`} agen={agent.nama} href={`/properties/detail/${value.id}`} />
                        </div>
                      );
                    })
                  : null}
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
