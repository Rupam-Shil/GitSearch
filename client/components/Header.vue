<template>
  <div>
    <header>
      <div class="logo">
        <img src="~/assets/logo.svg" alt="" />
      </div>
      <div class="detailed__logo">
        <h1>GitHub</h1>
        <span>SEARCH</span>
      </div>
    </header>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
header {
  padding: 1rem;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    img {
      width: 40px;
      height: 40px;
    }
  }
  .detailed__logo {
    color: var(--white-color);
    display: flex;
    align-items: center;
    gap: 0.8rem;
    h1 {
      font-size: clamp(1.5rem, 5vw, 2rem);
      font-weight: 700;
      margin: 0;
    }
    span {
      font-size: clamp(0.8rem, 5vw, 1rem);

      color: var(--primary-color-dark);
      letter-spacing: 0.5rem;
      font-weight: 600;
    }
  }
}
</style>
