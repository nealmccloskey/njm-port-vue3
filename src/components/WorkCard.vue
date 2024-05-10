<script>
// Vue component definition
export default {
  // Define the props that the component accepts
  props: {
    // 'work' prop which is an object
    work: Object,
  },
  // Define the methods that the component uses
  methods: {},
};
</script>

<template>
  <!-- Root element of the component -->
  <!-- Dynamically add 'is-flipped' class based on 'flipped' prop -->
  <!-- Toggle 'flipped' on click -->
  <div
    class="card"
    :class="{ 'is-flipped': work.flipped }"
    @click="flipped = !flipped"
  >
    <!-- Front of the card -->
    <div class="card-container front">
      <div>
        <!-- Display the project name and type -->
        <h2>{{ work.project }}</h2>
        <h3>{{ work.type }}</h3>
      </div>
      <!-- Display the project image -->
      <img class="img-card" :src="`/img/${work.img}`" />
      <div class="clic-card">
        <!-- Display a repeat icon -->
        <font-awesome-icon icon="fa-solid fa-repeat" size="lg" color="#333" />
      </div>
    </div>
    <!-- Back of the card -->
    <div class="card-container back">
      <!-- Display the project description -->
      <p>{{ work.desc }}</p>
      <!-- Display the project icons -->
      <div class="icon-container">
        <font-awesome-icon
          v-for="icon in work.icons"
          :key="icon"
          size="4x"
          :icon="icon"
        />
      </div>
      <!-- Display the project URL if it exists -->
      <a v-if="work.url" :href="work.url" target="_blank"
        ><font-awesome-icon size="lg" icon="fa-solid fa-link" />View Online</a
      >
      <!-- Display the project GitLab URL if it exists -->
      <a v-if="work.git" :href="work.git" target="_blank"
        ><font-awesome-icon size="lg" icon="fa-brands fa-gitlab" />View Code</a
      >
      <!-- Display the project GitHub URL if it exists -->
      <a v-if="work.gith" :href="work.gith" target="_blank"
        ><font-awesome-icon size="lg" icon="fa-brands fa-git" />View Code</a
      >
    </div>
  </div>
</template>

<style scoped>
/* Styles for the card container */
.card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(45deg, var(--vt-c-shape-2), var(--vt-c-shape-3));
  border-radius: 10px;
  padding: 25px;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  position: absolute;
  backface-visibility: hidden;
}

/* Styles for the back of the card */
.card-container.back {
  transform: rotateY(180deg);
  display: flex;
  justify-content: space-around;
  align-items: center;
}

/* Styles for the links on the back of the card */
.card-container.back a {
  display: flex;
  justify-content: space-between;
  background-color: var(--vt-c-white);
  padding: 8px 12px;
  border-radius: 5px;
  text-decoration: none;
  color: #333;
}

/* Styles for the hover state of the links and the click card */
.card-container.back a:hover,
.clic-card:hover {
  background-color: #333;
  color: var(--vt-c-white);
  transition: 0.7s;
  transform: scale(1.1);
}

/* Styles for the hover state of the click card's SVG */
.clic-card:hover svg {
  color: white;
}

/* Styles for the SVGs in the icon container */
.icon-container svg {
  margin: 0 15px;
}

/* Styles for the SVGs in the links on the back of the card */
.card-container.back a svg {
  margin-right: 10px;
}

/* Styles for the links on the back of the card */
.card-container.back a {
  font-family: var(--vt-f-text);
}

/* Styles for the image on the card */
.img-card {
  width: 100%;
  border-radius: 10px;
}

/* Styles for the card */
.card {
  position: relative;
  height: 450px;
  width: 350px;
  transform-style: preserve-3d;
  transform-origin: center right;
  transition: transform 1s;
}

/* Styles for the h2 elements */
h2 {
  font-family: var(--vt-f-semi-heading);
  margin: 0;
  font-size: 20px;
  color: #333;
}

/* Styles for the h3 elements */
h3 {
  font-family: var(--vt-f-text);
  text-transform: uppercase;
  font-size: 13px;
  margin: 0;
  margin-top: 10px;
  font-weight: 900;
  color: #333;
}

/* Styles for the flipped state of the card */
.card.is-flipped {
  transform: translateX(-100%) rotateY(-180deg);
}

/* Styles for the click card */
.clic-card {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--vt-c-white);
  padding: 10px;
  border-radius: 8px;
  margin-left: auto;
}

/* Styles for the p elements */
p {
  font-family: var(--vt-f-text);
}
</style>
