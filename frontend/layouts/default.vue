<template>
  <v-layout>
    <v-app>
      <v-navigation-drawer rail permanent :border="0" color="grey-lighten-4">
        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-menu" value="Toggle"></v-list-item>
          <v-spacer />
          <v-list-item
            prepend-icon="mdi-view-dashboard"
            value="dashboard"
          ></v-list-item>

          <v-list-item prepend-icon="mdi-forum" value="messages"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar :elevation="0" color="grey-lighten-5">
        <!-- <template v-slot:prepend>
          <v-app-bar-nav-icon color=""></v-app-bar-nav-icon>
        </template> -->
        <v-app-bar-title>Drite</v-app-bar-title>

        <template v-slot:append>
          <v-btn icon="mdi-dots-vertical"></v-btn>
        </template>
      </v-app-bar>
      <v-navigation-drawer permanent :border="0" color="grey-lighten-5">
        <v-list :lines="false" nav density="comfortable">
          <v-list-item :value="i" rounded="lg" v-for="i in 3">
            <template v-slot:prepend>
              <v-icon icon="mdi-account"></v-icon>
            </template>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <v-container fluid>
          <slot />
        </v-container>
      </v-main>
    </v-app>
  </v-layout>
</template>
