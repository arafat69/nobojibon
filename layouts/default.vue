<template>
  <div>
    <Navbar/>
    <transition
    mode="out-in"
    leave-active-class="animate__animated animate__fadeOut"
    enter-active-class="animate__animated animate__fadeIn"
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
