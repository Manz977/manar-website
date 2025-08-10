<script setup>
import { RouterLink } from 'vue-router';
import { ref, onMounted } from 'vue';


    // 4) Update --x / --y on every mouse move
    document.addEventListener('mousemove', e => {
      const x = e.clientX + 'px';
      const y = e.clientY + 'px';
      document.documentElement.style.setProperty('--x', x);
      document.documentElement.style.setProperty('--y', y);
    });

    //  Optional: reset to center if the cursor leaves the window
    document.addEventListener('mouseleave', () => {
      document.documentElement.style.setProperty('--x', '50%');
      document.documentElement.style.setProperty('--y', '50%');
    });
    const words = ['Web Developer', 'UI/UX Designer', 'Photographer'];
const displayedText = ref('');
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

const type = () => {
  const currentWord = words[wordIndex];
  
  if (isDeleting) {
    displayedText.value = currentWord.substring(0, charIndex--);
  } else {
    displayedText.value = currentWord.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentWord.length + 1) {
    isDeleting = true;
    typingSpeed = 1200; // pause before deleting
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    typingSpeed = 100;
  } else {
    typingSpeed = isDeleting ? 50 : 100;
  }

  setTimeout(type, typingSpeed);
};

onMounted(() => {
  type();
});
</script>

<template>
  <div class="overlay"></div>




  <div class="home-hero">
    <h1 class="h1-home">Manar M.</h1>
    <div class="typewriter">
    {{ displayedText }}<span class="cursor">|</span>
  </div>
  </div>

  <section>
    <div class="home-about-sec">
    <div class="home-about">
      <div class="home-about-img">
        <img class="my-img" src="/src/assets/home-page-img/edit childrens camp-3.jpg" alt="Image of the website owner holding a camera in front of his face taking a photo of his reflection" width="600px">
      </div>
      <div class="left-home-about">
        <h2>About Me</h2>
        <h4>Web Developer & Photographer</h4>
        <p>I’m an Interactive Media and Design student with a passion for creating beautiful, functional digital experiences. With hands-on experience in web development, UX/UI design, photography, and videography, I thrive at the intersection of creativity and technology—bringing ideas to life through thoughtful design and storytelling.</p>
        <a href="/src/assets/home-page-img/MonzerE04.pdf" class="rsume-btn"><span>Resume</span></a>

      </div>
    </div>
  </div>
  </section>

  <section class="home-contact-sec"> 
    <div class="home-contact">
      <div class="contact-left-sec">
        <p>Let's start creating something magical together. Reach out today to schedule a consultation.</p>
      </div>
      <div class="contact-right-sec">
        <RouterLink to="/contact">
        <button class="contact-btn"><span>Contact</span></button>
      </RouterLink>
      </div>
    </div>
  </section>

  <section class="portflio-sec">
    <h3 class="prot-header">Portfolio</h3>

    <div class="container">
    <div class="card__container">
      <article class="card__article">
        <img src="/src/assets/images/web-design.jpg" alt="img" class="card__img">
        <div class="card__data">
          <h2 class="card__title">Web Design</h2>
          <span class="card__description">I design bold, user-friendly interfaces that elevate brands.</span>
          <RouterLink to="/portfolio" class="card__button">See More</RouterLink>
        </div>
      </article>

       <article class="card__article">
        <img src="/src/assets/about-page-img/edit childrens camp-4.jpg" alt="img" class="card__img">
        <div class="card__data">
          <h2 class="card__title">Web Development</h2>
          <span class="card__description">I build fast, responsive websites with clean, custom code.</span>
          <RouterLink to="/portfolio" class="card__button">See More</RouterLink>
        </div>
      </article>

       <article class="card__article">
        <img src="/src/assets/home-page-img/_DSC1110.jpg" alt="img" class="card__img">
        <div class="card__data">
          <h2 class="card__title">Photography</h2>
          <span class="card__description">I capture striking, story-driven visuals with a fashion edge.</span>
          <RouterLink to="/photography" class="card__button">See More</RouterLink>
        </div>
      </article>
    </div>
  </div>
  </section>
</template>

<style scoped>
.home-hero {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}
.cursor {
  display: inline-block;
  animation: blink 0.7s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
.home-hero {
  padding-top: 20vh;
  padding-bottom: 25vh;
}

.h1-home {
  margin: 0;
}

.home-about-sec {
  margin-top: 17vh;
}
.home-about {
  display: flex;
  align-items: center;
  gap: 12rem;
}
a {
  text-decoration: none;
  font-size: 1rem;
}
/* Left section of the about me*/
.my-img {
  mask: url(https://assets.codepen.io/1101822/circles-mask-whole.svg) no-repeat
    center;
  max-width: 100%;
  display: block;
  aspect-ratio: 1;
  object-fit: cover;
}
.left-home-about {
  display: flex;
  flex-direction: column;
  max-width: 500px;
}
.left-home-about h2, h4, p, button{
  margin: 0;
  padding: 0;
}
.left-home-about h2 {
  font-size: 2.5rem;
  font-weight: 500;
}.left-home-about h4 {
  font-size: 1.25rem;
  font-weight: 400;
  margin: 10px 0 10px 0;
}
.left-home-about p {
  font-size: 1rem;
  font-weight: 200;
  margin-bottom: 20px;
}

button {
  position: relative;
  display: flex;
  justify-content: center;
  max-width: 220px;
  border-radius: 20px;
  margin-top: 10px;
  font-size: 1rem;
  align-items: center;
  border-radius: 5px;
  background: #183153;
  box-shadow: 0px 6px 24px 0px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  cursor: pointer;
  border: none;
}

button:after {
  content: " ";
  width: 0%;
  height: 100%;
  background: #5F2027;
  position: absolute;
  transition: all 0.4s ease-in-out;
  right: 0;
}

button:hover::after {
  right: auto;
  left: 0;
  width: 100%;
}

button span {
  text-align: center;
  text-decoration: none;
  width: 100%;
  padding: 18px 25px;
  color: #fff;
  font-size: 1.125em;
  font-weight: 700;
  letter-spacing: 0.3em;
  z-index: 20;
  transition: all 0.3s ease-in-out;
}

button:hover span {
  color: #fff;
  animation: scaleUp 0.3s ease-in-out;
}

.rsume-btn {
  text-decoration: none;
  position: relative;
  display: flex;
  justify-content: center;
  max-width: 220px;
  border-radius: 20px;
  margin-top: 10px;
  font-size: 1rem;
  align-items: center;
  border-radius: 5px;
  background: #183153;
  box-shadow: 0px 6px 24px 0px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  cursor: pointer;
  border: none;
}

.rsume-btn:after {
  content: " ";
  width: 0%;
  height: 100%;
  background: #5F2027;
  position: absolute;
  transition: all 0.4s ease-in-out;
  right: 0;
}

.rsume-btn:hover::after {
  right: auto;
  left: 0;
  width: 100%;
}

.rsume-btn span {
  text-align: center;
  text-decoration: none;
  width: 100%;
  padding: 18px 25px;
  color: #fff;
  font-size: 1.125em;
  font-weight: 700;
  letter-spacing: 0.3em;
  z-index: 20;
  transition: all 0.3s ease-in-out;
}

.rsume-btn:hover span {
  color: #fff;
  animation: scaleUp 0.3s ease-in-out;
}
@keyframes scaleUp {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.95);
  }

  100% {
    transform: scale(1);
  }
}
/* the end of styling for the right section of the about me*/

/* contact section */

.home-contact-sec {
  margin-top: 15vh;

}
.home-contact {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5rem;
}

.contact-left-sec{
  width: 30%;
}
.contact-left-sec p {
  font-size: 1.5rem;
}
.contact-btn {
  color: #fff;
  width: 220px;
  font-size: 1rem;
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
  height: 90%;
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
@media screen and (max-width: 500px) {
  .home-hero {
  padding-top: 10vh;
  padding-bottom: 5vh;
}
  .h1-home {
    margin-left: 1.5rem;
  }

  .home-about {
  display: flex;
  flex-direction: column;
  gap: 6rem;
  margin: 2rem;
}
.left-home-about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}
.left-home-about h2 {
  font-size: 3.5rem;
}
.left-home-about p {
  font-weight: 300;
}

/*===== Home middle contact section ======*/
.home-contact-sec {
  margin-top: 6rem;
}
.home-contact {
  display: flex;
  flex-direction: column;

  gap: 1rem;
  margin: 2rem;
}
.contact-left-sec {
  width: 350px;
}
/*===== End of home middle contact section ======*/

/*=====Start of portfolio section ======*/

.prot-header {
  text-align: center;
  margin-top: 5rem;
}
.container {
    margin-inline: 1rem;
  }

  .card__data {
    width: 250px;
    padding: 1rem;
  }

/*=====End of portfolio section ======*/
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