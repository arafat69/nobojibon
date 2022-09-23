<template>
  <div class="container py-4">
    <h3 class="title">News</h3>
    <div class="row">

      <div class="col-md-6 col-lg-4 mt-4">
        <div class="news">
          <div class="news_thumbnail">
            <img src="/images/news.jpeg" class="image">
            <div class="plus">
              <i class="fa fa-plus"></i>
            </div>
          </div>
          <a href="#">নবজীবন ইনস্টিটিউট প্রভাত ফেরি</a>
        </div>
      </div>

      <div class="col-md-6 col-lg-4 mt-4">
        <div class="news">
          <div class="news_thumbnail">
            <img src="/images/news2.jpeg" class="image">
            <div class="plus">
              <i class="fa fa-plus"></i>
            </div>
          </div>
          <a href="#">Annual Sport 2020</a>
        </div>
      </div>

      <div class="col-md-6 col-lg-4 mt-4">
        <div class="news">
          <div class="news_thumbnail">
            <img src="/images/news3.jpeg" class="image">
            <div class="plus">
              <i class="fa fa-plus"></i>
            </div>
          </div>
          <a href="#">মুজিব বর্ষ</a>
        </div>
      </div>

      <div class="col-md-6 col-lg-4 mt-4">
        <div class="news">
          <div class="news_thumbnail">
            <img src="/images/news4.jpeg" class="image">
            <div class="plus">
              <i class="fa fa-plus"></i>
            </div>
          </div>
          <a href="#">শহীদ খান বৃত্তি প্রদান অনুষ্ঠান</a>
        </div>
      </div>

      <div class="col-md-6 col-lg-4 mt-4">
        <div class="news">
          <div class="news_thumbnail">
            <img src="/images/news5.jpeg" class="image">
            <div class="plus">
              <i class="fa fa-plus"></i>
            </div>
          </div>
          <a href="#">নবজীবন ইনস্টিটিউট ব্যাটমিন্টন টুর্ন...</a>
        </div>
      </div>

      <div class="col-md-6 col-lg-4 mt-4">
        <div class="news">
          <div class="news_thumbnail">
            <img src="/images/news6.jpeg" class="image">
            <div class="plus">
              <i class="fa fa-plus"></i>
            </div>
          </div>
          <a href="#">বিজ্ঞান প্রযুক্তি সপ্তাহ পুরুস্কার...</a>
        </div>
      </div>

    </div>

    <div class="mt-5 text-center">
      <a href="#" class="button">Go TO News <i class="fa icon fa-angle-right"></i></a>
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
    display: flex;
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
    font-size: 22px;
    display: none;
    transition: 1s ease-in-out !important;
    cursor: pointer;
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
</style>
