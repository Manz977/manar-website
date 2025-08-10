<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  duration: { type: Number, default: 2000 } // ms
})

const emit = defineEmits(['done'])

const visible = ref(true)
const fontLoaded = ref(false)
let t

onMounted(async () => {
  // Ensure Qurova is ready to avoid fallback flash
  try {
    await document.fonts.load('900 100px "Qurova"')
    fontLoaded.value = true
  } catch {
    fontLoaded.value = true
  }

  t = setTimeout(() => {
    visible.value = false
    setTimeout(() => emit('done'), 600) // match leave transition
  }, props.duration)
})

onUnmounted(() => clearTimeout(t))
</script>

<template>
  <transition name="loader-exit">
    <div v-if="visible" class="loader-overlay">
      <div class="stack">
        <div class="mark" :class="{ 'font-loaded': fontLoaded }">M</div>

        <!-- Loader bar -->
        <div class="bar">
          <span
            class="bar-fill"
            :class="{ 'animate-fill': visible }"
            :style="{ '--bar-duration': duration + 'ms' }"
          />
        </div>
      </div>
    </div>
  </transition>
</template>



<style scoped>
/* Import Qurova (adjust if you self-host) */
@import url('https://fonts.cdnfonts.com/css/qurova');

.loader-overlay {
  position: fixed;
  inset: 0;
  background: #000;
  display: grid;
  place-items: center;
  z-index: 9999;
}

.stack {
  display: grid;
  justify-items: center;
  gap: clamp(18px, 3vw, 30px);
}

/* Rotational motion: spin around own center */
.mark {
  font-family: "Qurova", ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif;
  font-size: clamp(160px, 26vw, 160px);
  font-weight: 900;
  line-height: 1;
  color: #fff;
  transform-origin: 50% 50%;
  opacity: 0; /* hidden until font loaded */
  transition: opacity .3s ease;
  animation: spinZ var(--bar-duration, 1800ms) linear forwards;
}

.font-loaded { opacity: 1; }

@keyframes spinZ {
  to { transform: rotate(360deg); }
}

/* Loader bar: white, fills once left->right */
.bar {
  width: clamp(180px, 36vw, 420px);
  height: 6px;
  background: rgba(255,255,255,0.12);
  border-radius: 999px;
  overflow: hidden;
  position: relative;
}
.bar-fill {
  position: absolute;
  inset: 0;
  width: 0%;
  background: #fff;
  border-radius: inherit;
}
.animate-fill {
  animation: fillOnce var(--bar-duration, 1800ms) ease forwards;
}
@keyframes fillOnce {
  to { width: 100%; }
}

/* Exit transition */
.loader-exit-leave-active {
  transition: opacity .6s ease, transform .6s ease;
}
.loader-exit-leave-to {
  opacity: 0;
  transform: scale(1.08);
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .mark { animation: none; }
  .animate-fill { animation-duration: 0ms; width: 100%; }
}
</style>