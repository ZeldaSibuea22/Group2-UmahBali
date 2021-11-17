import React from 'react'
import Layout from "../layouts/index";
import "../style/index.css";
import Card from "../components/Card";

export default function Properties_Search(){
    return( <Layout>
      
      
        <form className="d-flex mt-5 justify-content-center">
        <input className="form-control me-2 w-75" type="search" placeholder="Cari Properti" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit" style={{width:"75px"}}>Cari</button>
      </form>

      <div className="container ">
      <h3 className="mt-5 fw-bold">Rumah di Jimbaran</h3>

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
    <h4 className="mt-5 fw-bold">Lokasi</h4>
    
    </div>
    </Layout>

  
    );

}