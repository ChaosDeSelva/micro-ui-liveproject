<template>
  <nav
    style="position: fixed; z-index: 10;"
    class="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full"
  >
    <div class="mb-2 sm:mb-0 inner">
      <router-link
        class="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold"
        to="/"
      >
        Micro Music UI
      </router-link>
      <div class="text-xs text-grey-dark">
        Stream Music!
      </div>
    </div>

    <div class="sm:mb-0 self-center">
      <router-link
        class="text-md no-underline text-black hover:text-blue-dark md:ml-2 px-1"
        to="/signin"
      >
        Sign In
      </router-link>
    </div>
  </nav>
</template>