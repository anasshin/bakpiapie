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
                                <h5><b>Pembayaran</b></h5>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="">
                        <ul class="nav nav-underline mb-3" id="paymentTabs" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active " id="pills-cc-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-cc" type="button" role="tab" aria-controls="pills-cc"
                                    aria-selected="true">Card</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-cod-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-cod" type="button" role="tab" aria-controls="pills-cod"
                                    aria-selected="false" tabindex="-1">Cash On Delivery</button>
                            </li>
                        </ul>
                        <div class="tab-content px-0 border-0" id="paymentTabsContent">
                            <!-- Credit card -->
                            <div class="tab-pane fade active show w-100" id="pills-cc" role="tabpanel"
                                aria-labelledby="pills-cc-tab">
                                <div class="row g-3">
                                    <div class="col-12">
                                        <label class="form-label w-100" for="paymentCard">Card Number</label>
                                        <div class="input-group input-group-merge">
                                            <input id="paymentCard" name="paymentCard"
                                                class="form-control credit-card-mask" type="text"
                                                placeholder="1356 3215 6548 7898" aria-describedby="paymentCard2">
                                            <span class="input-group-text cursor-pointer p-1" id="paymentCard2"><span
                                                    class="card-type"></span></span>
                                        </div>
                                    </div>
                                    <div class=" col-md-6">
                                        <label class="form-label" for="paymentCardName">Name</label>
                                        <input type="text" id="paymentCardName" class="form-control"
                                            placeholder="Anas Sholihin">
                                    </div>
                                    <div class="col-6 col-md-3">
                                        <label class="form-label" for="paymentCardExpiryDate">Exp. Date</label>
                                        <input type="text" id="paymentCardExpiryDate"
                                            class="form-control expiry-date-mask" placeholder="MM/YY">
                                    </div>
                                    <div class="col-6 col-md-3">
                                        <label class="form-label" for="paymentCardCvv">CVV Code</label>
                                        <div class="input-group input-group-merge">
                                            <input type="text" id="paymentCardCvv" class="form-control cvv-code-mask"
                                                maxlength="3" placeholder="654">
                                            <span class="input-group-text cursor-pointer" id="paymentCardCvv2"><i
                                                    class="bx bx-help-circle text-muted" data-bs-toggle="tooltip"
                                                    data-bs-placement="top" aria-label="Card Verification Value"
                                                    data-bs-original-title="Card Verification Value"></i></span>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <label class="switch">
                                            <input type="checkbox" class="switch-input">
                                            <span class="switch-toggle-slider">
                                                <span class="switch-on"></span>
                                                <span class="switch-off"></span>
                                            </span>
                                            <span class="switch-label ps-2">Save card</span>
                                        </label>
                                    </div>
                                    <div class="col-12">
                                        <button type="button"
                                            class="btn btn-primary btn-next me-sm-3 me-1">Submit</button>
                                        <button type="reset" class="btn btn-label-secondary">Cancel</button>
                                    </div>
                                </div>
                            </div>

                            <!-- COD -->
                            <div class="tab-pane fade" id="pills-cod" role="tabpanel" aria-labelledby="pills-cod-tab">
                                <p>Cash on Delivery adalah sebuah metode pembayaran dalam transaksi jual beli di mana
                                    pembeli membayar barang atau jasa yang dibeli pada saat barang tersebut diterima.
                                </p>
                                <button type="button" class="btn btn-primary btn-next">Pay On Delivery</button>
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
                    <router-link to="/confirmation" class="btnco d-block text-center fs-6">Payment</router-link>
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