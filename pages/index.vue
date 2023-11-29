<template>
  <div>
    <h1>name</h1>
  </div>
</template>

<style scoped>
nav,
footer {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
}
.layouts {
  padding: 1rem;
}
</style>

<script>
import backgroundImagePath from '~/src/profile/profile.png'
export default {
  data() {
    return { backgroundImagePath }
  },
}
</script>
