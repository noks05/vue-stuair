<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav class="burger" data-menu="">
    <button
      class="btn-reset burger-btn burger-disable"
      type="button"
      aria-expanded="false"
      aria-label="Открыть меню"
      data-burger-disable=""
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 21 21"
      >
        <path
          fill="none"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m15.5 15.5l-10-10zm0-10l-10 10"
        />
      </svg>
    </button>

    <div class="burger-box" data-menu-box="">
      <ul class="nav__list list-reset">
        <li class="nav__item">
          <a class="nav__link" data-menu-item="" href="#hotTours">
            Горящие туры
          </a>
        </li>
        <li class="nav__item">
          <a class="nav__link" data-menu-item="" href="#countries"> Страны </a>
        </li>
        <li class="nav__item">
          <a class="nav__link" data-menu-item="" href="#tours"> туры </a>
        </li>
        <li class="nav__item">
          <a class="nav__link" data-menu-item="" href="#cruise"> круизы </a>
        </li>
        <li class="nav__item">
          <a class="nav__link" data-menu-item="" href="#about"> О нас </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style>
/* burger  */
.burger-btn {
  display: none;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: var(--bdrs-5);
  background-color: var(--orange);
  transition: transform 0.2s ease-in-out;
}

.burger {
  position: fixed;
  inset: 0;
  display: none;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100000000;
  animation: fadeIn 0.2s ease-in-out forwards;
}

.burger-disable {
  position: absolute;
  top: 20px;
  right: 15px;
  z-index: 1;
}

.burger.menu--active {
  display: block;
}

.burger-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 1.875rem;
  padding-top: 5.125rem;
  max-width: 320px;
  width: 100%;
  background-color: #fff;
  animation: fadeInRight 0.3s ease-in-out forwards;
}

.burger .nav__list {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 1.875rem;
}

.burger .nav__item:not(:last-child) {
  margin-bottom: 25px;
}

.burger .nav__link {
  font-size: 2.188rem;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
}

.burger .nav__link:hover {
  color: var(--orange);
}

.burger .nav__link:active {
  filter: brightness(0.5);
}

@media (max-width: 1280px) {
  .burger-btn {
    display: block;
  }
}
</style>
