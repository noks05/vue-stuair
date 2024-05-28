<script setup>
import Logo from "./icons/Logo.vue";
import LowPriceBox from "./LowPriceBox.vue";
const items = [
  {
    id: 1,
    price: "10 942",
    img: {
      name: "abhazia.jpg",
      alt: "abhazia",
    },
    meta: {
      date: "29 Мая",
      nights: "7 ночей",
    },
    title: "Абхазия",
    from: "из Москвы",
  },
  {
    id: 2,
    price: "11 035",
    img: {
      name: "russia.jpg",
      alt: "russia",
    },
    meta: {
      date: "29 Мая",
      nights: "6 ночей",
    },
    title: "Россия",
    from: "из Москвы",
  },
  {
    id: 3,
    price: "13 316",
    img: {
      name: "red-place.jpg",
      alt: "red-place",
    },
    meta: {
      date: "29 Мая",
      nights: "6 ночей",
    },
    title: "Красная Поляна",
    from: "Россия из Москвы",
  },
  {
    id: 4,
    price: "23 248",
    img: {
      name: "turcia.jpg",
      alt: "Турция",
    },
    meta: {
      date: "24 Мая",
      nights: "7 ночей",
    },
    title: "Турция",
    from: "из Москвы",
  },
  {
    id: 5,
    price: "25 841",
    img: {
      name: "katar.jpg",
      alt: "Катар",
    },
    meta: {
      date: "31 Мая",
      nights: "7 ночей",
    },
    title: "Катар",
    from: "из Москвы",
  },
];
</script>

<template>
  <section class="countries" id="countries">
    <div class="container">
      <h2 class="countries__title section-title">Самые низкие цены</h2>
  
      <form class="countries__filters" action="">
        <select class="countries__input" name="town">
          <option value="Город вылета" selected>Город вылета</option>
          <option value="Москва">Москва</option>
        </select>
  
        <select class="countries__input" name="country">
          <option value="Страна" selected>Страна</option>
          <option value="Абхазия">Абхазия</option>
        </select>
  
        <select class="countries__input" name="date">
          <option value="Даты вылета" selected>Даты вылета</option>
          <option value="25.05.2024">25.05.2024</option>
        </select>
  
        <span class="countries__input">Отель</span>
  
        <select class="countries__input" name="money">
          <option value="Бюджет (РУБ)" selected>Бюджет (РУБ)</option>
          <option value="10000">10000</option>
        </select>
  
        <span class="countries__input">Показать фильтры</span>
      </form>
  
      <div class="countries__list">
        <LowPriceBox class="countries__item" v-for="item in items" :key="item.id" :data="item" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.countries__filters {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: var(--bdrs-20);
  background-color: var(--blue-lighter);
}
.countries__input {
  height: 40px;
  border-radius: 3px;
  border: 1px solid #ddd;
  background-color: #fff;
}
.countries__title{
  margin-bottom: 20px;
}
.countries__list{
  display: flex;
  flex-wrap: wrap;
}
.countries__item{
  max-width: 275px;
  width: calc((100% - 20px*3) / 4);
}
</style>
