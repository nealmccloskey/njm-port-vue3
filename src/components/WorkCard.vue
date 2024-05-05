<script>
  export default {
    props: {
      work: Object
    },
    methods: {
    }
  }
</script>

<template>
    <div class="card" :class="{'is-flipped': work.flipped}" @click="work.flipped = !work.flipped">
      <div class="card-container front">
        <div>
          <h2>{{ work.project }}</h2>
          <h3>{{ work.type }}</h3>
        </div>
        <img class="img-card" :src="`/img/${work.img}`">
        <div class="clic-card">
          <font-awesome-icon icon="fa-solid fa-repeat" size="lg" color="#333"/>
        </div>
      </div>
      <div class="card-container back">
        <p>{{ work.desc }}</p>
        <div class="icon-container">
          <font-awesome-icon v-for="icon in work.icons" size="4x" :icon="icon"/>
        </div>
        <a v-if="work.url" :href="work.url" target="_blank"><font-awesome-icon size="lg" icon="fa-solid fa-link" />Voir en ligne</a>
        <a v-if="work.git" :href="work.git" target="_blank"><font-awesome-icon size="lg" icon="fa-brands fa-gitlab" />Voir le code</a>
        <a v-if="work.gith" :href="work.gith" target="_blank"><font-awesome-icon size="lg" icon="fa-brands fa-git" />Voir le code</a>
      </div>
    </div>
</template>

<style scoped>
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

  .card-container.back {
    transform: rotateY(180deg);
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .card-container.back a {
    display: flex;
    justify-content: space-between;
    background-color: var(--vt-c-white);
    padding: 8px 12px;
    border-radius: 5px;
    text-decoration: none;
    color: #333;
  }

  .card-container.back a:hover,
  .clic-card:hover {
    background-color: #333;
    color: var(--vt-c-white);
    transition: 0.7s;
    transform: scale(1.1);
  }
  .clic-card:hover svg {
    color: white;
  }
  .icon-container svg {
    margin: 0 15px;
  }

  .card-container.back a svg {
    margin-right: 10px;
  }

  .card-container.back a {
    font-family: var(--vt-f-text);
  }


  .img-card {
    width: 100%;
    border-radius: 10px;
  }

  .card {
    position: relative;
    height: 450px;
    width: 350px;
    transform-style: preserve-3d;
    transform-origin: center right;
    transition: transform 1s;
  }

  h2 {
    font-family: var(--vt-f-semi-heading);
    margin: 0;
    font-size: 20px;
    color: #333;
  }

  h3 {
    font-family: var(--vt-f-text);
    text-transform: uppercase;
    font-size: 13px;
    margin: 0;
    margin-top: 10px;
    font-weight: 900;
    color: #333;
  }

  .card.is-flipped {
    transform: translateX(-100%) rotateY(-180deg);
  }

  .clic-card {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: var(--vt-c-white);
    padding: 10px;
    border-radius: 8px;
    margin-left: auto;
  }

  p {
    font-family: var(--vt-f-text);
  }
</style>
