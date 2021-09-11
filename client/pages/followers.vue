<template>
  <div class="followers">
    <HomeBody imgsrc="followers">
      <div class="followers-section">
        <i class="uil uil-user-plus followersIcon"></i>
        <div class="heading">Followers</div>
        <div class="followers-section__list">
          <FollowersDisplay
            v-for="follower in sendData"
            :key="follower.id"
            :follower="follower"
          />
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
  emits: ['clicked'],

  data() {
    return {
      buttonDisable: false,
      storeData: [],
      sendData: [],
    }
  },
  methods: {
    loadMore() {
      this.checkDataLength()
    },

    checkDataLength() {
      if (this.storeData.length <= 3) {
        this.buttonDisable = true
        this.sendData = this.storeData
      } else {
        this.sendData = this.storeData.splice(0, 3)
      }
    },
  },
  computed: { ...mapState(['userName']) },

  async fetch() {
    const res = await this.$axios.$get(
      `https://api.github.com/users/${this.userName}/followers`
    )
    this.storeData = res
    this.checkDataLength()
  },
}
</script>

<style lang="scss" scoped>
.followers {
  &-section {
    color: #fff;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .followersIcon {
      font-size: clamp(3rem, 5vw, 5rem);
    }
    .heading {
      text-align: center;
      color: var(--white-color);
      border-bottom: 1px solid var(--white-color);
      font-size: clamp(1rem, 5vw, 2rem);
      width: 50%;
      text-transform: uppercase;
    }
    &__list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin: 2rem 0;
      width: 70%;
    }
  }
}
@media only screen and (max-width: 768px) {
  .followers {
    margin: 2rem 0;
    &-section {
      &__list {
        width: 90%;
      }
    }
  }
}
</style>
