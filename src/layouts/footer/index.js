
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-light">
      <div className="container py-5">
        <div className="row text-start justify-content-center">
        {/* section umahbali */}
          <div className="col-lg-5 col-md-7 col-12">
            <h5 className="fw-bold text-main">UmahBali</h5>
            <p className="mt-3 fw-bold">Find the best home that meet your needs.</p>
            <div className="mt-4">
              <p className="mb-2">Get in touch with us :</p>
              <p className="mb-2"><i class="fas fa-envelope-open-text"></i> <span className="ms-2"><a href="mailto:umahbali@mail.com" className="text-decoration-none text-body">umahbali@mail.com</a></span></p>
              <p><i class="fab fa-instagram"></i> <span className="ms-2">umahbali</span></p>
            </div>
          </div>

          {/* property type section */}
          <div className="col-lg-3 col-md-4 mt-4 mt-md-0 col-12">
            <h6 className="fw-bold text-main">Tipe Properti</h6>
            <div className="mt-4">
              <p className="mb-2">Rumah</p>
              <p className="mb-2">Ruko</p>
              <p>Vila</p>
            </div>
          </div>

          {/* our agents section */}
          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0 col-12">
            <h6 className="fw-bold text-main">Agen Kami</h6>
            <div className="row justify-content-center mt-4">
              <div className="col-4"><img src="https://user-images.githubusercontent.com/61933958/140694102-024c4283-0eb8-4de3-878c-bf0b423814f9.png" alt="agen" className="img-fluid" /></div>
              <div className="col-4"><img src="https://user-images.githubusercontent.com/61933958/140694109-24478aa6-e605-4b99-9a07-67fe6dd1135d.png" alt="agen" className="img-fluid" /></div>
              <div className="col-4"><img src="https://user-images.githubusercontent.com/61933958/140694120-2faa58e6-b61b-44fd-bfaa-a7ce4895b9b0.png" alt="agen" className="img-fluid" /></div>
              <div className="col-4"><img src="https://user-images.githubusercontent.com/61933958/140694116-fbab23f8-c06e-42e5-b4d6-b6d9d4a2cf20.png" alt="agen" className="img-fluid" /></div>
              <div className="col-4"><img src="https://user-images.githubusercontent.com/61933958/140694122-a4be1acd-9ef6-4789-85e2-7703594df0a3.png" alt="agen" className="img-fluid" /></div>
            </div>
          </div>
        </div>

        <hr className="my-4"/>

        <div className="row">
          <div className="col-12 col-lg-6 text-center text-lg-start text-secondary">
            <p>&copy; 2021 – Created by Group 2 <span className="px-2">|</span> All Rights Reserved</p>
          </div>
          <div className="col-12 col-lg-6 text-center text-lg-end">
            <p className="text-muted"><a href="#" className="text-decoration-none text-muted pe-4">Privacy</a> | <a href="#" className="text-decoration-none text-muted ps-4">Terms & Condition</a></p>
          </div>
        </div>

      </div>
    </footer>
  )
}
