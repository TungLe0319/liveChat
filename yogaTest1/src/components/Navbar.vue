<template>
  <nav class="navbar navbar-expand-lg navbar-dark text-dark px-3  calligraphy ">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex flex-column align-items-center">
       <p class="fs-3 text-dark ">Samadhi Yoga Idaho</p>
      </div>
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto">
        <li>
          <router-link :to="{ name: 'About' }" class="btn   text-uppercase me-5 fw-bold fs-5 ">
           Home
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'About' }" class="btn   text-uppercase me-5 fw-bold fs-5 ">
            About
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'About' }" class="btn   text-uppercase me-5 fw-bold fs-5 ">
            Retreats
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'About' }" class="btn   text-uppercase me-5 fw-bold fs-5 ">
            Stay Updated
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'About' }" class="btn   text-uppercase me-5 fw-bold fs-5 ">
            Testimonials
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'About' }" class="btn   text-uppercase me-5 fw-bold fs-5 ">
           Contact
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'About' }" class="btn   text-uppercase me-5 fw-bold fs-5 ">
            FAQ
          </router-link>
        </li>
      </ul>
      <!-- LOGIN COMPONENT HERE -->
      <!-- <Login /> -->
    </div>
  </nav>
</template>

<script>
import Login from './Login.vue'
export default {
  setup() {
    return {}
  },
  components: { Login }
}
</script>

<style scoped>

.bg-test{
background: rgb(0, 0, 0);
background: linear-gradient(180deg, #2c2b2b 0%, rgba(29,84,66,0) 100%);
}
a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 4px solid rgb(188, 84, 188);
border-radius: 79%;
}

@media screen and (min-width: 768px) {
  nav {
    height: 64px;
  }
}

</style>
