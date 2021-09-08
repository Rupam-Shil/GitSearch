<template>
  <div class="login-main">
    <h1 class="header">{{ header }}</h1>
    <div class="error" v-if="hasError">{{ errorContent }}</div>
    <form @submit.prevent="onSubmit">
      <input
        type="text"
        required
        placeholder="Name"
        v-if="isSignUp"
        v-model="nameInput"
      />
      <input
        type="email"
        required
        placeholder="Email Address"
        v-model="emailInput"
      />
      <input
        type="password"
        required
        placeholder="Password(Min: 6 characters)"
        v-model="passwordInput"
      />
      <button type="submit">
        {{ header }}
      </button>
    </form>
    <div class="login-signup">
      <p v-if="!isSignUp">
        Don't Have An Account?
        <button type="button" @click="loginSignUpToggle">Sign Up</button>
      </p>
      <p v-else>
        Already Have An Acocunt?
        <button type="button" @click="loginSignUpToggle">Log In</button>
      </p>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      header: 'Log In',
      isSignUp: false,
      nameInput: '',
      emailInput: '',
      passwordInput: '',
      hasError: false,
      errorContent: '',
    }
  },
  methods: {
    ...mapMutations(['changeAuth']),
    checkResponse(res) {
      if (res.errors) {
        this.hasError = true
        this.errorContent = res.errors
        if (res.login) {
          this.loginSignUpToggle()
        }
        if (res.signup) {
          this.loginSignUpToggle()
        }
      } else {
        this.changeAuth(true)
        this.$router.push('/')
      }
    },
    loginSignUpToggle() {
      this.isSignUp = !this.isSignUp
      if (this.isSignUp) {
        this.header = 'Sign Up'
      } else {
        this.header = 'Log In'
      }
    },
    async onSubmit() {
      if (this.isSignUp) {
        try {
          const res = await this.$axios.$post('http://localhost:3000/signup', {
            name: this.nameInput,
            email: this.emailInput,
            password: this.passwordInput,
          })
          this.checkResponse(res)
        } catch (err) {
          console.log(err)
        }
      } else {
        try {
          const res = await this.$axios.$post('http://localhost:3000/login', {
            email: this.emailInput,
            password: this.passwordInput,
          })
          this.checkResponse(res)
        } catch (err) {
          console.log(err)
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.login-main {
  padding: 2rem;
  color: var(--white-color);
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .error {
    width: 100%;
    height: max-content;
    background: rgb(153, 99, 99);
    border: 1px solid rgb(231, 53, 53);
    padding: 1rem;
    border-radius: 1rem;
    margin-bottom: 1rem;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    input {
      outline: none;
      border: none;
      background: transparent;
      border-bottom: 2px solid var(--primary-color-dark);
      height: 40px;
      color: var(--white-color);
      &::placeholder {
        color: var(--grey-text-color-dark);
      }
    }
    button {
      width: 30%;
      align-self: center;
      outline: none;
      border: none;
      padding: 0.4rem;
      border-radius: 100vmax;
      background: var(--button-color);
      color: var(--white-color);
      transition: 0.2s ease-in-out;
      &:hover {
        letter-spacing: 2px;
      }
    }
  }
  .login-signup {
    button {
      outline: none;
      border: none;
      background: transparent;
      color: var(--primary-color);
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
