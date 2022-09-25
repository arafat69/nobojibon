<template>
  <div>
    <!-- importent_link -->
    <h3 class="title">IMPORTANT LINKS</h3>
    <div class="divider"></div>
    <div class="importent_link">
      <li>
        <img src="/images/importentLink.png" />
        <a href="#">শিক্ষা মন্ত্রণালয়</a>
      </li>
      <li>
        <img src="/images/importentLink.png" />
        <a href="#">বাংলাদেশ জাতীয় তথ্য বাতায়ন</a>
      </li>
      <li>
        <img src="/images/importentLink.png" />
        <a href="#">প্রাথমিক শিক্ষা অধিদপ্তর</a>
      </li>
      <li>
        <img src="/images/importentLink.png" />
        <a href="#">মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা অধিদপ্তর</a>
      </li>
      <li>
        <img src="/images/importentLink.png" />
        <a href="#">মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা বিভাগ</a>
      </li>
      <li>
        <img src="/images/importentLink.png" />
        <a href="#">যশোর বোর্ড</a>
      </li>
      <li>
        <img src="/images/importentLink.png" />
        <a href="#">ব্যাইনবেস</a>
      </li>
      <li>
        <img src="/images/importentLink.png" />
        <a href="#">স্কুল</a>
      </li>
      <li>
        <img src="/images/importentLink.png" />
        <a href="#">OEMS</a>
      </li>
      <li>
        <img src="/images/importentLink.png" />
        <a href="#">শিক্ষক বতায়ন</a>
      </li>
      <li>
        <img src="/images/importentLink.png" />
        <a href="#">৪০ এর নিচে শিক্ষকদের টিকার</a>
      </li>
    </div>

    <!-- News Sections -->
    <div class="mt-3">
      <h3 class="title">NEWS</h3>
      <div class="divider"></div>
      <div class="news_item">

        <div class="item">
          <a href="#"><img src="/images/news.jpeg" /></a>
          <div>
            <h6 class="news_title">
              <a href="#">নবজীবন ইনস্টিটিউট প্রভাত ফেরি</a>
            </h6>
            <p class="news_date m-0">
              <img src="/images/date.png" /><span>21 February 2021</span>
            </p>
          </div>
        </div>

        <div class="item">
          <a href="#"><img src="/images/news2.jpeg" /></a>
          <div>
            <h6 class="news_title">
              <a href="#">Annual Sport 2020</a>
            </h6>
            <p class="news_date m-0">
              <img src="/images/date.png" /><span>21 February 2021</span>
            </p>
          </div>
        </div>

        <div class="item">
          <a href="#"><img src="/images/news3.jpeg" /></a>
          <div>
            <h6 class="news_title">
              <a href="#">মুজিব বর্ষ</a>
            </h6>
            <p class="news_date m-0">
              <img src="/images/date.png" /><span>17 March 2020</span>
            </p>
          </div>
        </div>

        <div class="view_btn my-4">
          <a href="#">View All <i class="fa icon fa-arrow-right"></i></a>
        </div>
      </div>
    </div>

    <!-- ADMINISTRATION -->
    <div>
      <h3 class="title">ADMINISTRATION</h3>
      <div class="divider"></div>
      <div class="mt-3">

        <div class="admistration">
          <div class="plusMinusBtn" @click="showaccroding(1)">
            <img v-if="!admistration1" src="/images/plus.png"/>
            <img v-else src="/images/minus.png"/>
          </div>
          <div class="mt-2">
            <h6 class="admin_tit" @click="showaccroding(1)">Founder Chairman</h6>
            <div v-if="admistration1" class="admin_collupse">
              <h6>Founder Chairman Sir</h6>
              <p>Bangladesh is an independent country but indepe...</p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>

        <div class="admistration">
          <div class="plusMinusBtn" @click="showaccroding(2)">
            <img v-if="!admistration2" src="/images/plus.png"/>
            <img v-else src="/images/minus.png"/>
          </div>
          <div class="mt-2">
            <h6 class="admin_tit" @click="showaccroding(2)">Founder Chairman</h6>
            <div v-if="admistration2" class="admin_collupse">
              <h6>Founder Chairman Sir</h6>
              <p>Bangladesh is an independent country but indepe...</p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>

        <div class="admistration">
          <div class="plusMinusBtn" @click="showaccroding(3)">
            <img v-if="!admistration3" src="/images/plus.png"/>
            <img v-else src="/images/minus.png"/>
          </div>
          <div class="mt-2">
            <h6 class="admin_tit" @click="showaccroding(3)">Founder Chairman</h6>
            <div v-if="admistration3" class="admin_collupse">
              <h6>Founder Chairman Sir</h6>
              <p>Bangladesh is an independent country but indepe...</p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      admistration1: true,
      admistration2: false,
      admistration3: false,
    }
  },
  methods: {
    showaccroding(i){
      this.admistration1 = false
      this.admistration2 = false
      this.admistration3 = false
      this['admistration'+i] = true

    }
  },
};
</script>

<style scoped>
  .admin_collupse h6{
    color: #707070;
    font-size: 16px;
  }
  .admin_collupse p{
    margin: 0;
    color: #707070;
    font-size: 14px;
  }
  .admin_collupse a{
    font-size: 14px;
    color: #56509f;
    margin-top: 0;
  }
  .admin_collupse{
    transition: 2s all ease-in-out;
  }
  .admistration{
    display: flex;
    gap: 12px;
    margin-bottom: 18px;
  }
  .plusMinusBtn{
    margin: 0px;
    width: 40px;
    height: 40px;
    background: #FE6500;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    flex-shrink: 0;
    cursor: pointer;
  }
  .plusMinusBtn img{
    width: 16px;
  }
  .admin_tit{
    color: #56509f;
    font-size: 18px;
    cursor: pointer;
  }

  .view_btn a{
  font-size: 16px;
  background-color: #FE6500 !important;
  font-weight: 600 !important;
  color: #fff;
  text-decoration: none;
  padding: 11px 20px;
}
.view_btn .icon{
  font-size: 14px;
  margin-left: 6px;
}
.title {
  font-size: 30px;
  color: #56509f;
}
.importent_link {
  list-style: none;
  margin-top: 20px;
}
.importent_link li {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
}
.importent_link li img {
  width: 16px;
  height: 16px;
}
.importent_link li a {
  text-decoration: none;
  font-size: 14px;
  color: #000;
}
.news_item {
  margin-top: 20px;
}
.news_item .item {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
}
.news_item .item img {
  width: 80px;
  height: 80px;
}
.item .news_title a {
  color: #56509f;
  line-height: 1.4em;
  font-size: 16px;
}
.item .news_date img {
  width: 16px;
  height: 14px;
  margin-right: 9px;
}
.item .news_date {
  font-size: 14px;
  color: #a0a0a0;
}
@media screen and (max-width: 600px) {
  .title{
    font-size: 24px;
  }
}
</style>
