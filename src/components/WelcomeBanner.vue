<script>
  import { gsap } from "gsap";

  export default {
    
    data() {
      return {
        hello: 'Good Evening!',
        userHours: new Date().getHours()
      }
    },
    
    mounted() {
      console.log(this.userHours)
      if (this.userHours >= 5 && this.userHours < 18) {
        this.hello = 'Welcome!'
      }
    },
    
    methods: {
      headerAnime(evt) {
        const mouseX = evt.clientX;
        const mouseY = evt.clientY;
      
        gsap.to(".shape", {
          x: mouseX,
          y: mouseY,
          stagger: -0.1
        });
      }
    }
  }

</script>


<template>
  <div class="banner-container" @mousemove="headerAnime">
    
    <div class="shapes">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
    </div>

    <div class="content">
      <h1>{{ hello }}</h1>
      <h2>
        My name is Neal McCloskey,
        <br>I am a experienced semiconductor manufacturing leader with a strong background in process improvement and production yield enhancement. 
        Skilled in team leadership, process optimization, and project management. 
        Recognized for driving key initiatives and achieving notable results. 
        Proficient in various programming languages and tools. 
        Seeking new opportunities to contribute expertise and make a positive impact in a dynamic environment.
      </h2>
    </div>

  </div>
</template>

<style scoped>

  .banner-container {
    position: relative;
    height: calc(100vh - 50px);
  }

  .shapes {
    position: relative;
    height: 100vh;
    width: 100%;
    background: #2128bd;
    overflow: hidden;
  }

  .shape {
    will-change: transform;
    position: absolute;
    border-radius: 50%;
  }
  .shape.shape-1 {
    background: var(--vt-c-shape-1);
    width: 650px;
    height: 650px;
    margin: -325px 0 0 -325px;
  }
  .shape.shape-2 {
    background: var(--vt-c-shape-2);
    width: 440px;
    height: 440px;
    margin: -220px 0 0 -220px;
  }
  .shape.shape-3 {
    background: var(--vt-c-shape-3);
    width: 270px;
    height: 270px;
    margin: -135px 0 0 -135px;
  }

  .content {
    top: 0;
    left: 0;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background: var(--vt-c-white);
    mix-blend-mode: screen;
  }

  h1 {
    font-size: 11em;
    color: #000;
    margin: 0;
    text-align: center;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    .banner-container h1 {
      font-size: 6rem;
    }
    .banner-container h2 {
      font-size: 1.4rem;
      text-align: center;
    }
  }

  @media screen and (max-width: 425px) {
    .banner-container h1 {
      font-size: 4rem;
    }
    .banner-container h2 {
      font-size: 1.1rem;
      text-align: center;
    }
  }

</style>