<template>
  <v-app id="inspire">
    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <v-col cols="12" sm="2">
            <v-sheet rounded="lg" min-height="268">
              <!--  -->
            </v-sheet>
          </v-col>

          <v-col cols="12" sm="8">
            <v-sheet min-height="70vh" rounded="lg">
              <!--  -->
              <slot />
            </v-sheet>
          </v-col>

          <v-col cols="12" sm="2">
            <v-sheet rounded="lg" min-height="268">
              <!--  -->
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
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
