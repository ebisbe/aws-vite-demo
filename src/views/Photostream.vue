<template>
  <div class="bg-white shadow overflow-hidden rounded-md px-4 py-5 sm:p-6">
    <ul
      class="grid grid-cols-1 gap-6 sm:grid-cols-2 pb-4 md:grid-cols-3 lg:grid-cols-4"
      role="radiogroup"
    >
      <li v-for="(photo, key) of photos" :key="key" class="mx-6 sm:mx-0">
        <photo :photo="photo" @selected="slideOver = true" />
      </li>
    </ul>

    <div
      class="bg-white -mx-4 sm:-mx-6 -mb-6 px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
    >
      <div class="flex-1 flex justify-between sm:hidden">
        <a
          href="#"
          class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
        >
          Previous
        </a>
        <a
          href="#"
          class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
        >
          Next
        </a>
      </div>
      <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p class="text-sm text-gray-700">
            Showing
            <span class="font-medium">1</span>
            to
            <span class="font-medium">10</span>
            of
            <span class="font-medium">97</span>
            results
          </p>
        </div>
        <div>
          <nav class="relative z-0 inline-flex shadow-sm -space-x-px" aria-label="Pagination">
            <a
              href="#"
              class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span class="sr-only">Previous</span>
              <!-- Heroicon name: chevron-left -->
              <svg
                class="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              1
            </a>
            <a
              href="#"
              class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              2
            </a>
            <a
              href="#"
              class="hidden md:inline-flex relative items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              3
            </a>
            <span
              class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"
            >
              ...
            </span>
            <a
              href="#"
              class="hidden md:inline-flex relative items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              8
            </a>
            <a
              href="#"
              class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              9
            </a>
            <a
              href="#"
              class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              10
            </a>
            <a
              href="#"
              class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span class="sr-only">Next</span>
              <!-- Heroicon name: chevron-right -->
              <svg
                class="h-5 w-5"
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
            </a>
          </nav>
        </div>
      </div>
    </div>

    <notifications class="hidden" />
    <slide-over-images :open="slideOver" @close="slideOver = false" />
  </div>
</template>
<script>

  export default {
    data: () => ({
      slideOver: false,
      photos: [
        {
          name: 'Asian open bill resting',
          views: 172,
          groups: 5,
          likes: 6,
          image: 'https://live.staticflickr.com/65535/49585550211_1c0b5e50b9.jpg',
          tags: [
            'malaysia',
            'open bill stork',
            'open bill',
            'eos 80d',
            'resting',
            'rice field',
            'canon',
            'Anastomus oscitans',
            'malaysia trip',
            'Sekinchan',
            'Selangor',
            'wildlife'
          ]
        },
        {
          name: 'Ermita Sant Salvador',
          views: 868,
          groups: 12,
          likes: 8,
          image: 'https://live.staticflickr.com/65535/48421717041_6799f7e502.jpg',
          tags: ['canon', 'architecture', 'tokina', 'eos 80d']
        },
        {
          name: 'White-rumped Munia',
          views: 955,
          groups: 38,
          likes: 18,
          image: 'https://live.staticflickr.com/65535/48186898917_e5238f2595.jpg',
          tags: [
            'eating',
            'ngc',
            'wildlife',
            '400-100mm',
            'travel photography',
            'eos 80d',
            'bird',
            'Lonchura striata',
            'munia',
            'seed',
            'canon',
            'White-rumped Munia',
            'nature',
            'sri lanka'
          ]
        },
        {
          name: 'Star trails at Tagamanent',
          views: 1145,
          groups: 26,
          likes: 17,
          image: 'https://live.staticflickr.com/65535/48178270641_4c7a3445d8.jpg',
          tags: [
            'landscape',
            'longexposure',
            'startrails',
            'national park',
            'sky',
            'nigth',
            'canon',
            'eos 80d',
            'flickr',
            'tokina'
          ]
        },
        {
          name: 'Sri Lanka Frogmouth',
          views: 1955,
          groups: 98,
          likes: 98,
          private: true,
          image: 'https://live.staticflickr.com/65535/46750558035_55fb6c975b.jpg',
          tags: [
            'male',
            'endemic',
            'wildlife',
            '400-100mm',
            'travel photography',
            'eos 80d',
            'bird',
            'nature',
            'sinharaja',
            'canon',
            'moment',
            'frogmouth',
            'sri lanka',
            'flickr'
          ]
        },
        {
          name: 'Estany de font Viva',
          views: 88,
          groups: 2,
          likes: 82,
          image: 'https://live.staticflickr.com/65535/47549005572_cf474b5a9f.jpg',
          tags: [
            'lake',
            'mountains',
            'tokina',
            'snow',
            'canon',
            'pyrinees',
            'panoramic',
            'eos 80d',
            'flickr'
          ]
        }
      ]
    })
  }
</script>
