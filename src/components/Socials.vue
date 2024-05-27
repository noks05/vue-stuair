<script setup>
import Logo from "./icons/Logo.vue";
import Facebook from "./icons/Fb.vue";
import Instagram from "./icons/Insta.vue";
import Twitter from "./icons/Twitter.vue";
</script>

<template>
      <ul class="socials list-reset">
        <li class="socials__item">
          <a href="#" class="socials__link img-wrap">
            <Facebook/>
          </a>
        </li>
        <li class="socials__item">
          <a href="#" class="socials__link img-wrap">
            <Instagram/>
          </a>
        </li>
        <li class="socials__item">
          <a href="#" class="socials__link img-wrap">
            <Twitter/>
          </a>
        </li>
      </ul>
</template>

<style scoped>
.socials__list{
  display: flex;
  align-items: center;
}
.socials__item{
 width: 20px;
 height: 20px;
}
.socials__item:not(:last-child){
  margin-right: 24px;
}
</style>
