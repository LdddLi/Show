<script setup lang="ts">
// 定义导航栏内容
const navList = [
  {
    desc: 'HERE',
    url: '/',
  },
  {
    desc: 'OTHER',
    url: '/home',
  },
  {
    desc: 'ABOUT',
    url: '/about',
  },
]
</script>

<template>
  <div
    class="flex flex-row justify-between items-center h-24 bg-dark px-16 backdrop-filter backdrop-blur relative"
  >
    <div class="text-white text-sm flex flex-row gap-20 w-46">
      <template
        v-for="(item, index) in navList"
        :key="index"
      >
        <div class="flex flex-row items-center gap-2">
          <template v-if="index !== 0">
            <div class="w-2 stroke-blue">
              <icon-local-icons-round />
            </div>
          </template>
          <div>
            {{ item.desc }}
          </div>
        </div>
      </template>
    </div>
    <div class="absolute left-1/2 transform -translate-x-1/2">
      <img
        src="@/assets/icons/head-name.png"
        alt="logo"
        class="w-24"
      />
    </div>
    <div class="text-white text-sm flex flex-row items-center gap-10">
      <div class="h-full flex flex-row items-center">
        <icon-local-icons-search />
      </div>
      <div class="h-full w-1">
        <icon-local-icons-line />
      </div>
      <div class="flex flex-row items-center gap-2">
        <div class="text-white text-14px font-thin">MENU</div>
        <icon-local-icons-menu />
      </div>
    </div>
  </div>
</template>
