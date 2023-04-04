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
      <div class="card bg-base-100 p-4 sm:p-6 lg:p-8 space-y-4">
        <picture class="flex justify-center">
          <img src="/logo-black.svg" width="80" />
        </picture>
        <p class="text-center text-lg font-medium">Create your Drite Account</p>
        <form action="">
          <div class="grid grid-cols-6 gap-6">
            <div class="form-control col-span-6 sm:col-span-3">
              <label class="label">
                <span class="label-text">First name:</span>
              </label>
              <input
                type="text"
                placeholder="Enter first name"
                class="input input-bordered w-full"
              />
            </div>
            <div class="form-control col-span-6 sm:col-span-3">
              <label class="label">
                <span class="label-text">Last name:</span>
              </label>
              <input
                type="text"
                placeholder="Enter last name"
                class="input input-bordered w-full"
              />
            </div>

            <div class="form-control col-span-6">
              <label class="label">
                <span class="label-text">Email:</span>
              </label>
              <input
                type="email"
                placeholder="Enter email"
                class="input input-bordered w-full"
              />
            </div>

            <div class="form-control col-span-6 sm:col-span-3">
              <label class="label">
                <span class="label-text">Password:</span>
              </label>
              <input
                type="password"
                placeholder="Enter password"
                class="input input-bordered w-full"
              />
            </div>

            <div class="form-control col-span-6 sm:col-span-3">
              <label class="label">
                <span class="label-text">Password confirmation:</span>
              </label>
              <input
                type="password"
                placeholder="Enter password"
                class="input input-bordered w-full"
              />
            </div>

            <div class="form-control col-span-6">
              <label class="cursor-pointer label">
                <input type="checkbox" class="checkbox checkbox-primary" />
                <span class="label-text text-sm text-gray-700 ml-4">
                  I want to receive emails about events, product updates and
                  company announcements.
                </span>
              </label>
            </div>

            <div class="col-span-6">
              <p class="text-sm text-gray-500">
                By creating an account, you agree to our
                <a href="#" class="text-gray-700 underline">
                  terms and conditions
                </a>
                and
                <a href="#" class="text-gray-700 underline">privacy policy</a>.
              </p>
            </div>

            <div class="col-span-6">
              <button class="btn btn-primary">Create an account</button>

              <!-- <p class="mt-4 text-sm text-gray-500 sm:mt-0">
              Already have an account?
              <a href="#" class="text-gray-700 underline">Log in</a>.
            </p> -->
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
