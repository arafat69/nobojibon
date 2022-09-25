<template>
  <div class="container py-4">
    <h3 class="title">The School of Life</h3>
    <div class="row">

      <div class="col-md-6 col-lg-4 mt-4">
        <div class="school_life">
          <div style="height: 250px">
            <iframe
              style="display: block"
              id="ytplayer"
              type="text/html"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/OcP0sWM8iZA?rel=0&amp;showinfo=0&amp;color=white&amp;iv_load_policy=3"
              frameborder="0"
              allowfullscreen=""
            ></iframe>
          </div>
          <a href="#">Nobojibon Institute</a>
        </div>
      </div>

      <div class="col-md-6 col-lg-4 mt-4">
        <div class="school_life">
          <div style="height: 250px">
            <iframe
              style="display: block"
              id="ytplayer"
              type="text/html"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/HnAdKeFjcaw?rel=0&amp;showinfo=0&amp;color=white&amp;iv_load_policy=3"
              frameborder="0"
              allowfullscreen=""
            ></iframe>
          </div>
          <a href="#">The school of life | Nobojibon Inst...</a>
        </div>
      </div>

      <div class="col-md-6 col-lg-4 mt-4">
        <div class="school_life">
          <div style="height: 250px">
            <iframe
              style="display: block"
              id="ytplayer"
              type="text/html"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/qqAI8aVB47k?rel=0&amp;showinfo=0&amp;color=white&amp;iv_load_policy=3"
              frameborder="0"
              allowfullscreen=""
            ></iframe>
          </div>
          <a href="#">Student of the year | Taufiq Rahman</a>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.school_life a {
  font-size: 18px;
  text-align: center;
  color: #56509f;
  margin-top: 10px;
  display: block;
}
.title {
  font-weight: 300 !important;
  color: #56509f;
  font-size: 38px;
}
@media screen and (max-width: 600px) {
  .title{
    font-size: 28px;
  }
}
</style>
