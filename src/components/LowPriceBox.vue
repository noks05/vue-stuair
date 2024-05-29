<script setup>
import Calendar from "./icons/Calendar.vue";
import Time from "./icons/Time.vue";

const { data } = defineProps({
  data: {
    price: String,
    img: {
      name: String,
      alt: String,
    },
    meta: {
      date: String,
      nights: String,
    },
    title: String,
    from: String,
  },
});
const { price, img, meta, title, from } = data;
const src = "/src/assets/img/" + img.name;
</script>

<template>
  <div class="countries-box">
    <span class="countries-box__price">{{ price }}&nbsp;<span>руб</span></span>

    <div class="img-wrap countries-box__img">
      <img :src="src" :alt="img.alt" />
    </div>

    <div class="countries-box__content">
      <h3 class="countries-box__title">{{ title }}</h3>
      <span class="countries-box__from">{{ from }}</span>

      <div class="countries-box__meta">
        <span class="text-lighter">
          <Calendar />&nbsp;&nbsp;{{ meta.date }}
        </span>
        <span class="text-lighter"> <Time />&nbsp;&nbsp;{{ meta.nights }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.countries-box {
  position: relative;
  padding: 0.775rem;
  border-radius: var(--bdrs-10);
  box-shadow: 0 0.125rem 0.625rem 0.625rem rgb(43 63 90 / 4%);
}

.countries-box__price {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0.313rem 0.8rem;
  border-radius: 0.938rem 0 0.938rem 0;
  font-size: 1rem;
  font-weight: 600;
  font-family: "Montserrat";
  color: var(--white);
  background-color: var(--orange);
  z-index: 1;
}

.countries-box__price span {
  font-size: 0.563rem;
  text-transform: uppercase;
}

.countries-box__img {
  margin-bottom: 1.063rem;
  border-radius: var(--bdrs-10);
}

.countries-box__img img {
  width: 100%;
}

.countries-box__content {
  /* height: 100%; */
}

.countries-box__title {
  margin-bottom: 0.625rem;
  font-size: 0.938rem;
  line-height: 1.063rem;
  font-weight: 700;
  font-family: "Montserrat";
  color: var(--cobalt);
}

.countries-box__from {
  display: inline-block;
  margin-bottom: 0.538rem;
  font-size: 0.875rem;
  line-height: 0.938rem;
  font-weight: 500;
  font-family: "Montserrat";
  color: var(--cobalt-lighter);
}

.countries-box__meta {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  font-size: 0.813rem;
  font-weight: 400;
  font-family: "Montserrat";
}

.countries-box__meta svg {
  height: 0.813rem;
  width: 0.813rem;
}

.countries-box__meta > *:not(:last-child) {
  margin-bottom: 0.313rem;
}

.countries-box__meta > span {
  display: inline-flex;
  align-items: center;
  padding: 0.313rem 0.75rem;
  border-radius: 12.5rem;
  background-color: var(--blue-lighter);
}

@media (max-width: 576px) {
  .countries-box__price {
    padding-inline: 1rem;
  }
}
</style>
