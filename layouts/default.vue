<template>
  <v-app>
    <Menu />
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col>
            <v-sheet elevation="10" min-height="70vh" rounded="sm">
              <Nuxt />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <!-- <v-footer :padless="padless" app>
      <v-card-text>
        {{ new Date().getFullYear() }} — Padon Consulting, LLC
      </v-card-text>
    </v-footer> -->
  </v-app>
</template>
