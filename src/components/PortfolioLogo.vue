<template>
  <!-- Logo container -->
  <div class="logo-container">
    <!-- Block for the first line of the logo -->
    <div class="two-line-block">
      <!-- First line of the logo -->
      <h1>Neal</h1>
    </div>
    <!-- Block for the second and third lines of the logo -->
    <div class="one-line-block">
      <!-- Second line of the logo -->
      <div>
        <p>McCloskey</p>
      </div>
      <!-- Third line of the logo -->
      <div>
        <p>Portfolio</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Styles for the logo container */
.logo-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0;
  margin-bottom: 0;
  height: 40px;
}

/* Styles for the first line of the logo */
.two-line-block h1 {
  margin-top: 0;
  margin-bottom: 0;
}

/* Styles for the second and third lines of the logo */
.one-line-block {
  text-transform: uppercase;
}

/* Styles for the paragraphs in the logo */
p {
  margin: 0;
  font-family: var(--vt-f-semi-heading);
  font-weight: 700;
  color: var(--vt-c-shape-3);
}

/* Styles for the first line of the logo */
h1 {
  font-size: 2.5em;
  text-transform: uppercase;
  margin-right: 5px;
  font-family: var(--vt-f-semi-heading);
  color: var(--vt-c-shape-3);
  text-shadow: 20px;
}
</style>
