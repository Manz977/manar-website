<script setup>

</script>


<template>
  <div class="overlay"></div>
  <h1 class="h1-fashion">Fashion & Beauty</h1>
  <div class="gallery">
  <div class="gallery-item gallery-item--large">
    <img
  src="/src/assets/fashion/a-1.jpg"
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="High quality image"
  loading="lazy"
/>
  </div>
  <div class="gallery-item">
    <img
  src="/src/assets/fashion/a-2.jpg"
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="High quality image"
  loading="lazy"
/>
  </div>
  <div class="gallery-item">
    <img
  src="/src/assets/fashion/a-4.jpg"
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="High quality image"
  loading="lazy"
/>
  </div>
  <div class="gallery-item gallery-item--tall">
    <img
  src="/src/assets/fashion/a-5.jpg"
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="High quality image"
  loading="lazy"
/>
  </div>
  <div class="gallery-item">
    <img
  src="/src/assets/fashion/ay-1.jpg"
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="High quality image"
  loading="lazy"
/>
  </div>
  <div class="gallery-item">
    <img
  src="/src/assets/fashion/Aydan-1-3.jpg"
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="High quality image"
  loading="lazy"
/>
  </div>
  <div class="gallery-item">
    <img
  src="/src/assets/fashion/Aydan-1-4.jpg"
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="High quality image"
  loading="lazy"
/>
  </div>
  <div class="gallery-item gallery-item--tall">
    <img
  src="/src/assets/fashion/Aydan-1-5.jpg"
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="High quality image"
  loading="lazy"
/>
  </div>
  <div class="gallery-item">
    <img
  src="/src/assets/fashion/Aydan-1-5.jpg"
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="High quality image"
  loading="lazy"
/>
  </div>
  <div class="gallery-item">
    <img
  src="/src/assets/fashion/fadi -1.jpg"
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="High quality image"
  loading="lazy"
/>
  </div>
  <div class="gallery-item gallery-item--tall">
    <img
  src="/src/assets/fashion/k-1.jpg"
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="High quality image"
  loading="lazy"
/>
  </div>
  <div class="gallery-item">
    <img
  src="/src/assets/fashion/k-2.jpg"
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="High quality image"
  loading="lazy"
/>
  </div>

  <div class="gallery-item gallery-item--tall">
    <img
  src="/src/assets/fashion/m-2.jpg"
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="High quality image"
  loading="lazy"
/>
  </div>
  <div class="gallery-item">
    <img
  src="/src/assets/fashion/m-3.jpg"
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="High quality image"
  loading="lazy"
/>
  </div>
  <div class="gallery-item">
    <img
  src="/src/assets/fashion/m-4.jpg"
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="High quality image"
  loading="lazy"
/>
  </div>
  <div class="gallery-item">
    <img
  src="/src/assets/fashion/m-5.jpg"
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="High quality image"
  loading="lazy"
/>
  </div>
  <div class="gallery-item gallery-item--tall">
    <img
  src="/src/assets/fashion/n-1.jpg"
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="High quality image"
  loading="lazy"
/>
  </div>
  <div class="gallery-item">
    <img
  src="/src/assets/fashion/n-2.jpg"
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="High quality image"
  loading="lazy"
/>
  </div>
  <div class="gallery-item">
    <img
  src="/src/assets/fashion/n-3.jpg"
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="High quality image"
  loading="lazy"
/>
  </div>

  <div class="gallery-item">
    <img
  src="/src/assets/fashion/oct26.jpg"
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
.h1-fashion {
  font-size: 4rem;
  margin: 6rem  0 7rem 1.5rem;
}

/* Tablet / iPad portrait: 2 columns */
@media (min-width: 768px) {

  .h1-fashion {
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