/* eslint-disable no-useless-concat */
import React, { useContext, useState, useEffect } from 'react'
import Layout from '../layouts'
import '../style/3d.css'
import { PropertiesContext } from "../context/property-context"
import { AgentsContext } from "../context/agent-context"
import { useForm } from 'react-hook-form'
import { useParams, useNavigate } from "react-router-dom";
import {
    LightgalleryProvider,
    LightgalleryItem,
    useLightgallery,
} from "react-lightgallery"


export default function DetailProperty() {
    const { properties, loading } = useContext(PropertiesContext)
    const { agents, agentLoading } = useContext(AgentsContext)
    let [toast, setToast] = useState(false)
    let context = {}
    let agencontext = {}
    let params = useParams()
    const notfound = useNavigate()
    for (var key in properties) {
        if (Number(key) === (params.id - 1)) {
            context = properties[key]
        }
    }

    let loadingcontext = true
    if (Object.keys(context).length === 0 && !loading) {
        notfound('/notfound')
        loadingcontext = false
    }

    for (var keys in agents) {
        if (Number(keys) === (context.agent - 1)) {
            agencontext = agents[keys]
        }
    }

    const [nama, setNama] = useState('')
    const [email, setEmail] = useState('')
    const [pesan, setPesan] = useState('')

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        setToast(true)
        setNama('')
        setEmail('')
        setPesan('')
    };
    const location = context.location
    let local = localStorage.getItem('wishlist') || '[]'
    let isLogin = localStorage.getItem('isLogin')
    let idlocal = isLogin ? (local.includes(context.id)) : false; 
    let [active, setActive] = useState(idlocal)
    useEffect(() => {
        const alertcard = setTimeout(() => {setToast(false)}, 4000);
        return () => {
            clearTimeout(alertcard)
        }
    }, [toast])
    function addWishlist(id) {
        if (isLogin){
            let temp = []
            let wishlist = localStorage.getItem('wishlist') || temp
            if (wishlist !== temp){
                wishlist = JSON.parse(wishlist)
            }
            let indexOfWishlist = wishlist.indexOf(id)
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

    const PhotoItem = ({ image, thumb, group, classdiv, classimg, button }) => (
        <div className={classdiv}>
            <LightgalleryItem group={group} src={image} thumb={thumb}>
                <img src={image} className={classimg} style={{ borderRadius: 'unset' }} alt="photoimage" />
            </LightgalleryItem>
            {button}
        </div>
    );
    const OpenButtonWithHook = () => {
        const { openGallery } = useLightgallery();
        return (
            <button onClick={() => openGallery("group1")} className="btn btn-primary">
                Lihat Lainnya
            </button>
        );
    };
    const button = (
        <div className="img-fluid position-absolute button-img">
            <OpenButtonWithHook></OpenButtonWithHook>
        </div>
    )
    return (
        <div className="App">
            {!loading && loadingcontext ?
                <Layout>
                    {/* {Object.keys(context).length === 0 ? notfound('/notfound') : ''} */}
                    <LightgalleryProvider>
                        {/* foto */}
                        <div className="container">
                            <div className="container mt-4 mb-5">
                                <div className="d-flex justify-content-between">
                                    <p className="text-dark">{context.propertyType} &nbsp; | &nbsp; {context.hakMilikType}</p>
                                    <div >
                                        <button onClick={() => addWishlist(context.id)} style={{ backgroundColor: 'transparent', border: 'none', width: '60px', WebkitTextStrokeColor: 'black' }}>
                                            <span class="fa-stack fa-lg">
                                                <i class="fa fa-circle fa-stack-2x text-white"></i>
                                                <i class={(active? "fas fa-heart fa-stack-1x fa-inverse text-danger": "far fa-heart fa-stack-1x fa-inverse text-danger") }></i>
                                            </span>
                                        </button>
                                        <h6 className="d-inline">
                                            Simpan
                                        </h6>
                                    </div>
                                </div>
                                <h2 className="fw-bold text-start mb-3">{context.propertyName}</h2>
                                <div className="mb-2 row">
                                    <div className="col-6">
                                        <div>
                                            <p className="icon text-dark"><i class="fas fa-map-marker-alt text-danger"></i> {context.alamatLengkap}</p>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <h5 className="ms-auto text-end fw-bold">
                                            IDR {new Intl.NumberFormat('ID').format(context.price)}{context.hakMilikType === 'Dijual' ? '' : '/Tahun'}
                                        </h5>
                                    </div>
                                </div>
                                <div className="d-none d-md-block">
                                    <div className="d-flex mb-2 text-secondary">
                                        <h6 className="me-4"><i class="fas fa-home"></i> {context.propertyDetail.luas} m2</h6>
                                        <h6 className="me-4"><i class="fas fa-bed"></i> {context.propertyDetail.kamar ? context.propertyDetail.kamar : '-'} kamar</h6>
                                        <h6 className="me-4"><i class="fas fa-shower"></i> {context.propertyDetail.toilet ? context.propertyDetail.toilet : '-'} toilet</h6>
                                        <h6 className="me-4"><i class="fas fa-warehouse"></i> {context.propertyDetail.garasi ? context.propertyDetail.garasi : '-'} garasi</h6>
                                        <h6 className="me-4"><i class="fas fa-calendar-check"></i> Dibangun {context.propertyDetail.dibangun ? context.propertyDetail.dibangun : '-'}</h6>
                                        <h6 className="me-4"><i class="fas fa-calendar-check"></i> Ditambahkan {context.tglDitambahkan ? context.tglDitambahkan : '-'}</h6>
                                    </div>

                                </div>

                                <div className="row g-2" id="lightgallery">
                                    <PhotoItem image={context.img[0]} thumb={context.img[0]} classlight="h-100" group="group1" classdiv="col-12 col-lg-6" classimg="img-fluid gallery-left" >
                                    </PhotoItem>
                                    <div className="col-6 d-none d-lg-block ">
                                        <div className="row gy-2">
                                            <PhotoItem image={context.img[1]} thumb={context.img[1]} group="group1" classdiv="col-lg-6" classimg="img-fluid gallery-img" >
                                            </PhotoItem>
                                            <PhotoItem image={context.img[2]} thumb={context.img[2]} group="group1" classdiv="col-6 d-none d-lg-block" classimg="img-fluid gallery-img gallery-top-r" >
                                            </PhotoItem>
                                            <PhotoItem image={context.img[3]} thumb={context.img[3]} group="group1" classdiv="col-6 d-none d-lg-block" classimg="img-fluid gallery-img" >
                                            </PhotoItem>
                                            <PhotoItem image={context.img[4]} thumb={context.img[4]} group="group1" classdiv="col-6 position-relative d-none d-lg-block" classimg="img-fluid gallery-img gallery-bottom-r" button={button} >
                                            </PhotoItem>
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
                                <li class="nav-item d-flex" role="presentation">
                                    <a class="mb-auto mt-auto mx-3 text-decoration-none" href="#detail" >Detail</a>
                                </li>
                                <li class="nav-item d-flex" role="presentation">
                                    <a class="mb-auto mt-auto mx-3 text-decoration-none" href="#videotour" >Video Tour</a>
                                </li>
                                <li class="nav-item d-flex" role="presentation">
                                    <a class="mb-auto mt-auto mx-3 text-decoration-none" href="#lokasi" >Lokasi</a>
                                </li>
                            </ul>
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active text-start" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    {context.deskripsi}
                                </div>
                                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                                <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
                            </div>
                        </div>
                        {/* Detail */}
                        <div className="container mt-5 mb-5">
                            <h3 className="text-start fw-bold" id="detail">Detail</h3>
                            <iframe src={context.image360} width="100%" height="500px" frameborder="0" title="360"></iframe>
                            {console.log(context)}
                            <div className="d-flex flex-wrap flex-md-row mt-3">
                                <h6 className="me-4"><i class="fas fa-home"></i> {context.propertyDetail.luas} m2</h6>
                                <h6 className="me-4"><i class="fas fa-bed"></i> {context.propertyDetail.kamar ? context.propertyDetail.kamar : '-'} kamar</h6>
                                <h6 className="me-4"><i class="fas fa-shower"></i> {context.propertyDetail.toilet ? context.propertyDetail.toilet : '-'} toilet</h6>
                                <h6 className="me-4"><i class="fas fa-warehouse"></i> {context.propertyDetail.garasi ? context.propertyDetail.garasi : '-'} garasi</h6>
                                <h6 className="me-4"><i class="fas fa-swimming-pool"></i>{context.propertyDetail.kolam ? context.propertyDetail.garasi : '-'}</h6>
                                <h6 className="me-4"><i class="fas fa-calendar-check"></i> Dibangun {context.propertyDetail.dibangun ? context.propertyDetail.dibangun : '-'}</h6>
                                <h6 className="me-4"><i class="fas fa-calendar-check"></i> Ditambahkan {context.tglDitambahkan ? context.tglDitambahkan : '-'}</h6>
                            </div>
                            <h5 className="mt-4 fw-bold">Termasuk</h5>
                            <div className="d-flex mt-4">
                                <h6 className="me-4"><i class="fas fa-temperature-low"> {context.propertyDetail.termasuk[0] ? context.propertyDetail.termasuk[0] : '-'}</i></h6>
                                <h6 className="me-4"><i class="fas fa-snowflake"> {context.propertyDetail.termasuk[1] ? context.propertyDetail.termasuk[1] : '-'}</i></h6>
                                <h6 className="me-4"><i class="fas fa-wifi"> {context.propertyDetail.termasuk[2] ? context.propertyDetail.termasuk[2] : '-'}</i></h6>
                            </div>
                        </div>
                        {/* Video */}
                        <div className="container mt-5 mb-5" id="videotour">
                            <h3 className="text-start fw-bold">Video Tour</h3>
                            <iframe width="100%" height="500px"
                                src={context.videoTour} title="videotour">
                            </iframe>
                        </div>
                        {/* Lokasi */}
                        <div className="container mt-5 mb-5" id="lokasi">
                            <h3 className="text-start fw-bold">Lokasi</h3>
                            <div className="text-start">
                                <p className="icon text-dark"><i class="fas fa-map-marker-alt text-danger"></i> {context.alamatLengkap}</p>
                            </div>
                            <div className="row">
                                <div className="col-12 col-lg-9">
                                    <iframe className="ms-auto" width="100%" height="100%" src={"//maps.google.com/maps?q=" + `${location.location1},${location.location2}` + "&z=15&output=embed"} title="maps"></iframe>
                                </div>
                                <div className="col-12 col-lg-3 mt-3 mt-md-0">
                                    {/* Nanti dulu blm selesai */}
                                    <div className="card cards">
                                        <div className="container">
                                            <div class={"alert alert-success mt-2 mb-2 " + (toast? 'show': 'd-none')} role="alert">
                                                Pesan berhasil dikirimkan
                                            </div>
                                            <h6 className="text-start fw-bold mt-2">Hubungi Agen</h6>
                                            {!agentLoading ?
                                                <>
                                                    <div className="d-flex mb-2">
                                                        <span class="fa-stack fa-lg">
                                                            <i class="fa fa-circle fa-stack-2x"></i>
                                                            <i class="fas fa-user-alt fa-stack-1x fa-inverse"></i>
                                                        </span>
                                                        <p className="fw-bold mt-auto mb-auto text-dark">{agencontext.nama}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-start ms-2 text-dark"><i class="fas fa-envelope-open-text"></i> {agencontext.mail}</p>
                                                        <p className="text-start ms-2 text-dark"><i class="fab fa-whatsapp-square"></i> {agencontext.phone}</p>
                                                    </div>
                                                </>
                                                : null
                                            }
                                        </div>
                                        <div className="card-body">

                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                <div class="mb-1">
                                                    <input type="text" class="form-control" placeholder="Nama" value={nama}  {...register("Name", { required: true, maxLength: 80 })} onChange={(e) => setNama(e.target.value)} />
                                                    {errors.Name?.type === 'required' && "Nama harus diisi"}
                                                </div>
                                                <div class="mb-1">
                                                    <input type="text" class="form-control" placeholder="Email" value={email}  {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}  onChange={(e) => setEmail(e.target.value)} />
                                                    {errors.Email?.type === 'required' && "Isi email dengan format yang benar"}
                                                </div>
                                                <div class="mb-1">
                                                    <textarea class="form-control" rows="3" placeholder="Pesan" value={pesan}  {...register("Message", { required: true, maxLength: 1000 })} onChange={(e) => setPesan(e.target.value)}></textarea>
                                                    {errors.Message?.type === 'required' && "Pesan harus diisi"}
                                                </div>
                                                <button onClick={()=> errors? '' : setToast(true)} className="btn btn-primary mt-2 w-100" type="submit">
                                                    Hubungi
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </LightgalleryProvider>
                </Layout > : null
            }
        </div >
    )
}
