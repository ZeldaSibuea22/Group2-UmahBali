import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/index.css'
import '../style/Card.css'

export default function Card({src,top,nama,lokasi,logo,sale,harga,like,agen}){
            return (
            
              <div className="col-xxl-3 col-xl-3 col-lg-2 col-md-12 col-sm-6 col-12">
               <div className="card h-100 hover-shadow mt-3">
                    <div className="card-img-overlay py-1 px-2">
                    <div className="label-top-left col-3 mt-2 badge rounded-pill">House</div>
                    <div className="label-top shadow-sm"><i class="far fa-heart"></i></div>
                        </div> 
                   <img
                    src={src}
                    className="card-img-fluid" alt="card property" />

                    <div className="card-body">
                        <div className="clearfix mb-1">
                            <span class="float-start fw-bolder fs-5">{nama}</span>
                            <span class="float-end badge rounded-pill bg-success">NEW</span>
                        </div>
                            
                            <div className="text-secondary md-3">{lokasi}</div>
                                {/* <div class="d-flex flex-row align-items-center justify-content mt-3"> <i class="far fa-user-circle">
                                    </i> <span class="text-secondary ml-1">Futurehome Agency</span> 
                                    <span class="fw-bolder px-4">{harga}</span> */}

                                            <div className="row mt-3">
                                <div className="col-12 col-md-6">
                                <p className="text-secondary"><i class="fas fa-user-circle"></i> Home Agency</p>
                                </div>
                            <div className="col-12 col-md-6 text-start text-md-end">
                                <h5 className="fw-bold">IDR. 600 M</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
                            
        


//ini card kak jes
      // <div className="row mt-1 gx-0 gy-4 gx-md-4">
      //       <div className="col-md-6">
      //         <div className="card">
      //           <a href=""><img src="https://images.unsplash.com/photo-1522050212171-61b01dd24579?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80" className="card-img-top max-h-20 object-cover" alt="House" /></a>
      //           <div className="card-body">
      //             <div className="row">
      //               <div className="col-12 col-lg-8 order-1 order-lg-0">
      //               <a href="" className="text-decoration-none">
      //                 <h5 className="card-title fw-bold text-dark">Townhouse Bagus 2 Lantai</h5>
      //                 <p className="text-secondary">Jimbaran, Badung</p>
      //               </a>
                
      //               </div>

      //               <div className="col-12 col-lg-4 text-start text-lg-end mb-3 mb-lg-0">
      //                 <span class="badge rounded-pill bg-primary">New</span>
      //                 <span class="badge rounded-pill bg-warning ms-1">Rent</span>
      //               </div>
      //             </div>
                  
      //             <div className="row mt-4">
      //               <div className="col-12 col-md-6">
      //                 <p className="text-secondary"><i class="fas fa-user-circle"></i> Futurehomy Agency</p>
      //               </div>
      //               <div className="col-12 col-md-6 text-start text-md-end">
      //                 <h4 className="fw-bold">IDR. 600 M</h4>
      //               </div>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //       </div>
            

            );
                              }
