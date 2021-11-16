<<<<<<< HEAD
import "../style/App.css";
import Header from "../layouts/header/header";
import Layout from "../layouts";
import Userpage from "./Userpage";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function App() {
  return (
    <Layout>
      <SignUp />
      <SignIn />
    </Layout>
  );
=======
import '../style/index.css'
import Layout from "../layouts";
import Card from '../components/Card';
import { useForm } from 'react-hook-form'

function App() {

  const kota = ['Denpasar', 'Ubud', 'Kuta', 'Badung', 'Gianyar']
  
  const { register, handleSubmit, formState: {errors} } = useForm()
  const onSubmit = data => {
    console.log(data);
  }

  return (
    <Layout>
      {/* main section */}
      <section>
        <div className="positon-relative main-section">       
          {/* image and title sub section */}
          <div className="d-block d-md-flex min-w-100 position-relative">
            <div className="position-relative w-30 d-none d-md-block"></div>
            <div className="position-relative main-section-img">
              <img src="https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="House" className="img-fluid" />
            </div>
            
            <div className="ps-md-5 pt-xl-5 pt-lg-3 pt-md-4 ms-xl-5 position-absolute title">
              <div className="position-relative">
                <h1 className="fw-bold fs-title">Temukan hunian</h1>
                <h1 className="fw-bold fs-title">impianmu di sini !</h1>
              </div>
            </div>
          </div>


          {/* search property sub section */}
          <div className="position-relative">
            <div className="mt-5 ms-xl-5 pe-xl-5 ps-xl-5 ps-md-5 searchProperty">
              <ul className="nav" role="tablist" id="searchPropertyTab">
                <li className="nav-item p-0">
                  <button className="px-3 nav-link text-secondary active bg-transparent border-0" id="pills-searchForm-tab" data-bs-toggle="pill" data-bs-target="#pills-searchForm" type="button" role="tab" aria-controls="pills-searchForm" aria-selected="true">
                    <div><i className="fas fa-home"></i></div>
                    <div>Beli</div>
                  </button>
                </li>
                <li className="nav-item">
                  <button className="nav-link text-secondary bg-transparent border-0" id="pills-searchForm-tab" data-bs-toggle="pill" data-bs-target="#pills-searchForm" type="button" role="tab" aria-controls="pills-searchForm" aria-selected="true">
                    <div><i className="fas fa-home"></i></div>
                    <div>Sewa</div>  
                  </button>
                </li>
              </ul>

              <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane show active" id="pills-searchForm" role="tabpanel" aria-labelledby="pills-searchForm-tab">
                  <div className="shadow-sm p-lg-4 p-md-3 p-3 bg-body rounded">
                    <form className="row gx-0 gy-5 gy-md-0 gx-lg-5 px-lg-4 align-items-center justify-content-between search-property-form">
                      <div className="col-md-3 col-12">
                        <label htmlFor="city"><p className="text-muted"><i className="fas fa-map-marker-alt"></i> <span className="ms-2">Kota</span></p></label>
                        <input 
                          className={`form-control border-0 fw-bold ${errors?.city ? 'is-invalid' : ''}`}
                          list="datalistOptions" id="city" placeholder="Pilih Kota" autoComplete="off"
                          {...register(
                            'city',
                            {
                              required: true
                            }
                          )}
                        />
                        <datalist id="datalistOptions">
                          {kota.sort().map(element => <option value={element} />)}
                        </datalist>
                      </div>

                      <div className="col-md-3 col-12">
                        <label htmlFor="type"><p className="text-muted"><i className="fas fa-list"></i> <span className="ms-2">Tipe Properti</span></p></label>
                        <select
                          id="type"
                          className={`form-select border-0 fw-bold ${errors?.type ? 'is-invalid' : ''}`}
                          { ...register(
                            'type',
                            {
                              required: true
                            }
                          ) }
                        >
                          <option value="">Pilih Tipe</option>
                          <option value="Rumah">Rumah</option>
                          <option value="Ruko">Ruko</option>
                          <option value="Vila">Vila</option>
                        </select>
                      </div>

                      <div className="col-md-4 col-12">
                        <label htmlFor="price"><p className="text-muted"><i className="fas fa-dollar-sign"></i> <span className="ms-2">Range Harga</span></p></label>
                        <select id="price" className="form-select border-0 fw-bold">
                          <option selected="">Harga Min - Max</option>
                          <option>100 - 500 JT</option>
                          <option>500 JT - 1 M</option>
                          <option>1 - 10 M</option>
                          <option>10 - 20 M</option>
                        </select>
                      </div>

                      <div className="col-md-1 col-12 text-center">
                        <button className="btn btn-sm btn-main d-none d-md-block"><i className="fas fa-search"></i></button>
                        <button className="btn btn-sm btn-main d-block d-md-none"><i className="fas fa-search me-2"></i> Cari</button>
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
              <button className="btn btn-sm btn-main">Lihat Semua Property</button>
            </div>
          </div>
          
          <div className="row mt-1 gx-0 gy-4 gx-md-4">
            <div className="col-md-6 col-xl-4">
              <Card src="https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80" top="Rumah" nama="Townhouse Bagus 2 Lantai" lokasi="Jimbaran, Badung" harga="IDR. 600 M" agen="Futurehomy Agency" href="/searchProperty/1" />
            </div>

            <div className="col-md-6 col-xl-4">
              <Card src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" top="Rumah" nama="Townhouse Bagus 2 Lantai" lokasi="Jimbaran, Badung" harga="IDR. 600 M" agen="Futurehomy Agency" href="/searchProperty/1" />

            </div>
            
            <div className="col-md-6 col-xl-4">
              <Card src="https://images.unsplash.com/photo-1627141234469-24711efb373c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" top="Rumah" nama="Townhouse Bagus 2 Lantai" lokasi="Jimbaran, Badung" harga="IDR. 600 M" agen="Futurehomy Agency" href="/searchProperty/1" />
            </div>
            
            <div className="col-md-6 col-xl-4">
              <Card src="https://images.unsplash.com/photo-1522050212171-61b01dd24579?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80" top="Rumah" nama="Townhouse Bagus 2 Lantai" lokasi="Jimbaran, Badung" harga="IDR. 600 M" agen="Futurehomy Agency" href="/searchProperty/1" />
            </div>
          </div>
        </div>
      </section>

      {/* featured property section */}
      <section>
        <div className="container py-5 mt-5">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="fw-bold">Featured Property</h2>
              <h5 className="text-secondary mt-3">UmahBali berkomitmen untuk membantu para kliennya mencapai tujuan mereka.</h5>
            </div>
          </div>
          
          {/* nav */}
          <div className="row mt-4">
            <div className="col-12">
              <ul className="nav justify-content-center" id="typeTab" role="tablist">
                <li className="nav-item fs-5">
                  <button className="nav-link text-dark active bg-transparent border-0" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Rumah</button>
                </li>
                <li className="nav-item fs-5 mx-3 mx-md-5">
                  <button className="nav-link text-dark bg-transparent border-0" id="pills-ruko-tab" data-bs-toggle="pill" data-bs-target="#pills-ruko" type="button" role="tab" aria-controls="pills-ruko" aria-selected="false">Ruko</button>
                </li>
                <li className="nav-item fs-5">
                  <a className="nav-link text-dark bg-transparent border-0" id="pills-vila-tab" data-bs-toggle="pill" data-bs-target="#pills-vila" type="button" role="tab" aria-controls="pills-vila" aria-selected="false">Vila</a>
                </li>
              </ul>
            </div>

          </div>

          <div className="tab-content" id="pills-tabContent">
            {/* rumah tab */}
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
              <div className="row mt-1">
                <div className="col-md-6 col-xl-4">
                  <Card src="https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80" top="Rumah" nama="Townhouse Bagus 2 Lantai" lokasi="Jimbaran, Badung" harga="IDR. 600 M" agen="Futurehomy Agency" href="/searchProperty/1" />
                </div>
                <div className="col-md-6 col-xl-4">
                  <Card src="https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80" top="Rumah" nama="Townhouse Bagus 2 Lantai" lokasi="Jimbaran, Badung" harga="IDR. 600 M" agen="Futurehomy Agency" href="/searchProperty/1" />
                </div>
              </div>
            </div>
            
            {/* ruko tab */}
            <div className="tab-pane fade" id="pills-ruko" role="tabpanel" aria-labelledby="pills-ruko-tab">
              <div className="row mt-1">
                <div className="col-md-6 col-xl-4">
                  <Card src="https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80" top="Rumah" nama="Townhouse Bagus 2 Lantai" lokasi="Jimbaran, Badung" harga="IDR. 600 M" agen="Futurehomy Agency" href="/searchProperty/1" />
                </div>
              </div>
            </div>
            
            {/* vila tab */}
            <div className="tab-pane fade" id="pills-vila" role="tabpanel" aria-labelledby="pills-vila-tab">
              <div className="row">
                <div className="col-md-6 col-xl-4">
                  <Card src="https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80" top="Rumah" nama="Townhouse Bagus 2 Lantai" lokasi="Jimbaran, Badung" harga="IDR. 600 M" agen="Futurehomy Agency" href="/searchProperty/1" />
                </div>

                <div className="col-md-6 col-xl-4">
                  <Card src="https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80" top="Rumah" nama="Ruko Bagus Asri" lokasi="Jimbaran, Badung" harga="IDR. 600 M" agen="Futurehomy Agency" href="/searchProperty/2" />
                </div>
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
              <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row justify-content-center">
                      <div className="col-12 col-md-10 col-lg-6">
                        <div className="card mb-3">
                          <div className="row g-0 align-items-center">
                            <div className="col-md-4">
                              <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80" className="img-fluid rounded-start" alt="Person" />
                            </div>
                            <div className="col-md-8 ps-4">
                              <div className="card-body">
                                <h5 className="card-title fw-bold">Edwin O'Connor</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquam fugit quasi earum, reprehenderit adipisci, dignissimos porro in dolor minima temporibus voluptatibus, vero ipsam odit magnam ut officia necessitatibus veniam.</p>
                                <p className="card-text"><small className="text-warning"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></small></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-10 col-lg-6">
                        <div className="card mb-3">
                          <div className="row g-0 align-items-center">
                            <div className="col-md-4">
                              <img src="https://images.unsplash.com/photo-1601831698630-a814370b9cca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjc3fHxwb3J0cmFpdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="img-fluid rounded-start" alt="Person" />
                            </div>
                            <div className="col-md-8 ps-4">
                              <div className="card-body">
                                <h5 className="card-title fw-bold">Summer Young</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquam fugit quasi earum, reprehenderit adipisci, dignissimos porro in dolor minima temporibus voluptatibus, vero ipsam odit magnam ut officia necessitatibus veniam.</p>
                                <p className="card-text"><small className="text-warning"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></small></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-12 col-md-10 col-lg-6">
                        <div className="card mb-3">
                          <div className="row g-0 align-items-center">
                            <div className="col-md-4">
                              <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="img-fluid rounded-start" alt="Person" />
                            </div>
                            <div className="col-md-8 ps-4">
                              <div className="card-body">
                                <h5 className="card-title fw-bold">Miles Scott</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquam fugit quasi earum, reprehenderit adipisci, dignissimos porro in dolor minima temporibus voluptatibus, vero ipsam odit magnam ut officia necessitatibus veniam.</p>
                                <p className="card-text"><small className="text-warning"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></small></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="col-12 col-md-10 col-lg-6">
                        <div className="card mb-3">
                          <div className="row g-0 align-items-center">
                            <div className="col-md-4">
                              <img src="https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="img-fluid rounded-start" alt="Person" />
                            </div>
                            <div className="col-md-8 ps-4">
                              <div className="card-body">
                                <h5 className="card-title fw-bold">Agnes Gray</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquam fugit quasi earum, reprehenderit adipisci, dignissimos porro in dolor minima temporibus voluptatibus, vero ipsam odit magnam ut officia necessitatibus veniam.</p>
                                <p className="card-text"><small className="text-warning"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></small></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
                {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button> */}
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  )
>>>>>>> f81aba9e8dd596312ed6c80d4ee0c028c8eece13
}

export default App;