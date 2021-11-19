/* eslint-disable jsx-a11y/anchor-is-valid */
import "../style/index.css";
import Layout from "../layouts";
import Card from "../components/Card";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { PropertiesContext } from "../context/property-context";
import { AgentsContext } from "../context/agent-context";
import { useNavigate } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import data from "../assets/testimonial";
import styled from "styled-components";

function App() {
  const kota = ["Denpasar", "Ubud", "Kuta", "Badung", "Gianyar"];
  const [hakMilik, setHakMilik] = useState("Dijual");

  let navigate = useNavigate();

  const handleSewa = () => setHakMilik("Disewa");
  const handleBeli = () => setHakMilik("Dijual");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.hakMilikType = hakMilik;
    const searchValue = data;
    localStorage.setItem("searchProperty", JSON.stringify(searchValue));
    navigate("/search-property");
  };

  const { properties, loading } = useContext(PropertiesContext);
  const { agents, agentLoading } = useContext(AgentsContext);
  let newestProperties = [];
  const filterType = {
    rumah: [],
    vila: [],
    ruko: [],
  };

  if (!loading) {
    newestProperties = properties.slice(-6);
    filterType.rumah = properties.filter((element) => element.propertyType === "Rumah").slice(-3);
    filterType.vila = properties.filter((element) => element.propertyType === "Vila").slice(-3);
    filterType.ruko = properties.filter((element) => element.propertyType === "Ruko").slice(-3);
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

  const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 15px;
    font-size: 4em;
  `;

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  const testimoni = data.testimoni;

  return (
    <Layout>
      {/* main section */}
      <section>
        <div className="positon-relative main-section">
          {/* image and title sub section */}
          <div className="d-block d-sm-flex min-w-100 position-relative">
            <div className="position-relative w-30 d-md-block justdiv"></div>
            <div className="position-relative main-section-img">
              <img
                src="https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="House"
                className="img-fluid rounded-0"
              />
            </div>

            <div className="ps-sm-5 pt-xl-5 pt-lg-3 pt-md-4 ms-xl-5 position-absolute title">
              <div className="position-relative">
                <h1 className="fw-bold fs-title">Temukan hunian</h1>
                <h1 className="fw-bold fs-title">impianmu di sini !</h1>
              </div>
            </div>
          </div>

          {/* search property sub section */}
          <div className="position-relative">
            <div className="mt-5 ms-xl-5 pe-xl-5 ps-xl-5 ps-md-5 ps-sm-4 searchProperty">
              <ul className="nav" role="tablist" id="searchPropertyTab">
                <li className="nav-item p-0">
                  <button
                    className="px-3 nav-link text-secondary active bg-transparent border-0"
                    id="pills-searchForm-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-searchForm"
                    type="button"
                    role="tab"
                    aria-controls="pills-searchForm"
                    aria-selected="true"
                    onClick={() => handleBeli()}
                  >
                    <div>
                      <i className="fas fa-home"></i>
                    </div>
                    <div>Beli</div>
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link text-secondary bg-transparent border-0"
                    id="pills-searchForm-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-searchForm"
                    type="button"
                    role="tab"
                    aria-controls="pills-searchForm"
                    aria-selected="true"
                    onClick={() => handleSewa()}
                  >
                    <div>
                      <i className="fas fa-home"></i>
                    </div>
                    <div>Sewa</div>
                  </button>
                </li>
              </ul>

              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane show active"
                  id="pills-searchForm"
                  role="tabpanel"
                  aria-labelledby="pills-searchForm-tab"
                >
                  <div className="shadow-sm p-lg-4 p-md-3 p-3 bg-body rounded">
                    <form
                      className="row gx-0 gy-5 gy-sm-0 gx-lg-5 px-lg-4 align-items-center justify-content-between search-property-form"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <div className="col-sm-3 col-12">
                        <label htmlFor="city">
                          <p className="text-muted">
                            <i className="fas fa-map-marker-alt"></i>{" "}
                            <span className="ms-2">Kota</span>
                          </p>
                        </label>
                        <input
                          className={`form-control border-0 fw-bold ${
                            errors?.city ? "is-invalid" : ""
                          }`}
                          list="datalistOptions"
                          id="city"
                          placeholder="Pilih Kota"
                          autoComplete="off"
                          {...register("city", {
                            required: true,
                          })}
                        />
                        <datalist id="datalistOptions">
                          {kota.sort().map((element) => (
                            <option key={element} value={element} />
                          ))}
                        </datalist>
                      </div>

                      <div className="col-sm-3 col-12">
                        <label htmlFor="type">
                          <p className="text-muted">
                            <i className="fas fa-list"></i>{" "}
                            <span className="ms-2">Tipe Properti</span>
                          </p>
                        </label>
                        <select
                          id="type"
                          className={`form-select border-0 fw-bold ${
                            errors?.type ? "is-invalid" : ""
                          }`}
                          {...register("type", {
                            required: true,
                          })}
                        >
                          <option value="">Pilih Tipe</option>
                          <option value="Semua">Semua</option>
                          <option value="Rumah">Rumah</option>
                          <option value="Ruko">Ruko</option>
                          <option value="Vila">Vila</option>
                        </select>
                      </div>

                      <div className="col-sm-4 col-12">
                        <label htmlFor="price">
                          <p className="text-muted">
                            <i className="fas fa-dollar-sign"></i>{" "}
                            <span className="ms-2">Range Harga</span>
                          </p>
                        </label>
                        <select
                          id="price"
                          className={`form-select border-0 fw-bold ${
                            errors?.price ? "is-invalid" : ""
                          }`}
                          {...register("price", {
                            required: true,
                          })}
                        >
                          <option value="">Harga Min - Max</option>
                          <option value="Semua">Semua</option>
                          <option
                            value={JSON.stringify({
                              min: 100000000,
                              max: 500000000,
                            })}
                          >
                            100 - 500 JT
                          </option>
                          <option
                            value={JSON.stringify({
                              min: 500000000,
                              max: 1000000000,
                            })}
                          >
                            500 JT - 1 M
                          </option>
                          <option
                            value={JSON.stringify({
                              min: 1000000000,
                              max: 10000000000,
                            })}
                          >
                            1 - 10 M
                          </option>
                          <option
                            value={JSON.stringify({
                              min: 10000000000,
                              max: 20000000000,
                            })}
                          >
                            10 - 20 M
                          </option>
                        </select>
                      </div>

                      <div className="col-sm-1 col-12 text-center">
                        <button
                          className="btn btn-sm btn-main d-none d-sm-block"
                          type="submit"
                        >
                          <i className="fas fa-search"></i>
                        </button>
                        <button
                          className="btn btn-sm btn-main d-block d-sm-none"
                          type="submit"
                        >
                          <i className="fas fa-search me-2"></i> Cari
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* recent property section */}
      <section>
        <div className="container py-5 mt-5">
          <div className="row">
            <div className="col-12 col-md-8">
              <p className="mb-2">Lihat properti yang</p>
              <h4 className="fw-bold">Baru Ditambahkan.</h4>
            </div>
            <div className="col-12 col-md-4 text-md-end">
              <Link to="/properties">
                <button className="btn btn-sm btn-main">
                  Lihat Semua Property
                </button>
              </Link>
            </div>
          </div>

          <div className="row mt-1 gx-0 gy-4 gx-md-4">
            {!loading && !agentLoading
              ? newestProperties.map((property) => {
                  let agent = agents.find(
                    (agent) => agent.id === property.agent
                  );
                  return (
                    <div className="col-md-6 col-xl-4" key={property.id}>
                      <Card
                        src={property.img[0]}
                        tipe={property.propertyType}
                        nama={property.propertyName}
                        lokasi={`${property.kota}, Bali`}
                        harga={`IDR. ${formatPrice(property.price)}`}
                        agen={agent.nama}
                        href={`/properties/detail/${property.id}`}
                        id={property.id}
                        type={property.hakMilikType}
                        isNew='NEW'
                      />
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </section>

      {/* featured property section */}
      <section>
        <div className="container py-5 mt-5">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="fw-bold">Featured Property</h2>
              <h5 className="text-secondary mt-3">
                UmahBali berkomitmen untuk membantu para kliennya mencapai
                tujuan mereka.
              </h5>
            </div>
          </div>

          {/* nav */}
          <div className="row mt-4">
            <div className="col-12">
              <ul
                className="nav justify-content-center"
                id="typeTab"
                role="tablist"
              >
                <li className="nav-item fs-5">
                  <button
                    className="nav-link text-dark active bg-transparent border-0"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    Rumah
                  </button>
                </li>
                <li className="nav-item fs-5 mx-3 mx-md-5">
                  <button
                    className="nav-link text-dark bg-transparent border-0"
                    id="pills-ruko-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-ruko"
                    type="button"
                    role="tab"
                    aria-controls="pills-ruko"
                    aria-selected="false"
                  >
                    Ruko
                  </button>
                </li>
                <li className="nav-item fs-5">
                  <a
                    className="nav-link text-dark bg-transparent border-0"
                    id="pills-vila-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-vila"
                    type="button"
                    role="tab"
                    aria-controls="pills-vila"
                    aria-selected="false"
                  >
                    Vila
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="tab-content" id="pills-tabContent">
            {/* rumah tab */}
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div className="row mt-1  gx-0 gy-4 gx-md-4">
                {!loading && !agentLoading
                  ? filterType.rumah.map((property) => {
                      let agent = agents.find(
                        (agent) => agent.id === property.agent
                      );
                      return (
                        <div className="col-md-6 col-xl-4" key={property.id}>
                          <Card
                            src={property.img[0]}
                            tipe={property.propertyType}
                            nama={property.propertyName}
                            lokasi={`${property.kota}, Bali`}
                            harga={`IDR. ${formatPrice(property.price)}`}
                            agen={agent.nama}
                            href={`/properties/detail/${property.id}`}
                            id={property.id}
                            type={property.hakMilikType}
                          />
                        </div>
                      );
                    })
                  : null}
              </div>
            </div>

            {/* ruko tab */}
            <div
              className="tab-pane fade"
              id="pills-ruko"
              role="tabpanel"
              aria-labelledby="pills-ruko-tab"
            >
              <div className="row mt-1  gx-0 gy-4 gx-md-4">
                {!loading && !agentLoading
                  ? filterType.ruko.map((property) => {
                      let agent = agents.find(
                        (agent) => agent.id === property.agent
                      );
                      return (
                        <div className="col-md-6 col-xl-4" key={property.id}>
                          <Card
                            src={property.img[0]}
                            tipe={property.propertyType}
                            nama={property.propertyName}
                            lokasi={`${property.kota}, Bali`}
                            harga={`IDR. ${formatPrice(property.price)}`}
                            agen={agent.nama}
                            href={`/properties/detail/${property.id}`}
                            id={property.id}
                            type={property.hakMilikType}
                          />
                        </div>
                      );
                    })
                  : null}
              </div>
            </div>

            {/* vila tab */}
            <div
              className="tab-pane fade"
              id="pills-vila"
              role="tabpanel"
              aria-labelledby="pills-vila-tab"
            >
              <div className="row mt-1 gx-0 gy-4 gx-md-4">
                {!loading && !agentLoading
                  ? filterType.vila.map((property) => {
                      let agent = agents.find(
                        (agent) => agent.id === property.agent
                      );
                      return (
                        <div className="col-md-6 col-xl-4" key={property.id}>
                          <Card
                            src={property.img[0]}
                            tipe={property.propertyType}
                            nama={property.propertyName}
                            lokasi={`${property.kota}, Bali`}
                            harga={`IDR. ${formatPrice(property.price)}`}
                            agen={agent.nama}
                            href={`/properties/detail/${property.id}`}
                            id={property.id}
                            type={property.hakMilikType}
                          />
                        </div>
                      );
                    })
                  : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* testimoni section */}
      <section>
        <div className="container py-5 mt-5 mb-5">
          <div className="row text-center">
            <div className="col-12">
              <h2 className="fw-bold">Reviews</h2>
              <h5 className="text-secondary mt-3">Apa yang klien katakan tentang UmahBali.</h5>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-12">
              <Carousel breakPoints={breakPoints}>
                {testimoni.map((item) => (
                  <Item key={item.id}>
                    <div>
                      <div className="card mb-3 h-100 justify-content-center text-center">
                        <img
                          src={item.img}
                          className="avatar-testimoni object-cover max-h-20 mx-auto my-3"
                          alt="Person"
                        />

                        <div className="card-body pb-5">
                          <h5 className="card-title fw-bold">{item.name}</h5>
                          <p className="card-text">
                            <small className="text-warning">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                            </small>
                          </p>
                          <p className="card-text text-dark">{item.review}</p>
                        </div>
                      </div>
                    </div>
                  </Item>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default App;
