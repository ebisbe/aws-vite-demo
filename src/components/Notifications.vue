<template>
  <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
  <div class="fixed inset-0 overflow-hidden">
    <div class="absolute inset-0 overflow-hidden">
      <section class="absolute inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16">
        <!--
        Slide-over panel, show/hide based on slide-over state.

        Entering: "transform transition ease-in-out duration-500 sm:duration-700"
          From: "translate-x-full"
          To: "translate-x-0"
        Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
          From: "translate-x-0"
          To: "translate-x-full"
      -->
        <div class="w-screen max-w-md">
          <div class="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
            <header class="p-6">
              <div class="flex items-start justify-between space-x-3">
                <h2 class="text-lg leading-7 font-medium text-gray-900">
                  Notifications
                </h2>
                <div class="h-7 flex items-center">
                  <button
                    aria-label="Close panel"
                    class="text-gray-400 hover:text-gray-500 transition ease-in-out duration-150"
                  >
                    <!-- Heroicon name: x -->
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
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
            </header>
            <div class="border-b border-gray-200">
              <div class="px-6">
                <nav class="-mb-px flex space-x-6">
                  <a
                    class="whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm leading-5 focus:outline-none cursor-pointer"
                    :class="{
                      'border-indigo-500 text-indigo-600 focus:text-indigo-800 focus:border-indigo-700':
                        filter === null,
                      'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300':
                        filter !== null
                    }"
                    @click.stop="filter = null"
                    aria-current="page"
                    >All</a
                  >

                  <a
                    class="whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm leading-5 focus:outline-none cursor-pointer"
                    :class="{
                      'border-indigo-500 text-indigo-600 focus:text-indigo-800 focus:border-indigo-700':
                        filter === 'byGroup',
                      'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300':
                        filter !== 'byGroup'
                    }"
                    @click.stop="filter = 'byGroup'"
                    >By Group</a
                  >

                  <a
                    @click.stop="filter = 'byPhoto'"
                    class="whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm leading-5 focus:outline-none cursor-pointer"
                    :class="{
                      'border-indigo-500 text-indigo-600 focus:text-indigo-800 focus:border-indigo-700':
                        filter === 'byPhoto',
                      'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300':
                        filter !== 'byPhoto'
                    }"
                    >By photo</a
                  >
                </nav>
              </div>
            </div>
            <ul class="divide-y divide-gray-200 overflow-y-auto">
              <notifications-list
                v-for="notification of filteredNotifications"
                :key="`${notification.photoId}-${notification.groupId}-${notification.createdAt}`"
                :notification="notification"
              />
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>

  export default {
    data: () => ({
      filter: null,
      notifications: [
        {
          photoId: '33991729988',
          groupId: '4081235@N21',
          message: 'Photo added',
          userId: '144521588@N08',
          createdAt: '2020-11-14T18:38:43.237Z',
          photo: {
            photoId: '33991729988',
            title: 'Over the rainbow',
            secret: 'b9a6963b13',
            farm: 66,
            server: 65535,
            __typename: 'Photo'
          },
          group: { title: 'enricbg5Weekly', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '33991729988',
          groupId: '3649765@N21',
          message: 'Photo added',
          userId: '144521588@N08',
          createdAt: '2020-11-14T18:38:37.302Z',
          photo: {
            photoId: '33991729988',
            title: 'Over the rainbow',
            secret: 'b9a6963b13',
            farm: 66,
            server: 65535,
            __typename: 'Photo'
          },
          group: { title: 'enricbg3Dayly', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '33991729988',
          groupId: '4584000@N20',
          message: 'Photo scheduled',
          userId: '144521588@N08',
          createdAt: '2020-11-14T18:38:36.443Z',
          photo: {
            photoId: '33991729988',
            title: 'Over the rainbow',
            secret: 'b9a6963b13',
            farm: 66,
            server: 65535,
            __typename: 'Photo'
          },
          group: { title: 'enricbg1Dayly', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '46750558035',
          groupId: '4081235@N21',
          message: 'Photo added',
          userId: '144521588@N08',
          createdAt: '2020-11-14T18:38:35.777Z',
          photo: {
            photoId: '46750558035',
            title: 'Sri Lanka frogmouth',
            secret: '55fb6c975b',
            farm: 66,
            server: 65535,
            __typename: 'Photo'
          },
          group: { title: 'enricbg5Weekly', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '46750558035',
          groupId: '3649765@N21',
          message: 'Photo added',
          userId: '144521588@N08',
          createdAt: '2020-11-14T18:38:34.831Z',
          photo: {
            photoId: '46750558035',
            title: 'Sri Lanka frogmouth',
            secret: '55fb6c975b',
            farm: 66,
            server: 65535,
            __typename: 'Photo'
          },
          group: { title: 'enricbg3Dayly', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '46750558035',
          groupId: '4584000@N20',
          message: 'Photo scheduled',
          userId: '144521588@N08',
          createdAt: '2020-11-14T18:38:31.555Z',
          photo: {
            photoId: '46750558035',
            title: 'Sri Lanka frogmouth',
            secret: '55fb6c975b',
            farm: 66,
            server: 65535,
            __typename: 'Photo'
          },
          group: { title: 'enricbg1Dayly', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '40614008083',
          groupId: '4081235@N21',
          message: 'Photo added',
          userId: '144521588@N08',
          createdAt: '2020-11-14T18:38:30.541Z',
          photo: {
            photoId: '40614008083',
            title: 'Avoiding the sun',
            secret: 'd105ddb6ce',
            farm: 66,
            server: 65535,
            __typename: 'Photo'
          },
          group: { title: 'enricbg5Weekly', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '40614008083',
          groupId: '3649765@N21',
          message: 'Photo added',
          userId: '144521588@N08',
          createdAt: '2020-11-14T18:38:29.670Z',
          photo: {
            photoId: '40614008083',
            title: 'Avoiding the sun',
            secret: 'd105ddb6ce',
            farm: 66,
            server: 65535,
            __typename: 'Photo'
          },
          group: { title: 'enricbg3Dayly', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '40614008083',
          groupId: '4584000@N20',
          message: 'Photo added',
          userId: '144521588@N08',
          createdAt: '2020-11-14T18:38:28.128Z',
          photo: {
            photoId: '40614008083',
            title: 'Avoiding the sun',
            secret: 'd105ddb6ce',
            farm: 66,
            server: 65535,
            __typename: 'Photo'
          },
          group: { title: 'enricbg1Dayly', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '33991729988',
          groupId: '4081235@N21',
          message: 'Processing photo',
          userId: '144521588@N08',
          createdAt: '2020-11-14T18:38:25.604Z',
          photo: {
            photoId: '33991729988',
            title: 'Over the rainbow',
            secret: 'b9a6963b13',
            farm: 66,
            server: 65535,
            __typename: 'Photo'
          },
          group: { title: 'enricbg5Weekly', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '33991729988',
          groupId: '3649765@N21',
          message: 'Processing photo',
          userId: '144521588@N08',
          createdAt: '2020-11-14T18:38:25.591Z',
          photo: {
            photoId: '33991729988',
            title: 'Over the rainbow',
            secret: 'b9a6963b13',
            farm: 66,
            server: 65535,
            __typename: 'Photo'
          },
          group: { title: 'enricbg3Dayly', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '33991729988',
          groupId: '4584000@N20',
          message: 'Processing photo',
          userId: '144521588@N08',
          createdAt: '2020-11-14T18:38:25.584Z',
          photo: {
            photoId: '33991729988',
            title: 'Over the rainbow',
            secret: 'b9a6963b13',
            farm: 66,
            server: 65535,
            __typename: 'Photo'
          },
          group: { title: 'enricbg1Dayly', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '46750558035',
          groupId: '4081235@N21',
          message: 'Processing photo',
          userId: '144521588@N08',
          createdAt: '2020-11-14T18:38:25.564Z',
          photo: {
            photoId: '46750558035',
            title: 'Sri Lanka frogmouth',
            secret: '55fb6c975b',
            farm: 66,
            server: 65535,
            __typename: 'Photo'
          },
          group: { title: 'enricbg5Weekly', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '46750558035',
          groupId: '3649765@N21',
          message: 'Processing photo',
          userId: '144521588@N08',
          createdAt: '2020-11-14T18:38:25.551Z',
          photo: {
            photoId: '46750558035',
            title: 'Sri Lanka frogmouth',
            secret: '55fb6c975b',
            farm: 66,
            server: 65535,
            __typename: 'Photo'
          },
          group: { title: 'enricbg3Dayly', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '46750558035',
          groupId: '4584000@N20',
          message: 'Processing photo',
          userId: '144521588@N08',
          createdAt: '2020-11-14T18:38:25.543Z',
          photo: {
            photoId: '46750558035',
            title: 'Sri Lanka frogmouth',
            secret: '55fb6c975b',
            farm: 66,
            server: 65535,
            __typename: 'Photo'
          },
          group: { title: 'enricbg1Dayly', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '40614008083',
          groupId: '4081235@N21',
          message: 'Processing photo',
          userId: '144521588@N08',
          createdAt: '2020-11-14T18:38:25.523Z',
          photo: {
            photoId: '40614008083',
            title: 'Avoiding the sun',
            secret: 'd105ddb6ce',
            farm: 66,
            server: 65535,
            __typename: 'Photo'
          },
          group: { title: 'enricbg5Weekly', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '40614008083',
          groupId: '3649765@N21',
          message: 'Processing photo',
          userId: '144521588@N08',
          createdAt: '2020-11-14T18:38:25.484Z',
          photo: {
            photoId: '40614008083',
            title: 'Avoiding the sun',
            secret: 'd105ddb6ce',
            farm: 66,
            server: 65535,
            __typename: 'Photo'
          },
          group: { title: 'enricbg3Dayly', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '40614008083',
          groupId: '4584000@N20',
          message: 'Processing photo',
          userId: '144521588@N08',
          createdAt: '2020-11-14T18:38:25.203Z',
          photo: {
            photoId: '40614008083',
            title: 'Avoiding the sun',
            secret: 'd105ddb6ce',
            farm: 66,
            server: 65535,
            __typename: 'Photo'
          },
          group: { title: 'enricbg1Dayly', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '28180518617',
          groupId: '4081225@N21',
          message: 'Photo added',
          userId: '144521588@N08',
          createdAt: '2020-11-14T12:05:05.801Z',
          photo: {
            photoId: '28180518617',
            title: 'Small',
            secret: '5395005d4a',
            farm: 1,
            server: 837,
            __typename: 'Photo'
          },
          group: { title: 'enricbgNoLimit', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '42309632354',
          groupId: '4081225@N21',
          message: 'Photo added',
          userId: '144521588@N08',
          createdAt: '2020-11-14T12:05:05.177Z',
          photo: {
            photoId: '42309632354',
            title: 'Amir Temur maqbarasi',
            secret: '50e2e2374b',
            farm: 1,
            server: 845,
            __typename: 'Photo'
          },
          group: { title: 'enricbgNoLimit', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '42356907064',
          groupId: '4081225@N21',
          message: 'Photo added',
          userId: '144521588@N08',
          createdAt: '2020-11-14T12:05:04.270Z',
          photo: {
            photoId: '42356907064',
            title: 'King of shit',
            secret: '8ac99b722b',
            farm: 2,
            server: 1783,
            __typename: 'Photo'
          },
          group: { title: 'enricbgNoLimit', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '42255618145',
          groupId: '4081225@N21',
          message: 'Photo added',
          userId: '144521588@N08',
          createdAt: '2020-11-14T12:05:03.661Z',
          photo: {
            photoId: '42255618145',
            title: 'Paradise flycatcher',
            secret: '78f67b695a',
            farm: 2,
            server: 1763,
            __typename: 'Photo'
          },
          group: { title: 'enricbgNoLimit', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '28474439737',
          groupId: '4081225@N21',
          message: 'Photo added',
          userId: '144521588@N08',
          createdAt: '2020-11-14T12:05:02.894Z',
          photo: {
            photoId: '28474439737',
            title: 'Enjoying the moonlight',
            secret: '167c2468d7',
            farm: 2,
            server: 1830,
            __typename: 'Photo'
          },
          group: { title: 'enricbgNoLimit', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '43258208591',
          groupId: '4081225@N21',
          message: 'Photo added',
          userId: '144521588@N08',
          createdAt: '2020-11-14T12:05:01.433Z',
          photo: {
            photoId: '43258208591',
            title: 'Stigmatopelia senegalensis',
            secret: '1e14c614fe',
            farm: 1,
            server: 919,
            __typename: 'Photo'
          },
          group: { title: 'enricbgNoLimit', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '43250645091',
          groupId: '4081225@N21',
          message: 'Photo added',
          userId: '144521588@N08',
          createdAt: '2020-11-14T12:04:58.405Z',
          photo: {
            photoId: '43250645091',
            title: 'Timelapse at Gallocanta',
            secret: 'a43e8992d9',
            farm: 1,
            server: 918,
            __typename: 'Photo'
          },
          group: { title: 'enricbgNoLimit', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '28352713947',
          groupId: '4081225@N21',
          message: 'Photo added',
          userId: '144521588@N08',
          createdAt: '2020-11-14T12:04:54.998Z',
          photo: {
            photoId: '28352713947',
            title: 'Little Details',
            secret: '692963e96c',
            farm: 2,
            server: 1786,
            __typename: 'Photo'
          },
          group: { title: 'enricbgNoLimit', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '42823152460',
          groupId: '4081225@N21',
          message: 'Photo added',
          userId: '144521588@N08',
          createdAt: '2020-11-14T12:04:54.334Z',
          photo: {
            photoId: '42823152460',
            title: 'Layered mountains',
            secret: '5ed8d79bd1',
            farm: 2,
            server: 1892,
            __typename: 'Photo'
          },
          group: { title: 'enricbgNoLimit', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '28565788547',
          groupId: '4081225@N21',
          message: 'Photo added',
          userId: '144521588@N08',
          createdAt: '2020-11-14T12:04:53.705Z',
          photo: {
            photoId: '28565788547',
            title: 'Shades over my head',
            secret: '9f8b3fbeb1',
            farm: 2,
            server: 1821,
            __typename: 'Photo'
          },
          group: { title: 'enricbgNoLimit', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '43446205062',
          groupId: '4081225@N21',
          message: 'Photo added',
          userId: '144521588@N08',
          createdAt: '2020-11-14T12:04:53.116Z',
          photo: {
            photoId: '43446205062',
            title: 'Hanging out',
            secret: 'e36bc4cf08',
            farm: 2,
            server: 1789,
            __typename: 'Photo'
          },
          group: { title: 'enricbgNoLimit', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '29869174207',
          groupId: '4081225@N21',
          message: 'Photo added',
          userId: '144521588@N08',
          createdAt: '2020-11-14T12:04:52.421Z',
          photo: {
            photoId: '29869174207',
            title: 'Abyssinian White-eye',
            secret: '4d74a7722f',
            farm: 2,
            server: 1853,
            __typename: 'Photo'
          },
          group: { title: 'enricbgNoLimit', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '44513658490',
          groupId: '4081225@N21',
          message: 'Photo added',
          userId: '144521588@N08',
          createdAt: '2020-11-14T12:04:51.697Z',
          photo: {
            photoId: '44513658490',
            title: 'Cadi Sunset',
            secret: 'bf71471c4b',
            farm: 5,
            server: 4869,
            __typename: 'Photo'
          },
          group: { title: 'enricbgNoLimit', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '42977778054',
          groupId: '4081225@N21',
          message: 'Photo added',
          userId: '144521588@N08',
          createdAt: '2020-11-14T12:04:51.125Z',
          photo: {
            photoId: '42977778054',
            title: 'Blood Moon',
            secret: 'fda1beb26e',
            farm: 1,
            server: 853,
            __typename: 'Photo'
          },
          group: { title: 'enricbgNoLimit', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '43707836071',
          groupId: '4081225@N21',
          message: 'Photo added',
          userId: '144521588@N08',
          createdAt: '2020-11-14T12:04:50.385Z',
          photo: {
            photoId: '43707836071',
            title: 'Blood Moon trail',
            secret: 'fd8d56d95e',
            farm: 1,
            server: 936,
            __typename: 'Photo'
          },
          group: { title: 'enricbgNoLimit', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '46350317631',
          groupId: '4081225@N21',
          message: 'Photo added',
          userId: '144521588@N08',
          createdAt: '2020-11-14T12:04:49.786Z',
          photo: {
            photoId: '46350317631',
            title: 'The Great  Pyramid of Cheops',
            secret: '7eabe810f9',
            farm: 66,
            server: 65535,
            __typename: 'Photo'
          },
          group: { title: 'enricbgNoLimit', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '46765866771',
          groupId: '4081225@N21',
          message: 'Photo added',
          userId: '144521588@N08',
          createdAt: '2020-11-14T12:04:48.638Z',
          photo: {
            photoId: '46765866771',
            title: 'Full of snow',
            secret: '8c9a042ee2',
            farm: 66,
            server: 65535,
            __typename: 'Photo'
          },
          group: { title: 'enricbgNoLimit', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '45720813714',
          groupId: '4081225@N21',
          message: 'Photo added',
          userId: '144521588@N08',
          createdAt: '2020-11-14T12:04:47.762Z',
          photo: {
            photoId: '45720813714',
            title: 'Abu Simbel',
            secret: 'a8ac4ff509',
            farm: 8,
            server: 7809,
            __typename: 'Photo'
          },
          group: { title: 'enricbgNoLimit', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '45486193375',
          groupId: '4081225@N21',
          message: 'Photo added',
          userId: '144521588@N08',
          createdAt: '2020-11-14T12:04:47.181Z',
          photo: {
            photoId: '45486193375',
            title: 'Equilibrium',
            secret: '87e12ae2ac',
            farm: 5,
            server: 4838,
            __typename: 'Photo'
          },
          group: { title: 'enricbgNoLimit', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '39653549893',
          groupId: '4081225@N21',
          message: 'Photo added',
          userId: '144521588@N08',
          createdAt: '2020-11-14T12:04:46.501Z',
          photo: {
            photoId: '39653549893',
            title: 'Ibones azules',
            secret: '0583fe56c3',
            farm: 66,
            server: 65535,
            __typename: 'Photo'
          },
          group: { title: 'enricbgNoLimit', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '45667724295',
          groupId: '4081225@N21',
          message: 'Photo added',
          userId: '144521588@N08',
          createdAt: '2020-11-14T12:04:45.546Z',
          photo: {
            photoId: '45667724295',
            title: 'Smoking under the shadow',
            secret: 'fdb1a5c536',
            farm: 66,
            server: 65535,
            __typename: 'Photo'
          },
          group: { title: 'enricbgNoLimit', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '31663126367',
          groupId: '4081225@N21',
          message: 'Photo added',
          userId: '144521588@N08',
          createdAt: '2020-11-14T12:04:44.635Z',
          photo: {
            photoId: '31663126367',
            title: 'Mist drops',
            secret: '3814921f51',
            farm: 66,
            server: 65535,
            __typename: 'Photo'
          },
          group: { title: 'enricbgNoLimit', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '32505297098',
          groupId: '4081225@N21',
          message: 'Photo added',
          userId: '144521588@N08',
          createdAt: '2020-11-14T12:04:43.888Z',
          photo: {
            photoId: '32505297098',
            title: 'Felucca boat',
            secret: 'ff93fc5e10',
            farm: 5,
            server: 4893,
            __typename: 'Photo'
          },
          group: { title: 'enricbgNoLimit', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '46359220641',
          groupId: '4081225@N21',
          message: 'Photo added',
          userId: '144521588@N08',
          createdAt: '2020-11-14T12:04:42.920Z',
          photo: {
            photoId: '46359220641',
            title: 'Pretzel seller at Khan Al-Khalili',
            secret: '2d47a7bd83',
            farm: 5,
            server: 4827,
            __typename: 'Photo'
          },
          group: { title: 'enricbgNoLimit', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '40614008083',
          groupId: '4081225@N21',
          message: 'Photo already in pool',
          userId: '144521588@N08',
          createdAt: '2020-11-14T12:04:42.174Z',
          photo: {
            photoId: '40614008083',
            title: 'Avoiding the sun',
            secret: 'd105ddb6ce',
            farm: 66,
            server: 65535,
            __typename: 'Photo'
          },
          group: { title: 'enricbgNoLimit', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '47496924482',
          groupId: '4081225@N21',
          message: 'Photo already in pool',
          userId: '144521588@N08',
          createdAt: '2020-11-14T12:04:41.879Z',
          photo: {
            photoId: '47496924482',
            title: 'Yellow-eared bulbul',
            secret: 'ec5c3a0bf7',
            farm: 66,
            server: 65535,
            __typename: 'Photo'
          },
          group: { title: 'enricbgNoLimit', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '46994961041',
          groupId: '4081225@N21',
          message: 'Photo added',
          userId: '144521588@N08',
          createdAt: '2020-11-14T12:04:41.555Z',
          photo: {
            photoId: '46994961041',
            title: 'Views from Lion Rock at Sigiriya',
            secret: 'fbe08568f2',
            farm: 66,
            server: 65535,
            __typename: 'Photo'
          },
          group: { title: 'enricbgNoLimit', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '31992666667',
          groupId: '4081225@N21',
          message: 'Photo added',
          userId: '144521588@N08',
          createdAt: '2020-11-14T12:04:40.759Z',
          photo: {
            photoId: '31992666667',
            title: 'Unbalanced bridge',
            secret: 'dd282021de',
            farm: 66,
            server: 65535,
            __typename: 'Photo'
          },
          group: { title: 'enricbgNoLimit', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '46030996025',
          groupId: '4081225@N21',
          message: 'Photo added',
          userId: '144521588@N08',
          createdAt: '2020-11-14T12:04:40.095Z',
          photo: {
            photoId: '46030996025',
            title: 'Crested Serpent-eagle',
            secret: 'b193e4266f',
            farm: 66,
            server: 65535,
            __typename: 'Photo'
          },
          group: { title: 'enricbgNoLimit', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '40052990513',
          groupId: '4081225@N21',
          message: 'Photo already in pool',
          userId: '144521588@N08',
          createdAt: '2020-11-14T12:04:36.118Z',
          photo: {
            photoId: '40052990513',
            title: 'Blue-tailed bee-eater',
            secret: '759b5c6913',
            farm: 66,
            server: 65535,
            __typename: 'Photo'
          },
          group: { title: 'enricbgNoLimit', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '46314045954',
          groupId: '4081225@N21',
          message: 'Photo added',
          userId: '144521588@N08',
          createdAt: '2020-11-14T12:04:35.879Z',
          photo: {
            photoId: '46314045954',
            title: 'Foggy  day',
            secret: '1fe85790af',
            farm: 66,
            server: 65535,
            __typename: 'Photo'
          },
          group: { title: 'enricbgNoLimit', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '46906462132',
          groupId: '4081225@N21',
          message: 'Photo added',
          userId: '144521588@N08',
          createdAt: '2020-11-14T12:04:32.656Z',
          photo: {
            photoId: '46906462132',
            title: 'Ceylon Junglefowl',
            secret: '42c0f076ab',
            farm: 66,
            server: 65535,
            __typename: 'Photo'
          },
          group: { title: 'enricbgNoLimit', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '32030094177',
          groupId: '4081225@N21',
          message: 'Photo added',
          userId: '144521588@N08',
          createdAt: '2020-11-14T12:04:29.278Z',
          photo: {
            photoId: '32030094177',
            title: 'Dusky blue flycatcher',
            secret: 'ba82c5dafc',
            farm: 66,
            server: 65535,
            __typename: 'Photo'
          },
          group: { title: 'enricbgNoLimit', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '28180518617',
          groupId: '4081225@N21',
          message: 'Processing photo',
          userId: '144521588@N08',
          createdAt: '2020-11-14T12:04:28.017Z',
          photo: {
            photoId: '28180518617',
            title: 'Small',
            secret: '5395005d4a',
            farm: 1,
            server: 837,
            __typename: 'Photo'
          },
          group: { title: 'enricbgNoLimit', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '42309632354',
          groupId: '4081225@N21',
          message: 'Processing photo',
          userId: '144521588@N08',
          createdAt: '2020-11-14T12:04:28.010Z',
          photo: {
            photoId: '42309632354',
            title: 'Amir Temur maqbarasi',
            secret: '50e2e2374b',
            farm: 1,
            server: 845,
            __typename: 'Photo'
          },
          group: { title: 'enricbgNoLimit', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '42356907064',
          groupId: '4081225@N21',
          message: 'Processing photo',
          userId: '144521588@N08',
          createdAt: '2020-11-14T12:04:27.997Z',
          photo: {
            photoId: '42356907064',
            title: 'King of shit',
            secret: '8ac99b722b',
            farm: 2,
            server: 1783,
            __typename: 'Photo'
          },
          group: { title: 'enricbgNoLimit', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '42255618145',
          groupId: '4081225@N21',
          message: 'Processing photo',
          userId: '144521588@N08',
          createdAt: '2020-11-14T12:04:27.989Z',
          photo: {
            photoId: '42255618145',
            title: 'Paradise flycatcher',
            secret: '78f67b695a',
            farm: 2,
            server: 1763,
            __typename: 'Photo'
          },
          group: { title: 'enricbgNoLimit', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '28474439737',
          groupId: '4081225@N21',
          message: 'Processing photo',
          userId: '144521588@N08',
          createdAt: '2020-11-14T12:04:27.970Z',
          photo: {
            photoId: '28474439737',
            title: 'Enjoying the moonlight',
            secret: '167c2468d7',
            farm: 2,
            server: 1830,
            __typename: 'Photo'
          },
          group: { title: 'enricbgNoLimit', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '43258208591',
          groupId: '4081225@N21',
          message: 'Processing photo',
          userId: '144521588@N08',
          createdAt: '2020-11-14T12:04:27.957Z',
          photo: {
            photoId: '43258208591',
            title: 'Stigmatopelia senegalensis',
            secret: '1e14c614fe',
            farm: 1,
            server: 919,
            __typename: 'Photo'
          },
          group: { title: 'enricbgNoLimit', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '43250645091',
          groupId: '4081225@N21',
          message: 'Processing photo',
          userId: '144521588@N08',
          createdAt: '2020-11-14T12:04:27.950Z',
          photo: {
            photoId: '43250645091',
            title: 'Timelapse at Gallocanta',
            secret: 'a43e8992d9',
            farm: 1,
            server: 918,
            __typename: 'Photo'
          },
          group: { title: 'enricbgNoLimit', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '28352713947',
          groupId: '4081225@N21',
          message: 'Processing photo',
          userId: '144521588@N08',
          createdAt: '2020-11-14T12:04:27.936Z',
          photo: {
            photoId: '28352713947',
            title: 'Little Details',
            secret: '692963e96c',
            farm: 2,
            server: 1786,
            __typename: 'Photo'
          },
          group: { title: 'enricbgNoLimit', __typename: 'Group' },
          __typename: 'Notification'
        },
        {
          photoId: '42823152460',
          groupId: '4081225@N21',
          message: 'Processing photo',
          userId: '144521588@N08',
          createdAt: '2020-11-14T12:04:27.929Z',
          photo: {
            photoId: '42823152460',
            title: 'Layered mountains',
            secret: '5ed8d79bd1',
            farm: 2,
            server: 1892,
            __typename: 'Photo'
          },
          group: { title: 'enricbgNoLimit', __typename: 'Group' },
          __typename: 'Notification'
        }
      ]
    }),
    computed: {
      filteredNotifications() {
        return this.notifications
      }
    }
  }
</script>
