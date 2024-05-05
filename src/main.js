import { createApp } from "vue";
import App from "./App.vue";
import VueAnimateOnScroll from 'vue3-animate-onscroll';

import "./assets/main.css";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCss3, faGitlab, faHtml5, faJs, faLinkedin, faVuejs, faGithub, faReact, faBootstrap, faPhp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFilePdf, faLink, faRepeat, faDatabase } from "@fortawesome/free-solid-svg-icons";


/* add icons to the library */
library.add(faGitlab);
library.add(faLinkedin);
library.add(faEnvelope);
library.add(faFilePdf);
library.add(faRepeat);
library.add(faLink);
library.add(faVuejs);
library.add(faHtml5);
library.add(faCss3);
library.add(faJs);
library.add(faGithub);
library.add(faBootstrap);
library.add(faReact);
library.add(faDatabase);
library.add(faPhp);

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(VueAnimateOnScroll)
.mount("#app");
