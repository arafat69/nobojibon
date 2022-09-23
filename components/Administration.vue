<template>
  <div class="container py-4">
    <h3 class="title">Our Administrations</h3>
    <div class="row">

      <div class="col-lg-6 mt-4">
        <div class="adminstration">
          <div class="message">
            <h3>Message from Founder Chairman</h3>
            <p>
              Bangladesh is an independent country but independent has not yet
              reached the poor and miserable people properly. They are losing in
              life bat...
            </p>
          </div>
          <div class="photo" style="width: 50%;">
            <img src="/images/admistration.jpeg" width="100%" />
          </div>
          <a href="#" class="moreBtn">More <i class="fa icon fa-angle-right"></i></a>
        </div>
      </div>

      <div class="col-lg-6 mt-4">
        <div class="adminstration">
          <div class="message">
            <h3>Message from Chairman</h3>
            <p>
              Education is the backbone of the nation. Through education, the child of nature, the human child has to be purified, to be fulfilled in his...
            </p>
          </div>
          <div class="photo" style="width: 50%;">
            <img src="/images/admistration2.jpeg" width="100%" />
          </div>
          <a href="#" class="moreBtn">More <i class="fa icon fa-angle-right"></i></a>
        </div>
      </div>

      <div class="col-lg-6 mt-4">
        <div class="adminstration">
          <div class="message">
            <h3>Message from Head Teacher</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinc...
            </p>
          </div>
          <div class="photo" style="width: 50%;">
            <img src="/images/admistration3.jpeg" width="100%" />
          </div>
          <a href="#" class="moreBtn">More <i class="fa icon fa-angle-right"></i></a>
        </div>
      </div>

    </div>


  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.adminstration {
  border: 1px solid #56509f;
  display: flex;
  flex-basis: 50%;
  position: relative;
  min-height: 250px;
}
.moreBtn{
  position: absolute;
  right: 0;
  bottom: 0;
  width: 106px;
  height: 45px;
  font-size: 16px;
  background-color: #FE6500 !important;
  font-weight: 600 !important;
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
}
.photo img{
  height: 100%;
}
.moreBtn .icon{
  font-size: 12px !important;
}
.message {
  color: #fff;
  background: #56509f;
  font-family: "Open Sans";
  padding: 18px;
  width: 50%;
}
.message h3 {
  font-size: 20px;
  line-height: 28px;
}
.message p {
  margin: 0;
  padding-top: 10px;
  line-height: 28px;
}
.title {
  font-weight: 300 !important;
  color: #56509f;
  font-size: 38px;
}
@media screen and (max-width: 600px) {
  .message{
    width: 100%;
  }
  .photo{
    display: none;
  }
}
</style>
