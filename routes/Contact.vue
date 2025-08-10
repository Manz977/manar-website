<script setup>
import { reactive, ref } from 'vue'

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



const formRef = ref(null)

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const showSuccess = ref(false)

const submitForm = async () => {
  const formData = new FormData(formRef.value)

  const response = await fetch('https://formspree.io/f/xvgqwbzv', {
    method: 'POST',
    headers: { 'Accept': 'application/json' },
    body: formData
  })

  if (response.ok) {
    showSuccess.value = true
    setTimeout(() => {
      showSuccess.value = false
    }, 3000) 
  } else {
    alert('Failed to send message.')
  }
}
</script>


<template>
  <div class="overlay"></div>
  <transition name="fade">
  <div v-if="showSuccess" class="success-alert">
    ✨ Message sent successfully! I’ll get back to you soon.
  </div>
</transition>
  <h1 class="h1-contact">Get in Touch</h1>

  <section class="contact-sec">
    <h2>Contact</h2>
    <div class="contact">
      <div class="left-contact-sec">
        <div class="gradient-line"></div>
        <div class="contact-info">
          <h4>Address</h4>
          <p>103, 475 Elgin St, Ottawa, ON K2P 2E6, Canada</p>
          <h4>Email</h4>
         <p> <a class="email" href="mailto:manarwmonzer@gmail.com">manarwmonzer@gmail.com</a></p>
          <h4>Phone</h4>
          <p>+1 613 262 6690</p>
        </div>
      </div>
      <div class="right-contact-sec">
        <div class="contact-form-wrapper">
        <div class="corner top-left"></div>
        <div class="corner top-right"></div>
        <div class="corner bottom-left"></div>
        <div class="corner bottom-right"></div>

    <form ref="formRef" @submit.prevent="submitForm" class="contact-form">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" placeholder="Enter your name" v-model="form.name" required />

      <label for="email">Email</label>
      <input type="email" id="email" name="email" placeholder="Enter your email" v-model="form.email" required />

      <label for="subject">Subject</label>
      <input type="text" id="subject" name="subject" placeholder="Enter your subject" v-model="form.subject" required />

      <label for="message">Message</label>
      <textarea id="message" name="message" v-model="form.message" required></textarea>
      <button type="submit">Send Inquiry</button>
    </form>
  </div>
      </div>
    </div>
  </section>
</template>



<style scoped>
.h1-contact {
  margin: 10vh 0 25vh 0;
}
h2 {

font-size: 4rem;
margin-bottom: 2rem;

}
.contact {
display: flex;
align-items: center;
gap: 18rem;
}
.contact-form input[type="text"],
.contact-form input[type="email"] {
  background: white;
  color: black;
  border: none;
  padding: 0.5rem;
  border-radius: 4px;
}
.contact-form textarea {
  background: black;
  color: white;
  border: none;
  padding: 1rem;
  resize: vertical;
}
.gradient-line {
  width: 4px;                     /* Thin vertical line */
  height: 400px;                  /* Adjust height as needed */
  background-image: 
    linear-gradient(
      to right, 
      rgba(255,255,255,0) 0%,    
      #fff 50%,                  
      rgba(255,255,255,0) 100%  
    );   
  border-radius: 2px;             /* Optional: makes the edges rounded */
}

.contact-info, h4, p, a {
  margin: 0;
  padding: 0;
}
.contact-info h4 {
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 10px;
}
.contact-info p  {
  font-size: 1rem;
  font-weight: 200;
  width: 70%;
  margin-bottom: 30px;
}

.email {
  text-decoration: none;
  color: white;
  width: 70%;
}
.left-contact-sec {
  display: flex;
  align-items: center;
  gap: 2rem;
}




/*================= Contact form styling ======================*/

.right-contact-sec {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10vh;
}

.contact-form-wrapper {
  position: relative;
  background: #252A30;
  padding: 2.5rem;
  width: 500px;
  margin: 0 auto;
}

/* Corner lines */
.corner {
  position: absolute;
  width: 93px;
  height: 93px;
  border: 1px solid  #AC3A46;


}

.top-left {
  top: -40px;
  left: -40px;
  border-right: none;
  border-bottom: none;
}

.top-right {
  top: -40px;
  right: -40px;
  border-left: none;
  border-bottom: none;
}

.bottom-left {
  bottom: -40px;
  left: -40px;
  border-right: none;
  border-top: none;
}

.bottom-right {
  bottom: -40px;
  right: -40px;
  border-left: none;
  border-top: none;
}

.contact-form label {
  display: block;
  font-weight: bold;
  margin-top: 1rem;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid #333;
  padding: 0.5rem 0;
  margin-top: 0.3rem;
  font-size: 1rem;
}

.contact-form textarea {
  background: #f5f5f5;
  border: none;
  padding: 1rem;
  width: 473px;
  height: 100px;
  margin-top: 0.5rem;
  resize: vertical;
}

.contact-form button {
  margin-top: 2rem;
  background: #183153;
  color: white;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 16px;
  font-size: 1.1rem;
  cursor: pointer;
  display: block;
  margin-left: auto;
  margin-right: auto;
  transition: background 0.3s ease;
}

.contact-form button:hover {
  background: #AC3A46;
}
.success-alert {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #183153, #AC3A46);
  color: white;
  padding: 1rem 2rem;
  border-radius: 30px;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
  font-size: 1rem;
  z-index: 9999;
}

/* Fade animation */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}


</style>