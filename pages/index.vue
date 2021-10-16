<template>
  <div>
    <Navbar />
    <LargeFirst />
    <section class=" mt-96 mb-20 px-28 text-neutral-veryDarkViolet">

      <img class="absolute left-0 top-96 mt-32 w-48" src="../assets/images/bg-pattern-intro-left-desktop.svg">

      <hr class="w-44">
      <h1 class="font-dm-serif text-6xl mt-10">We’re different</h1>
      <div class="flex gap-5 justify-between mt-20 font-karla text-neutral-darkGrayBlue">
        <div class="">
          <img src="../assets/images/icon-snappy-process.svg" alt="Flash Icon">
          <h5 class="text-neutral-veryDarkViolet font-dm-serif text-3xl mt-7">Snappy Process</h5>
          <p class="mt-4">Our application process can be completed in minutes, not hours. Don’t get 
  stuck filling in tedious forms.</p>
        </div>
        <div class="">
          <img src="../assets/images/icon-affordable-prices.svg" alt="Flash Icon">
          <h5 class="text-neutral-veryDarkViolet font-dm-serif text-3xl mt-7">Affordable Prices</h5>
          <p class="mt-4">We don’t want you worrying about high monthly costs. Our prices may be low, 
  but we still offer the best coverage possible.</p>
        </div>
        <div class="">
          <img src="../assets/images/icon-people-first.svg" alt="Flash Icon">
          <h5 class="text-neutral-veryDarkViolet font-dm-serif text-3xl mt-7">People First</h5>
          <p class="mt-4">Our plans aren’t full of conditions and clauses to prevent payouts. We make 
  sure you’re covered when you need it.</p>
        </div>
      </div>
    </section>
    <div class="flex justify-between items-center my-40 bg-primary-darkViolet mx-28 p-10 text-neutral-veryLightgray bg-pattern">
      <div class="w-1/2">
        <h1 class="font-dm-serif text-5xl">Find out more about how we work</h1>
      </div>
      <button class="font-karla text-neutral-veryLightgray p-2 px-6 mt-8 border-solid border-2 border-neutral-veryLightgray transition duration-200 hover:bg-neutral-veryLightgray hover:text-primary-darkViolet">HOW WE WORK</button>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {}
</script>
