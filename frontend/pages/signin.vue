<script>
definePageMeta({
  layout: "auth",
});
</script>

<template>
  <section
    class="relative flex flex-wrap lg:h-screen lg:items-center bg-slate-100"
  >
    <div class="mx-auto max-w-lg">
      <div class="card w-96 bg-base-100">
        <form
          method="POST"
          action="/api/login"
          class="mt-6 mb-0 space-y-4 p-4 sm:p-6 lg:p-8"
        >
          <picture class="flex justify-center">
            <img src="/logo-black.svg" width="80" />
          </picture>

          <p class="text-center text-lg font-medium">Sign in to your account</p>

          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">Email:</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              class="input input-bordered w-full"
            />
          </div>

          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">Password:</span>
            </label>
            <input
              type="Password"
              name="password"
              placeholder="Enter password"
              class="input input-bordered w-full"
            />
          </div>

          <button class="btn btn-primary btn-block">Sign in</button>

          <p class="text-center text-sm text-gray-500">
            No account?
            <a class="underline" href="">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  </section>

  <!-- <v-container fluid class="h-100">
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
  </v-container> -->
</template>
