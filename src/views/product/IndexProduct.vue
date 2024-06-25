<template>
  <section class="header bg-dark text-light  text-center p-5 mb-5">
    <h1>Product</h1>
    <p>Produk kami dirancang untuk membuat hidup Anda lebih mudah dan menyenangkan. <br> Dibuat dengan bahan berkualitas
      tinggi dan tahan lama.
    </p>
  </section>


  <div class="container">

    <section class="row justify-content-center">
      <div class="col-md-3 col-sm-4 col-6 p-md-3 p-1 " v-for="product in products" :key="product.id">
        <router-link :to="'/product/' + product.id" class="card btn">
          <img :src="product.imageUrl" class="card-img-top" alt="">
          <div class="card-body p-md-3">
            <div class="row">
              <div class="col-8 p-0 text-start">
                <h6 class="card-title fw-semibold  ">{{ product.name }}</h6>
                <p class="fw-lighter" style="opacity: 0.5; font-size: 14px;">{{ product.categories }}</p>
              </div>
              <h6 class="card-title fw-semibold col-4">{{ product.price }}</h6>
            </div>
            <div class="d-flex justify-content-between mb-2">
              <router-link :to="'/product/' + product.id" class="btn " data-1>Detail</router-link>
              <a href="" class="btn btn-success rounded-o" data-1>+ cart</a>
            </div>
          </div>
        </router-link>
      </div>
    </section>
  </div>

  <!-- tab-content tab-pane fade in active" id="panggang" -->


  <!-- </div> -->
</template>
<script>


  import { products } from '@/data-seed';

  export default {
    data() {
      return {
        products
      }

    },

  };

</script>

<style scoped>
router-link {
  transform: scale(1.1);
}

btn-link {
  text-decoration: none;
  color: var(--bs-green);
}
</style>