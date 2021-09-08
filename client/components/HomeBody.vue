<template>
  <div class="dual-container">
    <div class="right">
      <img :src="require(`~/assets/${imgsrc}.png`)" alt="" />
    </div>
    <div class="left">
      <div class="left-inner">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['imgsrc'],
}
</script>

<style lang="scss" scoped>
.dual-container {
  max-width: 1400px;
  margin: 0 auto;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  place-content: center;
  gap: 1rem;
  align-items: center;
  color: var(--white-color);
  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 80%;
      height: auto;
    }
  }
  .left {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    &-inner {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
