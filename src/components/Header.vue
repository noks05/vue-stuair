<script setup>
import { RouterLink } from "vue-router";
import Logo from "./icons/Logo.vue";
import BurgerMenu from "./BurgerMenu.vue";
import Socials from "./Socials.vue";
import Hero from "./Hero.vue";
</script>

<template>
  <header class="header">
    <div class="head container">
      <BurgerMenu />

      <RouterLink to="/">
        <div class="logo img-wrap">
          <Logo />
        </div>
      </RouterLink>

      <nav class="nav">
        <ul class="nav__list list-reset">
          <li class="nav__item">
            <a class="nav__link" href="#hotTours">
              Горящие туры
            </a>
          </li>
          <li class="nav__item">
            <a class="nav__link" href="#countries">
            Страны
            </a>
          </li>
          <li class="nav__item">
            <a class="nav__link" href="#tours">
             туры
            </a>
          </li>
          <li class="nav__item">
            <a class="nav__link" href="#cruise">
             круизы
            </a>
          </li>
          <li class="nav__item">
            <a class="nav__link" href="#about">
             О нас
            </a>
          </li>
        </ul>

        <button
          class="btn-reset burger-btn"
          type="button"
          aria-expanded="false"
          aria-label="Открыть меню"
          data-burger-enable=""
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 32 32"
          >
            <path
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 8h22M5 16h22M5 24h22"
            />
          </svg>
        </button>

        <a class="nav__tour" href="#tour">НАЙТИ ТУР</a>
      </nav>
    </div>

    <Hero />

    <Socials />
  </header>
</template>

<style scoped>
.header {
  min-height: 869px;
  margin-bottom: 67px;
  background-color: var(--blue);
  background-image: url("../../src/assets/img/bg-main.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: calc( var(--container-width) + var(--container-offset) * 2);
  padding-top: 30px;
  margin-bottom: 162px;
}
.logo {
  height: 37px;
  width: auto;
}
.nav {
  display: flex;
  align-items: center;
}
.nav__list {
  display: flex;
}
.nav__item:not(:last-child) {
  margin-right: 51px;
}
.nav__link {
  font-size: 1rem;
  line-height: 1.188rem;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  color: var(--white);
  text-transform: uppercase;
  transition: color 0.2s, filter 0.2s;
}
.nav__link:hover {
  color: var(--main-black);
}

.nav__link:active {
  filter: brightness(0.3);
  color: var(--main-black);
}
.nav__tour {
  display: block;
  margin-left: 66px;
  padding: 14px 28px;
  border-radius: var(--bdrs-5);
  font-size: 1rem;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  background-color: var(--white);
  color: var(--orange);
  transition: background-color 0.2s, color 0.2s, filter 0.2s;
}

.nav__tour:hover {
  background-color: var(--orange);
  color: var(--white);
}

.nav__tour:active {
  filter: brightness(0.8);
  color: var(--white);
}
</style>
