import React, { useState } from "react";
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/index.css'
import '../style/Card.css'

export default function Card({src,nama,lokasi,tipe,agen,harga,href, id}){
    let [click, setClick] = useState(false)
    let initialWishlist = localStorage.getItem('wishlist') || "[]"
    initialWishlist = JSON.parse(initialWishlist)
    let indexOfWishlist = initialWishlist.indexOf(id)

    console.log(initialWishlist);
    console.log(indexOfWishlist);
    
    function addWishlist(id) {
        let wishlist = initialWishlist
        if(wishlist) {
            if(indexOfWishlist === -1) {
                // setWishlist([...wishlist, id])
                wishlist.push(id)
            } else {
                wishlist.splice(indexOfWishlist, 1)
            }
        } else {
            // setWishlist([id])
            wishlist = [id]
        }
        console.log(wishlist);
        localStorage.setItem('wishlist', JSON.stringify(wishlist))
        setClick(true)
    }
            return (
            <div className="text-decoration-none">
                <div className="card h-100 hover-shadow mt-4 position-relative">
                    <div className="card-img">
                        <div className="label-top-left position-absolute badge rounded-pill col-3 mt-3 ms-3">
                            <span className="fw-bold ">{tipe}</span>
                        </div>
                        <div className="label-top shadow-sm">
                            <button onClick={() => addWishlist(id)} className ="btn btn-sm text-white">
                                {indexOfWishlist === -1 ? <i class="far fa-heart"></i> : <i class="fas fa-heart"></i>}
                            </button>
                        </div>
                    </div> 
                        
                   <img
                    src={src}
                    className="" alt="card property"/>

                    <div className="card-body">
                            <span class="me-2 badge rounded-pill bg-success pe-2">NEW</span>
                            <span class="badge rounded-pill bg-danger">SEWA</span>
                    <Link className="text-decoration-none" to={href}>
                        <div className="clearfix mb-1">
                            <span class="float-start fw-bolder fs-5" style={{color:"black"}}>{nama}</span>
                        </div>
                    </Link>   
                            
                            <div className="text-secondary md-3">{lokasi}</div>
                                            <div className="row mt-3">
                                <div className="col-12 col-md-6">
                                <p className="text-secondary"><i class="fas fa-user-circle"></i>{agen}</p>
                                </div>
                            <div className="col-12 col-md-6 text-start text-md-end">
                                <h5 className="fw-bold"style={{color:"black"}}>{harga}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           
              
                
            );
                              }
