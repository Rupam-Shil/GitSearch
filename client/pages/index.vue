<template>
  <div class=""></div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  async fetch({ store, redirect }) {
    if (!store.state.isAuthed) {
      redirect('/auth')
    }
  },
  computed: {
    ...mapState(['isAuthed']),
  },
  mounted() {
    console.log(this.isAuthed)
  },
}
</script>
