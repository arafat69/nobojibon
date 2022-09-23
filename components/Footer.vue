<template>
  <div class="footer_Section mt-3">
    <div class="container">
      <div class="row">

        <div class="col-md-6 col-lg-3 mt-3">
          <h3 class="footer_title">CONTACT US</h3>
          <div class="divider"></div>
          <div class="footer_content">
            <li>Nobojibon Institute</li>
            <li><i class="fa fa-location-dot"></i> Polashpole, Satkhira</li>
            <li><i class="fa fa-phone"></i> 01760090807</li>
            <li><i class="fa fa-envelope"></i> www.njinstitute02@gmail.com</li>
            <li><i class="fa-solid fa-earth-americas"></i> http://nji.amadereshkul.com</li>
          </div>
        </div>

        <div class="col-md-6 col-lg-3 mt-3">
          <h3 class="footer_title">LOGIN</h3>
          <div class="divider"></div>
          <div class="footer_content">
            <a class="login" href="#">TEACHER LOGIN</a>
            <a class="login" href="#">STAFF LOGIN</a>
            <a class="login" href="#">GUARDIAN LOGIN</a>
            <a class="login" href="#">STUDENT LOGIN</a>
          </div>
        </div>

        <div class="col-md-6 col-lg-3 mt-3">
          <h3 class="footer_title">SITE TREE</h3>
          <div class="divider"></div>
          <div class="footer_content">
            <li class="link"><img src="/images/check.png"> <a href="#">Current Teachers</a></li>
            <li class="link"><img src="/images/check.png"> <a href="#">News</a></li>
            <li class="link"><img src="/images/check.png"> <a href="#">All Events</a></li>
            <li class="link"><img src="/images/check.png"> <a href="#">About Us</a></li>
            <li class="link"><img src="/images/check.png"> <a href="#">ALBUM</a></li>
            <li class="link"><img src="/images/check.png"> <a href="#">BLOG</a></li>
          </div>
        </div>

        <div class="col-md-6 col-lg-3 mt-3">
          <h3 class="footer_title">LOCATION MAP</h3>
          <div class="divider"></div>
          <div class="footer_content">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.4561702880296!2d90.34900581443642!3d23.766764984581304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c09c6ac1550d%3A0x9b8af8fa9539d359!2sSheikhertek%20Rd-6%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1663949144254!5m2!1sen!2sbd" width="100%" height="180" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>

      </div>
    </div>

    <div class="goToTop" @click="goToTop">
      <i class="fa fa-angle-up"></i>
    </div>

  </div>
</template>

<script>
export default {
  data:{

  },
  methods:{
    goToTop(){
      window.scroll(0,0)
    }
  }
}
</script>

<style>
  .goToTop{
    position: fixed;
    right: 30px;
    width: 46px;
    height: 46px;
    bottom: 30px;
    background-color: rgba(0, 0, 0, 0.5);
    font-size: 24px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.3s;
    display: none;
    animation: fadeInUp;
    animation-duration: 2s;
  }
  .goToTop:hover{
    background-color: #FE6500;
  }
  .footer_content .link{
    font-size: 16px;
  }
  .footer_content .link img{
    width: 18px;
    height: 18px;
  }
  .footer_content .link a{
    text-decoration: underline;
    color: #CCCAE2;
    margin-left: 8px;
  }
.footer_Section{
  padding: 50px 0px 50px 0px;
  background-repeat: repeat;
  background-size: auto auto;
  background-position: 0px 0px;
  background-image: url('/images/footer.png');
}
.footer_title{
  color: #fff;
  font-size: 20px;
}
.footer_content{
  list-style: none;
  margin-top: 18px;
}
.footer_content li{
  color: #CCCAE2;
  font-size: 14px;
  margin-bottom: 8px;
  font-weight: 500;
}
.footer_content .login{
  width: 100%;
  display: block;
  border: 1px solid #807CB7;
  color: #CCCAE2;
  text-decoration: none;
  padding: 12px;
  display: block;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 5px;
  text-transform: uppercase;
  transition: 0.5s;
}
.footer_content .login:hover{
  background:#FE6500;
  color: #fff;
}


</style>
