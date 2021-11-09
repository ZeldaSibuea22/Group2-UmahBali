import '../style/index.css'
import Layout from "../layouts/layouting";

function App() {
  return (
    <Layout>
      {/* main section */}
      <section>
        {/* <div className="container-fluid pe-0 me-0">
          <div className="row">
            <div className="col-12 col-lg-4 py-5"> */}
              {/* <div className="mt-5"> */}
                {/* <h1 className="fw-bold fs-title">Temukan hunian</h1>
                <h1 className="fw-bold fs-title">impianmu di sini !</h1> */}
              {/* </div> */}
            {/* </div>
            <div className="col-12 col-lg-8">
              <img src="https://images.unsplash.com/photo-1524813686514-a57563d77965?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1332&q=80" alt="House" className="img-fluid" />
              </div>
              </div>
            </div> */}
        <div className="d-block d-md-flex justify-content-between align-content-center">
          <div className="w-30 ps-5 pt-5 position-relative">
            <h1 className="fw-bold fs-title">Temukan hunian</h1>
            <h1 className="fw-bold fs-title">impianmu di sini !</h1>
          </div>
          <div className="w-75">
            <img src="https://images.unsplash.com/photo-1524813686514-a57563d77965?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1332&q=80" alt="House" className="img-fluid" />
          </div>
        </div>
      </section>

      {/* recent property section */}
      <section>
        <div className="container py-5 mt-5">
          <div className="row">
            <div className="col-8">
              <p className="mb-2">Lihat properti yang</p>
              <h4 className="fw-bold">Baru Ditambahkan.</h4>
            </div>
            <div className="col-4 text-end">
              <button className="btn btn-sm btn-main">Lihat Semua Property</button>
            </div>
          </div>
          
          <div className="row mt-1 gx-0 gy-4 gx-md-4">
            <div className="col-md-6">
              <div className="card">
                <a href=""><img src="https://images.unsplash.com/photo-1522050212171-61b01dd24579?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80" className="card-img-top max-h-20 object-cover" alt="House" /></a>
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
                      <p className="text-secondary"><i class="fas fa-user-circle"></i> Futurehomy Agency</p>
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
                <a href=""><img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" className="card-img-top max-h-20 object-cover" alt="House" /></a>
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
                      <p className="text-secondary"><i class="fas fa-user-circle"></i> Futurehomy Agency</p>
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
                <a href=""><img src="https://images.unsplash.com/photo-1627141234469-24711efb373c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" className="card-img-top max-h-20 object-cover" alt="House" /></a>
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
                      <p className="text-secondary"><i class="fas fa-user-circle"></i> Futurehomy Agency</p>
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
                <a href=""><img src="https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80" className="card-img-top max-h-20 object-cover" alt="House" /></a>
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
                      <p className="text-secondary"><i class="fas fa-user-circle"></i> Futurehomy Agency</p>
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

      {/* featured property section */}
      <section>
        <div className="container py-5 mt-5">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="fw-bold">Featured Property</h2>
              <h5 className="text-secondary mt-3">UmahBali berkomitmen untuk membantu para kliennya mencapai tujuan mereka.</h5>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-12">
              <ul class="nav justify-content-center">
                <li class="nav-item fs-5">
                  <a class="nav-link active" aria-current="page" href="#">Active</a>
                </li>
                <li class="nav-item fs-5 mx-5">
                  <a class="nav-link text-dark" href="#">Ruko</a>
                </li>
                <li class="nav-item fs-5">
                  <a class="nav-link text-dark" href="#">Vila</a>
                </li>
              </ul>
            </div>

          </div>

          <div className="row mt-4">
            <div className="col-md-6">
              <div className="card">
                <a href=""><img src="https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80" className="card-img-top max-h-20 object-cover" alt="House" /></a>
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
                      <p className="text-secondary"><i class="fas fa-user-circle"></i> Futurehomy Agency</p>
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
                <a href=""><img src="https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80" className="card-img-top max-h-20 object-cover" alt="House" /></a>
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
                      <p className="text-secondary"><i class="fas fa-user-circle"></i> Futurehomy Agency</p>
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
            {/* <div className="col-12">
              <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="..." className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="..." className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="..." className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div> */}

            <div className="col-12 col-md-10 col-lg-6">
              <div class="card mb-3">
                <div class="row g-0 align-items-center">
                  <div class="col-md-4">
                    <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80" class="img-fluid rounded-start" alt="Person" height="100%" />
                  </div>
                  <div class="col-md-8 ps-4">
                    <div class="card-body">
                      <h5 class="card-title fw-bold">Gigi Hadid</h5>
                      <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquam fugit quasi earum, reprehenderit adipisci, dignissimos porro in dolor minima temporibus voluptatibus, vero ipsam odit magnam ut officia necessitatibus veniam.</p>
                      <p class="card-text"><small class="text-warning"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default App;
