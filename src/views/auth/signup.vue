<template>
    <div class="shadow card col-4 mx-auto my-5 px-5">
        <!-- Pills navs -->
        <ul class="nav  nav-underline nav-justified mb-3 p-2" id="ex1" role="tablist">
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="tab-login" data-toggle="tab" href="#account" aria-controls="pills-login"
                    aria-selected="false">Login</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link active" id="tab-register" href="#register" role="tab" aria-controls="pills-register"
                    aria-selected="true">Register</a>
            </li>
        </ul>
        <!-- Pills navs -->

        <!-- Pills content -->
        <div class="tab-content justify-content-center">
            <div class="tab-pane fade show active" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
                <form>
                    <div class="text-center mb-3">
                        <p>Sign up with:</p>
                        <button type="button " class=" btn text-primary-emphasis mx-1 fs-5">
                            <i class="fab fa-facebook-f"></i>
                        </button>

                        <button type="button " class=" btn text-primary-emphasis mx-1 fs-5">
                            <i class="bi bi-facebook"></i>
                        </button>

                        <button type="button " class=" btn text-primary-emphasis mx-1 fs-5">
                            <i class="bi bi-twitter-x"></i>
                        </button>

                        <button type="button " class=" btn text-primary-emphasis mx-1 fs-5">
                            <i class="bi bi-google"></i> </button>
                    </div>

                    <div class="text-center">
                        <hr style="display: inline-block; width: 40%; margin-right: 10px;">
                        <p class="text-center" style="display: inline-block;">or:</p>
                        <hr style="display: inline-block; width: 40%; margin-left: 10px;">
                    </div>

                    <!-- Email input -->
                    <div class="form-outline mb-4 px-3">
                        <label class="form-label" for="loginName">Email Address</label>
                        <input type="email" id="loginName" class="form-control" placeholder="Email or Username" />
                    </div>

                    <!-- Password input -->
                    <div class="form-outline mb-4 px-3">
                        <label class="form-label" for="loginPassword">Password</label>
                        <input type="password" id="loginPassword" class="form-control" placeholder="Password" />
                    </div>
                    <div class="form-outline mb-4 px-3">
                        <label class="form-label" for="loginPassword">Confirm Password</label>
                        <input type="password" id="loginPassword" class="form-control" placeholder="Confirm Password" />
                    </div>

                    <!-- Number Input -->
                    <div class="form-outline mb-4 px-3">
                        <label class="form-label" for="phoneNumber">Phone Number</label>
                        <input type="number" id="phoneNumber" class="form-control" placeholder="Phone Number" />
                    </div>

                    <!-- 2 column grid layout -->
                    <div class="row mb-3">
                        <div class="col-md-6 d-flex ps-4">
                            <!-- Checkbox -->
                            <div class="form-check mb-3 mb-md-0">
                                <input class="form-check-input" type="checkbox" value="" id="loginCheck" />
                                <label class="form-check-label" for="loginCheck"> Anda menyetujui Ketentuan, Kebijakan
                                    Privasi, dan Kebijakan Cookie kami. </label>
                            </div>
                        </div>
                    </div>

                    <!-- Submit button -->
                    <div class="text-center">

                        <button type="submit" class="btn btn-primary btn-block mb-4 px-5 rounded-5">Sign up</button>
                    </div>

                    <!-- Register buttons -->
                    <div class="text-center">
                        <p>a member? <a class="text-primary-emphasis fw-semibold" href="">Login</a></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
hr {
    margin: auto;
}
</style>