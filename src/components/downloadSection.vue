<template>
  <section class="bg-blue-50">
    <div class="max-w-6xl mx-auto px-7 py-10">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-7 items-center mb-12">
        <img src="@/assets/img/img4.svg" alt="app" />
        <div>
          <p class="text-blue-600 mb-4 text-lg">{{ appContent.sectionTitle }}</p>
          <h1 class="font-bold text-4xl">{{ appContent.mainTitle }}</h1>
          <p class="max-w-md my-6 text-gray-400">
            {{ appContent.desctiption }}
          </p>
          <div class="flex justify-start gap-4">
            <a href="#">
              <img v-bind="appContent.appDownloadLinks[0]" />
            </a>
            <a href="#">
              <img v-bind="appContent.appDownloadLinks[1]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const appContent = {
  sectionTitle: 'Download',
  mainTitle: 'Download App on your device',
  desctiption: 'We are committed to provide you the best services required to ease your everyday life.',
  appDownloadLinks: [
    {
      src: "../src/assets/img/app-store-button.png",
      alt: "download",
      class: "h-12",
    },
    {
      src: "../src/assets/img/playstore-button.png",
      alt: "download",
      class: "h-12",
    },
  ],
};
</script>

<style scoped></style>
