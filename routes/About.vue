<script setup>
import { ref } from 'vue';

import Code from '../src/assets/svg/code.svg'
import Ux from '../src/assets/svg/Ux.svg'
import Web from '../src/assets/svg/web.svg'

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

    const skills = ref([
  { name: 'Photography', level: 95 },
  { name: 'Web Design', level: 60 },
  { name: 'FrontEnd', level: 90 },
  { name: 'BackEnd', level: 55 },
  { name: 'Figma', level: 75 },
]);
</script>


<template>
  <div class="overlay"></div>
  <div class="about-hero">
    <h1 class="h1-about">About Me</h1>
  </div>

  <section class="mystory-sec">
    <div class="first-part">
      <img class="images" src="../src/assets/about-page-img/edit childrens camp-4.jpg" alt="" >
      <div class="firs-part-content">
      <h2 class="my-story-header">My Story</h2>
      <h3 class="my-story-sub-head">How I started with web Development</h3>
      <p class="my-story-p">I jumped into Interactive Media Design for my passion for photography and videography—then unexpectedly fell in love with web development. There’s something so exciting about writing code and watching a website come to life, ready to serve real people and real clients. Now, I get to mix creativity with logic every day—and I’m hooked!</p>
    </div>
    </div>

    <div class="second-part">
      <div class="second-part-content">
      <h2 class="my-story-header">My Story</h2>
      <h3 class="my-story-sub-head">How I started with photography</h3>
      <p class="my-story-p">I began capturing moments at 13, using my phone to freeze time—landscapes, light, and fleeting scenes that spoke to me. At 25, I held my first camera, and the world opened up in new colors. I explored every corner of photography, but it was fashion that truly sang to my soul. Through the lens, I found a way to tell stories, to reveal emotion, and to celebrate the beauty of being seen.</p>
      </div>
      <img class="images" src="../src/assets/home-page-img/edit childrens camp-3.jpg" alt="" >
    </div>
  </section>

  <section class="skills-sec">

    <div class="skills">

      <div class="skill">
        <img :src="Code" alt="">
        <h3>Web Design</h3>
        <p>Building awesome websites is my passion. HTML, CSS, SASS, JavaScript, Bootstrap,  You name it. I got it covered!</p>
      </div>
      <div class="skill">
        <img :src="Ux" alt="">
        <h3>UI/UX Design</h3>
        <p>Designing and prototyping beautiful web pages in Figma and making that prototypes real is my forte!</p>
      </div>
      <div class="skill">
        <img :src="Web" alt="">
        <h3>Webmaster</h3>
        <p>I can also manage CMS like WordPress, Shopify. SEO, Analytics and AJAX skills are also under my belt!</p>
      </div>
    </div>
  </section>

  <section class="skills-section">
      <h2>My Skills</h2>
    <div class="skills-right">
      <div v-for="(skill, index) in skills" :key="index" class="progress-bar">
        <div class="label">{{ skill.name }}</div>
        <div class="bar">
          <div class="fill" :style="{ width: skill.level + '%' }"></div>
        </div>
        <div class="percent">{{ skill.level }}%</div>
      </div>
    </div>
  </section>
</template>



<style scoped>

.about-hero {
  padding-top: 15vh;
}

.h1-about {
  margin: 10vh 0 25vh 0;
}
h2, h3, h4, h5, h6 {
  margin: 0;
  padding: 0;
}
/*=============== My story section ===============*/
.images {
  width: 600px;
  border-radius: 20px;
}

.mystory-sec {
  margin-top: 10vh;
}

.my-story-header {
  font-size: 2.5rem;
  font-weight: 600;
}

.my-story-sub-head {
font-size: 1.5rem;
font-weight: 400;
}
.my-story-p {
  font-size: 1rem;
  font-weight: 200;
  width: 70%;
}
.first-part {
  display: flex;
  align-items: center;
  gap: 2rem;
}
.firs-part-content {
  display: flex;
  flex-direction: column;
}

.second-part {
  display: flex;
  align-items: center;
  margin-top: -4rem;
  margin-bottom: 6.25rem;
}

/*=============== End of my story section ===============*/


.skills {
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin-bottom: 6.25rem;
}
.skill {
  width: 310px;
}
.skills-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  align-items: flex-start;
}
.skills-section h2 {
  font-size: 2.5rem;
  font-weight: 600;
}

.skills-right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  width: 70%;
}

.progress-bar {
  margin-bottom: 1.5rem;
}

.label {
  font-weight: bold;
  margin-bottom: 0.3rem;
}

.bar {
  background: #eee;
  border-radius: 5px;
  overflow: hidden;
  height: 14px;
  position: relative;
}

.fill {
  background: linear-gradient(90deg, #375A7C, #AC3A46);
  height: 100%;
  width: 0;
  animation: fillBar 1.2s ease-out forwards;
  border-radius: 5px;
}

.percent {
  font-size: 0.85rem;
  margin-top: 0.2rem;
  color: #afafaf;
}

@keyframes fillBar {
  from {
    width: 0%;
  }
}


/*=========== For mobile ================*/

@media (max-width: 768px) {

.h1-about {
  margin: 0;
}
.h1-about {
  font-size: 5rem;
  width: 100px;
  margin-left: 1.5rem;
}

/*======== My story section ========*/
.images {
  width: 450px;
}
.mystory-sec {
  display: flex;
  flex-direction: column;
}
.first-part {
  display: flex;
  flex-direction: column;
}
.firs-part-content {
  width: 100%;
  margin-left: 4rem;
}
.my-story-p {
  width: 90%;
}

.second-part {
  display: flex;
  flex-direction: column-reverse;
  margin-top: 4vh;
}
.second-part-content {
  width: 100%;
  margin-left: 4rem;
}

/*========End of My story section ========*/


.skills {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
}
}

</style>



