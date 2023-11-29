<template>
  <Title>Tavie</Title>
  <Meta name="description" content="portfolio" />

  <link
    href="https://fonts.googleapis.com/css?family=Exo:400,900"
    rel="stylesheet"
    type="text/css"
  />
  <Background>
    <NuxtWelcome></NuxtWelcome>
  </Background>
</template>

<script setup>
const title = ref('Tavie')
const description = ref('portfolio')

useHead({
  title,
  meta: [
    {
      name: 'description',
      content: description,
    },
  ],
})

const links = [
  {
    path: 'home',
    icon: 'mdi-domain',
  },
  {
    path: 'welcome',
    icon: 'mdi-Account',
  },
  {
    path: 'test',
    icon: 'mdi-domain',
  },
]
</script>

<!-- <script>
export default {
  data: () => ({
    links: ['test', 'about'],
  }),
}
</script> -->
<style>
html,
body {
  height: 100%;
}

body {
  background-image: url('/src/profile/unnamed-PhotoRoom.png-PhotoRoom.png'); /* Replace with your image path */
  background-color: rgb(99, 21, 172);
  background-position: right bottom;
}
</style>
