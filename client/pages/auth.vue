<template>
  <div class="main">
    <div class="left">
      <img src="~/assets/login.png" alt="" />
    </div>
    <div class="right">
      <Login />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.main {
  max-width: 1400px;
  margin: 1rem auto;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .left {
    flex: 1;
    img {
      width: 100%;
    }
  }
  .right {
    flex: 1;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
@media only screen and (max-width: 768px) {
  .main {
    flex-direction: column;
  }
}
</style>
