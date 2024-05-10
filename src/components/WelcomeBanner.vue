<script>
// Importing GSAP for animations
import { gsap } from 'gsap';

export default {
  // Data properties for the component
  data() {
    return {
      // Initial greeting message
      hello: 'Good Evening!',
      // Current hour of the user
      userHours: new Date().getHours(),
    };
  },

  // Lifecycle hook that is called after the component is mounted
  mounted() {
    // Logging the current hour
    console.log(this.userHours);
    // Changing the greeting message based on the time of day
    if (this.userHours >= 5 && this.userHours < 18) {
      this.hello = 'Welcome!';
    }
  },

  // Methods for the component
  methods: {
    // Animation for the header on mouse move
    headerAnime(evt) {
      // Getting the mouse position
      const mouseX = evt.clientX;
      const mouseY = evt.clientY;

      // Animating the shapes to follow the mouse
      gsap.to('.shape', {
        x: mouseX,
        y: mouseY,
        stagger: -0.1,
      });
    },
  },
};
</script>

<template>
  <!-- Container for the banner -->
  <div class="banner-container" @mousemove="headerAnime">
    <!-- Shapes for the animation -->
    <div class="shapes">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
    </div>

    <!-- Content of the banner -->
    <div class="content">
      <!-- Greeting message -->
      <h1>{{ hello }}</h1>
      <!-- Personal description -->
      <h2>
        My name is Neal McCloskey,
        <br />I am a experienced semiconductor manufacturing leader with a
        strong background in process improvement and production yield
        enhancement. Skilled in team leadership, process optimization, and
        project management. Recognized for driving key initiatives and achieving
        notable results. Proficient in various programming languages and tools.
        Seeking new opportunities to contribute expertise and make a positive
        impact in a dynamic environment.
      </h2>
    </div>
  </div>
</template>

<style scoped>
/* Styles for the banner container */
.banner-container {
  position: relative;
  height: calc(100vh - 50px);
}

/* Styles for the shapes */
.shapes {
  position: relative;
  height: 100vh;
  width: 100%;
  background: #2128bd;
  overflow: hidden;
}

/* Base styles for the shapes */
.shape {
  will-change: transform;
  position: absolute;
  border-radius: 50%;
}

/* Specific styles for each shape */
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

/* Styles for the content */
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

/* Styles for the heading */
h1 {
  font-size: 11em;
  color: #000;
  margin: 0;
  text-align: center;
}

/* Responsive styles for tablets */
@media (min-width: 426px) and (max-width: 768px) {
  .banner-container h1 {
    font-size: 6rem;
  }
  .banner-container h2 {
    font-size: 1.4rem;
    text-align: center;
  }
}

/* Responsive styles for mobiles */
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
