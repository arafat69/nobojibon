<template>
  <div class="position-relative sliders">
    <div class="container">
      <b-carousel
      ref="myCarousel"
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      fade
      background="#ababab"
      img-width="auto"
      img-height="200"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="Welcome to Nobojibon Institute"
        text="Quality Education"
        img-src="/images/slider.png"
      >
      </b-carousel-slide>

      <b-carousel-slide
        caption="Welcome to Nobojibon Institute"
        text="Quality Education"
        img-src="/images/slider2.png"
      >
      </b-carousel-slide>

    </b-carousel>
    </div>

    <div class="nextPreview">
      <button @click="prev()"><i class="fa fa-arrow-left"></i></button>
      <button @click="next()"><i class="fa fa-arrow-right"></i></button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      prev() {
        this.$refs.myCarousel.prev()
      },
      next() {
        this.$refs.myCarousel.next()
      }
    }
  }
</script>

<style >
  .sliders{
    background-color: rgba(0, 0, 0, 0) !important;
    background-repeat: repeat-x !important;
    background-image: url(http://nji.amadereshkul.com/templates/nursery/media/slider/slider_slide3_background.png) !important;
    background-position: center top !important;
    width: 100%;
    height: 100%;
    opacity: 1;
    visibility: inherit;
  }
.carousel-caption {
    left: 0 !important;
    bottom: initial !important;
    transform: translate(0, -50%) !important;
    top: 50% !important;
    z-index: 10;
    padding-top: 20px;
    padding-bottom: 20px;
    color: #fff;
    text-align: left !important;
}
.carousel-caption>p{
    color: #56509F !important;
    font-size: 34px;
    letter-spacing: 1px;
}
.carousel-caption>h3{
    font-size: 20px !important;
    color: #FE6500 !important;
}
.carousel-item::before {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
    text-align: left !important;
}
.carousel{
  background: transparent !important;
}
.carousel-item{
  background-color: rgba(0, 0, 0, 0) !important;
  background-repeat: repeat-x !important;
  background-image: url(http://nji.amadereshkul.com/templates/nursery/media/slider/slider_slide3_background.png) !important;
  background-position: center top !important;
  width: 100%;
  height: 100%;
  opacity: 1;
  visibility: inherit;
}
.carousel-item img{
  width: auto !important;
  height: auto !important;
  float: right;
}
.nextPreview{
    position: absolute;
    bottom: 10px;
    right: 12%;
    display: flex;
    gap: 12px;
    z-index: 9;
}
.nextPreview button{
    border: none;
    background: #FE6500;
    width: 38px;
    height: 38px;
    color: #fff;;
}

@media screen and (max-width: 480px) {
  .carousel-caption>p{
    font-size: 12px;
    letter-spacing: 0px;
  }
  .carousel-caption>h3{
    font-size: 20px !important;
  }
  .nextPreview{
    right: 8%;
  }
  .carousel-caption{
    left: 8% !important;
  }
}
</style>
