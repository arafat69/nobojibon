<template>
  <div>
    <div class="page_header">
      <span>Teachers List</span>
    </div>
    <div class="container py-4">
    <div class="row">

      <div class="col-md-4 col-lg-3 mt-4">
        <div class="teacher">
          <div class="teacher_thumbnail">
            <a href="#">
              <img src="/images/teacher.jpeg" class="img-fluid"/>
            </a>
            <div class="plus">
              <i class="fa fa-plus"></i>
            </div>
          </div>
          <div class="details">
            <p>Md Zakir Hossain</p>
            <span>Head Teacher</span>
          </div>
        </div>
      </div>

      <div class="col-md-4 col-lg-3 mt-4">
        <div class="teacher">
          <div class="teacher_thumbnail">
            <a href="#">
              <img src="/images/teacher2.jpeg" class="img-fluid"/>
            </a>
            <div class="plus">
              <i class="fa fa-plus"></i>
            </div>
          </div>
          <div class="details">
            <p>Sheikh Mofijur Rah...</p>
            <span>Head Teacher Head</span>
          </div>
        </div>
      </div>

      <div class="col-md-4 col-lg-3 mt-4">
        <div class="teacher">
          <div class="teacher_thumbnail">
            <a href="#">
              <img src="/images/teacher3.jpeg" class="img-fluid"/>
            </a>
            <div class="plus">
              <i class="fa fa-plus"></i>
            </div>
          </div>
          <div class="details">
            <p>Kazi Mofijul Haque</p>
            <span>Head Teacher</span>
          </div>
        </div>
      </div>

      <div class="col-md-4 col-lg-3 mt-4">
        <div class="teacher">
          <div class="teacher_thumbnail">
            <a href="#">
              <img src="/images/teacher4.jpeg" class="img-fluid"/>
            </a>
            <div class="plus">
              <i class="fa fa-plus"></i>
            </div>
          </div>
          <div class="details">
            <p>Md. Mahmud Hossain</p>
            <span>Head Teacher</span>
          </div>
        </div>
      </div>

      <div class="col-md-4 col-lg-3 mt-4">
        <div class="teacher">
          <div class="teacher_thumbnail">
            <a href="#">
              <img src="/images/teacher.jpeg" class="img-fluid"/>
            </a>
            <div class="plus">
              <i class="fa fa-plus"></i>
            </div>
          </div>
          <div class="details">
            <p>Md Zakir Hossain</p>
            <span>Head Teacher</span>
          </div>
        </div>
      </div>

      <div class="col-md-4 col-lg-3 mt-4">
        <div class="teacher">
          <div class="teacher_thumbnail">
            <a href="#">
              <img src="/images/teacher2.jpeg" class="img-fluid"/>
            </a>
            <div class="plus">
              <i class="fa fa-plus"></i>
            </div>
          </div>
          <div class="details">
            <p>Sheikh Mofijur Rah...</p>
            <span>Head Teacher Head</span>
          </div>
        </div>
      </div>

      <div class="col-md-4 col-lg-3 mt-4">
        <div class="teacher">
          <div class="teacher_thumbnail">
            <a href="#">
              <img src="/images/teacher3.jpeg" class="img-fluid"/>
            </a>
            <div class="plus">
              <i class="fa fa-plus"></i>
            </div>
          </div>
          <div class="details">
            <p>Kazi Mofijul Haque</p>
            <span>Head Teacher</span>
          </div>
        </div>
      </div>

      <div class="col-md-4 col-lg-3 mt-4">
        <div class="teacher">
          <div class="teacher_thumbnail">
            <a href="#">
              <img src="/images/teacher4.jpeg" class="img-fluid"/>
            </a>
            <div class="plus">
              <i class="fa fa-plus"></i>
            </div>
          </div>
          <div class="details">
            <p>Md. Mahmud Hossain</p>
            <span>Head Teacher</span>
          </div>
        </div>
      </div>

    </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

  .teacher{
    transition: 0.3s ease-in-out;
  }
  .teacher:hover{
    background: #a0a0a02b;
    margin-top: -25px;
    padding-bottom: 25px;
  }
  .teacher_thumbnail{
    position: relative;
    overflow: hidden;
  }
  .teacher:hover .plus{
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
    font-size: 26px !important;
    display: none !important;
    transition: 1s ease-in-out !important;
    cursor: pointer;
    text-decoration: none;
  }
.details p {
  margin: 0;
  font-size: 18px;
  text-align: center;
  color: #56509f;
  margin-top: 10px;
  display: block;
}
.details span{
  font-size: 14px;
  text-align: center;
  color: #A0A0A0;
  margin-top: 3px;
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

}
</style>
