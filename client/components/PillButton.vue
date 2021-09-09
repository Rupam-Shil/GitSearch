<template>
  <div>
    <button
      type="button"
      :style="{ background: bgcolor, color: color }"
      @click.prevent="$emit('clicked')"
    >
      {{ text }} <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: ['bgcolor', 'color', 'text'],
}
</script>

<style lang="scss" scoped>
button {
  outline: none;
  border: unset;
  width: max-content;
  padding: 0.2rem 3rem;
  min-width: 10rem;
  align-self: center;
  border-radius: 100vmax;
  transition: 0.2s ease-in-out;
  &:hover {
    letter-spacing: 2px;
  }
}
</style>
