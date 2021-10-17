<template>
  <div>
    <Navbar />
    <LargeFirst />
    <SmallFirst />
    <LargeSecond />
    <SmallSecond />
    <div class="px-5 lg:px-0">
      <div class="flex justify-between items-center flex-col mx-auto text-center md:text-left md:flex-row my-40 bg-pattern bg-primary-darkViolet max-w-md lg:max-w-full lg:mx-28 p-10 text-neutral-veryLightgray">
        <div class="lg:w-1/2">
          <h1 class="font-dm-serif text-3xl lg:text-5xl">Find out more about how we work</h1>
        </div>
        <button class="font-karla text-neutral-veryLightgray p-2 px-6 mt-8 border-solid border-2 border-neutral-veryLightgray transition duration-200 hover:bg-neutral-veryLightgray hover:text-primary-darkViolet">HOW WE WORK</button>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {}
</script>
