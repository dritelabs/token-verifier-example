<template>
  <v-main class="bg-grey-lighten-3">
    <v-container class="h-100">
      <v-row class="h-100" align="center" justify="center">
        <v-col cols="12" sm="6">
          <p class="text-h4">Welcome back.</p>
          <p class="text-subtitle-1 mb-6">
            New to Drite? <a href="">Sign up</a>
          </p>
          <v-row>
            <v-col cols="12">
              <v-text-field
                label="Phone number"
                variant="outlined"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4">
              <v-select
                variant="outlined"
                label="Month"
                :items="[
                  'California',
                  'Colorado',
                  'Florida',
                  'Georgia',
                  'Texas',
                  'Wyoming',
                ]"
              ></v-select>
            </v-col>
            <v-col cols="4">
              <v-text-field
                label="Day"
                variant="outlined"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field
                label="Year"
                variant="outlined"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-select
                variant="outlined"
                label="Gender"
                :items="['California', 'Colorado', 'Florida']"
              ></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto">
              <!-- <NuxtLink to="/signup"> -->
              <v-btn color="primary" size="large" variant="plain"> Back </v-btn>
              <!-- </NuxtLink> -->
            </v-col>
            <v-col cols="auto">
              <NuxtLink to="/signup/step2">
                <v-btn color="primary" size="large" variant="flat">
                  Next
                </v-btn>
              </NuxtLink>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data: () => ({
    links: ["Dashboard", "Messages", "Profile", "Updates"],
  }),
};
</script>
