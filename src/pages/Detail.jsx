import React, { useContext, useEffect, useState } from 'react'
import "../style/header.css"
import Layout from '../layouts'
import '../style/3d.css'
import { PropertiesContext } from '../context/property-context'
import { AgentsContext } from '../context/agent-context'
import { useForm } from 'react-hook-form'



export default function DetailProperty() {
    const [image, setImage] = useState("#1")
    const { properties } = useContext(PropertiesContext)
    const { agents } = useContext(AgentsContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        < div className="App" >
            <h6>{JSON.stringify(agents)}</h6>
            <h6>{JSON.stringify(properties)}</h6>
            {console.log(agents)}
            {console.log(properties)}
            <Layout>
                {/* foto */}

                <div className="container">
                    <iframe src="https://my.matterport.com/show/?m=e9kjCWVSkjm" width="900px" height="1000px" />


                    <div className="container mt-4 mb-5">
                        <div className="d-flex justify-content-between">
                            <p>Home &nbsp; | &nbsp; For Sale</p>
                            <div >
                                <span class="fa-stack fa-lg">
                                    <i class="fa fa-circle fa-stack-2x" style={{ color: 'white', borderColor: 'black' }}></i>
                                    <i class="fas fa-heart fa-stack-1x fa-inverse" style={{ color: 'red' }}></i>
                                </span>
                                <h6 className="d-inline">
                                    Simpan
                                </h6>
                            </div>
                        </div>
                        <h2 className="fw-bold text-start mb-3">Villa Bali</h2>
                        <div className="mb-2 d-flex justify-content-between">
                            <div>
                                <p style={{ fontSize: "200" }}><i style={{ color: 'red' }} class="fas fa-map-marker-alt"></i> Jalan Bali no 1</p>
                            </div>
                            <h5 className="fw-bold">
                                IDR 4.500.000.000
                            </h5>
                        </div>
                        <div className="d-flex d-block mb-2" style={{ color: 'grey' }}>
                            <h6 className="me-4"><i class="fas fa-home"></i> 1200 m2</h6>
                            <h6 className="me-4"><i class="fas fa-bed"></i> 4 kamar</h6>
                            <h6 className="me-4"><i class="fas fa-shower"></i> 2 toilet</h6>
                            <h6 className="me-4"><i class="fas fa-warehouse"></i> 1 garasi</h6>
                            <h6 className="me-4"><i class="fas fa-calendar-check"></i> Dibangun 2020</h6>
                            <h6 className="me-4"><i class="fas fa-calendar-check"></i> Ditambahkan 13/10/21</h6>

                        </div>
                        <div className="row g-2" id="lightgallery">
                            <div className="col-12 col-lg-6">
                                <a className="image-tile" href="https://a0.muscache.com/im/pictures/b4d24a47-6830-431e-a1b7-4f9ada90b2b0.jpg?im_w=1200" data-abc="true" >
                                    <img className="img-fluid" style={{ borderTopLeftRadius: '3%', borderBottomLeftRadius: '3%', height: '100%' }} src="https://a0.muscache.com/im/pictures/b4d24a47-6830-431e-a1b7-4f9ada90b2b0.jpg?im_w=720" alt="ini gambar" />
                                </a>
                            </div>
                            <div className="col-6 d-none d-lg-block ">
                                <div className="row gy-2">
                                    <div className="col-lg-6">
                                        <a class="image-tile" href="https://a0.muscache.com/im/pictures/b4d24a47-6830-431e-a1b7-4f9ada90b2b0.jpg?im_w=720" data-abc="true" >
                                            <img className="img-fluid" src="https://a0.muscache.com/im/pictures/b4d24a47-6830-431e-a1b7-4f9ada90b2b0.jpg?im_w=720" alt="ini gambar juga" />
                                        </a>
                                    </div>
                                    <div className="col-6 d-none d-lg-block">
                                        <a class="image-tile" href="https://a0.muscache.com/im/pictures/b4d24a47-6830-431e-a1b7-4f9ada90b2b0.jpg?im_w=720" data-abc="true" >
                                            <img className="img-fluid" style={{ borderTopRightRadius: '3%' }} src="https://a0.muscache.com/im/pictures/b4d24a47-6830-431e-a1b7-4f9ada90b2b0.jpg?im_w=720" alt="ini gambar juga" />
                                        </a>
                                    </div>
                                    <div className="col-6 d-none d-lg-block">
                                        <a class="image-tile" href="https://a0.muscache.com/im/pictures/b4d24a47-6830-431e-a1b7-4f9ada90b2b0.jpg?im_w=720" data-abc="true" >
                                            <img className="img-fluid" src="https://a0.muscache.com/im/pictures/b4d24a47-6830-431e-a1b7-4f9ada90b2b0.jpg?im_w=720" alt="ini gambar juga" />
                                        </a>
                                    </div>
                                    <div className="col-6 position-relative d-none d-lg-block">
                                        <a class="image-tile" href="https://a0.muscache.com/im/pictures/b4d24a47-6830-431e-a1b7-4f9ada90b2b0.jpg?im_w=720" data-abc="true" >
                                            <img className="img-fluid" style={{ borderBottomRightRadius: '3%', filter: 'blur(2px)' }} src="https://a0.muscache.com/im/pictures/b4d24a47-6830-431e-a1b7-4f9ada90b2b0.jpg?im_w=720" alt="ini gambar juga" />
                                        </a>
                                        <div className="img-fluid position-absolute" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                            <button id="magic_start" className="btn btn-primary">Lihat Lainnya</button>
                                        </div>
                                    </div>
                                    <a class="image-tile d-none" href="https://a0.muscache.com/im/pictures/b4d24a47-6830-431e-a1b7-4f9ada90b2b0.jpg?im_w=720" data-abc="true" >
                                        <img className="img-fluid" src="https://a0.muscache.com/im/pictures/b4d24a47-6830-431e-a1b7-4f9ada90b2b0.jpg?im_w=720" alt="ini gambar juga" />
                                    </a>
                                    <a class="image-tile d-none" href="https://a0.muscache.com/im/pictures/b4d24a47-6830-431e-a1b7-4f9ada90b2b0.jpg?im_w=720" data-abc="true" >
                                        <img className="img-fluid" src="https://a0.muscache.com/im/pictures/b4d24a47-6830-431e-a1b7-4f9ada90b2b0.jpg?im_w=720" alt="ini gambar juga" />
                                    </a>
                                    <a class="image-tile d-none" href="https://a0.muscache.com/im/pictures/b4d24a47-6830-431e-a1b7-4f9ada90b2b0.jpg?im_w=720" data-abc="true" >
                                        <img className="img-fluid" src="https://a0.muscache.com/im/pictures/b4d24a47-6830-431e-a1b7-4f9ada90b2b0.jpg?im_w=720" alt="ini gambar juga" />
                                    </a>
                                    <a class="image-tile d-none" href="https://a0.muscache.com/im/pictures/b4d24a47-6830-431e-a1b7-4f9ada90b2b0.jpg?im_w=720" data-abc="true" >
                                        <img className="img-fluid" src="https://a0.muscache.com/im/pictures/b4d24a47-6830-431e-a1b7-4f9ada90b2b0.jpg?im_w=720" alt="ini gambar juga" />
                                    </a>
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
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button onClick={() => { setImage("#1") }} className="nav-link active" id="home" data-bs-toggle="tab" data-bs-target="#page-vr" type="button" role="tab" aria-controls="home" aria-selected="true">Kamar</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button onClick={() => { setImage("#2") }} className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#page-vr" type="button" role="tab" aria-controls="profile" aria-selected="false">Restaurant</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button onClick={() => { setImage("#3") }} className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#page-vr" type="button" role="tab" aria-controls="contact" aria-selected="false">Kolam</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="page-vr" role="tabpanel" aria-labelledby="page-vr">
                            <div className="mt-3">
                                <a-scene>
                                    <a-assets>
                                        <img id="1" src="https://lh3.googleusercontent.com/p/AF1QipN_qI-Kg7gocNAgtoQI1C2BcUMT9OE-p9bS76SQ=w4000" alt='' crossorigin="anonymous" />
                                        <img id="2" src="https://lh3.googleusercontent.com/p/AF1QipOAj9kCkOiukh9ev28Oy8zGqDOHzayVRtU0gXrU=w4000" alt='' crossorigin="anonymous" />
                                        <img id="3" src="https://lh3.googleusercontent.com/p/AF1QipNYHGTtRnVOyBIJZUcQTW6_Diju8f1CYVYzcCw3=w4000" alt='' crossorigin="anonymous" />
                                    </a-assets>
                                    <a-sky src={image} rotation="0 -90 0"></a-sky>
                                </a-scene>
                            </div>
                        </div>
                    </div>
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
                            <iframe className="ms-auto" width="100%" height="100%" src="//maps.google.com/maps?q=-8.528408856703427,115.27136296033859&z=15&output=embed"></iframe>
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
            </Layout >
        </div >
    )
}
