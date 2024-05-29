<script setup>
import LowPriceBox from "./LowPriceBox.vue";
import Star from "./icons/Star.vue";
import Filter from "./icons/Filter.vue";
import Choices from "choices.js";
import { onMounted } from "vue";
import { countries } from "../assets/js/data.js";

onMounted(() => {
  const selects = document.querySelectorAll("select");
  selects.forEach(sel => {
    const choices = new Choices(sel, {
      searchEnabled: false,
      itemSelectText: "",
    });
  });
});
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

        <select class="filters__item filters__stars" name="hotel">
          <option value="Отель" selected>
            <span>Отель</span>
            <Star />
          </option>
          <option value="Отель">
            <span>Отель</span>
            <Star />
            <Star />
          </option>
          <option value="Отель">
            <span>Отель</span>
            <Star />
            <Star />
            <Star />
          </option>
          <option value="Отель">
            <span>Отель</span>
            <Star />
            <Star />
            <Star />
            <Star />
          </option>
          <option value="Отель">
            <span>Отель</span>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </option>
        </select>

        <input
          class="filters__item filters__money input-reset"
          name="money"
          type="number"
          min="5000"
          max="1000000"
          value="1000"
        />

        <button class="filters__show filters__item btn-reset" type="button">
          <span>Показать фильтры</span>
          <Filter />
        </button>
      </form>

      <div class="countries__list-wrap">
        <div class="countries__list">
          <LowPriceBox
            class="countries__item"
            v-for="item in countries"
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
  gap: 0.625rem;
  width: 100%;
  max-width: 1160px;
  margin-bottom: 1.25rem;
  padding: 0.625rem;
  border-radius: var(--bdrs-20);
  background-color: var(--blue-lighter);
}

.filters__item {
  width: calc((100% - 0.625rem * 5) / 6);
}

.filters__money {
  display: flex;
  align-items: center;
  min-height: 0;
  height: 100%;
  margin: 0;
  padding: 0.625rem;
  border-radius: 3px;
  border: 1px solid #ddd;
  font-size: 0.875rem;
  background-color: #fff;
}

.filters__show {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 3px;
  padding: 0.625rem;
  border: 1px solid #ddd;
  font-size: 0.875rem;
  background-color: #fff;
  transition: background-color 0.2s;
}

.filters__show svg {
  height: 0.813rem;
  width: 0.813rem;
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

.filters__show:active svg {
  filter: brightness(0) invert(1);
}

.filters__stars svg {
  height: 1.063rem;
  width: 1.063rem;
}

.countries__title {
  margin-bottom: 0.35rem;
}

.countries__list {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  width: 100%;
  max-width: 1160px;
  margin-bottom: 1.25rem;
}

.countries__item {
  /* max-width: 275px; */
  width: calc((100% - 1.25rem * 3) / 4);
}

.show-all {
  position: relative;
  display: flex;
  justify-content: center;
  max-width: 1160px;
}

.show-all::before,
.show-all::after {
  position: absolute;
  content: "";
  top: 50%;
  height: 1px;
  width: calc((100% - 10.813rem) / 2);
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
  padding: 0.563rem 2rem;
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

@media (max-width: 1280px) {
  .filters__money,
  .filters__show {
    width: calc((100% - 0.625rem * 2) / 3);
  }
}

@media (max-width: 1024px) {
  .countries__item {
    width: calc((100% - 1.25rem * 2) / 3);
  }
}

@media (max-width: 576px) {
  .filters__money,
  .filters__show {
    width: calc((100% - 0.625rem) / 2);
  }

  .countries__filters {
    border-radius: 5px;
  }

  .countries__item {
    width: calc((100% - 1.25rem) / 2);
  }
}
</style>
