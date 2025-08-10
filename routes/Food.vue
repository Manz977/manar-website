<script setup>

</script>


<template>
  <div class="overlay"></div>
  <h1 class="h1-food">Food Photography</h1>
  <div class="gallery">
  <div class="gallery-item gallery-item--large">
    <img
  src="/src/assets/food/ForGodShakes-1.jpg"
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="High quality image"
  loading="lazy"
/>

  </div>
  <div class="gallery-item gallery-item--tall">
    <img
  src="/src/assets/food/ForGodShakes-4.jpg"
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="High quality image"
  loading="lazy"
/>
  </div>
  <div class="gallery-item">
    <img
  src="/src/assets/food/ForGodShakes-5.jpg"
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="High quality image"
  loading="lazy"
/>
  </div>
  <div class="gallery-item">
    <img
  src="/src/assets/food/ForGodShakes-6.jpg"
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="High quality image"
  loading="lazy"
/>
  </div>
  <div class="gallery-item gallery-item--tall">
    <img
  src="/src/assets/food/Zum Pferchtal-15.jpg"
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="High quality image"
  loading="lazy"
/>
  </div>
  <div class="gallery-item">
    <img
  src="/src/assets/food/Zum Pferchtal-2.jpg"
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="High quality image"
  loading="lazy"
/>
  </div>
  <div class="gallery-item">
    <img
  src="/src/assets/food/Zum Pferchtal-28.jpg"
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="High quality image"
  loading="lazy"
/>
  </div>
  <div class="gallery-item gallery-item--tall">
    <img
  src="/src/assets/food/Zum Pferchtal-30.jpg"
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="High quality image"
  loading="lazy"
/>
  </div>
  <div class="gallery-item">
    <img
  src="/src/assets/food/Zum Pferchtal-34.jpg"
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="High quality image"
  loading="lazy"
/>
  </div>

  <div class="gallery-item gallery-item--tall">
    <img
  src="/src/assets/food/Zum Pferchtal-35.jpg"
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="High quality image"
  loading="lazy"
/>
  </div>
  <div class="gallery-item">
    <img
  src="/src/assets/food/Zum Pferchtal-37.jpg"
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="High quality image"
  loading="lazy"
/>
  </div>
  <div class="gallery-item">
    <img
  src="/src/assets/food/Zum Pferchtal-4.jpg"
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="High quality image"
  loading="lazy"
/>
  </div>
  <div class="gallery-item">
    <img
  src="/src/assets/food/Zum Pferchtal-42.jpg"
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="High quality image"
  loading="lazy"
/>
  </div>


  <div class="gallery-item">
    <img
  src="/src/assets/food/Zum Pferchtal-48.jpg"
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="High quality image"
  loading="lazy"
/>
  </div>
  <div class="gallery-item">
    <img
  src="/src/assets/food/Zum Pferchtal-6.jpg"
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="High quality image"
  loading="lazy"
/>
  </div>
  <!-- add more .gallery-item elements as desired -->
</div>
<section class="gallery">

</section>
</template>

<style scoped>
.h1-food {
  font-size: 4rem;
  margin: 6rem  0 7rem 1.5rem;
}
.gallery {
  display: grid;  
  grid-template-columns: 1fr;            
  gap: 10px;                             
}
.gallery-item  {
  margin: 2rem;
  overflow: hidden;                
  position: relative;
}

/* Tablet / iPad portrait: 2 columns */
@media (min-width: 768px) {
  .h1-food {
  font-size: 5rem;
  margin: 6rem  0 7rem 1.5rem;
}
  .gallery {
    grid-template-columns: repeat(2, 1fr); 
  }
  .gallery-item  {
  margin: 0;
}
}

/* Desktop: 4 columns + masonry effect */
@media (min-width: 1024px) {
  .gallery {
    grid-template-columns: repeat(4, 1fr);                          
  }
  .gallery-item  {
  margin: 0;
}

}

/* Ensure images fill their grid area */

.gallery-item img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;  
  transform-origin: center center;  
}

.gallery-item:hover img {
  transform: scale(1.1);            
}
</style>