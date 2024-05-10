// Import the createApp function from Vue
import { createApp } from 'vue';

// Import the main App component
import App from './App.vue';

// Import the VueAnimateOnScroll plugin
import VueAnimateOnScroll from 'vue3-animate-onscroll';

// Import the main CSS file
import './assets/main.css';

// Import the FontAwesome library
import { library } from '@fortawesome/fontawesome-svg-core';

// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Import the brand icons from FontAwesome
import {
  faCss3,
  faGitlab,
  faHtml5,
  faJs,
  faLinkedin,
  faVuejs,
  faGithub,
  faReact,
  faBootstrap,
  faPhp,
} from '@fortawesome/free-brands-svg-icons';

// Import the solid icons from FontAwesome
import {
  faEnvelope,
  faFilePdf,
  faLink,
  faRepeat,
  faDatabase,
} from '@fortawesome/free-solid-svg-icons';

// Add the imported icons to the FontAwesome library
library.add(
  faGitlab,
  faLinkedin,
  faEnvelope,
  faFilePdf,
  faRepeat,
  faLink,
  faVuejs,
  faHtml5,
  faCss3,
  faJs,
  faGithub,
  faBootstrap,
  faReact,
  faDatabase,
  faPhp
);

// Create a new Vue app with the App component
// Register the FontAwesomeIcon component globally
// Use the VueAnimateOnScroll plugin
// Mount the app to the DOM element with the id "app"
createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(VueAnimateOnScroll)
  .mount('#app');