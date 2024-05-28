<script setup>
import HotToursBox from "./HotToursBox.vue";
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const items = [
  {
    id: 1,
    procent: "-24%",
    img: {
      name: "tour-1.jpg",
      alt: "tour-1",
    },
    meta: {
      text: "Вылет из Алматы",
      time: "24.05.2024",
    },
    title: "Горящие туры в Египет из Алматы",
    price: {
      sale: "906 504",
      current: "730 541",
    },
  },
  {
    id: 2,
    procent: "-7%",
    img: {
      name: "tour-2.jpg",
      alt: "tour-2",
    },
    meta: {
      text: "Вылет из Астаны",
      time: "25.05.2024",
    },
    title: "Горящие туры в Тайланд из Астаны",
    price: {
      sale: "1 734 064",
      current: "1 617 969",
    },
  },
  {
    id: 3,
    procent: "-14%",
    img: {
      name: "tour-3.jpg",
      alt: "tour-3",
    },
    meta: {
      text: "Вылет из Астаны",
      time: "14.08.2024",
    },
    title: "Горящие туры в Турцию из Астаны",
    price: {
      sale: "991 958",
      current: "867 479",
    },
  },
  {
    id: 4,
    procent: "-47%",
    img: {
      name: "tour-4.jpg",
      alt: "tour-4",
    },
    meta: {
      text: "Вылет из Алматы",
      time: "25.05.2024",
    },
    title: "Горящие туры в Мальдивы из Алматы",
    price: {
      sale: "1 140 134",
      current: "778 150",
    },
  },
  {
    id: 5,
    procent: "-6%",
    img: {
      name: "tour-5.jpg",
      alt: "tour-5",
    },
    meta: {
      text: "Вылет из Алматы",
      time: " 25.05.2024",
    },
    title: "Горящие туры в Вьетнам из Алматы",
    price: {
      sale: "996 486",
      current: "939 546",
    },
  },
  {
    id: 6,
    procent: "-51%",
    img: {
      name: "tour-6.jpg",
      alt: "tour-6",
    },
    meta: {
      text: "Вылет из Алматы",
      time: "25.05.2024",
    },
    title: "Горящие туры в Турцию из Алматы",
    price: {
      sale: "1 439 097",
      current: "953 284",
    },
  },
];
</script>

<template>
  <section class="hot-tours" id="hotTours">
    <h2 class="hot-tours__title section-title container">Горящие туры</h2>

    <Carousel :items-to-show="5.9" :wrap-around="true">
      <Slide v-for="item in items" :key="item.id">
        <HotToursBox :data="item"/>
      </Slide>
    </Carousel>
    
  </section>
</template>

<style scoped>
.hot-tours {
  margin-bottom: 78px;
}
.hot-tours__title {
  margin-bottom: 85px;
}
</style>
