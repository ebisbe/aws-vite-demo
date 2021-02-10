<template>
  <!-- Left sidebar & main wrapper -->
  <div class="flex-1 min-w-0 bg-white xl:flex">
    <!-- Projects List -->
    <div class="bg-white lg:min-w-0 lg:flex-1">
      <div class="pl-4 pr-6 pt-4 pb-4 sm:pl-6 lg:pl-8 xl:pl-6 xl:pt-6">
        <div class="flex items-center">
          <h1 class="flex-1 text-lg font-medium">Groups starting from A to C</h1>
          <div class="relative">
            <button
              id="sort-menu"
              type="button"
              class="w-full bg-white border border-gray-300 rounded-md shadow-sm px-4 py-2 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              aria-haspopup="true"
              aria-expanded="false"
              @click="sort = !sort"
            >
              <!-- Heroicon name: solid/sort-ascending -->
              <svg
                class="mr-3 h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z"
                />
              </svg>
              Sort
              <!-- Heroicon name: solid/chevron-down -->
              <svg
                class="ml-2.5 -mr-1.5 h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <div
              class="origin-top-right z-10 absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
              v-show="sort"
            >
              <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="sort-menu">
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  >Name</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  >Date modified</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  >Date created</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white overflow-hidden sm:rounded-md border rounded-lg">
        <div
          class="border-b border-gray-200 bg-gray-50 rounded-t-lg px-6 py-1 text-sm font-medium text-gray-500 flex justify-around"
        >
          <template v-for="(letter, key) in alphabet" :key="letter">
            <span v-if="key !== 0" aria-hidden="true">&middot;</span>
            <button @click="somethhing" class="capitalize px-2">{{ letter }}</button>
          </template>
        </div>
        <ul class="divide-y divide-gray-200 border-gray-200">
          <li
            v-for="group in groups"
            :key="group.name"
            class="pl-4 pr-6 py-3 hover:bg-gray-50 sm:py-4 sm:pl-6 lg:pl-8 xl:pl-6"
          >
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0 relative">
                <img class="h-12 w-12 rounded-full" :src="group.url" :alt="group.name" />
                <span
                  class="absolute -top-1 -right-1 h-5 w-5 rounded-full flex items-center justify-center"
                  :class="{ 'bg-red-100': !group.optout, 'bg-green-100': group.optout }"
                  aria-hidden="true"
                >
                  <span
                    class="h-3 w-3 rounded-full"
                    :class="{ 'bg-red-400': !group.optout, 'bg-green-400': group.optout }"
                  ></span>
                </span>
              </div>
              <!-- Repo name and link -->
              <div class="w-full space-y-1.5">
                <div class="flex items-center space-x-3">
                  <span class="block">
                    <h2 class="text-sm font-medium">
                      <button @click="sliderOver = true">
                        <span class="absolute inset-0 sm:hidden" aria-hidden="true"></span>
                        {{ group.name }} <span class="sr-only">Running</span>
                      </button>
                    </h2>
                  </span>
                </div>
                <div v-if="group.tags.length" class="space-x-1.5">
                  <tag v-for="tag of group.tags" :key="tag" class="py-1">
                    {{ tag }}
                  </tag>
                </div>
                <div v-else class="hidden">
                  <button
                    type="button"
                    class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
              <div class="sm:hidden">
                <!-- Heroicon name: solid/chevron-right -->
                <svg
                  class="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <!-- Repo meta info -->
              <div class="hidden sm:flex flex-col flex-shrink-0 items-end space-y-1.5">
                <p class="flex items-center space-x-4">
                  <button
                    @click="slideOver = true"
                    class="relative text-sm text-gray-500 hover:text-gray-900 font-medium"
                  >
                    Configure
                  </button>
                  <button
                    class="relative bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    type="button"
                  >
                    <span class="sr-only">Add to favorites</span>
                    <!-- Heroicon name: solid/star -->
                    <svg
                      class="h-5 w-5 text-yellow-300 hover:text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  </button>
                </p>
                <p class="flex text-gray-500 text-sm space-x-2">
                  <span class="relative group flex items-center space-x-2.5">
                    <span
                      class="text-sm text-gray-500 group-hover:text-gray-900 font-medium truncate"
                    >
                      {{ group.photos }}
                    </span>
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-gray-500"
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
                  </span>
                  <span aria-hidden="true">&middot;</span>
                  <span class="relative group flex items-center space-x-2.5">
                    <span
                      class="text-sm text-gray-500 group-hover:text-gray-900 font-medium truncate"
                    >
                      {{ group.users }}
                    </span>
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
                      />
                    </svg>
                  </span>
                  <span aria-hidden="true">&middot;</span>
                  <span class="relative group flex items-center space-x-2.5"
                    ><svg
                      class="flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-gray-500"
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
                    <span
                      class="text-sm text-gray-500 group-hover:text-gray-900 font-medium truncate"
                    >
                      {{ group.throttle }}
                    </span>
                  </span>
                </p>
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
      </div>
    </div>
  </div>
  <!-- Activity feed -->
  <div class="bg-gray-50 pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0 xl:pr-0">
    <div class="pl-6 lg:w-80">
      <div class="pt-6 pb-2">
        <h2 class="text-sm font-semibold">Tag cloud</h2>
      </div>
      <div class="space-x-1.5">
        <tag v-for="tag in tagCloud" :key="tag.name" class="py-1">
          {{ tag.name }} [{{ tag.count }}]
        </tag>
      </div>
    </div>
    <div class="pl-6 lg:w-80">
      <div class="pt-6 pb-2">
        <h2 class="text-sm font-semibold">Activity</h2>
      </div>
      <div>
        <ul class="divide-y divide-gray-200">
          <li class="py-4">
            <div class="flex space-x-3">
              <img
                class="h-6 w-6 rounded-full"
                src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80"
                alt=""
              />
              <div class="flex-1 space-y-1">
                <div class="flex items-center justify-between">
                  <h3 class="text-sm font-medium">You</h3>
                  <p class="text-sm text-gray-500">1h</p>
                </div>
                <p class="text-sm text-gray-500">
                  Deployed Workcation (2d89f0c8 in master) to production
                </p>
              </div>
            </div>
          </li>

          <!-- More items... -->
        </ul>
        <div class="py-4 text-sm border-t border-gray-200">
          <a href="#" class="text-indigo-600 font-semibold hover:text-indigo-900"
            >View all activity <span aria-hidden="true">&rarr;</span></a
          >
        </div>
      </div>
    </div>
  </div>
  <SlideOver :open="slideOver" @close="slideOver = false" />
</template>

<script>
  export default {
    name: 'Home',
    data: () => ({
      slideOver: false,
      sort: false,
      profile: false,
      alphabet: [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z'
      ],
      tagCloud: [
        { name: 'house', count: 5 },
        { name: 'graveyard', count: 2 },
        { name: 'ruins', count: 1 },
        { name: 'mountains', count: 52 }
      ],
      groups: [
        {
          url: 'https://farm6.staticflickr.com/5537/buddyicons/52240714666@N01.jpg',
          optout: true,
          name: 'Abandoned',
          photos: '1M',
          favourite: false,
          users: '80K',
          throttle: '1/1 week',
          tags: ['house', 'graveyard', 'ruins']
        },
        {
          url: 'https://farm6.staticflickr.com/5537/buddyicons/1831637@N21.jpg',
          optout: true,
          name: 'Wildlife Photographs',
          favourite: true,
          photos: '427K',
          users: '6K',
          throttle: '∞ No limit',
          tags: ['wildlife']
        },
        {
          url: 'https://farm1.staticflickr.com/139/buddyicons/62119907@N00.jpg',
          optout: false,
          name: 'Mountains Anywhere from Alps to Himalaya',
          favourite: true,
          photos: '704K',
          users: '37K',
          throttle: '5/5 day',
          tags: ['mountains']
        }
      ]
    })
  }
</script>
