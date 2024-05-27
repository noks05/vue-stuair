<script setup>
import Fly from "./icons/Fly.vue";
</script>

<template>
  <section class="hot-tour">
    <h2 class="hot-tour__title section-title">Горящие туры</h2>

    <div class="hot-tour__wrap">
      <div class="hot-tour-box">
        <span class="hot-tour-box__procent">-24%</span>

        <div class="img-wrap">
          <img src="/src/assets/img/tour-1.jpg" alt="tour" />
        </div>

       <div class="hot-tour-box__content">
          <div class="hot-tour-box__meta">
            <span class="text-lighter"> <Fly/> Вылет из Алматы -&nbsp;</span>
            <time class="text-lighter" datetime="2024-05-24">24.05.2024</time>
          </div>
  
          <h3 class="hot-tour-box__title">Горящие туры в Турцию из Астаны</h3>
  
          <div class="hot-tour-box__bottom">
            <div class="hot-tour-box__price-wrap">
              <span class="hot-tour-box__sale text-lighter">991 958〒</span>
              <span class="hot-tour-box__price">867 479〒</span>
            </div>
  
            <button class="btn-reset hot-tour-box__btn btn" type="button">
              Забронировать
            </button>
          </div>
       </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hot-tour {
  margin-bottom: 78px;
}
.hot-tour__title {
  margin-bottom: 85px;
}

.hot-tour-box {
  position: relative;
  border: 3px solid rgba(224, 224, 224, 0.25);
  border-radius: 12px;
  height: 100%;
  width: 100%;
  max-width: 310px;
  max-height: 422px;
  border-radius: 12px;
  overflow: hidden;
}
.hot-tour-box__procent {
  position: absolute;
  top: 0;
  left: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 43px;
  width: 38px;
  border-radius: 0 0 5px 5px;
  font-size: 0.813rem;
  line-height: 1.25rem;
  font-weight: 400;
  font-family: "SourceSansPro", sans-serif;
  color: var(--white);
  background-color: var(--orange);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 74%, 0 100%);
  z-index: 1;
}
.hot-tour-box__title {
  margin-bottom: 40px;
  font-size:1.438rem;
  line-height: 1.6rem;
  font-weight: 400;
  font-family: "SourceSansPro", sans-serif;
  color: var(--main-black);
}
.hot-tour-box__content {
  height: 100%;
  padding: 16px;
}
.hot-tour-box__img {
  width: 100%;
  min-height: 200px;
  max-height: 200px;
}
.hot-tour-box__meta {
  display: flex;
  align-items: center;
  margin-bottom: 13px;
}
.hot-tour-box__meta span {
  display: flex;
  align-items: center;
  color: var(--blue-light);
}
.hot-tour-box__meta span svg{
  margin-right: 10px;
}
.hot-tour-box__meta span {
  color: var(--blue-light);
}
.hot-tour-box__meta time {
  color: var(--orange);
}
.hot-tour-box__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}
.hot-tour-box__sale {
  display: block;
  text-decoration: line-through;
  color: var(--cobalt-lighter);
}
.hot-tour-box__price {
  font-size: 1.125rem;
  line-height: 1.688rem;
  font-weight: 400;
  font-family: "SourceSansPro", sans-serif;
  color: var(--main-black);
}
.hot-tour-box__btn {
  max-width: 161px;
  min-height: 44px;
  border-radius: var(--bdrs-10);
  font-size: 1.1rem;
  line-height: 1.563rem;
  font-weight: 400;
  color: var(--white);
  background-color: var(--orange);
}
</style>
