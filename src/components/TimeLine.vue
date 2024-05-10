<script>
// Vue component for displaying a timeline
export default {
  // Component properties
  props: {
    // Array of timeline data
    timelineData: Array,
  },
  // Component data
  data() {},
  // Lifecycle hook called after the instance has been mounted
  mounted() {},
  // Methods for this component
  methods: {},
};
</script>

<template>
  <div>
    <!-- Timeline section -->
    <section class="cd-timeline js-cd-timeline">
      <!-- Timeline container -->
      <div class="container max-width-lg cd-timeline__container">
        <!-- Loop over each timeline data and create a timeline block -->
        <div
          v-for="timeline in timelineData"
          v-bind:key="timeline.id"
          v-animate-onscroll="{ down: timeline.animation }"
          class="animated cd-timeline__block"
        >
          <!-- Timeline image -->
          <div class="cd-timeline__img cd-timeline__img--picture"></div>
          <!-- Timeline content -->
          <div class="cd-timeline__content text-component">
            <!-- Timeline name -->
            <h2>{{ timeline.name }}</h2>
            <!-- Timeline date -->
            <div class="flex justify-between items-center">
              <span class="cd-timeline__date">{{ timeline.date }}</span>
            </div>
            <!-- Timeline location -->
            <p>{{ timeline.location }}</p>
            <!-- Timeline text -->
            <p v-html="timeline.text"></p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Styles for the timeline */
.cd-timeline {
  overflow: hidden;
  padding: 2rem 0;
}

/* Styles for the timeline container */
.cd-timeline__container {
  position: relative;
  padding: calc(1.25 * 1.25rem) 0;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  max-width: 80rem;
}

.cd-timeline__container::before {
  content: '';
  position: absolute;
  top: 0;
  height: 100%;
  width: 2px;
  background: #eee;
  left: 50%;
  transform: translateX(-50%);
}

.cd-timeline__block {
  display: flex;
  position: relative;
  z-index: 1;
  margin-bottom: 2rem;
}

/* Styles for the last timeline block */
.cd-timeline__block:last-child {
  margin-bottom: 0;
}
.cd-timeline__block.fadeInRight {
  flex-direction: row-reverse;
}

.cd-timeline__block.fadeInRight .cd-timeline__img {
  margin-left: 0;
  margin-right: calc(5% - 30px / 2);
  border-color: var(--vt-c-shape-3);
}

.cd-timeline__block.fadeInRight .cd-timeline__img::after,
.cd-timeline__block.fadeInRight .cd-timeline__content h2 {
  background-color: var(--vt-c-shape-3);
  color: #333;
}

.cd-timeline__img {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid var(--vt-c-shape-1);
  background-color: var(--vt-c-white);
  border-radius: 50%;
  width: var(--vt-round-size);
  height: var(--vt-round-size);
  order: 1;
  margin-left: calc(5% - 30px / 2);
}

.cd-timeline__img::after {
  content: '';
  border-radius: 50%;
  width: calc(var(--vt-round-size) / 2);
  height: calc(var(--vt-round-size) / 2);
  background-color: var(--vt-c-shape-1);
}

.cd-timeline__content {
  width: 45%;
  -ms-flex-positive: 0;
  flex-grow: 0;
  will-change: transform;
  margin: 0;
  font-size: 0.9em;
  --line-height-multiplier: 1.2;
  position: relative;
  background: var(--vt-c-white);
  border-radius: 10px;
  box-sizing: border-box;
  font-family: var(--vt-f-text);
}

/* Styles for the timeline content heading */
.cd-timeline__content h2 {
  background-color: var(--vt-c-shape-1);
  border-radius: 5px;
  padding: 5px;
  margin-top: 0;
  font-family: var(--vt-f-semi-heading);
  font-size: 20px;
  color: var(--vt-c-white);
}

/* Responsive styles for medium devices */
@media (min-width: 426px) and (max-width: 768px) {
  .cd-timeline__container {
    max-width: 100%;
    width: 100%;
  }
}

/* Responsive styles for small devices */
@media screen and (max-width: 425px) {
  .cd-timeline {
    padding-left: 20px;
    padding-right: 20px;
  }
  .cd-timeline__container {
    width: 100%;
  }
  .cd-timeline__container::before {
    left: 14px;
    transform: none;
  }
  .cd-timeline__block {
    justify-content: space-between;
  }
  .cd-timeline__content {
    width: 80%;
  }
  .cd-timeline__img {
    order: 0;
    margin-right: 0;
    margin-left: 0;
  }
  .cd-timeline__block.fadeInRight {
    flex-direction: row;
  }
}
</style>
