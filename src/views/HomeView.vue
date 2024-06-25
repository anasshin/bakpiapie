<template>
    <section class="jumbotron bg-light text-light">
        <div class="container">
            <div class="text-jt position-absolute top-50  translate-middles">
                <h1 class="display-4 fw-bold">Surga Cita Rasa Bakpia!
                </h1>
                <p class="lead">Nikmati sensasi lezat dari setiap gigitan Bakpiapie, tempat di mana tradisi bertemu
                    dengan inovasi dalam dunia kuliner. Kami bangga menyajikan berbagai varian bakpia yang dibuat dengan
                    bahan-bahan berkualitas dan resep autentik yang telah diwariskan turun-temurun.</p>
                <hr class="my-4">
                <p>Di Bakpiapie, kepuasan Anda adalah prioritas utama kami.</p>
                <a class="btn btn-light rounded-pill" href="#" role="button">Learn more</a>
            </div>
        </div>
    </section>


    <!-- awal section product -->
    <section class="product my-3">
        <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
            <div class="bg-dark me-md-3 py-2 py-md-4 px-md-5 px-3  text-center text-white overflow-hidden">
                <div class="my-3 py-2">
                    <h2 class="display-5">Bakpia Panggang</h2>
                    <p class="text-body-light">Nikmati cita rasa klasik dengan sentuhan modern dari Bakpia Panggang
                        kami. Dibuat dengan resep tradisional dan dipanggang hingga sempurna, bakpia ini menawarkan
                        tekstur renyah di luar dan lembut di dalam. Setiap gigitan menyajikan perpaduan rasa yang
                        harmonis dari kulit bakpia yang tipis dan isian yang melimpah. Tersedia dalam berbagai varian
                        rasa seperti kacang hijau, cokelat, keju. Bakpia Panggang kami pasti akan memanjakan lidah Anda.
                    </p>
                </div>
                <img src="@/assets/img/photo-1.jpg" class="rounded img-fluid mx-auto d-block mb-2" alt=""
                    style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;">
                <router-link to='/product' class="btn btn-outline-light my-3">Beli Sekarang</router-link>
            </div>
            <div class="bg-light me-md-3 py-2 px-3 py-md-4 px-md-5 text-center overflow-hidden">
                <div class="my-3 p-2">
                    <h2 class="display-5">Bakpia Kukus</h2>
                    <p class="text-body-secondary">Temukan kelembutan sejati dengan Bakpia Kukus kami, pilihan sempurna
                        bagi Anda yang mencari bakpia dengan tekstur lembut dan empuk. Dimasak dengan cara dikukus,
                        bakpia ini menawarkan rasa yang lebih moist dan ringan. Isian manis dan kaya rasa tersembunyi
                        dalam setiap bakpia, membuatnya sempurna untuk dinikmati kapan saja. Varian rasa seperti keju,
                        strawberry, kacang hijau, dan cokelat akan memberikan pengalaman rasa yang berbeda dan
                        memuaskan.
                    </p>
                </div>
                <img src="@/assets/img/photo-1.jpg" class="rounded img-fluid mx-auto d-block" alt=""
                    style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;">
                <router-link to="/product" class="btn btn-outline-dark rounded-3 my-3 me-0">Beli Sekarang</router-link>
            </div>
        </div>
    </section>
    <!-- akhir section Product -->

    <!-- Awal Section Features -->
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
        <symbol id="people" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
        </symbol>
    </svg>

    <div class="container px-4 py-5" id="feature">
        <h2 class="pb-2 border-bottom">Mengapa Bakpia?</h2>
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div class="col d-flex align-items-start">
                <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
                    <svg class="bi" width="1em" height="1em">
                        <use xlink:href="#people" />
                    </svg>
                </div>
                <div>
                    <h2>Autentik & Berkualitas</h2>
                    <p>Setiap bakpia yang kami produksi adalah hasil dari kombinasi sempurna antara resep tradisional
                        yang diwariskan secara turun-temurun dan inovasi kuliner modern. Kami menggunakan bahan-bahan
                        pilihan terbaik, seperti kacang hijau berkualitas tinggi, cokelat premium, keju asli, dan durian
                        segar, untuk memastikan setiap gigitan bakpia menghadirkan cita rasa yang otentik dan tak
                        terlupakan.</p>
                </div>
            </div>
            <div class="col d-flex align-items-start">
                <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
                    <svg class="bi" width="1em" height="1em">
                        <use xlink:href="#people" />
                    </svg>
                </div>
                <div>
                    <h2>Varian Rasa Unik</h2>
                    <p>Di Bakpiapie, kami memahami bahwa setiap pelanggan memiliki preferensi rasa yang unik. Oleh
                        karena itu, kami menawarkan berbagai pilihan rasa bakpia yang menggugah selera. Mulai dari
                        varian tradisional seperti kacang hijau dan kacang merah, hingga rasa inovatif seperti cokelat,
                        keju, kacang hijau, dan durian. </p>
                </div>
            </div>
            <div class="col d-flex align-items-start">
                <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
                    <svg class="bi" width="1em" height="1em">
                        <use xlink:href="#people" />
                    </svg>
                </div>
                <div>
                    <h2>Pelayanan Prima

                    </h2>
                    <p>Kepuasan pelanggan adalah prioritas utama kami di Bakpiapie. Kami berkomitmen untuk memberikan
                        layanan yang ramah, cepat, dan responsif kepada setiap pelanggan. Tim layanan pelanggan kami
                        selalu siap membantu Anda dengan segala kebutuhan dan pertanyaan, memastikan pengalaman
                        berbelanja Anda berjalan lancar dan menyenangkan.</p>
                </div>
            </div>
        </div>
    </div>
    <!-- Akhir Section Features -->

    <!-- awal section rating -->
    <section class="rating my-3">
        <div class="container">
            <h3 class="mb-4">Customer</h3>
            <div class="row">
                <div class="col-md-3">
                    <h6>Riza</h6>
                    <div class="ratings">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                    </div>
                    <p>Kulit renyah, isian manis, rasa kacang hijau dan keju favorit.
                        Pengiriman cepat, kemasan rapi, harga terjangkau.</p>
                </div>
                <div class="col-md-3">
                    <h6>Fausta</h6>
                    <div class="ratings">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star"></i>
                    </div>
                    <p>Ukuran kecil, mudah dimakan, cocok dengan teh/kopi.
                        Hadiah istimewa untuk keluarga dan teman.
                        Kualitas tinggi, harga terjangkau.</p>
                </div>
                <div class="col-md-3">
                    <h6>Soleh</h6>
                    <div class="ratings">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                    </div>
                    <p>Mengingatkan masa kecil, rasa manis & gurih.
                        Cita rasa tradisional Indonesia autentik.</p>
                </div>
                <div class="col-md-3">
                    <h6>Lia</h6>
                    <div class="ratings">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                    </div>
                    <p>Layanan pelanggan ramah & membantu.
                        Penyelesaian masalah cepat & memuaskan.
                        Komitmen tinggi terhadap kepuasan pelanggan.</p>
                </div>

            </div>
        </div>
    </section>
    <!-- akhir section rating -->

</template>
<script>
</script>

<style scoped>
.jumbotron {
    background-size: cover;
    background-position: center;
    height: 91vh;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url('@/assets/img/jumbotron.png');
    /* Adjust the height as needed */
}

.text-jt {
    width: 50%;
}

h5 {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
    align-items: center;
}

img {
    width: 80%;
    width: 300px;
    border-radius: 21px 21px 0 0;
    object-fit: cover;
}

.card {
    border: none;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}



.flex-equal>* {
    flex: 1;
}

.icon-link>.bi {
    margin-top: .125rem;
    margin-left: .125rem;
    transition: transform .5s ease-in-out;
    fill: currentColor;
}

.icon-link:hover>.bi {
    transform: translate(.25rem);
}

.icon-square {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    font-size: 1.5rem;
    border-radius: .75rem;
}

/* rating */
.rating p,
.rating i {
    margin: 15px 0;
}

.ratings {
    font-size: 12px
}


.ratings .bi-star {
    color: #f8d053;
    font-size: 13px;
    margin: 3px;
}

.ratings .bi-star-fill {
    color: #f8d053;
    font-size: 13px;
    margin: 3px;
}

@media (min-width: 768px) {
    .flex-md-equal>* {
        flex: 1;
    }
}

@media only screen and (max-width: 600px) {
    .text-jt {
        width: 100%;
    }
}
</style>