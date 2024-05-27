<script setup>
import { RouterLink, RouterView } from "vue-router";
import Logo from "./icons/Logo.vue";
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
              <a class="nav__link" data-menu-item="" href="#concerts">
                <RouterLink to="/">Горящие туры</RouterLink>
              </a>
            </li>
            <li class="nav__item">
              <a class="nav__link" data-menu-item="" href="#music">
                <RouterLink to="/">Страны</RouterLink>
              </a>
            </li>
            <li class="nav__item">
              <a class="nav__link" data-menu-item="" href="#info">
                <RouterLink to="/">туры</RouterLink>
              </a>
            </li>
            <li class="nav__item">
              <a class="nav__link" data-menu-item="" href="#video">
                <RouterLink to="/">круизы</RouterLink> круизы
              </a>
            </li>
            <li class="nav__item">
              <a class="nav__link" data-menu-item="" href="#map">
                <RouterLink to="/">О нас</RouterLink>
              </a>
            </li>
          </ul>
        </div>
      </nav>
</template>

<style>
/* burger  */
.burger-btn {
  display: none;
  height: 40px;
  width: 40px;
  transition: transform 0.2s ease-in-out;
}

.burger-btn:hover {
  transform: rotateX(50deg);
}

.burger-btn svg path {
  transition: stroke 0.2s ease-in-out;
}

.burger-btn:hover svg path {
  stroke: var(--red);
}

.burger {
  position: fixed;
  inset: 0;
  display: none;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99000;
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
  padding: 30px;
  padding-top: 82px;
  max-width: 320px;
  width: 100%;
  background-color: #000;
  animation: fadeInRight 0.3s ease-in-out forwards;
}

.burger .nav__list {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 30px;
}

.burger .nav__item:not(:last-child) {
  margin-bottom: 25px;
}

.burger .nav__link {
  font-size: 2.188rem;
}
</style>
