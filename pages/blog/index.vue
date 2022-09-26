<template>
  <div>
    <div class="page_header">
      <span>Blogs List</span>
    </div>
  <div class="container py-4">
    <div class="row">

      <div class="col-md-6 col-lg-4 mt-4">
        <div class="news">
          <div class="news_thumbnail">
            <img src="/images/blog.jpeg" class="image">
            <nuxt-link to="/blog/1" class="plus">
              <i class="fa fa-plus"></i>
            </nuxt-link>
          </div>
          <nuxt-link to="/blog/1">Blog Title Gose Here</nuxt-link>
        </div>
      </div>

      <div class="col-md-6 col-lg-4 mt-4">
        <div class="news">
          <div class="news_thumbnail">
            <img src="/images/blog.jpeg" class="image">
            <nuxt-link to="/blog/1" class="plus">
              <i class="fa fa-plus"></i>
            </nuxt-link>
          </div>
          <nuxt-link to="/blog/1">Blog Title Gose Here</nuxt-link>
        </div>
      </div>

      <div class="col-md-6 col-lg-4 mt-4">
        <div class="news">
          <div class="news_thumbnail">
            <img src="/images/blog.jpeg" class="image">
            <nuxt-link to="/blog/1" class="plus">
              <i class="fa fa-plus"></i>
            </nuxt-link>
          </div>
          <nuxt-link to="/blog/1">Blog Title Gose Here</nuxt-link>
        </div>
      </div>


    </div>

  </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
  .news_thumbnail{
    height: 250px;
    position: relative;
    overflow: hidden;
  }
  .news_thumbnail:hover .plus{
    display: flex !important;
  }
  .plus{
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #56509F80;
    color: #fff;
    display: none !important;
    transition: 1s ease-in-out !important;
    cursor: pointer;
    text-decoration: none;
    color: #fff !important;
    font-size: 26px !important;
  }
.news a {
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
.image{
  width: 100%;
  height: 100%;
}
@media screen and (max-width: 600px) {
  .title{
    font-size: 28px;
  }
  .news_thumbnail{
    height: auto;
  }
}
</style>
