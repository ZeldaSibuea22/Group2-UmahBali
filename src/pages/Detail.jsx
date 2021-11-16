import React, { useEffect, useState, useContext } from 'react'
import "../style/header.css"
import Layout from '../layouts'
import '../style/3d.css'

import { PropertiesContext } from "../context/property-context"
import { AgentsContext } from "../context/agent-context"
import { useForm } from 'react-hook-form'
import { useParams } from "react-router-dom";


export default function DetailProperty() {
    const { properties, loading } = useContext(PropertiesContext)
    const { agents, agentLoading } = useContext(AgentsContext)
    let context = {}
    let params = useParams()
    for (var key in properties) {
        if (key == params.id) {
            context = properties[key]
        }
    }
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const location = context.location


    return (
        <div className="App">
            {!loading ?
                <Layout>
                    <h6>{JSON.stringify(context)}</h6>
                    {/* foto */}
                    <div className="container">
                        <div className="container mt-4 mb-5">
                            <div className="d-flex justify-content-between">
                                <p>{context.propertyType} &nbsp; | &nbsp; {context.hakMilikType}</p>
                                <div >
                                    <span class="fa-stack fa-lg">
                                        <i class="fa fa-circle fa-stack-2x" style={{ color: 'white', borderColor: 'black' }}></i>
                                        <i class="fas fa-heart fa-stack-1x fa-inverse" style={{ color: 'red' }}></i>
                                    </span>
                                    <h6 className="d-inline">
                                        Simpan
                                    </h6>

                                </div>

                                {/* <button style={{ cursor: 'pointer', borderRadius: '50%' }}><i className="fas fa-circle fa-heart fa-fw"></i></button> */}
                            </div>
                            <h2 className="fw-bold text-start mb-3">{context.propertyName}</h2>
                            <div className="mb-2 d-flex justify-content-between">
                                <div>
                                    <p style={{ fontSize: "200" }}><i style={{ color: 'red' }} class="fas fa-map-marker-alt"></i> {context.alamatLengkap}</p>
                                </div>
                                <h5 className="fw-bold">
                                    IDR 4.500.000.000
                                </h5>
                            </div>
                            <div className="d-flex d-block mb-2" style={{ color: 'grey' }}>
                                <h6 className="me-4"><i class="fas fa-home"></i> {context.propertyDetail.luas} m2</h6>
                                <h6 className="me-4"><i class="fas fa-bed"></i> {context.propertyDetail.kamar ? context.propertyDetail.kamar : '-'} kamar</h6>
                                <h6 className="me-4"><i class="fas fa-shower"></i> {context.propertyDetail.toilet ? context.propertyDetail.toilet : '-'} toilet</h6>
                                <h6 className="me-4"><i class="fas fa-warehouse"></i> {context.propertyDetail.garasi ? context.propertyDetail.garasi : '-'} garasi</h6>
                                <h6 className="me-4"><i class="fas fa-calendar-check"></i> Dibangun {context.propertyDetail.dibangun ? context.propertyDetail.dibangun : '-'}</h6>
                                <h6 className="me-4"><i class="fas fa-calendar-check"></i> Ditambahkan {context.tglDitambahkan ? context.tglDitambahkan : '-'}</h6>

                            </div>
                            <div className="row g-2" id="lightgallery">
                                <div className="col-12 col-lg-6">
                                    <a className="image-tile" href={context.img[0]} data-abc="true" >
                                        <img className="img-fluid" style={{ borderTopLeftRadius: '3%', borderBottomLeftRadius: '3%', height: '100%' }} src={context.img[0]} alt="ini gambar" />
                                    </a>
                                </div>
                                <div className="col-6 d-none d-lg-block ">
                                    <div className="row gy-2">
                                        <div className="col-lg-6">
                                            <a class="image-tile" href={context.img[1]} data-abc="true" >
                                                <img className="img-fluid" src={context.img[1]} style={{ objectFit: 'cover', height: '250px', width: '100%' }} alt="ini gambar juga" />
                                            </a>
                                        </div>
                                        <div className="col-6 d-none d-lg-block">
                                            <a class="image-tile" href={context.img[2]} data-abc="true" >
                                                <img className="img-fluid" style={{ borderTopRightRadius: '3%', objectFit: 'cover', height: '250px', width: '100%' }} src={context.img[2]} alt="ini gambar juga" />
                                            </a>
                                        </div>
                                        <div className="col-6 d-none d-lg-block">
                                            <a class="image-tile" href={context.img[3]} data-abc="true" >
                                                <img className="img-fluid" style={{ objectFit: 'cover', height: '250px', width: '100%' }} src={context.img[3]} alt="ini gambar juga" />
                                            </a>
                                        </div>
                                        <div className="col-6 position-relative d-none d-lg-block">
                                            <a class="image-tile" href={context.img[4]} data-abc="true" >
                                                <img className="img-fluid" style={{ borderBottomRightRadius: '3%', filter: 'blur(2px)', objectFit: 'cover', height: '250px', width: '100%' }} src={context.img[4]} alt="ini gambar juga" />
                                            </a>
                                            <div className="img-fluid position-absolute" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                                <button id="magic_start" className="btn btn-primary">Lihat Lainnya</button>
                                            </div>
                                        </div>
                                        {/* <a class="image-tile d-none" href="https://a0.muscache.com/im/pictures/b4d24a47-6830-431e-a1b7-4f9ada90b2b0.jpg?im_w=720" data-abc="true" >
                                            <img className="img-fluid" style={{ borderBottomRightRadius: '3%', filter: 'blur(1.5px)' }} src="https://a0.muscache.com/im/pictures/b4d24a47-6830-431e-a1b7-4f9ada90b2b0.jpg?im_w=720" alt="ini gambar juga" />
                                        </a>
                                        <a class="image-tile d-none" href="https://a0.muscache.com/im/pictures/b4d24a47-6830-431e-a1b7-4f9ada90b2b0.jpg?im_w=720" data-abc="true" >
                                            <img className="img-fluid" style={{ borderBottomRightRadius: '3%', filter: 'blur(1.5px)' }} src="https://a0.muscache.com/im/pictures/b4d24a47-6830-431e-a1b7-4f9ada90b2b0.jpg?im_w=720" alt="ini gambar juga" />
                                        </a>
                                        <a class="image-tile d-none" href="https://a0.muscache.com/im/pictures/b4d24a47-6830-431e-a1b7-4f9ada90b2b0.jpg?im_w=720" data-abc="true" >
                                            <img className="img-fluid" style={{ borderBottomRightRadius: '3%', filter: 'blur(1.5px)' }} src="https://a0.muscache.com/im/pictures/b4d24a47-6830-431e-a1b7-4f9ada90b2b0.jpg?im_w=720" alt="ini gambar juga" />
                                        </a>
                                        <a class="image-tile d-none" href="https://a0.muscache.com/im/pictures/b4d24a47-6830-431e-a1b7-4f9ada90b2b0.jpg?im_w=720" data-abc="true" >
                                            <img className="img-fluid" style={{ borderBottomRightRadius: '3%', filter: 'blur(1.5px)' }} src="https://a0.muscache.com/im/pictures/b4d24a47-6830-431e-a1b7-4f9ada90b2b0.jpg?im_w=720" alt="ini gambar juga" />
                                        </a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* tab deskripsi */}
                    <div className="container">
                        <ul class="nav nav-tabs" id="myTab1" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Description</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#detail" type="button" role="tab" aria-controls="profile" aria-selected="false">Detail</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a href="#videotour" className="nav-link" id="contact-tab" data-bs-toggle="tab" type="button" role="tab" aria-controls="contact" aria-selected="false">Video Tour</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Lokasi</button>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active text-start" id="home" role="tabpanel" aria-labelledby="home-tab">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.Reprehenderit soluta ipsam tempora sed tenetur, aperiam quod ex dolorem esse?Porro officiis provident magni ut cupiditate consequatur magnam eos perspiciatis excepturi.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.Itaque facilis eum dolore necessitatibus quod laboriosam, unde modi ipsam delectus excepturi tempore, ratione eligendi velit quidem minima dignissimos debitis provident?Aut.
                            </div>
                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
                        </div>

                    </div>

                    {/* Detail */}

                    <div className="container mt-5 mb-5">
                        <h3 className="text-start fw-bold" id="detail">Detail</h3>

                        <iframe src={context.image360} width="100%" height="500px" frameborder="0"></iframe>



                    </div>

                    {/* Video */}
                    <div className="container mt-5 mb-5" id="videotour">
                        <h3 className="text-start fw-bold">Video Tour</h3>
                        <iframe width="100%" height="500px"
                            src="https://www.youtube.com/embed/KREQ6pf9saY">
                        </iframe>
                    </div>
                    {/* Lokasi */}
                    <div className="container mt-5 mb-5">
                        <h3 className="text-start fw-bold">Lokasi</h3>
                        <div className="text-start">
                            <p style={{ fontSize: "200" }}><i style={{ color: 'red' }} class="fas fa-map-marker-alt"></i> Jalan Bali no 1</p>
                        </div>
                        <div className="row">
                            <div className="col-12 col-lg-9">
                                <iframe className="ms-auto" width="100%" height="100%" src={"//maps.google.com/maps?q=" + `${location.location1},${location.location2}` + "&z=15&output=embed"}></iframe>
                            </div>
                            <div className="col-12 col-lg-3 mt-3 mt-md-0">
                                {/* Nanti dulu blm selesai */}
                                <div className="card">
                                    <div className="container">
                                        <h6 className="text-start fw-bold mt-2">Hubungi Agen</h6>
                                        <div className="d-flex mb-2">
                                            <span class="fa-stack fa-lg">
                                                <i class="fa fa-circle fa-stack-2x"></i>
                                                <i class="fas fa-user-alt fa-stack-1x fa-inverse"></i>
                                            </span>
                                            <p className="fw-bold mt-auto mb-auto">Home Agency</p>
                                        </div>
                                        <div>
                                            <p className="text-start ms-4"><i class="fas fa-envelope-open-text"></i> test @mail.com</p>
                                            <p className="text-start ms-4"><i class="fab fa-whatsapp-square"></i> 082123123123</p>
                                        </div>


                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <div class="mb-1">
                                                <input type="text" class="form-control" placeholder="name" {...register("Name", { required: true, maxLength: 80 })} />
                                                {errors.Name?.type === 'required' && "Nama harus diisi"}
                                            </div>
                                            <div class="mb-1">
                                                <input type="text" class="form-control" placeholder="email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                                                {errors.Email?.type === 'required' && "Isi email dengan format yang benar"}
                                            </div>
                                            <div class="mb-1">
                                                <textarea class="form-control" rows="3" placeholder="message" {...register("Message", { required: true, maxLength: 1000 })}></textarea>
                                                {errors.Message?.type === 'required' && "Pesan harus diisi"}
                                            </div>
                                            <button className="btn btn-primary mt-2" style={{ width: "100%" }} type="submit">
                                                Hubungi
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Layout > : null}
        </div >
    )
}
