<template>
   <div>
    <HomeBody imgsrc="search">
      <div class="repos">
        <div class="heading">Followers</div>
        <div class="repos-list">
          <a
            v-for="repo in repoFive"
            :key="repo.id"
            :href="repo.html_url"
            target="blank"
            >
            <img :src="repo.avatar_url">{{ repo.login }}</a>
        </div>
        <PillButton
          v-if="!buttonDisable"
          bgcolor="var(--primary-color)"
          color="var(--white-color)"
          text="See More"
          @clicked="loadMore"
          ><i class="uil uil-arrow-right"></i
        ></PillButton>
        <PillButton
          v-else
          bgcolor="var(--button-color)"
          color="var(--white-color)"
          text="See More"
          ><i class="uil uil-ban"></i
        ></PillButton>
      </div>
    </HomeBody>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  layout: 'userLayout',
  data() {
    return {
      repos: [],
      repoFive: [],
      buttonDisable: false,
    }
  },
  emits: ['clicked'],
  methods: {
    loadMore() {
      if (this.repos.length <= 5) {
        this.buttonDisable = true
      }
      this.repoFive = this.repos.splice(0,3)
    },
  },
  async fetch() {
    const res = await this.$axios.$get(
      `https://api.github.com/users/${this.userName}/followers`
    )
    this.repos = res
    this.repoFive = this.repos.splice(0,3)
  },
  computed: {
    ...mapState(['userName']),
  },
}
</script>

<style lang="scss" scoped>
img{
  height:100px;
  width:100px;
  padding-right:10px;
  border-radius:100%;
}
.repos {
  color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .mainlogo {
    color: var(--primary-color);
    font-size: clamp(2rem, 5vw, 5rem);
  }
  .heading {
    text-align: center;
    color: var(--primary-color);
    border-bottom: 1px solid var(--primary-color);
    font-size: clamp(1rem, 5vw, 2rem);
    width: 50%;
    text-transform: uppercase;
  }
  &-list {
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    a {
      color: var(--white-color);
      text-decoration: none;
      transition: 0.2s ease-in-out;
      &:hover {
        color: var(--primary-color);
        font-weight: 700;
      }
    }
  }
}
</style>