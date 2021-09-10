<template>
  <div class="home__search">
    <HomeBody imgsrc="search">
      <div class="search__slot">
        <div class="details">
          <h1>Find a User</h1>
          <span>Type a username and find a profile</span>
        </div>
        <div class="errorMessage" v-if="isError">{{ errorMessage }}</div>
        <input
          type="text"
          placeholder="Enter GitHub User Name"
          required
          v-model="inputValue"
        />
        <PillButton
          bgcolor="var(--button-color)"
          color="var(--white-color)"
          text="Search"
          @clicked="fetchApi"
          class="center_me"
          ><i class="uil uil-search"></i
        ></PillButton>
      </div>
    </HomeBody>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  // TODO: uncomment before production
  // async fetch({ store, redirect }) {
  //   if (!store.state.isAuthed) {
  //     redirect('/auth')
  //   }
  // },
  data() {
    return {
      inputValue: '',
      isError: false,
      errorMessage: '',
    }
  },
  computed: {
    ...mapState(['isAuthed', 'userData']),
  },
  methods: {
    ...mapMutations(['changeUserData']),
    async fetchApi() {
      if (this.inputValue === '') {
        this.isError = true
        this.errorMessage = 'Please Enter a user name'
      } else {
        this.isError = false
        this.inputValue = this.inputValue.trim().replace(/\s+/g, '-')
        const res = await this.$axios.$post(
          'http://localhost:3000/user-details',
          {
            name: this.inputValue,
          }
        )
        if (res.errors) {
          this.isError = true
          this.errorMessage = "User doesn't exist"
        } else {
          this.changeUserData(res)
          this.inputValue = ''
          this.$router.push(`/profile/${res.id}`)
        }
      }
    },
  },
  emits: ['clicked'],
}
</script>

<style lang="scss" scoped>
.search__slot {
  height: 50%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .details {
    display: flex;
    flex-direction: column;
    h1 {
      margin: 0;
      font-weight: 700;
      font-size: clamp(1.5rem, 7vw, 2rem);
    }
    span {
      font-size: 1.2rem;
      width: 70%;
      color: var(--grey-text-color);
    }
  }
  input {
    outline: none;
    border: unset;
    text-align: center;
    border-bottom: 2px solid var(--primary-color);
    background: transparent;
    color: var(--white-color);
  }
  button {
    outline: none;
    border: unset;
    width: max-content;
    padding: 0.2rem;
    width: 50%;
    align-self: center;
    border-radius: 100vmax;
    color: #fff;
  }
}
.errorMessage {
  background: rgb(153, 89, 89);
  border-radius: 0.5rem;
  border: 1px solid rgb(255, 0, 0);
  padding: 0.2rem;
  font-size: 0.8rem;
}
@media only screen and (max-width: 768px) {
  .search__slot {
    height: 100%;
    width: 90%;
    gap: 2rem;
    .details {
      text-align: center;
      span {
        font-size: 0.8rem;
        width: 100%;
      }
    }
  }
}
</style>
