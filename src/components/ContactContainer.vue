<script>
  export default {
    props: {
      isAbsolute: Boolean,
      contactData: Array
    },
  }
</script>

<template>
  <div class="contact" :class="{absolute: isAbsolute}">
    <a v-for="data in contactData" :href="`${data.url}`" target="_blank">
      <font-awesome-icon :icon="data.icon" size="2xl" :color="`var(--vt-c-shape)`" />
    </a>
  </div>
</template>

<style scoped>
  .contact {
    display: flex;
    justify-content: center;
  }

  .absolute {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin-bottom: 50px;
  }
  .contact a {
    display: block;
    margin-left: 15px;
    margin-right: 15px;
  }

  .contact a:hover svg {
    color: var(--vt-c-shape-1);
    transition: 0.7s;
    transform: scale(1.2);
  }
</style>