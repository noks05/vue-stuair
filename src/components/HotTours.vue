<script setup>
import HotToursBox from "./HotToursBox.vue";
import { hotTours } from "../assets/js/data.js";
import { ref } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

const breakpoints = ref({
  480: {
    itemsToShow: 2,
  },
  576: {
    itemsToShow: 2.8,
  },
  980: {
    itemsToShow: 3,
  },
  1024: {
    itemsToShow: 3.5,
  },
  1280: {
    itemsToShow: 4,
  },
  1480: {
    itemsToShow: 4.9,
  },
  1800: {
    itemsToShow: 5.9,
  },
});
</script>

<template>
  <section class="hot-tours" id="hotTours">
    <h2 class="hot-tours__title section-title container">Горящие туры</h2>

    <Carousel
      :items-to-show="1.6"
      :wrap-around="true"
      :breakpoints="breakpoints"
    >
      <Slide class="hot-tours__item" v-for="item in hotTours" :key="item.id">
        <HotToursBox :data="item" />
      </Slide>
    </Carousel>
  </section>
</template>

<style scoped>
.hot-tours {
  margin-bottom: 3.875rem;
}

.hot-tours__item {
  padding-inline: 6px;
}

.hot-tours__title {
  margin-bottom: 2.7rem;
}

@media (max-width: 768px) {
  .hot-tours__title {
    margin-bottom: 2.313rem;
  }
}
</style>
