<template>
  <div>
    <div class="userdashboard">
      <div class="userdashboard-main">
        <div class="userdashboard-main-top">
          <div class="user-img">
            <img :src="userData.avatar_url" alt="userData.avatar_url" />
          </div>
          <div class="user-bio">
            <span class="user-id">@{{ userData.login }}</span>
            <h1 class="user-name">{{ userData.name }}</h1>
            <div class="user-work">
              <div class="user-work-location">
                <i class="uil uil-map-marker"></i>
                <span>{{ location }}</span>
              </div>
              <div class="user-work-company">
                <i class="uil uil-suitcase-alt"></i>
                <span>{{ company }}</span>
              </div>
            </div>
            <div class="user-following">
              <div class="user-following-follow">
                <i class="uil uil-user-check"></i>
                <span>{{ userData.followers }}</span>
              </div>
              <div class="user-following-followers">
                <i class="uil uil-user-plus"></i>
                <span>{{ userData.following }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="userdashboard-main-bottom-left">
          <div class="box">
            <div class="left">
              <span class="left-heading">Repositories</span>
              <h2>
                <i class="uil uil-code-branch"></i>{{ userData.public_repos }}
              </h2>
            </div>
            <div class="right">
              <h1>Last Updated</h1>
              <p><i class="uil uil-clock-eight"></i>{{ updatedDate }}</p>
            </div>
          </div>
        </div>
        <div class="userdashboard-main-bottom-right">
          <img
            class="user-graph"
            src="https://activity-graph.herokuapp.com/graph?username=ADHI2648&bg_color=2B213A&color=E5289E&line=DA5B0B&point=E1E8EB"
            alt=""
          />
          <!-- <img class="user-graph" src="~/assets/login.png" alt="" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  async fetch({ store, redirect }) {
    if (!store.state.isAuthed) {
      redirect('/auth')
    }
  },
  data() {
    return {
      updatedDate: '',
      location: '',
      company: '',
    }
  },
  mounted() {
    this.updatedDate = this.userData.updated_at.split('T')[0]
    if (this.userData.company === null) {
      this.company = 'Not Updated'
    } else {
      this.company = this.userData.company
    }
    if (this.userData.location === null) {
      this.location = 'Not Updated'
    } else {
      this.location = this.userData.company
    }
  },
  computed: {
    ...mapState(['userData']),
  },
}
</script>

<style lang="scss" scoped>
.userdashboard {
  color: var(--white-color);
  height: 100vh;
  display: grid;
  place-content: center;
  &-main {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    min-height: 80vh;
    display: grid;
    place-items: center;
    padding: 1rem;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    &-top {
      grid-column: 1 / span 2;
      justify-self: left;
      display: flex;
      align-items: center;
      gap: 1rem;
      .user-img {
        flex-shrink: 0;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        img {
          width: 100%;
          height: 100%;
          border-radius: inherit;
          object-fit: cover;
        }
      }
      .user-bio {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        .user-id {
          color: var(--grey-text-color-dark);
        }
        .user-name {
          font-size: clamp(1.5rem, 8vw, 2rem);
          color: var(--primary-color-dark);
        }
        .user-work {
          display: flex;
          gap: 1rem;
          i {
            color: var(--primary-color);
          }
        }
        .user-following {
          display: flex;
          gap: 1rem;
          i {
            font-size: 1.2rem;
            color: var(--primary-color);
          }
        }
      }
    }
    &-bottom-left {
      width: 100%;
      .box {
        width: 100%;
        display: grid;
        grid-template-columns: 40% 60%;
        .left {
          padding: 2rem;
          background: #000000;
          border-radius: 0.5rem 0 0 0.5rem;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          h2 {
            font-size: clamp(1rem, 5vw, 1.5rem);
          }
          i {
            color: var(--primary-color);
          }
        }
        .right {
          text-align: right;
          padding: 2rem;
          background: #3d3d3d;
          border-radius: 0 0.5rem 0.5rem 0;
          h1 {
            font-size: clamp(1rem, 5vw, 1.5rem);
          }
          i {
            color: var(--primary-color-dark);
            margin-right: 0.5rem;
          }
        }
      }
    }
    &-bottom-right {
      img {
        width: 100%;
        object-fit: cover;
        border-radius: 0.5rem;
        border: 2px solid var(--primary-color);
      }
    }
  }
}
@media only screen and (max-width: 768px) {
  .userdashboard {
    margin-top: 5rem;
    padding: 1rem;
    height: max-content;
    &-main {
      gap: 2rem;
      &-top {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        .user-work,
        .user-following {
          justify-content: center;
        }
      }
      &-bottom-left {
        grid-column: 1 / span 2;
      }
      &-bottom-right {
        grid-column: 1 / span 2;
      }
    }
  }
}
</style>
