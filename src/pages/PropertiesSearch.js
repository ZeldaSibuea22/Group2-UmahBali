import React from "react";
import Layout from "../layouts/index";
import "../style/index.css";
import Card from "../components/Card";
import { PropertiesContext } from "../context/property-context";
import { AgentsContext } from "../context/agent-context";
import { useState, useContext } from "react";

export default function PropertiesSearch() {
  const { properties, loading } = useContext(PropertiesContext);
  const { agents, agentLoading } = useContext(AgentsContext);

  let filterProperty = [];

  const [propertiSearch, setPropertiSearch] = useState([]);

  let dataProperti = localStorage.getItem("searchProperty");
  dataProperti = JSON.parse(dataProperti);
  let priceFilter =
    dataProperti.price !== "Semua" ? JSON.parse(dataProperti.price) : "";

  if (dataProperti !== null && !loading) {
    filterProperty = properties
      .filter((item) => item.hakMilikType === dataProperti.hakMilikType)
      .filter((item) => item.kota === dataProperti.city);
    filterProperty =
      dataProperti.type === "Semua"
        ? filterProperty
        : filterProperty.filter(
            (item) => item.propertyType === dataProperti.type
          );
    filterProperty =
      dataProperti.price === "Semua"
        ? filterProperty
        : filterProperty.filter(
            (item) =>
              item.price > priceFilter.min && item.price < priceFilter.max
          );
  }
  let [input, setinput] = useState("");

  function searchbyInput(input) {
    filterProperty = filterProperty.filter((item) =>
      item.alamatLengkap.toLowerCase().includes(input.toLowerCase())
    );
    setPropertiSearch(filterProperty);
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

  console.log(propertiSearch);

  return (
    <Layout>
      <div className="d-flex mt-5 justify-content-center">
        <input
          onChange={(e) => setinput(e.target.value)}
          className="form-control me-2 w-75"
          type="search"
          placeholder={`Cari Properti berdasarkan wilayah di ${dataProperti.city}`}
          aria-label="Search"
        />
        <button
          onClick={() => searchbyInput(input)}
          className="btn btn-outline-primary"
          type="button"
          style={{ width: "75px" }}
        >
          Cari
        </button>
      </div>

      <div className="container mb-5 pb-5">
        <h3 className="mt-5 fw-bold">
          {dataProperti.type === "Semua" ? "Properti" : dataProperti.type} di{" "}
          {dataProperti.city}
        </h3>

        <div className="row mt-1 gx-0 gy-4 gx-md-2">
          {!loading && !agentLoading
            ? propertiSearch.length > 0
              ? propertiSearch.map((property) => {
                  let agent = agents.find(
                    (agent) => agent.id === property.agent
                  );
                  return (
                    <div className="col-xxl-4 col-xl-4 col-lg-4 g-3 col-md-6 col-sm-12 col-12 mt-4" key={property.id} >
                      <Card src={property.img[0]} tipe={property.propertyType} nama={property.propertyName} lokasi={`${property.kota}, Bali`} harga={`IDR. ${formatPrice(property.price)}`} agen={agent.nama} href={`/properties/detail/${property.id}`} id={property.id} type={property.hakMilikType}/>
                    </div>
                  );
                })
              : filterProperty.map((property) => {
                  let agent = agents.find(
                    (agent) => agent.id === property.agent
                  );
                  return (
                    <div className="col-xxl-4 col-xl-4 col-lg-4 g-3 col-md-6 col-sm-12 col-12 mt-4" key={property.id} >
                      <Card src={property.img[0]} tipe={property.propertyType} nama={property.propertyName} lokasi={`${property.kota}, Bali`} harga={`IDR. ${formatPrice(property.price)}`} agen={agent.nama} href={`/properties/detail/${property.id}`} id={property.id} type={property.hakMilikType}/>
                    </div>
                  );
                })
            : null}
        </div>
      </div>
    </Layout>
  );
}
