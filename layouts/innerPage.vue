<
<template>
  <div>
    <Navbar/>
    <div class="page_header">
      <span>{{Text}}</span>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-8 mt-5">
          <transition
            mode="out-in"
            leave-active-class="animate__animated animate__fadeOut"
            enter-active-class="animate__animated animate__fadeIn"
            >
            <Nuxt/>
          </transition>
        </div>
        <div class="col-md-4 mt-5">
          <SideBar/>
        </div>
    </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Text: this.$route.name
    }
  },
  watch:{
    $route (to, from){
        this.Text = this.$route.name;
    }
}
 };
</script>

<style scoped>
.page_header {
  color: #707070;
  text-align: center;
  padding: 46px 0 50px 0px;
  background-color: #56509f;
}
.page_header span {
  font-size: 55px;
  color: #fff;
  text-transform: capitalize;
}
</style>
