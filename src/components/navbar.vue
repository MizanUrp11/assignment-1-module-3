<template>
  <nav class="fixed w-full bg-white drop-shadow-md">
    <div class="max-w-6xl mx-auto flex justify-between items-center p-5">
      <a href="index.html" class="font-bold text-3xl">{{ appContent.sectionTitle }}</a>

      <ul
        class="bg-white flex justify-between items-center flex-col gap-5 text-gray-400 absolute overflow-y-scroll w-full left-0 top-20 px-6 transition-all duration-500 ease-out h-0 md:static md:flex-row md:h-auto md:top-auto md:overflow-auto md:justify-center md:w-fit" :class="menuOpen ? 'h-auto py-6 h-0' : ''"
        id="navbar-menu"
      >
        <li>
          <a href="#">{{ appContent.menuItems[0] }}</a>
        </li>
        <li>
          <a href="#">{{appContent.menuItems[1]}}</a>
        </li>
        <li>
          <a href="#">{{appContent.menuItems[2]}}</a>
        </li>
        <li>
          <a href="#">{{ appContent.menuItems[3] }}</a>
        </li>
        <li>
          <a
            href="#"
            class="bg-blue-700 transition-colors hover:bg-blue-800 text-white py-2 px-7 rounded-md block md:hidden"
          >
            Sign up
          </a>
        </li>
      </ul>
      <a
        href="#"
        class="bg-blue-700 transition-colors hover:bg-blue-800 text-white py-2 px-7 rounded-md hidden md:block"
        >Sign up</a
      >
      <button @click="menuOpen = !menuOpen" class="md:hidden" id="menu-btn">
        <i class="fa-solid fa-bars text-2xl md:hidden"></i>
      </button>
    </div>
  </nav>
</template>
<script setup>

import { ref } from 'vue';

const menuOpen = ref(false)

const appContent = {
  sectionTitle: 'Tasking',
  menuItems:['Home','Member','About', 'Enterprize'],
}
</script>
<style scoped>
  
</style>