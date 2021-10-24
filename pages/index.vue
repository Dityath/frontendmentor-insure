<template>
  <div>
    <Navbar 
      @showMobileMenu="showMobileMenu=true" 
      @closeMobileMenu="showMobileMenu=false"
    />
    <transition
      enter-active-class="transition-opacity ease-linear duration-3"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity ease-linear duration-3"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <MobileMenu v-show="showMobileMenu" />
    </transition>
    <LargeFirst />
    <SmallFirst />
    <LargeSecond />
    <SmallSecond />
    <div class="px-5 lg:px-0">
      <div class="flex justify-between items-center flex-col mx-auto text-center md:text-left md:flex-row my-40 2xl:my-52 bg-primary-darkViolet bg-pattern-work-mobile lg:bg-pattern-work-desktop bg-no-repeat bg-right-top 2xl:bg-contain max-w-md lg:max-w-full lg:mx-28 2xl:mx-60 p-10 text-neutral-veryLightgray">
        <div class="lg:w-1/2">
          <h1 class="font-dm-serif text-3xl lg:text-5xl 2xl:text-8xl">Find out more about how we work</h1>
        </div>
        <button class="font-karla 2xl:text-xl text-neutral-veryLightgray p-2 px-6 mt-8 border-solid border-2 border-neutral-veryLightgray bg-primary-darkViolet transition duration-200 hover:bg-neutral-veryLightgray hover:text-primary-darkViolet">HOW WE WORK</button>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
  export default {
    data () {
      return {
        showMobileMenu: false
      }
    }
  }
</script>
