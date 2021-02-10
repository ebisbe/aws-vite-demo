<template>
  <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 my-4">
    <li class="col-span-1 bg-white rounded-lg shadow" v-for="photo of photos" :key="photo.name">
      <div class="w-full flex items-center justify-between p-6 space-x-6 relative">
        <div class="flex-1 truncate">
          <div class="flex items-center space-x-3">
            <h3 class="text-gray-900 text-sm leading-5 font-medium truncate">{{ photo.name }}</h3>
            <span
              class="flex-shrink-0 inline-block px-2 py-0.5 text-teal-800 text-xs leading-4 font-medium bg-teal-100 rounded-full"
              >Admin</span
            >
          </div>
          <div class="flex mt-2 sm:flex-row sm:flex-wrap">
            <div class="flex items-center text-sm leading-5 sm:mr-6">
              <!-- Heroicon name: briefcase -->
              <svg
                class="flex-shrink-0 mr-1.5 h-5 w-5  "
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
            <div class=" flex items-center text-sm leading-5 sm:mr-6">
              <!-- Heroicon name: calendar -->
              <svg
                class="flex-shrink-0 mr-1.5 h-5 w-5 "
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
            <div class="flex items-center text-sm leading-5 ">
              <!-- Heroicon name: currency-dollar -->
              <svg
                class="flex-shrink-0 mr-1.5 h-5 w-5 "
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
        <img
          class="w-24 h-full bg-gray-300 rounded-tr-lg flex-shrink-0 absolute right-0 object-cover"
          :src="photo.image"
          :alt="photo.name"
        />
      </div>
      <div class="border-t border-gray-200">
        <div class="-mt-px flex">
          <div class="w-0 flex-1 flex border-r border-gray-200">
            <a
              href="#"
              class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-2 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500 focus:outline-none focus:ring-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
            >
              <!-- Heroicon name: mail -->
              <svg
                class="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                ></path>
              </svg>
              <span class="ml-3">Share</span>
            </a>
          </div>
          <div class="-ml-px w-0 flex-1 flex">
            <a
              href="#"
              class="relative w-0 flex-1 inline-flex items-center justify-center py-2 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500 focus:outline-none focus:ring-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
            >
              <!-- Heroicon name: phone -->
              <svg
                class="w-5 h-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                />
              </svg>
              <span class="ml-3">Select</span>
            </a>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>
