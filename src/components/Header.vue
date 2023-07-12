<template>
  <nav class="navbar navbar-expand-lg bg-light fixed-top">
    <div class="container">
      <router-link to="/">
        <a class="navbar-brand bodyMedium fw-bold themeDarkBG d-inline-block">
          learnwith <br/> <span class="small-dot">RABBIL</span>
        </a>
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <router-link to="/">
                <a class="nav-link text-uppercase active">Home</a>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about">
                <a class="nav-link text-uppercase">About</a>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/course">
                <a class="nav-link text-uppercase">Courses</a>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/mentor">
                <a class="nav-link text-uppercase">Mentor</a>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact">
                <a class="nav-link text-uppercase">Contact</a>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/join">
                <a class="nav-link text-uppercase rounded-pill text-white themeBG py-2 px-4 ms-md-3">Join</a>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HeaderComponent",
}
</script>

<style scoped>
.navbar {
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  height: 62px;
  position: fixed;
  transition: all ease-in-out 0.5s;
  background-color: transparent !important;
}

.removeNavbar .navbar {
  top: -70px;
}

.removeNavbar.mouseScroll .navbar {
  top: 0;
  background-color: var(--themeWhiteColor) !important;
  box-shadow: rgba(33, 35, 38, 0.1) 0 10px 10px -10px;
}

.navbar-brand {
  padding: 3px 10px;
  line-height: 20px;
  color: var(--themeColor);
  border-top-right-radius: 12px;
  transition: all ease-in-out 0.5s;
}

.navbar-brand:hover {
  color: var(--themeWhiteColor);
}

.navbar-brand span {
  color: #ffffff;
  transition: all ease-in-out 0.5s;
}

.navbar-brand:hover span {
  color: var(--themeColor);
}

.navbar-brand:hover .small-dot::after {
  background-color: white !important;
}

.navbar-nav .nav-link.active, .navbar-nav .show>.nav-link {
  color: var(--themeColor);
}

@media only screen and (max-width: 400px) {
  .navbar-nav .nav-link {
    text-align: center;
  }
}
</style>