<script setup>
import LowPriceBox from "./LowPriceBox.vue";
import Star from "./icons/Star.vue";
import Filter from "./icons/Filter.vue";
import Choices from "choices.js";
import { onMounted } from "vue";

onMounted(() => {
  const selects = document.querySelectorAll("select");
  selects.forEach(sel => {
    const choices = new Choices(sel, {
      searchEnabled: false,
      itemSelectText: "",
    });
  });
});

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

      <form class="countries__filters filters" action="">
        <select class="filters__item" name="town">
          <option value="Город вылета" selected>Город вылета</option>
          <option value="Москва">Москва</option>
        </select>

        <select class="filters__item" name="country">
          <option value="Страна" selected>Страна</option>
          <option value="Абхазия">Абхазия</option>
        </select>

        <select class="filters__item" name="date">
          <option value="Даты вылета" selected>Даты вылета</option>
          <option value="25.05.2024">25.05.2024</option>
        </select>

        <select class="filters__item" name="hotel">
          <option value="Отель" selected><span>Отель</span> <Star /></option>
          <option value="Отель"><span>Отель</span> <Star /><Star /></option>
          <option value="Отель">
            <span>Отель</span> <Star /><Star /><Star />
          </option>
          <option value="Отель">
            <span>Отель</span> <Star /><Star /><Star /><Star />
          </option>
          <option value="Отель">
            <span>Отель</span> <Star /><Star /><Star /><Star /><Star />
          </option>
        </select>

        <select class="filters__item" name="money">
          <option value="Бюджет (РУБ)" selected>Бюджет (РУБ)</option>
          <option value="10000">10000</option>
        </select>

        <button class="filters__show filters__item btn-reset" type="button">
          <span>Показать фильтры</span>
          <Filter />
        </button>
      </form>

      <div class="countries__list-wrap">
        <div class="countries__list">
          <LowPriceBox
            class="countries__item"
            v-for="item in items"
            :key="item.id"
            :data="item"
          />
        </div>

        <div class="show-all">
          <button class="show-all__btn btn-reset" type="button">
            Показать все
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.countries__filters {
  display: flex;
  gap: 10px;
  width: 100%;
  max-width: 1160px;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: var(--bdrs-20);
  background-color: var(--blue-lighter);
}
.filters__item {
  width: calc((100% - 10px * 5) / 6);
}
.filters__show {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 3px;
  padding: 10px;
  border: 1px solid #ddd;
  background-color: #fff;
  transition: background-color 0.2s;
}
.filters__show:hover {
  color: #fff;
  background-color: var(--cobalt-lighter);
} 
.filters__show:hover svg {
  filter: brightness(0) invert(1);
}
.filters__show:active {
  color: #fff;
  background-color: var(--cobalt-light);
}
.filters__show:active svg  {
  filter: brightness(0) invert(1);
} 
.countries__title {
  margin-bottom: 20px;
}
.countries__list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  max-width: 1160px;
  margin-bottom: 20px;
}
.countries__item {
  max-width: 275px;
  width: calc((100% - 20px * 3) / 4);
}
.show-all {
  position: relative;
  display: flex;
  justify-content: center;
}
.show-all::before,
.show-all::after {
  position: absolute;
  content: "";
  top: 50%;
  height: 1px;
  width: calc((100% - 173px) / 2);
  transform: translateY(-50%);
  background-color: #ddd;
}
.show-all::before {
  left: 0;
}
.show-all::after {
  right: 0;
}
.show-all__btn {
  padding: 9px 32px;
  border: 1px solid #ddd;
  border-radius: var(--bdrs-20);
  font-size: 0.625rem;
  text-transform: uppercase;
  color: #777;
  background-color: #efefef;
  transition: background-color 0.2s, color 0.2s;
}
.show-all__btn:hover {
  color: #fff;
  background-color: #777;
}
.show-all__btn:active {
  color: #fff;
  background-color: #555;
}
</style>
