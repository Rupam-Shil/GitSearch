<template>
  <div>
    <header>
      <NuxtLink to="/" class="logo">
        <img src="~/assets/logo.svg" alt="" />
      </NuxtLink>
      <nav>
        <NuxtLink :to="`/profile/${userData.id}`"
          ><i class="uil uil-user"></i>Profile</NuxtLink
        >
        <NuxtLink to="/repos"
          ><i class="uil uil-github-alt"></i>Repositories</NuxtLink
        >
        <NuxtLink to="/followers"
          ><i class="uil uil-user-plus"></i>Followers</NuxtLink
        >
      </nav>
      <div class="detailed__logo">
        <h1>GitHub</h1>
        <span>SEARCH</span>
      </div>
    </header>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['userData']),
  },
}
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 50%;
  width: 100vw;
  padding: 1rem;
  max-width: 1400px;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    flex: 1;
    img {
      width: 40px;
      height: 40px;
    }
  }
  nav {
    flex: 1;
    display: flex;
    gap: 3rem;
    a {
      display: flex;
      gap: 0.3rem;
      color: #fff;
      text-decoration: none;
      &.nuxt-link-exact-active {
        color: var(--primary-color);
        font-weight: 700;
      }
    }
  }
  .detailed__logo {
    justify-content: flex-end;
    text-align: right;
    flex: 3;
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
@media only screen and (max-width: 768px) {
  header {
    background: var(--background-color);
  }
  nav {
    position: fixed;
    top: 94vh;
    left: 0;
    gap: 1rem !important;
    height: 50px;
    width: 100vw;
    background: #000;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px 10px 0 0;
    padding: 1rem;
  }
}
</style>
