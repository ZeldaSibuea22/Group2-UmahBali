import React, { useState } from "react";
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/index.css'
import '../style/Card.css'

export default function Card({src,nama,lokasi,tipe,agen,harga,href, id, variable = false}){

    let local = localStorage.getItem('wishlist') || '[]'
    let isLogin = localStorage.getItem('isLogin')
    // let [login, setLogin ] = useState(false)
    let idlocal = isLogin ? (local.includes(id)) : false; 
    console.log(idlocal)
    let [missing, setMissing] = useState(false)
    let [active, setActive] = useState(idlocal)
    
    function addWishlist(id) {
        if (isLogin){
            let temp = []
            let wishlist = localStorage.getItem('wishlist') || temp
            if (wishlist !== temp){
                wishlist = JSON.parse(wishlist)
            }
            let indexOfWishlist = wishlist.indexOf(id)
            console.log(wishlist);
            if(wishlist) {
                if(indexOfWishlist === -1) {
                    setActive(true)
                    wishlist.push(id)
                } else {
                    setActive(false)
                    wishlist.splice(indexOfWishlist, 1)
                }
            } else {
                wishlist = [id]
            }
            localStorage.setItem('wishlist', JSON.stringify(wishlist))
        }        
    }
    function setMissingCard(id){
        setMissing(true)
        addWishlist(id)
    }
            return (
            <div className="text-decoration-none">
                <div className={"card h-100 hover-shadow mt-4 position-relative " + (missing? 'invisible': '') }>
                    <div className="card-img">
                        <div className="label-top-left position-absolute badge rounded-pill col-3 mt-3 ms-3">
                            <span className="fw-bold ">{tipe}</span>
                        </div>
                        <div className="label-top shadow-sm">
                            <button onClick={() => variable? setMissingCard(id) :addWishlist(id)} className ="btn btn-sm text-white">
                                {active ? <i class="fas fa-heart"></i> : <i class="far fa-heart"></i>}
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
                    {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                    </button> */}

                  
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                ...
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
           
              
                
            );
                              }
