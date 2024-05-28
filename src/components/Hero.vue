<script setup>
import Logo from "./icons/Logo.vue";
import Loup from "./icons/Loup.vue";
</script>

<template>
  <div class="hero content-container">
    <div class="hero__top">
      <h1 class="hero__title">Откройте Мир с STUAIR</h1>

      <div class="hero__wrap">
        <form class="search-form" action="">
          <input
            class="input-reset search-form__input"
            type="text"
            placeholder="Поиск туров и курортов"
          />
          <button class="search-form__btn btn-reset btn" type="button">
            Поиск <Loup />
          </button>
        </form>
      </div>
    </div>

    <div class="hero__bottom"></div>
  </div>
</template>

<style scoped>
.hero {
  max-width: calc(1124px + var(--container-offset));
}
.hero__title {
  max-width: 842px;
  margin-bottom: 28px;
  font-size: 6rem;
  line-height: 7.1rem;
  font-weight: 700;
  font-family: "Roboto", sans-serif;
  color: var(--white);
  text-transform: uppercase;
}

.hero__wrap {
  display: flex;
  justify-content: center;
  padding: 57px 43px 93px;
  border-radius: var(--bdrs-20);
  background-color: var(--blue);
}
.search-form {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 12px;
  border-radius: var(--bdrs-10);
  background-color: var(--white);
}
.search-form__input {
  width: 100%;
  height: 100%;
  padding-inline: 20px;
  border-radius: var(--bdrs-10);
  font-size: 1.5rem;
  background-color: var(--white);
}
.search-form__input:focus {
  outline-color: var(--cobalt-lighter);
}
.search-form__input::placeholder {
  font-size: 1.5rem;
  color: #7e7e7e;
}
.search-form__btn {
  min-height: 48px;
  max-width: 172px;
  margin-left: 24px;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Roboto";
  color: var(--white);
  background-color: var(--orange);
  border-radius: var(--bdrs-5);
transition: background-color 0.2s;
}
.search-form__btn:hover{
  background-color: var(--blue-light);
}
.search-form__btn:active{
  background-color: var(--blue);
}
.search-form__btn svg {
  margin-left: 10px;
}
</style>
