<template>
  <nav class="
    flex justify-between px-4 py-5 items-center fixed w-full bg-white z-50
    sm:px-14
    lg:px-28
    2xl:px-60 2xl:text-xl
  ">
    <img class="" src="../assets/images/logo.svg" alt="logo">

    <img class="cursor-pointer lg:hidden" src="../assets/images/icon-hamburger.svg">

    <!-- large -->
    <div class="hidden
      font-karla lg:flex justify-center gap-8 items-center text-primary-grayBlue
    ">
      <a href="" class="transition duration-200 hover:text-primary-darkViolet">
        HOW WE WORK
      </a>
      <a href="" class="transition duration-200 hover:text-primary-darkViolet">
        BLOG
      </a>
      <a href="" class="transition duration-200 hover:text-primary-darkViolet">
        ACCOUNT
      </a>
      <button class="
        text-primary-darkViolet p-2 px-6 border-solid border-2 border-primary-darkViolet transition duration-200 
        hover:bg-primary-darkViolet hover:text-neutral-veryLightgray
      ">
        VIEW PLANS
      </button>
    </div>
  </nav>
</template>