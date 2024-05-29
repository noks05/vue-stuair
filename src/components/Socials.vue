<script setup>
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
.socials{
  display: flex;
  align-items: center;
  margin-left: 1.563rem;
  padding-bottom: 1.563rem;
}
.socials__item{
 width: 20px;
 height: 20px;
}
.socials__link{
  border-radius: 100%;
}
.socials__link:hover{
  background-color: var(--orange);
}
.socials__link:active{
  filter: brightness(0.6);
  background-color: var(--orange);
}
.socials__item:not(:last-child){
  margin-right: 1.5rem;
}
</style>
