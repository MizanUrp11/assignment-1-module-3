<template>
  <section class="bg-blue-50 text-center">
    <div class="max-w-6xl mx-auto px-7 py-10">
      <div class="mb-14">
        <p class="text-blue-600 text-lg">{{ appContent.sectionTitle }}</p>
        <h1 class="font-bold text-4xl">{{ appContent.mainTitle }}</h1>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="bg-white rounded-md py-6 px-2">
          <div
            class="bg-blue-200 text-blue-500 w-16 h-16 rounded-md mx-auto flex justify-center items-center text-3xl"
          >
            <i :class="featureItems[0].icon"></i>
          </div>
          <h2 class="font-bold text-2xl my-3">{{ featureItems[0].title }}</h2>
          <p class="max-w-md mx-auto text-gray-400">
           {{ featureItems[0].description }}
          </p>
        </div>

        <div class="bg-white rounded-md py-6 px-2">
          <div
            class="bg-blue-200 text-blue-500 w-16 h-16 rounded-md mx-auto flex justify-center items-center text-3xl"
          >
            <i :class="featureItems[1].icon"></i>
          </div>
          <h2 class="font-bold text-2xl my-3">{{ featureItems[1].title }}</h2>
          <p class="max-w-md mx-auto text-gray-400">
            {{featureItems[1].description}}
          </p>
        </div>

        <div class="bg-white rounded-md py-6 px-2">
          <div
            class="bg-blue-200 text-blue-500 w-16 h-16 rounded-md mx-auto flex justify-center items-center text-3xl"
          >
            <i :class="featureItems[2].icon"></i>
          </div>
          <h2 class="font-bold text-2xl my-3">{{ featureItems[2].title }}</h2>
          <p class="max-w-md mx-auto text-gray-400">
           {{featureItems[2].description}}
          </p>
        </div>

        <div class="bg-white rounded-md py-6 px-2">
          <div
            class="bg-blue-200 text-blue-500 w-16 h-16 rounded-md mx-auto flex justify-center items-center text-3xl"
          >
            <i :class="featureItems[3].icon"></i>
          </div>
          <h2 class="font-bold text-2xl my-3">{{ featureItems[3].title }}</h2>
          <p class="max-w-md mx-auto text-gray-400">
            {{featureItems[3].description}}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const appContent = {
  sectionTitle: "Features",
  mainTitle: "Our Special Features",
  featureItems: [
    {
      icon: "fa-solid fa-user",
      title: "User Friendly",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      icon: "fa-solid fa-shield-halved",
      title: "Trusted",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      icon: "fa-solid fa-hand-pointer",
      title: "Flexible",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      icon: "fa-solid fa-download",
      title: "100% Free",
      description: "Lorem ipsum dolor sit amet",
    },
  ],
};
const {featureItems} = appContent;
</script>

<style scoped></style>
