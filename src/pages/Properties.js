import React from 'react'
import Layout from "../layouts/index";
import Card from "../components/Card";
import "./CardApp";

export default function Properties() {
    return (
        <Layout>
        <div className="row text-center mt-1 gx-0 gy-4 gx-md-4">
            <h1 className="text-center mt-5 fw-bold">Properti</h1>
                <h5 className="">UmahBali group berkomitmen untuk membantu Anda</h5>
        </div>
                    
                    
        <div className="container mt-5 ">
            <ul className="nav nav-tabs justify-content-center " id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link tabs-style active" id="House" data-bs-toggle="tab"
                        >
                        
                    House
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link tabs-style disabled" id="Ruko" data-bs-toggle="tab"
                    >
                        Ruko
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link tabs-style disabled" id="Villa" data-bs-toggle="tab" data-bs-target="#contact"
                    >
                    Villa
                    </button>
                </li>
            </ul>
    </div>
 
    <div className="container mb-5">
    <div className="row mt-1 gx-0 gy-4 gx-md-4 mx-2">
    <div className="col-xxl-4 col-xl-4 col-lg-4 g-5 col-md-4 col-sm-4 col-12 m-auto mt-4"> 
            <Card
    src="https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=873&q=80"
    nama="Townhouse Bali"
    lokasi="Jimbaran, Badung"
    agen="Home Agency"
    harga="IDR 600M"
    tipe="House"
    />
    </div>
    
    <div className="col-xxl-4 col-xl-4 col-lg-4 g-5 col-md-4 col-sm-4 col-12 m-auto mt-4"> 
            <Card
    src="https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=873&q=80"
    nama="Townhouse Bali"
    lokasi="Jimbaran, Badung"
    agen="Home Agency"
    harga="IDR 600M"
    tipe="House"
    />
    </div>

    <div className="col-xxl-4 col-xl-4 col-lg-4 g-5 col-md-4 col-sm-4 col-12 m-auto mt-4"> 
        <Card
    src="https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=873&q=80"
    nama="Townhouse Bali"
    lokasi="Jimbaran, Badung"
    agen="Home Agency"
    harga="IDR 600M"
    tipe="House"
    />
    </div>
    
    <div className="col-xxl-4 col-xl-4 col-lg-4 g-5 col-md-4 col-sm-4 col-12 m-auto mt-4"> 
        <Card
    src="https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=873&q=80"
    nama="Townhouse Bali"
    lokasi="Jimbaran, Badung"
    agen="Home Agency"
    harga="IDR 600M"
    tipe="House"
    />
    </div>
    
    <div className="col-xxl-4 col-xl-4 col-lg-4 g-5 col-md-4 col-sm-4 col-12 m-auto mt-4"> 
      <Card
    src="https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=873&q=80"
    nama="Townhouse Bali"
    lokasi="Jimbaran, Badung"
    agen="Home Agency"
    harga="IDR 600M"
    tipe="House"
    />
     </div>
   
     <div className="col-xxl-4 col-xl-4 col-lg-4 g-5 col-md-4 col-sm-4 col-12 m-auto mt-4"> 
      <Card
    src="https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=873&q=80"
    nama="Townhouse Bali"
    lokasi="Jimbaran, Badung"
    agen="Home Agency"
    harga="IDR 600M"
    tipe="House"
    />
     </div>
  </div>
    </div>
        </Layout>
    )
}


