<script>
// Vue component for displaying contact information
export default {
  // Component properties
  props: {
    // Boolean to determine if the contact container should be positioned absolutely
    isAbsolute: Boolean,
    // Array of contact data
    contactData: Array,
  },
};
</script>

<template>
  <!-- Contact container -->
  <div class="contact" :class="{ absolute: isAbsolute }">
    <!-- Loop over each contact data and create a link -->
    <a
      v-for="data in contactData"
      :key="data.id"
      :href="`${data.url}`"
      target="_blank"
    >
      <!-- Font awesome icon for the contact link -->
      <font-awesome-icon
        :icon="data.icon"
        size="2xl"
        :color="`var(--vt-c-shape)`"
      />
    </a>
  </div>
</template>

<style scoped>
/* Styles for the contact container */
.contact {
  display: flex;
  justify-content: center;
}

/* Styles for the contact container when it is positioned absolutely */
.absolute {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin-bottom: 50px;
}

/* Styles for the contact links */
.contact a {
  display: block;
  margin-left: 15px;
  margin-right: 15px;
}

/* Styles for the contact links when they are hovered */
.contact a:hover svg {
  color: var(--vt-c-shape-1);
  transition: 0.7s;
  transform: scale(1.2);
}
</style>
