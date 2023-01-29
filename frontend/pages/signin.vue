<script>
definePageMeta({
  layout: "auth",
});
</script>

<template>
  <v-row class="h-100" align="center" justify="center" no-gutters>
    <v-col cols="12" sm="5">
      <p class="text-h4">Welcome back.</p>
      <p class="text-subtitle-1 mb-6">New to Drite? <a href="">Sign up</a></p>
      <v-text-field label="Email" variant="outlined" required></v-text-field>
      <v-text-field
        type="password"
        label="Password"
        variant="outlined"
        required
      ></v-text-field>
      <v-btn color="primary" size="large" variant="flat"> Log in </v-btn>
    </v-col>
  </v-row>
</template>
