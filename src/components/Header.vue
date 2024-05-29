<script setup>
import { RouterLink } from "vue-router";
import Logo from "./icons/Logo.vue";
import User from "./icons/User.vue";
import BurgerMenu from "./BurgerMenu.vue";
import Socials from "./Socials.vue";
import Hero from "./Hero.vue";
import { onMounted } from "vue";
import activeBurger from "../assets/js/burger.js";

onMounted(() => {
  activeBurger();
});
</script>

<template>
  <BurgerMenu />
  <header class="header">
    <div class="head container">
      <RouterLink to="/">
        <div class="logo img-wrap">
          <Logo />
        </div>
      </RouterLink>

      <nav class="nav">
        <ul class="nav__list list-reset">
          <li class="nav__item">
            <a class="nav__link" href="#hotTours"> Горящие туры </a>
          </li>
          <li class="nav__item">
            <a class="nav__link" href="#countries"> Страны </a>
          </li>
          <li class="nav__item">
            <a class="nav__link" href="#tours"> туры </a>
          </li>
          <li class="nav__item">
            <a class="nav__link" href="#cruise"> круизы </a>
          </li>
          <li class="nav__item">
            <a class="nav__link" href="#about"> О нас </a>
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

        <RouterLink class="head__sign" to="/sign">
          <User /> <span>Профиль</span>
        </RouterLink>
      </nav>
    </div>

    <Hero />

    <Socials />
  </header>
</template>

<style scoped>
.header {
  margin-bottom: 4.188rem;
  background-color: var(--blue);
  background-image: url("../../src/assets/img/bg-main.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.head {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding-top: 1.875rem;
  margin-bottom: 10rem;
}

.logo {
  height: 2.313rem;
  width: auto;
}

.logo svg {
  height: 100%;
  width: 100%;
}

.nav {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.nav__list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.nav__item:not(:last-child) {
  margin-right: 3.188rem;
}

.nav__link {
  font-size: 1rem;
  line-height: 1.188rem;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  color: var(--white);
  text-transform: uppercase;
  -webkit-transition: color 0.2s, -webkit-filter 0.2s;
  transition: color 0.2s, -webkit-filter 0.2s;
  -o-transition: color 0.2s, filter 0.2s;
  transition: color 0.2s, filter 0.2s;
  transition: color 0.2s, filter 0.2s, -webkit-filter 0.2s;
}

.nav__link:hover {
  color: var(--main-black);
}

.nav__link:active {
  -webkit-filter: brightness(0.3);
  filter: brightness(0.3);
  color: var(--main-black);
}

.nav__tour {
  display: block;
  margin-left: 4.125rem;
  padding: 0.875rem 1.75rem;
  border-radius: var(--bdrs-5);
  font-size: 1rem;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  background-color: var(--white);
  color: var(--orange);
  -webkit-transition: background-color 0.2s, color 0.2s, -webkit-filter 0.2s;
  transition: background-color 0.2s, color 0.2s, -webkit-filter 0.2s;
  -o-transition: background-color 0.2s, color 0.2s, filter 0.2s;
  transition: background-color 0.2s, color 0.2s, filter 0.2s;
  transition: background-color 0.2s, color 0.2s, filter 0.2s,
    -webkit-filter 0.2s;
}

.nav__tour:hover {
  background-color: var(--orange);
  color: var(--white);
}

.nav__tour:active {
  -webkit-filter: brightness(0.8);
  filter: brightness(0.8);
  color: var(--white);
}

.head__sign {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-left: 1.25rem;
  font-size: 1.3rem;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  color: var(--orange);
}

.head__sign {
  -webkit-transition: -webkit-transform 0.2s, -webkit-filter 0.3s;
  transition: -webkit-transform 0.2s, -webkit-filter 0.3s;
  -o-transition: transform 0.2s, filter 0.3s;
  transition: transform 0.2s, filter 0.3s;
  transition: transform 0.2s, filter 0.3s, -webkit-transform 0.2s,
    -webkit-filter 0.3s;
}

.head__sign:hover {
  -webkit-transform: translateY(-4px);
  -ms-transform: translateY(-4px);
  transform: translateY(-4px);
}

.head__sign:active {
  -webkit-filter: brightness(10);
  filter: brightness(10);
}

.head__sign svg {
  height: 1.875rem;
  width: 1.875rem;
  margin-right: 0.625rem;
}

.burger-btn {
  border-radius: var(--bdrs-5);
  background-color: var(--orange);
}

@media (max-width: 1280px) {
  .nav .nav__list {
    display: none;
  }

  .burger-btn {
    display: block;
  }

  .nav__tour {
    margin-left: 20px;
  }
}

@media (max-width: 768px) {
  .head__sign span {
    display: none;
  }
}
</style>
