<template>
  <div class="flex-1 min-w-0 bg-white xl:flex">
    <!-- Projects List -->
    <div class="bg-white lg:min-w-0 lg:flex-1">
      <div class="pl-4 pr-6 pt-4 pb-4 sm:pl-6 lg:pl-8 xl:pl-6 xl:pt-6">
        <div class="flex items-center">
          <h1 class="flex-1 text-lg font-medium">Scheduled</h1>
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
      <div class="bg-white overflow-hidden border rounded-lg">
        <div class="px-4 py-5 sm:p-6">
          <div class="flow-root">
            <ul class="-mb-8">
              <li v-for="(day, key, index) in organizedData" :key="key">
                <div class="relative pb-8">
                  <span
                    v-if="index != Object.keys(organizedData).length - 1"
                    class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  ></span>
                  <div class="relative flex space-x-3">
                    <div>
                      <span
                        class="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white"
                      >
                      </span>
                    </div>
                    <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                      <div class="w-full">
                        <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide mb-2">
                          {{ key }}
                        </h2>
                        <template v-for="(group, groupTitle) in day" :key="`header-${groupTitle}`">
                          <div class="relative">
                            <div class="absolute inset-0 flex items-center" aria-hidden="true">
                              <div class="w-full border-t border-gray-300"></div>
                            </div>
                            <div class="relative flex justify-between">
                              <span class="px-2 bg-white text-sm text-gray-500">
                                {{ groupTitle }}
                              </span>
                              <span class="px-2 bg-white text-sm text-gray-500">
                                {{ group.length }} photos
                              </span>
                            </div>
                          </div>

                          <ul
                            class="mt-3 mb-2 last:mb-0 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 "
                          >
                            <li
                              v-for="photo in group"
                              :key="photo.id"
                              class="col-span-1 flex shadow-sm rounded-md"
                            >
                              <div
                                class="flex-shrink-0 flex items-center justify-center w-16 text-white text-sm rounded-l-md overflow-hidden"
                              >
                                <img
                                  :src="`https://farm${photo.photo.farm}.staticflickr.com/${photo.photo.server}/${photo.photoId}_${photo.photo.secret}_q.jpg`"
                                />
                              </div>
                              <div
                                class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate"
                              >
                                <div class="flex-1 px-4 py-2 text-sm truncate">
                                  <a
                                    href="#"
                                    class="text-gray-900 font-medium hover:text-gray-600"
                                    >{{ photo.photo.title }}</a
                                  >
                                  <p class="text-gray-500">16 Members</p>
                                </div>
                                <div class="flex-shrink-0 pr-2">
                                  <button
                                    class="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                  >
                                    <span class="sr-only">Open options</span>
                                    <!-- Heroicon name: dots-vertical -->
                                    <svg
                                      class="w-5 h-5"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path
                                        d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
                                      />
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </template>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-gray-50 pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0 xl:pr-0">
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
</template>
<script>
  import { DateTime } from 'luxon'
  import _groupBy from 'lodash/groupBy'
  import _sortBy from 'lodash/sortBy'

  export default {
    data: () => ({
      scheduledPhotos: [
        {
          userId: '144521588@N08',
          groupId: '4584000@N20',
          photoId: '47083824154',
          scheduledAt: 1612234800,
          preventTrigger: null,
          photo: {
            title: 'Bosc de les creus',
            server: 65535,
            secret: '1a24be7223',
            farm: 66,
            isPublic: true,
            __typename: 'Photo'
          },
          group: { title: 'enricbg1Dayly', __typename: 'Group' },
          __typename: 'ScheduledPhoto'
        },
        {
          userId: '144521588@N08',
          groupId: '3649765@N21',
          photoId: '47831723312',
          scheduledAt: 1612234800,
          preventTrigger: null,
          photo: {
            title: 'David Portrait',
            server: 65535,
            secret: '272375e5ab',
            farm: 66,
            isPublic: true,
            __typename: 'Photo'
          },
          group: { title: 'enricbg3Dayly', __typename: 'Group' },
          __typename: 'ScheduledPhoto'
        },
        {
          userId: '144521588@N08',
          groupId: '3649765@N21',
          photoId: '46967641185',
          scheduledAt: 1612234800,
          preventTrigger: null,
          photo: {
            title: 'Leo Portrait',
            server: 65535,
            secret: 'e9edd61780',
            farm: 66,
            isPublic: true,
            __typename: 'Photo'
          },
          group: { title: 'enricbg3Dayly', __typename: 'Group' },
          __typename: 'ScheduledPhoto'
        },
        {
          userId: '144521588@N08',
          groupId: '3649765@N21',
          photoId: '47831723312',
          scheduledAt: 1612234800,
          preventTrigger: null,
          photo: {
            title: 'David Portrait',
            server: 65535,
            secret: '272375e5ab',
            farm: 66,
            isPublic: true,
            __typename: 'Photo'
          },
          group: { title: 'enricbg3Dayly', __typename: 'Group' },
          __typename: 'ScheduledPhoto'
        },
        {
          userId: '144521588@N08',
          groupId: '3649765@N21',
          photoId: '46967641185',
          scheduledAt: 1612234800,
          preventTrigger: null,
          photo: {
            title: 'Leo Portrait',
            server: 65535,
            secret: 'e9edd61780',
            farm: 66,
            isPublic: true,
            __typename: 'Photo'
          },
          group: { title: 'enricbg3Dayly', __typename: 'Group' },
          __typename: 'ScheduledPhoto'
        },
        {
          userId: '144521588@N08',
          groupId: '3649765@N21',
          photoId: '47831785772',
          scheduledAt: 1612234800,
          preventTrigger: null,
          photo: {
            title: 'Dani Portrait',
            server: 65535,
            secret: 'ba0e5bc130',
            farm: 66,
            isPublic: true,
            __typename: 'Photo'
          },
          group: { title: 'enricbg3Dayly', __typename: 'Group' },
          __typename: 'ScheduledPhoto'
        },
        {
          userId: '144521588@N08',
          groupId: '3649765@N21',
          photoId: '28352713947',
          scheduledAt: 1612321200,
          preventTrigger: null,
          photo: {
            title: 'Little Details',
            server: 1786,
            secret: '692963e96c',
            farm: 2,
            isPublic: true,
            __typename: 'Photo'
          },
          group: { title: 'enricbg3Dayly', __typename: 'Group' },
          __typename: 'ScheduledPhoto'
        },
        {
          userId: '144521588@N08',
          groupId: '4584000@N20',
          photoId: '47831723312',
          scheduledAt: 1612321200,
          preventTrigger: null,
          photo: {
            title: 'David Portrait',
            server: 65535,
            secret: '272375e5ab',
            farm: 66,
            isPublic: true,
            __typename: 'Photo'
          },
          group: { title: 'enricbg1Dayly', __typename: 'Group' },
          __typename: 'ScheduledPhoto'
        },
        {
          userId: '144521588@N08',
          groupId: '3649765@N21',
          photoId: '28565788547',
          scheduledAt: 1612321200,
          preventTrigger: null,
          photo: {
            title: 'Shades over my head',
            server: 1821,
            secret: '9f8b3fbeb1',
            farm: 2,
            isPublic: true,
            __typename: 'Photo'
          },
          group: { title: 'enricbg3Dayly', __typename: 'Group' },
          __typename: 'ScheduledPhoto'
        },
        {
          userId: '144521588@N08',
          groupId: '3649765@N21',
          photoId: '42823152460',
          scheduledAt: 1612321200,
          preventTrigger: null,
          photo: {
            title: 'Layered mountains',
            server: 1892,
            secret: '5ed8d79bd1',
            farm: 2,
            isPublic: true,
            __typename: 'Photo'
          },
          group: { title: 'enricbg3Dayly', __typename: 'Group' },
          __typename: 'ScheduledPhoto'
        },
        {
          userId: '144521588@N08',
          groupId: '4584000@N20',
          photoId: '28352713947',
          scheduledAt: 1612407600,
          preventTrigger: null,
          photo: {
            title: 'Little Details',
            server: 1786,
            secret: '692963e96c',
            farm: 2,
            isPublic: true,
            __typename: 'Photo'
          },
          group: { title: 'enricbg1Dayly', __typename: 'Group' },
          __typename: 'ScheduledPhoto'
        },
        {
          userId: '144521588@N08',
          groupId: '3649765@N21',
          photoId: '43707836071',
          scheduledAt: 1612407600,
          preventTrigger: null,
          photo: {
            title: 'Blood Moon trail',
            server: 936,
            secret: 'fd8d56d95e',
            farm: 1,
            isPublic: true,
            __typename: 'Photo'
          },
          group: { title: 'enricbg3Dayly', __typename: 'Group' },
          __typename: 'ScheduledPhoto'
        },
        {
          userId: '144521588@N08',
          groupId: '3649765@N21',
          photoId: '28474439737',
          scheduledAt: 1612407600,
          preventTrigger: null,
          photo: {
            title: 'Enjoying the moonlight',
            server: 1830,
            secret: '167c2468d7',
            farm: 2,
            isPublic: true,
            __typename: 'Photo'
          },
          group: { title: 'enricbg3Dayly', __typename: 'Group' },
          __typename: 'ScheduledPhoto'
        },
        {
          userId: '144521588@N08',
          groupId: '3649765@N21',
          photoId: '42255618145',
          scheduledAt: 1612407600,
          preventTrigger: null,
          photo: {
            title: 'Paradise flycatcher',
            server: 1763,
            secret: '78f67b695a',
            farm: 2,
            isPublic: true,
            __typename: 'Photo'
          },
          group: { title: 'enricbg3Dayly', __typename: 'Group' },
          __typename: 'ScheduledPhoto'
        },
        {
          userId: '144521588@N08',
          groupId: '3649765@N21',
          photoId: '42356907064',
          scheduledAt: 1612494000,
          preventTrigger: null,
          photo: {
            title: 'King of shit',
            server: 1783,
            secret: '8ac99b722b',
            farm: 2,
            isPublic: true,
            __typename: 'Photo'
          },
          group: { title: 'enricbg3Dayly', __typename: 'Group' },
          __typename: 'ScheduledPhoto'
        },
        {
          userId: '144521588@N08',
          groupId: '3649765@N21',
          photoId: '43446205062',
          scheduledAt: 1612494000,
          preventTrigger: null,
          photo: {
            title: 'Hanging out',
            server: 1789,
            secret: 'e36bc4cf08',
            farm: 2,
            isPublic: true,
            __typename: 'Photo'
          },
          group: { title: 'enricbg3Dayly', __typename: 'Group' },
          __typename: 'ScheduledPhoto'
        },
        {
          userId: '144521588@N08',
          groupId: '4584000@N20',
          photoId: '28565788547',
          scheduledAt: 1612494000,
          preventTrigger: null,
          photo: {
            title: 'Shades over my head',
            server: 1821,
            secret: '9f8b3fbeb1',
            farm: 2,
            isPublic: true,
            __typename: 'Photo'
          },
          group: { title: 'enricbg1Dayly', __typename: 'Group' },
          __typename: 'ScheduledPhoto'
        }
      ]
    }),
    computed: {
      organizedData() {
        const mappedData = this.scheduledPhotos.map(photo => {
          const date = DateTime.fromSeconds(photo.scheduledAt)
          photo.dayOfYear = date.toRelativeCalendar()

          return photo
        })

        const groupedByDay = _groupBy(_sortBy(mappedData, 'group.title'), 'dayOfYear')
        for (const key in groupedByDay) {
          groupedByDay[key] = _groupBy(groupedByDay[key], 'group.title')
        }

        return groupedByDay
      }
    }
  }
</script>
