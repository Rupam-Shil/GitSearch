<template>
  <div class="box">
    <img :src="follower.avatar_url" :alt="follower.avatar_url" />
    <div class="name">
      <h1>{{ follower.login }}</h1>
      <div class="github-profile">
        <i class="uil uil-github-alt"></i>
        <a :href="follower.html_url">See Github Profile</a>
      </div>
    </div>
    <button type="button" @click="fetchNewuser">See Profile</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: ['follower'],
  methods: {
    ...mapMutations(['changeUserData']),
    async fetchNewuser() {
      try {
        const res = await this.$axios.$post(
          'http://localhost:3000/user-details',
          {
            name: this.follower.login,
          }
        )
        this.changeUserData(res)
        this.$router.push(`/profile/${res.id}`)
      } catch (err) {
        return
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  img {
    height: 100%;
    width: auto;
    border-radius: 50%;
    flex-shrink: 0;
  }
  .name {
    flex: 1;
    h1 {
      font-size: clamp(1rem, 5vw, 1.5rem);
    }
  }
  .github-profile {
    a,
    i {
      color: var(--grey-text-color-dark);
    }
  }
  button {
    outline: none;
    border: none;
    padding: 0.2rem 1rem;
    height: 2rem;
    border-radius: 100vmax;
    background: var(--grey-text-color-dark);
    color: var(--white-color);
    transition: 0.2s;
    &:hover {
      background: var(--white-color);
      color: var(--grey-text-color-dark);
    }
  }
}
@media only screen and (max-width: 768px) {
  .box {
    img {
      height: 80%;
    }
  }
}
</style>
