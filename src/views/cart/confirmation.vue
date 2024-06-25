<template>
    <section class="container my-3">

        <!-- navtabs -->
        <ul class="nav nav-underline nav-justified mb-3 col-8 mx-auto">
            <li class="nav-item">
                <a class="nav-item active nav-link fw-bold py-2 text-primary-emphasis" data-toggle="tab" href="#cart">
                    <i class="bi bi-cart-fill fs-2"></i><br>Cart</a>
            </li>
            <li class="nav-item">
                <a class="nav-item  active nav-link fw-bold py-2 text-primary-emphasis" id="shipping-address-tab"
                    data-toggle="tab" href="#checkout"> <i class="bi bi-filter-square-fill fs-2"></i><br>Address</a>
            </li>
            <li class="nav-item">
                <a class="nav-item active nav-link fw-bold py-2 text-primary-emphasis" id="payment-tab"
                    data-toggle="tab" href="#payment"> <i class="bi bi-credit-card-2-back-fill fs-2"></i><br>Payment</a>
            </li>
            <li class="nav-item">
                <a class="nav-item active nav-link fw-bold py-2 text-primary-emphasis" id="confirmation-tab"
                    data-toggle="tab" href="#confirmation"><i
                        class="bi bi-envelope-paper-heart-fill fs-2"></i><br>Confirmation</a>
            </li>
        </ul>

        <!-- content -->
        <div class="card-box">
            <div class="row">
                <div class="col-md-12 cart">
                    <div class="title text-center">

                        <h6><b>Terima kasih atas pembayarannya! <br> Pesanan Anda akan segera kami kirimkan.</b></h6>
                        <br>
                        <p>Pesanan anda <span class="text-primary">#0987654</span> akan segera diproses.</p>
                        <br>
                        <p>Kami telah mengirimkan email konfirmasi pesanan dan kwitansi Anda ke
                            <span class="text-primary">anassholihin@example.com</span>. Jika email belum sampai dalam
                            waktu dua menit, periksa folder spam
                            Anda untuk melihat apakah email tersebut diarahkan ke sana. <br>
                        </p>
                        <p><i class="bi bi-clock-fill pe-2" style="font-size: 14px;"></i>Waktu pemesanan: 25/05/2024
                            13:35 WIB
                        </p>

                    </div>
                    <hr>
                    <ul class="list-group list-group-horizontal-md">
                        <li class="list-group-item col-md-4">
                            <h6 class=""> <i class="bi bi-geo-alt-fill fs-6 pe-2"></i><b>Detail Alamat</b></h6><br>
                            <span class="d-flex justify-content-between mb-2">
                                <span class="fw-medium mb-0">Anas Sholihin</span>
                            </span>
                            <span class="custom-option-body">
                                <small>Jl. Blater, Kalimanah, PBG, 90017.<br> +1234567890</small>
                            </span>
                        </li>
                        <li class="list-group-item col-md-4">
                            <h6 class=""> <i class="bi bi-credit-card-2-back-fill fs-6 pe-2"></i><b>Detail
                                    Pembayaran</b></h6><br>
                            <span class="d-flex justify-content-between mb-2">
                                <span class="fw-medium mb-0">Anas Sholihin</span>
                            </span>
                            <span class="custom-option-body">
                                <small>Jl. Blater, Kalimanah, PBG, 90017.<br> +1234567890</small>
                            </span>
                        </li>
                        <li class="list-group-item col-md-4">
                            <h6 class=""> <i class="bi bi-truck fs-6 pe-2"></i><b>Detail Pengiriman</b></h6><br>
                            <span class="d-flex justify-content-between mb-2">
                                <span class="fw-medium mb-0">Standard</span>
                            </span>
                            <span class="custom-option-body">
                                <small>Pesanan akan diterima dalam 5-7 hari.</small>
                            </span>
                        </li>
                    </ul>
                    <div class="row py-3">
                        <ul class="list-group col-md-8">
                            <li class="list-group-item">
                                <div class="row main align-items-center">
                                    <div class="col-2">
                                        <img class="img-fluid" src="@/assets/img/photo-1.jpg">
                                    </div>
                                    <div class="col">
                                        <div class="row text-muted fs-7">Bakpia panggang</div>
                                        <div class="row">Bakpia Kacang Hijau</div>
                                    </div>
                                    <div class="col">
                                        <span>1</span>
                                    </div>
                                    <div class="col">Rp. 15.000</div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="row main align-items-center">
                                    <div class="col-2"><img class="img-fluid" src="@/assets/img/photo-2.jpeg"></div>
                                    <div class="col">
                                        <div class="row text-muted fs-7">Bakpia Kukus</div>
                                        <div class="row">Bakpia Coklat</div>
                                    </div>
                                    <div class="col">
                                        <span>1</span>
                                    </div>
                                    <div class="col">Rp. 15.000 </div>
                                </div>
                            </li>
                        </ul>
                        <ul class="list-group col-md-4">
                            <li class="list-group-item">
                                <h6><b>Detail Harga</b></h6>
                                <div class="row">
                                    <div class="col" style="padding-left:0;">Keranjang</div>
                                    <div class="col text-right">Rp. 30.000</div>
                                </div>
                                <div class="row">
                                    <div class="col" style="padding-left:0;">Diskon</div>
                                    <div class="col text-right">0</div>
                                </div>
                                <div class="row">
                                    <div class="col" style="padding-left:0;">Pengiriman</div>
                                    <div class="col text-right">0</div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="row">
                                    <div class="col" style="padding-left:0;">Total</div>
                                    <div class="col text-right">Rp. 30.000</div>
                                </div>
                            </li>
                        </ul>

                    </div>

                </div>
            </div>

        </div>
    </section>
</template>

<script>
    import { products } from '@/data-seed';
    export default {
        data() {
            return {
                products
            }
        }
    }
</script>

<style scoped>
.card-box {
    margin: auto;
    max-width: 950px;
    width: 90%;
    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 1rem;
    border: transparent;
}

@media(max-width:767px) {
    .card {
        margin: 3vh auto;
    }
}

.cart {
    background-color: #fff;
    padding: 4vh 5vh;
    border-bottom-left-radius: 1rem;
    border-top-left-radius: 1rem;
}

@media(max-width:767px) {
    .cart {
        padding: 4vh;
        border-bottom-left-radius: unset;
        border-top-right-radius: 1rem;
    }
}

.summary {
    background-color: #ddd;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    padding: 4vh;
    color: rgb(65, 65, 65);
}

@media(max-width:767px) {
    .summary {
        border-top-right-radius: unset;
        border-bottom-left-radius: 1rem;
    }
}

.badge-pin {
    position: absolute;
    top: 0.75rem;
    right: 0.25rem;
}

i.bi {
    font-size: 1.5rem;
}

.summary .col-2 {
    padding: 0;
}

.summary .col-10 {
    padding: 0;
}

.row {
    margin: 0;
}

.title b {
    font-size: 1.5rem;
}

.main {
    margin: 0;
    padding: 2vh 0;
    width: 100%;
}

.col-2,
.col {
    padding: 0 1vh;
}

a {
    padding: 0 1vh;
}

.close {
    margin-left: auto;
    font-size: 0.7rem;
}

.fs-7 {
    font-size: 0.8rem;

}

img {
    width: 3.5rem;
}

.back-to-shop {
    margin-top: 4.5rem;
}

hr {
    margin-top: 0.8rem;
}

/* form {
    padding: 2vh 0;
} */

select {
    border: 1px solid rgba(0, 0, 0, 0.137);
    padding: 1.5vh 1vh;
    margin-bottom: 4vh;
    outline: none;
    width: 100%;
    background-color: rgb(247, 247, 247);
}



.btnco {
    background-color: #000;
    border-color: #000;
    color: white;
    width: 100%;
    font-size: 0.7rem;
    margin-top: 4vh;
    padding: 1vh;
    border-radius: 0;
}

.btnco:focus {
    box-shadow: none;
    outline: none;
    box-shadow: none;
    color: white;
    -webkit-box-shadow: none;
    /* -webkit-user-select: none; */
    transition: none;
}

.btnco:hover {
    color: white;
}

a {
    color: black;
}

a:hover {
    color: black;
    text-decoration: none;
}

#code {
    background-image: linear-gradient(to left, rgba(255, 255, 255, 0.253), rgba(255, 255, 255, 0.185)), url("https://img.icons8.com/small/16/000000/long-arrow-right.png");
    background-repeat: no-repeat;
    background-position-x: 95%;
    background-position-y: center;
}
</style>