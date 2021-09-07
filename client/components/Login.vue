<template>
  <div class="login-main">
    <h1 class="header">{{ header }}</h1>
    <form @submit.prevent="onSubmit">
      <input type="text" required placeholder="Name" v-if="isSignUp" />
      <input type="email" required placeholder="Email Address" />
      <input type="password" required placeholder="Password" />
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
export default {
  data() {
    return {
      header: 'Log In',
      isSignUp: false,
    }
  },
  methods: {
    loginSignUpToggle() {
      this.isSignUp = !this.isSignUp
      if (this.isSignUp) {
        this.header = 'Sign Up'
      } else {
        this.header = 'Log In'
      }
    },
    onSubmit() {},
  },
}
</script>

<style lang="scss" scoped>
.login-main {
  padding: 2rem;
  color: var(--white-color);
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
