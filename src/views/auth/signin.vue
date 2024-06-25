<template>

    <div class="shadow card col-4 mx-auto my-5 px-5">
        <!-- Pills navs -->
        <ul class="nav  nav-underline nav-justified mb-3 p-2" id="ex1" role="tablist">
            <li class="nav-item" role="presentation">
                <a class="nav-link active" id="tab-login" data-toggle="tab" href="#account" aria-controls="pills-login"
                    aria-selected="true">Login</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="tab-register" data-mdb-pill-init href="#register" role="tab"
                    aria-controls="pills-register" aria-selected="false">Register</a>
            </li>
        </ul>
        <!-- Pills navs -->

        <!-- Pills content -->
        <div class="tab-content justify-content-center">
            <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                <form>
                    <div class="text-center mb-3">
                        <p>Sign in with:</p>
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
                    <div class="form-outline mb-4 px-3 ">
                        <label class="form-label" for="loginName">Email or username</label>
                        <input type="email" id="loginName" class="form-control rounded-5"
                            placeholder="Email or Username" />
                    </div>

                    <!-- Password input -->
                    <div class="form-outline mb-4 px-3 ">
                        <label class="form-label" for="loginPassword">Password</label>
                        <input type="password" id="loginPassword" class="form-control rounded-5"
                            placeholder="Password" />
                    </div>

                    <!-- 2 column grid layout -->
                    <div class="row mb-3 justify-content-evenly">
                        <div class="col-md-6 d-flex ps-4">
                            <!-- Checkbox -->
                            <div class="form-check mb-3 mb-md-0">
                                <input class="form-check-input" type="checkbox" value="" id="loginCheck" checked />
                                <label class="form-check-label" for="loginCheck"> Remember me </label>
                            </div>
                        </div>

                        <div class="col-md-6 text-end pe-3">
                            <!-- Simple link -->
                            <a class="text-primary-emphasis fw-medium" href="#!">Forgot
                                password?</a>
                        </div>
                    </div>

                    <!-- Submit button -->
                    <div class="text-center">

                        <button type="submit" class="btn btn-primary btn-block mb-4 px-5 rounded-5">Sign in</button>
                    </div>

                    <!-- Register buttons -->
                    <div class="text-center">
                        <p>Not a member? <a class="text-primary-emphasis fw-semibold" href="">Register</a></p>
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
/* .form-control {
    width: 90%;
} */

hr {
    margin: auto;
}
</style>