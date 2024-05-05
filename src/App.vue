<script>
  import { gsap } from "gsap/";

  import WorkCard from "./components/WorkCard.vue";
  import Logo from "./components/Logo.vue";
  import WelcomeBanner from "./components/WelcomeBanner.vue";
  import ContactContainer from "./components/ContactContainer.vue";
  import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';
  import TimeLine from "./components/TimeLine.vue";
  import worksData from "./data/works.json";
  import timelineData from "./data/timeline.json";
  import homeData from "./data/home.json";
  import contactData from "./data/contact.json";

  export default {
    data() {
      return {
        breakpoints: {
          320: {
            itemsToShow: 1,
            snapAlign: 'center'
          },
          768: {
            itemsToShow: 1.5,
            snapAlign: 'center'
          },
          1024: {
            itemsToShow: 2,
            snapAlign: 'start'
          },
          1440: {
            itemsToShow: 3,
            snapAlign: 'start'
          }
        },
        works: worksData,
        timelines: timelineData,
        homes: homeData,
        contacts: contactData
      }
    },
    components: {
      WorkCard,
      Logo,
      WelcomeBanner,
      ContactContainer,
      Carousel,
      Slide,
      Navigation,
      Pagination,
      TimeLine
    },
    methods: {
      cursorMove(evt) {
        const mouseX = evt.clientX;
        const mouseY = evt.clientY;
      
        gsap.set(".cursor", {
          x: mouseX,
          y: mouseY
        });
      }
    }
  }
</script>

<template>
  <div @mousemove="cursorMove">
    <div class="cursor"></div>
    <header>
      <nav class="menu-bar">
        <Logo/>
        <div class="nav-bar">
          <a v-for="item in homes" :href="`#${item.id}`">{{ item.name }}</a>
        </div>
        <div class="contact-container">
          <a href="mailto: joy.heu@outlook.fr" target="_blank">Contactez-moi</a>
        </div>
      </nav>
      <WelcomeBanner id="home"/>
      <ContactContainer :contactData="contacts" :isAbsolute="true"/>
    </header>
  
    <main>
      <section class="work-section" id="projects">
        <Carousel
          :itemsToShow="3"
          :wrapAround="true"
          snapAlign="start"
          :breakpoints="breakpoints"
        >
          <Slide v-for="item in works" :key="item">
            <WorkCard :work="item"/> 
          </Slide>
          <template #addons>
            <Navigation />
            <Pagination />
          </template>
          
        </Carousel>
      </section>
      <section id="jobs">
        <TimeLine :timeline-data="timelines" />
      </section>
    </main>
    <footer>
      <ContactContainer :contactData="contacts" :is-absolute="false"/>
    </footer>
  </div>
</template>

<style>
  @import "@/assets/base.css";
  @import "@/assets/carousel.css";
  
  
  .menu-bar {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 1.5em 20px;
    z-index: 2;
    left: 0;
    right: 0;
    font-family: var(--vt-f-heading);
    position: fixed;
    top: 0;
    background-color: var(--vt-c-white);
  }

  .menu-bar a {
    text-decoration: none;
    text-transform: lowercase;
  }
  .nav-bar {
    display: flex;
    justify-content: space-between;
    margin: 0 30px;
  }

  .nav-bar a {
    font-size: 1.1em;
    font-weight: 500;
    color: var(--vt-c-shape-1);
    margin: 0 30px;
  }

  .nav-bar a:hover {
    color: var(--vt-c-shape-2);
    transform: scale(1.2);
    transition: 0.5s;
  }

  header {
    min-height: 100vh;
    position: relative;
  }

  .work-section {
    max-width: 1200px;
    margin: 100px auto;
    width: 80%;
  }

  .contact-container {
    background-color: var(--vt-c-shape-2);
    padding: 8px 12px;
    border-radius: 5px;
  }

  .contact-container a {
    color: white;
    font-weight: 500;
  }

  .contact-container:hover {
    background-color: var(--vt-c-shape-3);
    transition: 0.7s;
    transform: scale(1.1);
  }

  footer {
    background-color: var(--vt-c-shape-2);
    padding: 50px 0;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    .nav-bar {
      margin: 0 10px;
    }

    .nav-bar a {
      margin: 0 10px;
    }
  }
  
  @media screen and (max-width: 425px) {
    .nav-bar {
      display: none;
    }
  }
</style>
