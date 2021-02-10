<template>
  <div class="fixed inset-0 overflow-hidden" v-show="content">
    <div class="absolute inset-0 overflow-hidden">
      <transition
        appear
        enter-active-class="ease-in-out duration-500"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="ease-in-out duration-500"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
        @after-leave="content = false"
      >
        <div
          class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
          v-show="open"
          @click="$emit('close')"
        ></div>
      </transition>

      <section
        class="absolute inset-y-0 right-0 pl-10 max-w-full flex"
        aria-labelledby="slide-over-heading"
      >
        <transition
          appear
          enter-active-class="transform transition ease-in-out duration-500 sm:duration-700"
          enter-from-class="translate-x-full"
          enter-to-class="translate-x-0"
          leave-active-class="transform transition ease-in-out duration-500 sm:duration-700"
          leave-from-class="translate-x-0"
          leave-to-class="translate-x-full"
        >
          <div class="w-screen max-w-md" v-show="open">
            <form class="h-full divide-y divide-gray-200 flex flex-col bg-white shadow-xl">
              <div class="flex-1 h-0 overflow-y-auto">
                <div class="py-6 px-4 bg-indigo-700 sm:px-6">
                  <div class="flex items-center justify-between">
                    <h2 id="slide-over-heading" class="text-lg font-medium text-white">
                      Manage tags
                    </h2>
                    <div class="ml-3 h-7 flex items-center">
                      <button
                        @click="open = false"
                        type="button"
                        class="bg-indigo-700 rounded-md text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                      >
                        <span class="sr-only">Close panel</span>
                        <!-- Heroicon name: x -->
                        <svg
                          class="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div class="mt-1">
                    <p class="text-sm text-indigo-300">
                      Add or remove tags for 'Star trails at Tagamanent' group.
                    </p>
                  </div>
                </div>
                <div class="flex-1 flex flex-col justify-between">
                  <div class="px-4 divide-y divide-gray-200 sm:px-6">
                    <div class="space-y-6 pt-6 pb-5">
                      <label for="add_team_members" class="block text-sm font-medium text-gray-700">
                        Tags
                      </label>
                      <p id="add_team_members_helper" class="sr-only">Search by email address</p>
                      <div class="flex">
                        <div class="flex-grow">
                          <input
                            type="text"
                            name="add_team_members"
                            id="add_team_members"
                            class="block w-full shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm border-gray-300 rounded-md"
                            placeholder="forest, mountain"
                            aria-describedby="add_team_members_helper"
                          />
                        </div>
                        <span class="ml-3">
                          <button
                            type="button"
                            class="bg-white inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
                          >
                            <!-- Heroicon name: plus -->
                            <svg
                              class="-ml-2 mr-1 h-5 w-5 text-gray-400"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            <span>Add</span>
                          </button>
                        </span>
                      </div>

                      <div v-for="tag of tags" :key="tag.name">
                        <h3 class="text-sm font-medium text-gray-700">
                          {{ tag.name }} [{{ tag.photos.length }}]
                        </h3>
                        <div class="mt-2">
                          <div class="flex items-center space-x-2">
                            <div class="flex flex-shrink-0 -space-x-1">
                              <img
                                v-for="(sample, key) of tag.photos.slice(0, 6)"
                                :key="key"
                                class="max-w-none h-16 w-16 rounded-full text-white ring ring-white hover:ring-blue-300 hover:rounded-lg hover:z-10"
                                :src="`${sample}?${tag.name},${key}`"
                                alt=""
                              />
                            </div>

                            <span class="flex-shrink-0 text-sm leading-5 font-medium">
                              <button
                                type="button"
                                class="flex-shrink-0 bg-white inline-flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:text-gray-500 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              >
                                <span class="sr-only">Remove tag</span>
                                <!-- Heroicon name: trash -->
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
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  ></path>
                                </svg>
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="pt-4 pb-6">
                      <div class="flex text-sm">
                        <a
                          href="#"
                          class="group inline-flex items-center font-medium text-indigo-600 hover:text-indigo-900"
                        >
                          <!-- Heroicon name: link -->
                          <svg
                            class="h-5 w-5 text-indigo-500 group-hover:text-indigo-900"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <span class="ml-2"> Star trails at Tagamanent </span>
                        </a>
                      </div>
                      <div class="mt-4 flex text-sm">
                        <a
                          href="#"
                          class="group inline-flex items-center text-gray-500 hover:text-gray-900"
                        >
                          <!-- Heroicon name: question-mark-circle -->
                          <svg
                            class="h-5 w-5 text-gray-400 group-hover:text-gray-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <span class="ml-2"> Learn more about sharing </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex-shrink-0 px-4 py-4 flex justify-end">
                <button
                  type="button"
                  class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  class="ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </transition>
      </section>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      open: {
        type: Boolean,
        default: false
      }
    },
    emits: ['close'],
    watch: {
      open(value) {
        if (value) {
          this.content = true
        }
      }
    },
    data: () => ({
      content: false,
      tags: [
        {
          name: 'Woods',
          photos: [
            'https://source.unsplash.com/random/256x256',
            'https://source.unsplash.com/random/256x256',
            'https://source.unsplash.com/random/256x256',
            'https://source.unsplash.com/random/256x256',
            'https://source.unsplash.com/random/256x256',
            'https://source.unsplash.com/random/256x256'
          ]
        },
        {
          name: 'Cities',
          photos: [
            'https://source.unsplash.com/random/256x256',
            'https://source.unsplash.com/random/256x256',
            'https://source.unsplash.com/random/256x256',
            'https://source.unsplash.com/random/256x256',
            'https://source.unsplash.com/random/256x256',
            'https://source.unsplash.com/random/256x256',
            'https://source.unsplash.com/random/256x256',
            'https://source.unsplash.com/random/256x256',
            'https://source.unsplash.com/random/256x256',
            'https://source.unsplash.com/random/256x256'
          ]
        }
      ]
    })
  }
</script>
