<template>
    <section class="container my-3">

        <!-- navtabs -->
        <ul class="nav nav-underline nav-justified mb-3 col-8 mx-auto">
            <li class="nav-item">
                <a class="nav-item active nav-link fw-bold py-2 text-primary-emphasis" data-toggle="tab" href="#cart">
                    <i class="bi bi-cart-fill fs-2"></i><br>Cart</a>
            </li>
            <li class="nav-item">
                <a class="nav-item nav-link fw-bold py-2 " id="shipping-address-tab" data-toggle="tab" href="#checkout">
                    <i class="bi bi-filter-square-fill fs-2"></i><br>Address</a>
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
        <div class="card">
            <div class="row">
                <div class="col-md-8 cart">
                    <div class="title">
                        <div class="row">
                            <div class="col">
                                <h4><b>Shopping Cart</b></h4>
                            </div>
                            <div class="col align-self-center text-right text-muted">2 items</div>
                        </div>
                    </div>
                    <div class="row border-top border-bottom">
                        <div class="row main align-items-center">
                            <div class="col-2">
                                <img class="img-fluid" src="@/assets/img/photo-1.jpg">
                            </div>
                            <div class="col">
                                <div class="row text-muted fs-7">Bakpia panggang</div>
                                <div class="row">Bakpia Kacang Hijau</div>
                            </div>
                            <div class="col">
                                <a href="#">-</a><a href="#" class="border">1</a><a href="#">+</a>
                            </div>
                            <div class="col">Rp. 15.000 <span class="close ms-3">&#10005;</span></div>
                        </div>
                    </div>
                    <div class="row border-top border-bottom">
                        <div class="row main align-items-center">
                            <div class="col-2"><img class="img-fluid" src="@/assets/img/photo-2.jpeg"></div>
                            <div class="col">
                                <div class="row text-muted fs-7">Bakpia Kukus</div>
                                <div class="row">Bakpia Coklat</div>
                            </div>
                            <div class="col">
                                <a href="#">-</a><a href="#" class="border">1</a><a href="#">+</a>
                            </div>
                            <div class="col">Rp. 15.000 <span class="ms-3 close">&#10005;</span></div>
                        </div>
                    </div>
                    <!-- <div class="back-to-shop">
                        <router-link to="/">
                            <a class="text-muted">&leftarrow; Back to shop</a>
                        </router-link>
                    </div> -->
                </div>
                <div class="col-md-4 summary">
                    <div>
                        <h6><b>Promo</b></h6>
                        <form>
                            <input id="code" placeholder="Enter your code">
                        </form>
                        <hr>
                    </div>
                    <h6><b>Detail</b>
                    </h6>
                    <div class="row">
                        <div class="col" style="padding-left:0;">Keranjang</div>
                        <div class="col text-right">Rp. 30.000</div>
                    </div>
                    <div class="row">
                        <div class="col" style="padding-left:0;">Diskon</div>
                        <div class="col text-right">0</div>
                    </div>

                    <div class="row" style="border-top: 1px solid rgba(0,0,0,.1); padding: 2vh 0;">
                        <div class="col">Total</div>
                        <div class="col text-right">Rp. 30.000</div>
                    </div>
                    <router-link to="/checkout" class="btn fs-6"><b>Checkout</b></router-link>
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
.card {
    margin: auto;
    margin-bottom: 2rem;
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
    margin-top: 1.25rem;
}


select {
    border: 1px solid rgba(0, 0, 0, 0.137);
    padding: 1.5vh 1vh;
    margin-bottom: 4vh;
    outline: none;
    width: 100%;
    background-color: rgb(247, 247, 247);
}

input {
    border: 1px solid rgba(0, 0, 0, 0.137);
    padding: 1vh;
    outline: none;
    width: 100%;
    background-color: rgb(247, 247, 247);
}

input:focus::-webkit-input-placeholder {
    color: transparent;
}

.btn {
    background-color: #000;
    border-color: #000;
    color: white;
    width: 100%;
    font-size: 0.7rem;
    margin-top: 4vh;
    padding: 1vh;
    border-radius: 0;
}

.btn:focus {
    box-shadow: none;
    outline: none;
    box-shadow: none;
    color: white;
    -webkit-box-shadow: none;
    /* -webkit-user-select: none; */
    transition: none;
}

.btn:hover {
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