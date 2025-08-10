<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const handleScroll = () => {
  isOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>


<template>
  <nav>
    <div class="logo">
      <RouterLink to="/">Manar</RouterLink>
    </div>

    <!-- center these -->
    <ul class="nav-links" :class="{ open: isOpen }">
      <li><RouterLink class="nav-link" to="/">Home</RouterLink></li>
      <li><RouterLink class="nav-link" to="/about">About</RouterLink></li>
      <li><RouterLink class="nav-link" to="/portfolio">Portfolio</RouterLink></li>
      <li><RouterLink class="nav-link" to="/photography">Photography</RouterLink></li>

      <!-- only visible on mobile -->
      <li class="mobile-btn">
        <RouterLink to="/contact">
          <button class="contact-btn">Let's Connect</button>
        </RouterLink>
      </li>
    </ul>

    <!-- desktop-only call-to-action -->
    <div class="cta">
      <RouterLink to="/contact">
        <button class="contact-btn">Connect</button>
      </RouterLink>
    </div>

    <button class="burger" @click="toggleMenu" aria-label="Toggle menu">
      <span :class="{ open: isOpen }"></span>
      <span :class="{ open: isOpen }"></span>
      <span :class="{ open: isOpen }"></span>
    </button>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  max-width: 1300px;
  margin: 1rem auto;
  padding: 0 1.5rem;
  background: rgba(30, 30, 30, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 50px;
  backdrop-filter: blur(20px) saturate(160%);
  -webkit-backdrop-filter: blur(20px) saturate(160%);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  position: relative;
  --brand-1: #182735;
  --brand-2: #391317;
}
/* Base link style */
.nav-link {
  position: relative;
  display: inline-block;
  padding-bottom: 4px;                 /* room for underline */
  text-decoration: none;
  color: #fff;
  font-weight: 900;
  font-size: 20px;
  transition: color .25s ease;
}

/* The animated underline */
.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;                        /* nudge under text */
  width: 100%;
  height: 2px;
  background: white;
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform .35s ease;
  border-radius: 2px;
  pointer-events: none;
}

/* Show on hover */
.nav-link:hover::after {
  transform: scaleX(1);
}

/* Keep it when the route is active */
.nav-link.router-link-active::after,
.nav-link.router-link-exact-active::after {
  transform: scaleX(1);
}

/* Optional: slight color lift on hover/active */
.nav-link:hover,
.nav-link.router-link-active,
.nav-link.router-link-exact-active {
  color: #ffffff;
}

/* Keyboard accessibility */
.nav-link:focus-visible {
  outline: none;
}
.nav-link:focus-visible::after {
  transform: scaleX(1);
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
  padding: 0;
  flex: 1;                 
  justify-content: center; 
}
.mobile-btn {
  display: none;
}
.cta {
  flex: 0;
}

.last-item {
  margin-right: 2rem;
}

a {
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
}

.contact-btn {
  padding: 0.5rem 2rem;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background-color: rgba(0, 0, 0, 0.2);
  color: #fff;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease, border 0.3s ease;
  font-weight: 700;
  font-size: 15px;
}

.contact-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.4);
}

.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 100;
}


.burger span {
  display: block;
  width: 24px;
  height: 2px;
  background: white;
  transition: transform 0.3s ease, opacity 0.3s ease;
  transform-origin: left center; 
}


.burger:hover span:not(.open):nth-child(1) {
  transform: scaleX(1.3);
}
.burger:hover span:not(.open):nth-child(2) {
  transform: scaleX(0.7);
}
.burger:hover span:not(.open):nth-child(3) {
  transform: scaleX(1.1);
}


.burger span.open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
  transform-origin: center;
}
.burger span.open:nth-child(2) {
  opacity: 0;
  transform: none;
}
.burger span.open:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
  transform-origin: center;
}

/* Mobile Layout */
@media (max-width: 768px) {
  .logo a {
    font-size: 2rem;
  }
  nav {
    justify-content: space-between;
    flex-wrap: wrap;
    border: none;
    border-radius: 0;
    background: none;
    border: none;
    backdrop-filter: none;
    box-shadow: none;
  }
  .cta {
    display: none;
  }
  .nav-links {
    position: absolute;
    top: 50px;
    right: 20px;
    width: 80%;
    text-align: center;
    background: rgba(30, 30, 30, 0.95);
    backdrop-filter: blur(5px);
    flex-direction: column;
    gap: 1.5rem;
    padding: 1rem 2rem;
    border-radius: 20px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
    transform: translateY(-200%);
    opacity: 0;
    transition: transform 0.4s ease, opacity 0.4s ease;
    z-index: 50;
  }
  .last-item {
    margin: 0;
  }
  .nav-links.open {
    transform: translateY(0);
    opacity: 1;
  }

  .burger {
    display: flex;
  }

  nav {
    flex-wrap: wrap;
    gap: 1rem;
  }

  .left-nav {
    z-index: 51;
  }

  /* Hide contact button on desktop (outside menu) */
  .contact-btn {
    display: none;
  }

  /* Only show button inside mobile menu */
  .mobile-btn .contact-btn {
    display: block;
    width: 100%;
  }
}

</style>