<script setup>
import Logo from "./icons/Logo.vue";
const {data} = defineProps({
  data:   {
    price: String,
    img: {
      name: String,
      alt: String,
    },
    meta: {
      date: String,
      nights: String,
    },
    title: String,
    from: String,
  }
})
const {price,img,meta,title,from} = data
const src = '/src/assets/img/' + img.name
</script>

<template>
      <div class="countries-box">
        <span class="countries-box__price">{{price}}</span>

        <div class="img-wrap countries-box__img">
          <img :src="src" :alt="img.alt" />
        </div>

        <div class="countries-box__content">

          <h3 class="countries-box__title">{{title}}</h3>
          <h3 class="countries-box__from">{{from}}</h3>

          <div class="countries-box__meta">
            <span class="text-lighter"> <Fly /> {{meta.date}}</span>
            <span class="text-lighter"> <Fly /> {{meta.nights}}</span>
          </div>
        </div>
      </div>
</template>

<style scoped>
.countries-box {
  box-shadow: 0 2px 3px 10px rgb(43 63 90 / 2%);
}
.countries-box__price {
  padding: 14px;
}
.img-wrap {
}
.countries-box__img{
  margin-bottom: 17px;
}
.countries-box__content {
}
.countries-box__title {
  margin-bottom: 7px;
  font-size: 0.938rem;
  line-height: 1.063rem;
  font-weight: 700;
  font-family: 'Montserrat';
  color: var(--cobalt);
}
.countries-box__from {
  margin-bottom: 7px;
  font-size: 0.875rem;
  line-height: 0.938rem;
  font-weight: 500;
  font-family: 'Montserrat';
  color: var(--cobalt-lighter);
}
.countries-box__meta>*:not(:last-child) {
  margin-bottom: 5px;
}
.countries-box__meta>span{
  display: inline-block;
  padding: 7px;
  border-radius: 200px;
  background-color: var(--blue-lighter);
}
.countries-box__meta {
  font-size: 0.813rem;
  font-weight: 400;
  font-family: 'Montserrat';
}
.countries-box__meta {
  font-size: 0.813rem;
  font-weight: 400;
  font-family: 'Montserrat';
}

</style>
