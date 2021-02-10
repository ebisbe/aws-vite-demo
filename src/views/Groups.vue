<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-md ">
    <!-- Content goes here -->
    <ul>
      <li v-for="group of groups" :key="group.name" class="border-t border-gray-200">
        <div class="flex items-center px-4 py-4 sm:px-6">
          <div class="min-w-0 flex-1 flex items-center">
            <div class="flex-shrink-0 relative">
              <img class="h-12 w-12 rounded-full" :src="group.url" alt="" />
              <span
                v-if="!group.optout"
                class="absolute top-0 right-0 block h-3 w-3 rounded-full text-white ring-2 ring-white"
                :class="{ 'bg-red-400': !group.optout, 'bg-green-400': group.optout }"
              />
            </div>
            <div class="flex flex-col md:flex-row md:justify-between px-4 w-auto flex-grow">
              <div class="flex flex-col w-full md:w-2/3">
                <div
                  class="text-sm sm:text-lg sm:align-middle font-medium text-indigo-600 truncate min-w-0"
                >
                  {{ group.name }}
                </div>
                <div class="flex flex-wrap sm:flex-nowrap">
                  <div
                    class="mt-2 sm:mt-0 sm:mr-6 flex items-center text-sm leading-5 text-gray-500 w-1/3"
                  >
                    <svg
                      class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      ></path>
                    </svg>
                    {{ group.photos }}
                  </div>
                  <div
                    class="mt-2 sm:mt-0 sm:mr-6 flex items-center text-sm leading-5 text-gray-500 w-1/3"
                  >
                    <!-- Heroicon name: users -->
                    <svg
                      class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
                      />
                    </svg>
                    {{ group.users }}
                  </div>
                  <div class="mt-2 sm:mt-0 flex items-center text-sm leading-5 text-gray-500 w-1/3">
                    <svg
                      class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      ></path>
                    </svg>
                    {{ group.throttle }}
                  </div>
                </div>
              </div>
              <div
                v-if="group.tags.length"
                class="mt-2 sm:mt-0 flex flex-wrap content-around w-full md:w-1/3 justify-end space-x-2.5"
              >
                <tag v-for="tag of group.tags" :key="tag">
                  {{ tag }}
                </tag>
              </div>

              <div
                v-else
                class="mt-2 sm:mt-0 flex flex-wrap content-around w-full md:w-1/3 justify-end"
              >
                <button
                  type="button"
                  class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded
                  text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2
                  focus:ring-indigo-500"
                >
                  <svg
                    class="-ml-0.5 mr-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    ></path>
                  </svg>
                  Suggest tags
                </button>
              </div>
            </div>
            <div>
              <button
                class="flex items-center text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                aria-label="Options"
                id="options-menu"
                @click="slideOver = true"
              >
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </li>
    </ul>

    <div class="bg-gray-50">
      <nav
        class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
      >
        <div class="hidden sm:block">
          <p class="text-sm leading-5 text-gray-700">
            Showing
            <span class="font-medium">1</span>
            to
            <span class="font-medium">10</span>
            of
            <span class="font-medium">20</span>
            results
          </p>
        </div>
        <div class="flex-1 flex justify-between sm:justify-end">
          <a
            href="#"
            class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:ring-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
          >
            Previous
          </a>
          <a
            href="#"
            class="ml-3 inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:ring-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
          >
            Next
          </a>
        </div>
      </nav>
    </div>
    <SlideOver :open="slideOver" @close="slideOver = false" />
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data: () => ({
      slideOver: false,
      groups: [
        {
          url: 'https://farm6.staticflickr.com/5537/buddyicons/52240714666@N01.jpg',
          optout: true,
          name: 'Abandoned',
          photos: '1M',
          users: '80K',
          throttle: '1/1 week',
          tags: [
            'house',
            'graveyard',
            'ruins',
            'stonehenge',
            'church',
            'castle',
            'more',
            'random',
            'tags'
          ]
        },
        {
          url: 'https://farm6.staticflickr.com/5537/buddyicons/1831637@N21.jpg',
          optout: true,
          name: 'Wildlife Photographs',
          photos: '427K',
          users: '6K',
          throttle: '∞ No limit',
          tags: ['wildlife']
        },
        {
          url: 'https://farm1.staticflickr.com/139/buddyicons/62119907@N00.jpg',
          optout: false,
          name: 'Mountains Anywhere from Alps to Himalaya',
          photos: '704K',
          users: '37K',
          throttle: '5/5 day',
          tags: []
        }
      ]
    })
  }
</script>
