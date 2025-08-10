<!-- RingPointer.vue -->
<template>
  <div class="dot"   :style="{ transform:`translate(${x}px,${y}px)` }" />
  <div class="ring"  :class="{ big: hovering }" :style="{ transform:`translate(${sx}px,${sy}px)` }" />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const x=ref(-100), y=ref(-100)          // immediate
const sx=ref(-100), sy=ref(-100)        // smoothed ring
const hovering = ref(false)
let raf

function move(e){
  x.value = e.clientX; y.value = e.clientY
  hovering.value = !!e.target.closest('a,button,[role="button"],.hover-target')
}
function tick(){
  sx.value += (x.value - sx.value) * 0.18
  sy.value += (y.value - sy.value) * 0.18
  raf = requestAnimationFrame(tick)
}
onMounted(()=>{
  window.addEventListener('pointermove', move)
  raf = requestAnimationFrame(tick)     // smooth animation loop
})
onUnmounted(()=>{
  window.removeEventListener('pointermove', move)
  cancelAnimationFrame(raf)
})
</script>

<style scoped>
:host { cursor: none }
.dot{
  position: fixed; left:0; top:0; transform: translate(-50%,-50%);
  width: 6px; height:6px; border-radius: 9999px;
  background: #fff; mix-blend-mode: difference; pointer-events:none; z-index:10001;
}
.ring{
  position: fixed; left:0; top:0; transform: translate(-50%,-50%);
  width: 26px; height: 26px; border-radius: 9999px;
  border: 2px solid rgba(255,255,255,.8); backdrop-filter: blur(2px);
  pointer-events:none; mix-blend-mode: difference; z-index:10000;
  transition: width .18s ease, height .18s ease, border-color .18s ease;
}
.ring.big{ width: 44px; height: 44px; border-color: rgba(255,255,255,1); }
@media (prefers-reduced-motion: reduce){ .dot,.ring{ display:none } }
</style>