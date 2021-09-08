<template>
  <div class="home__search">
    <HomeBody imgsrc="search">Something</HomeBody>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  // TODO: uncomment before production
  // async fetch({ store, redirect }) {
  //   if (!store.state.isAuthed) {
  //     redirect('/auth')
  //   }
  // },
  computed: {
    ...mapState(['isAuthed']),
  },
  mounted() {
    console.log(this.isAuthed)
  },
}
</script>
