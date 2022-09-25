<template>
  <div class="our-service-section">
    <div class="container">
      <div class="our_sliders_section">
        <!-- slider -->
        <VueSlickCarousel
          v-bind="setting"
          :arrows="false"
          :dots="false"
          ref="carousel"
        >
          <div class="slider_item">
              <div class="thumbnail">
                <img src="/images/slider2.png" />
              </div>
                <div class="text-content">
                  <h3 class="description">Welcome to Nobojibon Institute</h3>
                  <h1 class="title">Quality Education</h1>
                  <nuxt-link to="" class="readMoreBtn">Read More</nuxt-link>
                </div>
          </div>

          <div class="slider_item">
            <div class="thumbnail">
              <img src="/images/slider.png" />
            </div>
            <div class="inner_content">
              <div class="text-content">
                <h3 class="description">Welcome to Nobojibon Institute</h3>
                <h1 class="title">100 Years of Mujib</h1>
                <nuxt-link to="/bin" class="readMoreBtn">Read More</nuxt-link>
              </div>
            </div>
          </div>
          <div class="slider_item">
            <div class="thumbnail">
              <img src="/images/slider3.png" />
            </div>
            <div class="inner_content">
              <div class="text-content">
                <h3 class="description">Welcome to Nobojibon Institute</h3>
                <h1 class="title">21 February</h1>
                <nuxt-link to="" class="readMoreBtn">Read More</nuxt-link>
              </div>
            </div>
          </div>

        </VueSlickCarousel>
      </div>
    </div>
      <button @click="prev()" class="previewBtn"><i class="fa fa-angle-left"></i></button>
      <button @click="next()" class="NextBtn"><i class="fa fa-angle-right"></i></button>
    </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";

export default {
  name: "MyComponent",
  components: { VueSlickCarousel },
  data() {
    return {
      setting: {
        focusOnSelect: false,
        // fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
      },
    };
  },
  methods: {
    next() {
      this.$refs.carousel.next();
    },
    prev() {
      this.$refs.carousel.prev();
    },
  },
};
</script>

<style scoped>
  .slider_item .thumbnail{
    float: right;
    z-index: 0;
  }
  .slider_item{
    position: relative;
    padding: 20px 0;
  }
  .slider_item .text-content{
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
.previewBtn{
  left: 30px;
}
.NextBtn{
  right: 30px;
}
.previewBtn,.NextBtn{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    background: rgba(0,0,0,0.25);
    border-radius: 50%;
    width: 42px;
    height: 42px;
    color: #fff;;
    font-size: 20px;
}
.previewBtn:hover,.NextBtn:hover{
    background: #FE6500;
}
.our-service-section {
  background-color: rgba(0, 0, 0, 0) !important;
  background-repeat: repeat-x !important;
  background-image: url('/images/slider_background.png') !important;
  background-position: center top !important;
  width: 100%;
  max-height: 500px;
  opacity: 1;
  visibility: inherit;
  position: relative;
}



.title {
  font-size: 30px;
  font-weight: bold;
  line-height: 65px;
  font-weight: 900;
  font-size: 55px;
  color: #56509F;
  font-family: 'Lato', sans-serif;
  animation: fadeInUp;
  animation-duration: 2s;
}
.readMoreBtn{
  padding: 14px 20px 15px;
  font-size: 14px;
  background-color: #FE6500 !important;
  font-weight: 600 !important;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  margin-top: 38px;
}
.text-content .description {
  padding-top: 10px;
  color: rgb(254, 101, 0);
  font-weight: 400;
    font-size: 38px;
    line-height: 65px;
  margin: 0;
  font-family: 'Handlee', cursive;
  animation: fadeInDown;
    animation-duration: 2s;
}
@media screen and (max-width: 1024px) {
  .thumbnail img{
    width: 460px;
  }
}

@media screen and (max-width: 968px) {
  .thumbnail img{
    width: 400px;
  }
  .text-content .description {
    font-size: 28px !important;
    line-height: 40px;
  }
  .title{
    font-size: 40px !important;
    line-height: 42px;
  }
  .readMoreBtn{
  padding: 14px 20px 15px;
  margin-top: 30px;
}
}

@media screen and (max-width: 768px) {
  .thumbnail img{
    width: 300px;
  }
  .text-content .description {
    font-size: 20px !important;
  }
  .title{
    font-size: 28px !important;
    line-height: 42px;
  }
  .readMoreBtn{
  padding: 10px 20px 10px;
  margin-top: 16px;
}
}

@media screen and (max-width: 440px) {
  .thumbnail img{
    width: 180px;
  }
  .text-content .description {
    font-size: 16px !important;
    line-height: 28px;
  }
  .title{
    font-size: 22px !important;
    line-height: 26px;
  }
  .readMoreBtn{
  padding: 10px 20px 10px;
  margin-top: 8px;
}
}

@media screen and (max-width: 360px) {
  .thumbnail img{
    width: 140px;
  }
  .text-content .description {
    font-size: 15px !important;
    line-height: 28px;
  }
  .title{
    font-size: 20px !important;
    line-height: 26px;
  }
  .readMoreBtn{
  padding: 8px 10px 8px;
  margin-top: 8px;
}
}
</style>
