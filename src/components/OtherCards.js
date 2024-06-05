const OtherCards = {
  async render() {
    return `
      <div class="container mt-5">
          <h2 class="text-center mb-4 py-2 title-product">Produk Lain</h2>
          <div class="position-relative mb-3">
            <div id="fruits-carousel" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="row justify-content-center">
                    <div class="col-md-3">
                      <div class="card">
                        <img height="200px" src="../../public/images/image3.png" class="card-img-top" alt="Paket Internetan 200GB + Kuota Nonton 50GB">
                        <div class="card-body text-center">
                          <h5 class="card-title">Paket Internetan 200GB</h5>
                          <p class="card-text fs-5 fw-bold">Rp200.000</p>
                          <a href="#" class="btn btn-outline-success border-2">Masukan Keranjang</a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="card">
                        <img height="200px" src="../../public/images/herbal-dan-rempah.png" class="card-img-top" alt="Paket Sayur Asem">
                        <div class="card-body text-center">
                          <h5 class="card-title">Paket Sayur Asem</h5>
                          <p class="card-text fs-5 fw-bold">Rp15.000</p>
                          <a href="#" class="btn btn-outline-success border-2">Masukan Keranjang</a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="card">
                        <img height="200px" src="../../public/images/image3.png" class="card-img-top" alt="Paket Sayur Lodeh">
                        <div class="card-body text-center">
                          <h5 class="card-title">Paket Sayur Lodeh</h5>
                          <p class="card-text fs-5 fw-bold">Rp15.000</p>
                          <a href="#" class="btn btn-outline-success border-2">Masukan Keranjang</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="row justify-content-center">
                    <!-- Additional products can be added here -->
                    <div class="col-md-3">
                      <div class="card">
                        <img height="200px" src="../../public/images/image4.png" class="card-img-top" alt="Paket Sayur Lodeh">
                        <div class="card-body text-center">
                          <h5 class="card-title">Paket Sayur Lodeh</h5>
                          <p class="card-text fs-5 fw-bold">Rp15.000</p>
                          <a href="#" class="btn btn-outline-success border-2">Masukan Keranjang</a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="card">
                        <img height="200px" src="../../public/images/image1.png" class="card-img-top" alt="Paket Sayur Lodeh">
                        <div class="card-body text-center">
                          <h5 class="card-title">Paket Sayur Lodeh</h5>
                          <p class="card-text fs-5 fw-bold">Rp15.000</p>
                          <a href="#" class="btn btn-outline-success border-2">Masukan Keranjang</a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="card">
                        <img height="200px" src="../../public/images/image2.png" class="card-img-top" alt="Paket Sayur Lodeh">
                        <div class="card-body text-center">
                          <h5 class="card-title">Paket Sayur Lodeh</h5>
                          <p class="card-text fs-5 fw-bold">Rp15.000</p>
                          <a href="#" class="btn btn-outline-success border-2">Masukan Keranjang</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#fruits-carousel" data-bs-slide="prev">
                <span class="prev-icon" aria-hidden="true"><i class="fa-sharp fa-solid fa-chevron-left"></i></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#fruits-carousel" data-bs-slide="next">
                <span class="next-icon" aria-hidden="true"><i class="fa-sharp fa-solid fa-chevron-right"></i></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      `;
  },
};

export default OtherCards;
