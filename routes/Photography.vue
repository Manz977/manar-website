<script setup>
import { RouterLink } from 'vue-router';
</script>


<template>
   <div class="overlay"></div>
    <div class="photo-hero">
      <h1 class="h1-photography">Photography</h1>
    </div>

    <section class="portflio-sec">
    <div class="container">
    <div class="card__container">
      <article class="card__article">
        <img src="/src/assets/photo-page-img/fashion.jpg" alt="img" class="card__img">
        <div class="card__data">
          <h2 class="card__title">Fashion</h2>
          <span class="card__description">Collection of my fashion photography</span>
          <RouterLink class="card__button" to="/fashion">Gallery</RouterLink>
        </div>
      </article>

       <article class="card__article">
        <img src="/src/assets/photo-page-img/food.jpg" alt="img" class="card__img">
        <div class="card__data">
          <h2 class="card__title">Food</h2>
          <span class="card__description">Collection of my food photography</span>
          <RouterLink class="card__button" to="/food">Gallery</RouterLink>
        </div>
      </article>

       <article class="card__article">
        <img src="/src/assets/photo-page-img/street.jpg" alt="img" class="card__img" style="height: 96%;">
        <div class="card__data">
          <h2 class="card__title">Street Photography</h2>
          <span class="card__description">Collection of my street photography</span>
          <RouterLink class="card__button" to="/street">Gallery</RouterLink>
        </div>
      </article>
    </div>
  </div>
  </section>
</template>



<style scoped>

.photo-hero {
  padding-top: 10vh;
}

.h1-photography {
  margin: 5vh 0 10vh 0;

}
/*================== Card section ====================*/


.prot-header {
  font-size: 2.4rem;
  margin-bottom: 2rem;
}


:root {
  /*========= Colors ==========*/
  /*Color mode HSL(hue, saturation, lightness)*/
  --first-color: hsl(82, 60%, 28%);
  --title-color: hsl(0, 0%, 15%);
  --text-color: hsl(0, 0%, 35%);
  ---body-color: hsl(0, 0%, 95%);
  --container-color: hsl(0, 0%, 100%);

  /*========= Font and typography =======*/
  --h2-font-size: 1.25rem;
  --small-font-size: .813rem;
}
/*========== Respomsive typography ========*/

@media screen and (min-width: 1120px) {
  :root {
    --h2-font-size: 1.5rem;
    --small-font-size: .875rem;
  }
}

/*=========== General =================*/ 

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  background-color: var(---body-color);
  color: var(--text-color);
}

img {
  display: block;
  max-width: 100%;
}

/*=========== CARD =============*/
.container {
  place-items: center;
  margin-bottom: 5rem;
}

.card__container {
  display: grid;
  row-gap: 3.5rem;
}

.card__article {
  position: relative;
  overflow: hidden;
}

.card__img {
  width: 328px;
  border-radius: 1.5rem;
}

.card__data {
  width: 290px;
  background-color: #252A30;
  padding: 1.5rem 2rem;
  box-shadow: 0 8px 24px hsla(0, 0%, 0%, .15);
  border-radius: 1rem;
  position: absolute;
  bottom: -9rem;
  left: 0;
  right: 0;
  margin-inline: auto;
  opacity: 0;
  transition: opacity 1s 1s;
}

.card__description {
  display: block;
  font-size: 1rem;
  font-weight: 200;
  margin: 5px 0 15px 0;

}

.card__title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 2px;
}

.card__button {
  background-color: #5F2027;
  padding: 5px 25px;
  border-radius: 10px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
}

.card__button:hover {
  text-decoration: underline;
    
}

/* Namin animations in hover */
.card__article:hover .card__data {
  animation: show-data 1s forwards;
  opacity: 1;
  transition: opacity .3s;
}

.card__article:hover {
  animation: remove-overflow 2s forwards;
}

.card__article:not(:hover) {
  animation: show-overflow 2s forwards;
}

.card__article:not(:hover) .card__data{
  animation: remove-data 2s forwards;
}
/* Card animation */
@keyframes show-data {
  50% {
    transform: translateY(-10rem);
  }
  100% {
    transform: translateY(-7rem);
  }
}

@keyframes remove-overflow {
  to {
    overflow: initial;
  }
}

@keyframes remove-data {
    0% {
    transform: translateY(-7rem);
  }
    50% {
    transform: translateY(-10rem);
  }
    100% {
    transform: translateY(.5rem);
  }
}

@keyframes show-overflow {
  0% {
    overflow: initial;
    pointer-events: none;
  }
  50% {
    overflow: hidden;
  }
}
/*============== BREAKPOINTS =============*/

/* For small devices */
@media screen and (max-width: 768px) {
  
  .h1-photography {
    margin: 0 0 5vh 0;
  }
  
  .h1-photography {
    font-size: 4rem;

    margin-left: 1rem;
  }
  
  .container {
    margin-inline: 1rem;
  }

  .card__data {
    width: 250px;
    padding: 1rem;
  }
}

/* For medium devices */
@media screen and (min-width: 768px) {
  .card__container {
    grid-template-columns: repeat(2,1fr);
    column-gap: 1.5rem;

  }

  .card__data {
    width: 250px;
    padding: 1rem;
  }
}

/* For large devices */ 
@media screen and (min-width: 1120px) {
  .card__container {
    grid-template-columns: repeat(3, 1fr);

  }
  .card__img {
    width: 348px;
  }
.card__data {
  width: 316px;
  padding-inline: 2.5rem;
}
}
</style>