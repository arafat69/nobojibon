<template>
  <div class="main_navBar">
    <div class="navbar_top">
      <div class="container">
        <div class="top_nav_content">
          <div>
            <a href="tel:01760090807"
              ><i class="fa-solid fa-phone"></i> 01760090807</a
            >
            <a href="#"
              ><i class="fa-solid fa-envelope"></i>
              www.njinstitute02@gmail.com</a
            >
          </div>
          <div>
            <a href="#"
              ><i class="fa-solid fa-user"></i> Teacher - Staff - Guardian -
              Student</a
            >
          </div>
        </div>
      </div>
    </div>

    <div class="main_navbar">
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container">
          <nuxt-link class="navbar-brand" to="/">
            <img class="logo" src="/images/logo.png" />
          </nuxt-link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/" exact>HOME</nuxt-link>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                ABOUT
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">At a Glance</a></li>
                  <li><nuxt-link class="dropdown-item" to="/contact">Contact Us</nuxt-link></li>
                  <li><nuxt-link class="dropdown-item" to="/about">About Us</nuxt-link></li>
                </ul>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/notice">NOTICE</nuxt-link>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                PEOPLE
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><nuxt-link class="dropdown-item" to="/administration">Administration</nuxt-link></li>
                  <li><nuxt-link class="dropdown-item" to="/teacher">Teachers</nuxt-link></li>
                  <li><a class="dropdown-item" href="#">Staffs</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                NEWS &amp; EVENTS
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><nuxt-link class="dropdown-item" to="/news">News</nuxt-link></li>
                  <li><a class="dropdown-item" href="#">All Events</a></li>
                  <li><a class="dropdown-item" href="#">Ongoing Events</a></li>
                  <li><a class="dropdown-item" href="#">Upcoming Events</a></li>
                  <li><a class="dropdown-item" href="#">Featured Events</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/album">ALBUM</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/blog">BLOG</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/admission">ADMISSION</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>




  </div>
</template>

<script>
export default {};
</script>

<style>
  .dropdown:hover .dropdown-menu{
    display: block;
  }

.navbar-light .navbar-nav .nav-link.nuxt-link-active {
  background: #FE6500 !important;
  color: #fff !important;
}
.navbar-light .navbar-nav .nav-link {
  padding: 31px 12px !important;
  color: #56509F;
}
.navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover{
  color: #56509F;
}
.navbar-nav .dropdown-menu{
  margin-top: -2px;
  padding: 10px;
  border-style: solid;
  border-color: #FE6500;
  border-width: 2px 0px 0px 0px;
  box-shadow: 0 6px 8px 0 rgb(0 0 0 / 10%);
  border-radius: 0;
  min-width: 280px;
}
.navbar .dropdown-menu .dropdown-item{
  padding: 8px 16px;
}
.navbar_top {
  background-color: #56509f;
  display: block;
}
.top_nav_content {
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
}
.top_nav_content a {
  text-decoration: none;
  color: #fff;
  font-size: 14px;
}
.top_nav_content a:first-child {
  margin-right: 7px;
}

.main_navbar .logo {
  max-height: 85px;
}

.navbar {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}
.navbar-brand {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}

@media screen and (max-width: 991px) {
  .navbar-nav .dropdown-menu{
  padding: 5px;
}
.navbar-light .navbar-nav .nav-link {
  padding: 10px 12px !important;
  text-align: center;
}
.main_navbar .logo {
  max-height: 68px;
}
}
@media screen and (max-width: 768px) {
  .top_nav_content {
  height: 60px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* gap: 2px; */
}
}
@media screen and (max-width: 428px) {
  .top_nav_content a {
    font-size: 12px !important;
  }

}

</style>
