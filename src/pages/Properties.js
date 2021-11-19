/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Layout from "../layouts/index";
import Card from "../components/Card";
import "./CardApp";
import { useContext } from "react";
import { PropertiesContext } from "../context/property-context";
import { AgentsContext } from "../context/agent-context";


export default function Properties() {

    const { properties, loading } = useContext(PropertiesContext);
    const { agents, agentLoading } = useContext(AgentsContext);

    const filterType = {
        rumah: [],
        vila: [],
        ruko: [],
      };

    if (!loading) {
        filterType.rumah = properties.filter((element) => element.propertyType === "Rumah");
        filterType.vila = properties.filter((element) => element.propertyType === "Vila");
        filterType.ruko = properties.filter((element) => element.propertyType === "Ruko");
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
  
    return (
    <Layout>
        <div className="container"> 
        <div className="row text-center mt-1 gx-0 gy-4 gx-md-4">
            <h1 className="text-center mt-5 fw-bold">Properti</h1>
                <h5 className="">UmahBali group berkomitmen untuk membantu Anda</h5>
        </div>
                    
        {/*Navigasi*/}
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
           
     <div className="container mb-5">
        <div className="tab-content" id="pills-tabContent">
            {/* rumah tab */}
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <div className="row mt-1 gx-0 gy-4 gx-md-4 mx-2">
                {!loading && !agentLoading
                    ? filterType.rumah.map((property) => {
                        let agent = agents.find((agent) => agent.id === property.agent);
                        return (
                        <div className="col-xxl-4 col-xl-4 col-lg-4 g-3 col-md-6 col-sm-12 col-12 mt-4" key={property.id}>
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
            <div className="tab-pane fade show" id="pills-ruko" role="tabpanel" aria-labelledby="pills-ruko-tab">
                <div className="row mt-1 gx-0 gy-4 gx-md-4 mx-2">
                {!loading && !agentLoading
                    ? filterType.ruko.map((property) => {
                        let agent = agents.find((agent) => agent.id === property.agent);
                        return (
                        <div className="col-xxl-4 col-xl-4 col-lg-4 g-3 col-md-6 col-sm-12 col-12 mt-4" key={property.id}>
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
            <div className="tab-pane fade show" id="pills-vila" role="tabpanel" aria-labelledby="pills-vila-tab">
                <div className="row mt-1 gx-0 gy-4 gx-md-4 mx-2">
                {!loading && !agentLoading
                    ? filterType.vila.map((property) => {
                        let agent = agents.find((agent) => agent.id === property.agent);
                        return (
                        <div className="col-xxl-4 col-xl-4 col-lg-4 g-3 col-md-6 col-sm-12 col-12 mt-4" key={property.id}>
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
</div>
                </Layout>
        
            )
        }


