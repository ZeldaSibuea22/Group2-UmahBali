import React from 'react'
import Layout from '../layouts'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <Layout>
      <section className="container pb-5 px-5">
        <div className="row">
          <div className="col-12 col-sm-9 col-md-6">
            <img src="https://user-images.githubusercontent.com/61933958/142138061-1f764917-c60d-4d0d-b247-842b4e12e94d.png" alt="Not Found" className="img-fluid" />
            </div>        
          <div className="col-12">
              <h4>Ooops... Halaman yang anda tuju tidak tersedia.</h4>
              <p className="text-dark mb-2 mt-3">Apakah anda yakin URL yang anda tuju sudah benar?</p>
              <p className="text-dark mb-2">Mungkin halaman yang anda tuju sudah dihapus atau dipindahkan.</p>
            
            <Link to="/">
              <button className="btn btn-sm btn-outline-main mt-5">Kembali ke Beranda</button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
