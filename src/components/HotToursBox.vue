<script setup>
import Fly from "./icons/Fly.vue";
 const {data} = defineProps({
  data:   {
    procent: String,
    img: {
      name: String,
      alt: String,
    },
    meta: {
      text: String,
      time: String,
    },
    title: String,
    price: {
      sale: String,
      current: String,
    },
  }
})
const {procent,img,meta,title,price} = data
const src = '/src/assets/img/' + img.name
</script>

<template>
      <div class="hot-tour-box">
        <span class="hot-tour-box__procent">{{procent}}</span>

        <div class="img-wrap hot-tour-box__img">
          <img :src="src" :alt="img.alt" />
        </div>

       <div class="hot-tour-box__content">
          <div class="hot-tour-box__meta">
            <span class="text-lighter"> <Fly/> {{meta.text}} -&nbsp;</span>
            <time class="text-lighter" datetime="2024-05-24">{{meta.time}}</time>
          </div>
  
          <h3 class="hot-tour-box__title">{{title}}</h3>
  
          <div class="hot-tour-box__bottom">
            <div class="hot-tour-box__price-wrap">
              <span class="hot-tour-box__sale text-lighter">{{price.sale}}〒</span>
              <span class="hot-tour-box__price">{{price.current}}〒</span>
            </div>
  
            <button class="btn-reset hot-tour-box__btn btn" type="button">
              Забронировать
            </button>
          </div>
       </div>
      </div>
</template>

<style scoped>
.hot-tour-box {
  position: relative;
  max-width: 310px;
  max-height: 422px;
  border: 3px solid rgba(224, 224, 224, 0.25);
  border-radius: 12px;
  height: 100%;
  width: 100%;
  text-align: start;
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
.hot-tour-box__img img{
width: 100%;
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
  transition: background-color 0.2s;
}
.hot-tour-box__btn:hover{
  background-color: var(--blue-light);
}
.hot-tour-box__btn:active{
  background-color: var(--blue);
}
</style>
