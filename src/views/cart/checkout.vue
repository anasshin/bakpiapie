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
                <a class="nav-item nav-link fw-bold py-2" id="payment-tab" data-toggle="tab" href="#payment"> <i
                        class="bi bi-credit-card-2-back-fill fs-2"></i><br>Payment</a>
            </li>
            <li class="nav-item">
                <a class="nav-item nav-link fw-bold py-2" id="confirmation-tab" data-toggle="tab"
                    href="#confirmation"><i class="bi bi-envelope-paper-heart-fill fs-2"></i><br>Confirmation</a>
            </li>
        </ul>

        <!-- content -->
        <div class="card-box">
            <div class="row">
                <div class="col-md-8 cart">
                    <div class="title">
                        <div class="row">
                            <div class="col">
                                <h5><b>Shipping Address</b></h5>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="row mb-3">
                        <div class="card mb-md-0 mb-2 py-3 bg-body-tertiary ">
                            <div class="form-check checked ps-0">
                                <label class="form-check" for="customRadioAddress1">
                                    <input name="customRadioTemp" class="form-check-input" type="radio" value=""
                                        id="customRadioAddress1" checked="">
                                    <span class="d-flex justify-content-between mb-2">
                                        <span class="fw-medium mb-0">Anas Sholihin (Default)</span>
                                        <span class="badge text-bg-success">Home</span>
                                    </span>
                                    <span class="custom-option-body">
                                        <small>Jl. Blater, Kalimanah, PBG, 90017.<br> Mobile : 1234567890</small>
                                        <span class="my-2 border-bottom d-block"></span>
                                        <span class="d-flex">
                                            <a class="me-2" href="javascript:void(0)">Edit</a> <a
                                                href="javascript:void(0)">Remove</a>
                                        </span>
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <button type="button" class="btn btn-outline-secondary">Tambah Alamat</button>
                    <div class="row my-3">
                        <h5><b>Pengiriman</b></h5>
                        <hr>
                        <div class="row mt-2 px-2">
                            <div class="col-4">
                                <input type="radio" class="btn-check" name="options-base" id="option5"
                                    autocomplete="off" checked>
                                <label class="btn w-100" for="option5">
                                    <i class="bi bi-truck"></i>
                                    <span class=" badge badge-pin rounded-pill bg-succes">Free</span>
                                    <br>
                                    <b>Standard </b>
                                    <br>
                                    <small>
                                        Dapatkan produk dalam 5 - 7 hari
                                    </small>
                                    <b class="px-3 rounded-pill text-bg-secondary">
                                        Free
                                    </b>
                                </label>
                            </div>
                            <div class="col-4">

                                <input type="radio" class="btn-check" name="options-base" id="option6"
                                    autocomplete="off">
                                <label class="btn w-100" for="option6">
                                    <i class="bi bi-lightning-charge-fill"></i><br>
                                    <b>
                                        Express
                                    </b> <br>
                                    <small>
                                        Dapatkan produk dalam 3 - 4 hari
                                    </small>
                                    <b class="px-3 rounded-pill text-bg-secondary">
                                        10.000
                                    </b>
                                </label>
                            </div>

                            <div class="col-4">

                                <input type="radio" class="btn-check" name="options-base" id="option8"
                                    autocomplete="off">
                                <label class="btn w-100" for="option8">
                                    <i class="bi bi-calendar-day-fill"></i>
                                    <br>
                                    <b>
                                        Same Day
                                    </b><br>
                                    <small>
                                        Dapatkan produk dalam 1 hari
                                    </small>
                                    <b class="px-3 rounded-pill text-bg-secondary">
                                        20.000
                                    </b>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 summary">
                    <div class="row">
                        <h6><b>Orders</b></h6>
                        <div class="col" style="padding-left:0;">Keranjang</div>
                        <div class="col text-right">Rp. 30.000</div>
                    </div>
                    <div class="row">
                        <div class="col" style="padding-left:0;">Diskon</div>
                        <div class="col text-right">0</div>
                    </div>

                    <hr>
                    <h6><b>Pengiriman</b></h6>
                    <div class="row">
                        <div class="col" style="padding-left:0;">Biaya</div>
                        <div class="col text-right">0</div>
                    </div>
                    <div class="row" style="border-top: 1px solid rgba(0,0,0,.1); padding: 2vh 0;">
                        <div class="col">Total</div>
                        <div class="col text-right">Rp.30.000</div>
                    </div>
                    <router-link to="/payment" class="btnco d-block text-center fs-6">Payment</router-link>
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