<template>
  <header class="min-h-screen flex justify-center items-center pt-36 pb-7">
    <div
      class="grid grid-cols-1 md:grid-cols-2 items-center max-w-6xl mx-auto px-7"
    >
      <div class="mb-10 md:mb-0">
        <h1 class="text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          {{ appContent.sectionHeading_fpart }} <br />
          <span class="font-bold">{{ appContent.sectionHeading_mpart }}</span>
          <br />
          {{ appContent.sectionHeading_lpart }}
        </h1>
        <p class="mb-5 mt-7 max-w-md text-gray-400">
          {{ appContent.description }}
        </p>
        <a
          href="#"
          class="bg-blue-700 hover:bg-blue-800 transition-colors text-white py-3 px-7 rounded-md mr-4 mt-1 inline-block text-lg"
        >
          {{ appContent.buttonContent[0] }}
        </a>
        <a href="#" class="font-bold">{{ appContent.buttonContent[1] }}</a>
      </div>
      <img :src="appContent.imageLink" alt="to-do" />
    </div>
  </header>
</template>

<script setup>
const appContent = {
  sectionHeading_fpart: "Tasking",
  sectionHeading_mpart: "Tasks",
  sectionHeading_lpart: "quickly",
  imageLink: "../src/assets/img/img1.svg",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, nostrum.",
  buttonContent: ["Get started", "Learn more"],
};
</script>

<style scoped></style>
