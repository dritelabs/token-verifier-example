<script>
definePageMeta({
  layout: "auth",
});
</script>

<template>
  <v-container fluid class="h-100">
    <v-row class="h-100" align="center" justify="center" no-gutters>
      <v-col cols="12">
        <v-card max-width="450" class="pt-12 px-10 pb-9 mx-auto">
          <div class="d-flex justify-start items-start">
            <img src="/logo-black.svg" width="90" />
          </div>
          <p class="text-h5 mt-8">Sign in</p>
          <p class="mb-6">Use your Drite Account</p>
          <form action="/api/login" method="post">
            <v-text-field
              name="email"
              label="Email"
              variant="outlined"
              required
              density="default"
            ></v-text-field>
            <v-text-field
              name="password"
              type="password"
              label="Password"
              variant="outlined"
              required
              density="default"
            ></v-text-field>
            <v-row
              class="h-100"
              align="center"
              justify="space-between"
              no-gutters
            >
              <v-btn color="primary" size="small" variant="text"
                >Create account</v-btn
              >
              <v-btn type="submit" color="primary" variant="flat">Log in</v-btn>
            </v-row>
          </form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
