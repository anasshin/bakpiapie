<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 mt-5">
                <img :src="product.imageUrl" class="w-75 rounded float-sm-end" style="float: left;" alt="">
            </div>
            <div class="col-md-6 text-start ps-md-3 mt-md-5 mt-3">
                <div class="col-8">
                    <h3 class="fw-medium mt-md-3" style="">{{ product.name }}</h3>
                    <p class="fw-lighter" style="opacity: 0.5; font-size: 14px;">{{ product.categories }}</p>
                    <h5 class="fw-semibold card-text my-md-3">Rp. {{ product.price }}</h5>


                    <input type="radio" class=" btncheck btn-check" name="options-base" id="mini" autocomplete="off"
                        checked>
                    <label class="col-3 btn btn-outline-dark rounded-pill mx-1 mb-3 " for="mini">Mini</label>

                    <input type="radio" class="btncheck btn-check" name="options-base" id="medium" autocomplete="off">
                    <label class="col-3 btn btn-outline-dark rounded-pill  mx-1 mb-3 " for="medium">Medium</label>

                    <input type="radio" class="btncheck btn-check" name="options-base" id="Large" autocomplete="off">
                    <label class="col-3 btn btn-outline-dark rounded-pill mx-1 mb-3 " for="Large">Large</label>


                    <div class="quantity-group mb-3">
                        <span class="me-2">Kuantitas</span>
                        <button class="grp" @click="decre">-</button>
                        <input type="number" class="grp text-center" min="1" style="appearance: none;"></input>
                        <button class="grp" @click="incre">+</button>
                    </div>

                    <button class="btn btn-dark rounded-pill" style="width: 100%;">Add to Cart</button>

                    <div class="d-flex my-5">
                        <p>Share :</p>
                        <button class="btn btn-sosmed" href=""><i class="bi bi-instagram"></i></button>
                        <button class="btn btn-sosmed" href=""><i class="bi bi-whatsapp"></i></button>
                        <button class="btn btn-sosmed" href=""><i class="bi bi-twitter-x"></i></button>
                    </div>
                </div>
            </div>
            <h5 class="fw-semibold mt-5">Description</h5>
            <p class="col-8 text-start ms-sm-5 mt-3">{{ product.description }}</p>
        </div>
    </div>
</template>

<script>
    import { products } from '@/data-seed';

    export default {
        data() {
            return {
                products,
            }
        },
        computed: {
            product() {
                return this.products.find(product => product.id === this.$route.params.id);
            }
        }
    }


</script>

<style>
#mini:checked {
    background-color: #f0f0f0;
    color: #000;
}

/* .btncheck {
    width: 100px;
}

.btncheck:hover {
    background-color: #f0f0f0;
    color: #000;
} */

.quantity-group {
    display: flex;
    border-radius: 5px;
}

.quantity-group button {
    width: 25px;
}

.quantity-group>input[type="number"] {
    appearance: none;
    width: 50px;
}

.quantity-group .grp {
    align-items: center;
    justify-content: center;
    height: 30px;
    border: 1px solid rgba(0, 0, 0, .09);
    background: transparent;
}

.bi {
    font-size: 2rem;
    /* margin-left: 10px; */
}

/* .btn:focus{
    
} */
.btn:hover .bi {
    color: #737373;
}
</style>