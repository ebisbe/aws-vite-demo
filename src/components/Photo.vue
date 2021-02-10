<template>
  <div
    @click="$emit('selected')"
    tabindex="0"
    class="col-span-1 flex flex-col rounded-lg overflow-hidden cursor-pointer focus:outline-none hover:ring-2 hover:ring-indigo-500 focus:ring focus:ring-indigo-700"
  >
    <div class="flex-1 flex flex-col">
      <div class="relative text-white">
        <div class="absolute bottom-0 left-0 w-full px-4 py-2 bg-gray-600 bg-opacity-50">
          <div class="text-lg leading-6 font-medium space-y-1">
            <h4>{{ photo.name }}</h4>
          </div>
          <div class="flex mt-2 sm:flex-row sm:flex-wrap">
            <div class="flex items-center text-sm leading-5 w-1/3">
              <!-- Heroicon name: briefcase -->
              <svg
                class="flex-shrink-0 mr-1.5 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                ></path>
              </svg>
              {{ photo.views }}
            </div>
            <div class="flex items-center text-sm leading-5 w-1/3">
              <!-- Heroicon name: calendar -->
              <svg
                class="flex-shrink-0 mr-1.5 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                ></path>
              </svg>
              {{ photo.groups }}
            </div>
            <div class="flex items-center text-sm leading-5 w-1/3">
              <!-- Heroicon name: currency-dollar -->
              <svg
                class="flex-shrink-0 mr-1.5 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                ></path>
              </svg>
              {{ photo.likes }}
            </div>
          </div>
        </div>
        <span
          v-show="photo.private"
          class="absolute right-3 top-3 h-8 w-8 rounded-full bg-gray-600 bg-opacity-50 flex items-center justify-center"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
            ></path>
          </svg>
        </span>
        <img class="object-cover h-48 w-full" :src="photo.image" :alt="photo.name" />
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      photo: {
        type: Object,
        required: true
      }
    }
  }
</script>
