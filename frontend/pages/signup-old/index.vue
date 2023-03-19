<template>
  <v-main class="bg-grey-lighten-3">
    <v-container class="h-100">
      <v-row class="h-100" align="center" justify="center">
        <v-col cols="12" sm="6">
          <v-row>
            <v-col>
              <p class="text-h4">Create your Drite Account</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-text-field
                label="First name"
                variant="outlined"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                label="Last name"
                variant="outlined"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-text-field
                label="Email"
                variant="outlined"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-text-field
                type="password"
                label="Password"
                variant="outlined"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                type="password"
                label="Confirm"
                variant="outlined"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <NuxtLink to="/signup/step2">
            <v-btn color="primary" size="large" variant="flat"> Next </v-btn>
          </NuxtLink>
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
