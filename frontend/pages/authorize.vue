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
        <form action="" class="mt-6 mb-0 p-4 sm:p-6 lg:p-8">
          <!-- <picture class="flex justify-center">
            <img src="/logo-black.svg" width="80" />
          </picture> -->

          <span class="text-center text-2xl font-medium text-primary">
            Google Oauth 2.0 Playground
          </span>
          <span class="text-center text-2xl font-medium">
            wants access to your Drite Account
          </span>

          <button class="btn btn-primary btn-block">Allow</button>
          <button class="btn btn-ghost btn-block">Cancel</button>
        </form>
      </div>
    </div>
  </section>
</template>
