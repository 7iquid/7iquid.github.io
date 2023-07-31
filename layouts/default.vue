<template>
  <v-app id="inspire">
    <header>
      <v-app-bar class="px-3" color="white" flat density="compact">
        <!-- <v-avatar color="grey-darken-1" size="32"></v-avatar> -->

        <v-spacer></v-spacer>

        <v-tabs centered color="grey-darken-2">
          <v-tab v-for="link in links" :key="link">
            <v-list-item v-if="link.path == 'home'" :href="'/'">
              <v-icon
                size="large"
                color="green-darken-2"
                :icon="link.icon"
              ></v-icon>
            </v-list-item>
            <v-list-item v-else :href="link.path">
              <v-icon
                size="large"
                color="green-darken-2"
                :icon="link.icon"
              ></v-icon
            ></v-list-item>
          </v-tab>
        </v-tabs>
        <v-spacer></v-spacer>

        <!-- <v-avatar
        class="hidden-sm-and-down"
        color="grey-darken-1"
        size="32"
      ></v-avatar> -->
      </v-app-bar>
    </header>
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
