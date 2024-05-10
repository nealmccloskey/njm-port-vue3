<script>
// Importing necessary modules and components
import { gsap } from 'gsap/';
import WorkCard from './components/WorkCard.vue';
import Logo from './components/PortfolioLogo.vue';
import WelcomeBanner from './components/WelcomeBanner.vue';
import ContactContainer from './components/ContactContainer.vue';
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';
import TimeLine from './components/TimeLine.vue';
import worksData from './data/works.json';
import timelineData from './data/timeline.json';
import homeData from './data/home.json';
import contactData from './data/contact.json';

export default {
  data() {
    return {
      // Breakpoints for responsive design
      breakpoints: {
        320: {
          itemsToShow: 1,
          snapAlign: 'center',
        },
        768: {
          itemsToShow: 1.5,
          snapAlign: 'center',
        },
        1024: {
          itemsToShow: 2,
          snapAlign: 'start',
        },
        1440: {
          itemsToShow: 3,
          snapAlign: 'start',
        },
      },
      // Importing data from JSON files
      works: worksData,
      timelines: timelineData,
      homes: homeData,
      contacts: contactData,

      // State for showing contact info
      showContactInfo: false,
    };
  },
  components: {
    // Registering components
    WorkCard,
    Logo,
    WelcomeBanner,
    ContactContainer,
    Carousel,
    Slide,
    Navigation,
    Pagination,
    TimeLine,
  },
  methods: {
    // Method to handle outside click
    handleOutsideClick(event) {
      if (!this.$refs.contactContainer.contains(event.target)) {
        this.showContactInfo = false;
      }
    },
    toggleContactInfo(event) {
      event.stopPropagation();
      this.showContactInfo = !this.showContactInfo;
    },

    // Method to move cursor
    cursorMove(evt) {
      const mouseX = evt.clientX;
      const mouseY = evt.clientY;

      // Setting the position of the cursor
      gsap.set('.cursor', {
        x: mouseX,
        y: mouseY,
      });
    },
  },
  mounted() {
    // Add event listener when component is mounted
    document.addEventListener('click', this.handleOutsideClick);
  },
  beforeUnmount() {
    // Remove event listener before component is destroyed
    document.removeEventListener('click', this.handleOutsideClick);
  },
};
</script>

<template>
  <!-- Main container with mousemove event -->
  <div @mousemove="cursorMove">
    <!-- Cursor div -->
    <div class="cursor"></div>

    <!-- Header section -->
    <header>
      <!-- Navigation bar -->
      <nav class="menu-bar">
        <!-- Logo component -->
        <Logo />
        <!-- Navigation links -->
        <div class="nav-bar">
          <!-- Looping through the homes data to create navigation links -->
          <a v-for="item in homes" :key="item.id" :href="`#${item.id}`">{{ item.name }}</a>
        </div>
        <!-- Contact link -->
        <div class="contact-container">
          <!-- Email link -->
          <a href="#" @click.prevent="toggleContactInfo">Contact Me</a>
          <!-- Contact info dropdown -->
          <div
            v-show="showContactInfo"
            class="contact-info-dropdown"
            ref="contactContainer"
          >
            <!-- Add your contact info here -->
            <p>Email: nealmccloskey@gmail.com</p>
            <p>Phone: 602-317-8400</p>
            <!-- Add more contact info as needed -->
          </div>
        </div>
      </nav>

      <!-- Welcome Section -->
      <WelcomeBanner id="home" />

      <!-- Contact info -->
      <ContactContainer :contactData="contacts" :isAbsolute="true" />
    </header>

    <!-- Main content -->
    <main>
      <!-- Work section -->
      <section class="work-section" id="projects">
        <!-- Carousel component -->
        <Carousel
          :itemsToShow="3"
          :wrapAround="true"
          snapAlign="start"
          :breakpoints="breakpoints"
        >
          <!-- Slide for each work item -->
          <Slide v-for="item in works" :key="item">
            <!-- Work card component -->
            <WorkCard :work="item" />
          </Slide>
          <!-- Navigation and Pagination addons for Carousel -->
          <template #addons>
            <Navigation />
            <Pagination />
          </template>
        </Carousel>
      </section>

      <section id="jobs">
        <!-- Timeline component -->
        <TimeLine :timeline-data="timelines" />
      </section>
    </main>

    <!-- Footer -->
    <footer>
      <!-- Contact info -->
      <ContactContainer :contactData="contacts" :is-absolute="false" />
    </footer>
  </div>
</template>

<style>
/* Importing CSS files */
@import '@/assets/base.css';
@import '@/assets/carousel.css';

/* Styling for different elements and components */
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
  position: relative;
  background-color: var(--vt-c-shape-2);
  padding: 8px 12px;
  border-radius: 5px;
}

.contact-info-dropdown {
  position: absolute;
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

/* Media queries for responsive design */
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
