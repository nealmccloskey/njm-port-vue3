<template>
  <div class="logo-container">
    <div class="two-line-block">
      <h1>Joy</h1>
    </div>
    <div class="one-line-block">
      <div>
        <p>Heurtaux</p>
      </div>
      <div>
        <p>Portfolio</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .logo-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0;
    margin-bottom: 0;
    height: 40px;
  }

  .two-line-block h1 {
    margin-top: 0;
    margin-bottom: 0;
  }

  .one-line-block {
    text-transform: uppercase;
  }

  p {
    margin: 0;
    font-family: var(--vt-f-semi-heading);
    font-weight: 700;
    color: var(--vt-c-shape-3);
  }

  h1 {
    font-size: 2.5em;
    text-transform: uppercase;
    margin-right: 5px;
    font-family: var(--vt-f-semi-heading);
    color: var(--vt-c-shape-3);
    text-shadow: 20px;
  }
</style>