<template>
  <li class="px-6 py-5 relative">
    <div class="group flex justify-between items-center space-x-2">
      <a href="#" class="-m-1 p-1 block">
        <span class="absolute inset-0 group-hover:bg-gray-50"></span>
        <div class="flex-1 flex items-center min-w-0 relative">
          <span class="flex-shrink-0 inline-block relative">
            <img
              class="h-12 w-12 rounded-lg"
              :src="
                `https://farm${notification.photo.farm}.staticflickr.com/${notification.photo.server}/${notification.photo.photoId}_${notification.photo.secret}_s.jpg`
              "
              alt=""
            />
            <!-- <span
                          class="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full text-white ring bg-green-400"
                        ></span> -->
          </span>
          <div class="ml-4 truncate">
            <div class="text-sm leading-5 font-medium text-gray-900 truncate">
              {{ notification.message }} - {{ diffTime }}
            </div>
            <div class="text-sm leading-5 text-gray-500 truncate">
              {{ notification.group.title }} - {{ notification.photo.title }}
            </div>
          </div>
        </div>
      </a>
      <div class="relative inline-block text-left">
        <button
          class="group relative w-8 h-8 inline-flex items-center justify-center focus:outline-none"
          id="options-menu-0"
          aria-haspopup="true"
          aria-expanded="false"
          @click="dialog = !dialog"
        >
          <span
            class="flex items-center justify-center h-full w-full rounded-full group-focus:bg-gray-200 transition ease-in-out duration-150"
          >
            <svg
              class="w-5 h-5 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
              />
            </svg>
          </span>
        </button>

        <transition
          enter-active-class="transition ease-out duration-100"
          enter-class="transform opacity-0 scale-95"
          enter-to-class="transform opacity-100 scale-100"
          leave-active-class="transition ease-in duration-75"
          leave-class="transform opacity-100 scale-100"
          leave-to-class="transform opacity-0 scale-95"
        >
          <div
            class="origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg "
            v-show="dialog"
          >
            <div class="rounded-md bg-white ring-1 ring-black ring-opacity-5">
              <div
                class="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu-0"
              >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                  role="menuitem"
                  >View profile</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                  role="menuitem"
                  >Send message</a
                >
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </li>
</template>
<script>
  import { DateTime } from 'luxon'
  export default {
    props: {
      notification: {
        type: Object,
        required: true
      }
    },
    data: () => ({
      dialog: false
    }),
    computed: {
      diffTime() {
        return DateTime.fromISO(this.notification.createdAt).toRelative({ unit: 'hours' })
      }
    }
  }
  // {
  //           photoId: '28180518617',
  //           groupId: '4081225@N21',
  //           message: 'Photo added',
  //           userId: '144521588@N08',
  //           createdAt: '2020-11-14T12:05:05.801Z',
  //           photo: {
  //             photoId: '28180518617',
  //             title: 'Small',
  //             secret: '5395005d4a',
  //             farm: 1,
  //             server: 837,
  //             __typename: 'Photo'
  //           },
  //           group: { title: 'enricbgNoLimit', __typename: 'Group' },
  //           __typename: 'Notification'
  //         },
</script>
