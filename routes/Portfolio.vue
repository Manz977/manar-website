<script setup>

</script>


<template>
    <div class="overlay"></div>
    <div class="about-hero">
      <h1 class="h1-about">Portfolio</h1>
    </div>
    <div class="sec-header">
      <h2>Web Design & Development</h2>
    </div>
    <section class="mystory-sec">
      <div class="first-part">
        <img class="images" src="/src/assets/images/website-1.jpg" alt="" >
        <div class="firs-part-content">
        <h2>International Buddhist Progress Society Web Site Redesign</h2>
        <p class="my-story-p">Case study:I helped redesign the IBPS Ottawa website to improve speed, consistency, and usability. We streamlined the layout, fixed navigation issues, optimized events pages, and added basic SEO. The result was a faster, more user-friendly site with better structure and visibility.</p>
        <a
            href="https://dev-ibpsottawa.pantheonsite.io/"
            class="btn"
            target="_blank"
          >
           <span> Visit Site</span>
          </a>
      </div>
      </div>
  

      <div class="second-part">
        <div class="second-part-content">
          <h2 class="sec-part-header-p">Zum Pferchtal Restaurant</h2>
          <p class="sec-part-header-p">During a visit to my parents in Germany, I partnered with a friend to redesign the website for Zum Pferchtal, a local restaurant and beer garden. The original site was outdated and hard to navigate, so we gave it a fresh, modern layout that better reflected the restaurant’s warm, regional vibe. We improved page structure, simplified the menu, added high-quality visuals, and made key info like reservations and opening hours more accessible. The result is a clean, inviting site that feels both local and professional.</p>
          <a
            href="https://www.pferchtal.de//"
            class="btn"
            target="_blank"
          >
           <span> Visit Site</span>
          </a>
        </div>
        <img class="images" src="/src/assets/images/2nd website.jpg" alt="">
      </div>
      
      <div class="first-part">
        <img class="images" src="/src/assets/images/mywebsite.jpg" alt="">
        <div class="firs-part-content">
        <h2>My Portflio Design</h2>
        <p class="sec-part-header-p">This portfolio was designed to reflect my style clean, modern, and user-focused. Every detail, from typography to layout, is intentional and rooted in UX principles. I wanted it to feel bold yet minimal, letting the work speak while making navigation intuitive and enjoyable. It’s not just a collection of projects—it’s a digital space that represents how I think, design, and build.</p>
        <a
            href="https://manarmonzer.com"
            class="btn"
            target="_blank"
          >
           <span> Visit Site</span>
          </a>
      </div>
      </div>
    </section>
    <div class="sec-header">
      <h2>Videography</h2>

      <section>
        <div class="second-part">
        <div class="second-part-content">
          <h2 class="sec-part-header-p">Zum Pferchtal Restaurant</h2>
          <p class="sec-part-header-p">Created a promotional video for Zum Pferchtal, a traditional restaurant in Germany, showcasing its authentic atmosphere, warm hospitality, and locally inspired cuisine.</p>
          <a
            href="https://www.youtube.com/watch?v=nXjx6y8A9pc&ab_channel=manarmounzer"
            class="btn"
            target="_blank"
          >
           <span>Video</span>
          </a>
        </div>
        <iframe 
        width="600" 
        height="400" 
        src="https://www.youtube.com/embed/nXjx6y8A9pc?si=la2vMae66K_rgHPk" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
      </div>


      <div class="first-part">
        <iframe 
        width="600" 
        height="400" 
        src="https://www.youtube.com/embed/HPg6LNIzvBo?si=PDjqzY5QVxsAkCjp" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
        <div class="firs-part-content">
        <h2>Interview with a student</h2>
        <p class="my-story-p">This was an interview with a student who has a visual impairment, yet that didn’t stop him from becoming a top achiever — earning a perfect 4.0 GPA in finance.</p>
        <a
            href="https://www.youtube.com/watch?v=HPg6LNIzvBo&ab_channel=manarmounzer"
            class="btn"
            target="_blank"
          >
           <span>Video</span>
          </a>
      </div>
      </div>
    </section>
    </div>
  </template>
  
  
  
  <style scoped>
  .about-hero {
    padding-top: 15vh;
  }
  
  .h1-about {
    margin: 0;
  }

  img {
    width: 600px;
    height: 400px;
  }
  .sec-header {
    font-size: 1.4rem;
    margin: 10vh 0 0 0;

  }
  /*=============== My story section ===============*/
  .mystory-sec {
    margin-top: 10vh;
  }


  .first-part {
    display: flex;
    align-items: center;
    gap: 6rem;
  }
  .firs-part-content {
    display: flex;
    flex-direction: column;
    width: 500px;

  }
  
  .second-part {
    display: flex;
    align-items: center;
    margin: 5rem 0 5rem 0;
    gap: 12rem;
  }
  .sec-part-header-p {
    width: 500px;
  }
  
  /*=============== End of my story section ===============*/
  
  
  .skills {
    display: flex;
    justify-content: space-between;
    text-align: center;
  }
  .skill {
    width: 310px;
  }
  
  /*=========== Button style =================*/
a {
    text-decoration: none;
  }
  
  .btn {
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

.btn:after {
  content: " ";
  width: 0%;
  height: 100%;
  background: #5F2027;
  position: absolute;
  transition: all 0.4s ease-in-out;
  right: 0;
}

.btn:hover::after {
  right: auto;
  left: 0;
  width: 100%;
}

.btn span {
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

.btn:hover span {
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
  /*=========== End of button style =================*/
  
  /*=========== Mobile Style =================*/
  @media (max-width: 768px) {
     
    .h1-about {
      margin: 0;
    }
    .h1-about {
      font-size: 5rem;
      width: 100px;
      margin-left: 1.5rem;
    }
  
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
      gap: 1rem;

    }
    .second-part {
      display: flex;
      flex-direction: column-reverse;
      gap: 1rem;

    }
    .firs-part-content {
      width: 100%;
      margin-left: 4rem;
    }
    .second-part-content {
    width: 100%;
    margin-left: 4rem;
    }
    .my-story-p, .sec-part-header-p {
    width: 90%;
  }

    
  }

  /*===========The end of Mobile Style =================*/




  </style>