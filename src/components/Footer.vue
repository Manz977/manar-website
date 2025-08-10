<script setup>
import { RouterLink } from 'vue-router'
import EmilSvg from '../assets/svg/email.svg'
import WebSite from '../assets/svg/website.svg'
import GitHub from '../assets/svg/github.svg'
import InstaGram from '../assets/svg/insta.svg'
import Linkedin from '../assets/svg/linkedin.svg'


</script>


<template>
<footer class="footer-sec">
  <hr class="gradient-line" />
  <nav>
      <div class="logo">
        <RouterLink to="/">Manar</RouterLink>
      </div>

      <div class="nav-sec">
        <h5>Navigation</h5>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/about">About</RouterLink></li>
        <li><RouterLink to="/portfolio">Portfolio</RouterLink></li>
        <li><RouterLink to="/photography">Photography</RouterLink></li>
      </div>
      <div class="portflio-sec">
        <h5>Photography</h5>
        <li><RouterLink to="/fashion">Fashion Photography</RouterLink></li>
        <li><RouterLink to="/food">Food Photography</RouterLink></li>
        <li><RouterLink to="/street">Street Photography</RouterLink></li>
      </div>

      <div class="contact-social-sec">
        <h5>Contact</h5>

        <div class="email-link">
      <img :src="WebSite" alt="Email icon" class="email-icon" />
    <a href="https://manarmonzer.com">manarmonzer.com</a><br></br>
    </div>

    <div class="email-link">
      <img :src="EmilSvg" alt="Email icon" class="email-icon" />
      <a href="mailto:manarwmonzer@gmail.com">manarwmonzer@gmail.com</a>
    </div>


    <div class="social-media">
            <a
            href="https://www.linkedin.com/in/manar-monzer-55ab6823b/"
            class="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
          <img :src="Linkedin" alt="linkedin icon">
        </a>
          <a
            href="https://www.instagram.com/manarwmonzer/"
            class="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
          <img :src="InstaGram" alt="instgram icon">
        </a>
        <a
            href="https://github.com/Manz977"
            class="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
          <img :src="GitHub" alt="GitHub icon">
        </a>
    </div>
    </div>
  </nav>
  <hr class="gradient-line" />
  <p class="copy-right">©2025 Manar. All rights reserved</p>
</footer>
</template>


<style scoped>
.gradient-line {
  border: none;              
  height: 1px;               
  margin: 2rem 0 0 0;            
  background-image: 
    linear-gradient(
      to right, 
      rgba(255,255,255,0) 0%,    
      #fff 50%,                  
      rgba(255,255,255,0) 100%  
    );                          
}

.logo {
  margin: 1.2rem 0 0 3.5rem;
}
nav {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

nav li {
  list-style: none;
  line-height: 1.7rem;
}

nav a {
  text-decoration: none;
  color: #fff;
  font-weight: 300;

}

nav h5 {
  font-size: 1.2rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

/*============ Contact sectoin of the footer =====================*/
.email-link{
  display: inline-flex;     
  align-items: center;       
  gap: 0.5rem;              
}

.email-icon {
  width: 20px;                
  height: 15px;
}
.social-media {
  display: flex;
  gap: 1rem;               
  align-items: center;    
  margin-top: 1rem;
}

.social-link {
  display: inline-block;   
}

.social-media img {
  width: 30px;           
  height: 30px;
  vertical-align: middle; 
}

.copy-right {
  text-align: center;
  margin-bottom: 1rem;
}

nav a:hover {
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.7);
  transition: text-shadow 0.3s ease;
}


.social-media img:hover {
  filter: drop-shadow(0 0 6px rgba(255, 255, 255, 0.8));
  transition: filter 0.3s ease;
}


@media (max-width: 768px) {
  nav  {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .logo  {
    margin: 30px 0 0 0;
  }
  h5 {
  margin-top: 0;

  }
  .nav-sec, .portflio-sec, .contact-social-sec  {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .contact-social-sec {
    gap: 0.50rem;
  }
}
</style>