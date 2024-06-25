<template>
    <nav class="navbar navbar-expand-md navbar-light bg-light sticky-top">
        <div class="container">
            <h1 class="navbar-brand fw-bold font-monospace" id="logo" href="/">bakpiaPie</h1>
            <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-md-center" id="collapsibleNavId">
                <ul class="navbar-nav nav-underline mx-auto mt-2 mt-lg-0 ">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link fw-bold">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/product" class="nav-link">Product</router-link>
                    </li>
                    <!-- <li class="nav-item">
                        <router-link to="/promo" class="nav-link" disabled>Promo</router-link>
                    </li> -->
                    <li class="nav-item">
                        <router-link to="/about" class="nav-link">About</router-link>
                    </li>
                </ul>
                <router-link to="/cart" class="btn-cart position-relative mx-2" type="submit">
                    <i class="bi bi-cart-fill m-0" style="font-size: 28px;color: black;"></i>
                    <span
                        class="btn-cart position-absolute start-100 translate-middle px-2 bg-dark rounded-pill border border-light fw-bold"
                        style="font-size: 12px;color:azure;top: 25%;">2
                    </span>
                </router-link>

                <router-link to="/account" class="btn btn-outline-dark rounded-pill px-3 ms-3">Get Member</router-link>


            </div>
        </div>
    </nav>

</template>
<script>

    export default {
        // ...

        name: 'NavbarApp',
    }
</script>

<style scoped>
/* Add your custom styles here */

.nav-link {
    font-weight: 700;
}
</style>