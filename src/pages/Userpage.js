import React from "react";
import { useContext } from "react";
import Card from "../components/Card";
import "../style/index.css";
import "../style/userpage.css";

import { PropertiesContext } from "../context/property-context";
import { AgentsContext } from "../context/agent-context";
import Layout from "../layouts";
import { useNavigate } from "react-router";

export default function Userpage() {
  let isLogin = localStorage.getItem("isLogin");
  const nama = localStorage.getItem("SubmissionName");
  const email = localStorage.getItem("SubmissionEmail");

  let navigate = useNavigate();
  if (isLogin === null) {
    navigate("/sign-in");
  }
  const { properties, loading } = useContext(PropertiesContext);
  const { agents, agentLoading } = useContext(AgentsContext);
  // let [missing, setMissing] = useState(false)
  
  let idCard = localStorage.getItem("wishlist");
  idCard = JSON.parse(idCard);
  let wishlistUser = [];
  if (!loading && idCard) {
    wishlistUser = idCard.map((element) => properties.find((property) => property.id === element));
  }
  
  const formatPrice = (price) => {
    if (price > 999 && price < 1000000) {
      return `${(price / 1000).toFixed(1)} K`;
    } else if (price >= 1000000 && price < 1000000000) {
      return `${(price / 1000000).toFixed(1)} JT`;
    } else if (price >= 1000000000) {
      return `${(price / 1000000000).toFixed(1)} M`;
    } else {
      return price;
    }
  };

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-12 text-end p-4">
            {/* <div className="col-12 col-md-4 text-md-end"> */}
            <figure className="figure">
              <img src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png" height="50px" width="50px" className="figure-img img-fluid rounded" alt="..." />
              <figcaption className="nama figure-caption">{nama}</figcaption>
              <figcaption className="email figure-caption">{email}</figcaption>
            </figure>
            {/* </div> */}
          </div>

          <div className="container py-3 mt-1">
            <div className="row">
              <div className="col-12 text-center">
                <h4 className="fw-bold">Daftar Wishlist</h4>
              </div>
            </div>
          </div>

          <section>
            <div className="container pt-2 pb-5 mb-5">
              <div className="mt-1 gx-0 gy-4 gx-md-4 gridpage">
                {!loading && !agentLoading
                  ? wishlistUser.map((value) => {
                      let agent = agents.find((agent) => agent.id === value.agent);
                      return (
                        // <div className="m-2">
                          <Card  src={value.img[0]} variable = {true} tipe={value.propertyType} nama={value.propertyName} lokasi={`${value.kota}, Bali`} harga={`IDR. ${formatPrice(value.price)}`} agen={agent.nama} href={`/properties/detail/${value.id}`} id={value.id} type={value.hakMilikType} />
                        // </div>
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
