import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/index.css'
import '../style/Card.css'

export default function Card({src,nama,lokasi,tipe,agen,harga,href}){
            return (
              
                
               <div className="card h-100 hover-shadow mt-3">
                    <div className="card-img-overlay py-1 px-2">
                    <div className="label-top-left col-3 mt-2 badge rounded-pill">{tipe}</div>
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
                                <p className="text-secondary"><i class="fas fa-user-circle"></i>{agen}</p>
                                </div>
                            <div className="col-12 col-md-6 text-start text-md-end">
                                <h5 className="fw-bold">{harga}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
           
              
                            
        
            );
                              }
