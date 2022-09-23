<template>
  <div>
    <Navbar/>
    <transition
    mode="out-in"
    leave-active-class="animate__animated animate__fadeInDown"
    enter-active-class="animate__animated animate__fadeInUp"
    >
    <Nuxt/>
  </transition>
  <Footer/>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
