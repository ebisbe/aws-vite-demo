<template>
  <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
  <div class="fixed z-10 inset-0 overflow-y-auto" v-show="open">
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <!--
      Background overlay, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
      <!--
      Modal panel, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    -->
      <transition
        enter-active-class=" ease-out duration-300"
        enter-class=" translate-y-4 sm:translate-y-0 sm:scale-95"
        enter-to-class=" translate-y-0 sm:scale-100"
        leave-active-class=" ease-in duration-200"
        leave-class="opacity-100 translate-y-0 sm:scale-100"
        leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      >
        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
          <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
            <div class="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
              <div class="ml-4 mt-4">
                <h3 class="text-lg leading-6 font-medium text-gray-900">Manage tags</h3>
                <p class="mt-1 text-sm leading-5 text-gray-500">
                  Add or remove tags for 'Wildlife Photographs'
                </p>
              </div>
              <div class="ml-4 mt-4 flex-shrink-0">
                <span class="inline-flex rounded-md shadow-sm">
                  <button
                    type="button"
                    @click="open = false"
                    class="relative inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-indigo focus:border-indigo-700 active:bg-indigo-700"
                  >
                    Close
                  </button>
                </span>
              </div>
            </div>
          </div>

          <div class="px-4 py-5 sm:p-6">
            <!-- Content goes here -->
            <!-- component -->
            <div>
              <h2 class="text-lg leading-6 font-medium text-gray-900">Group configuration</h2>
              <p class="mt-1 text-sm leading-5 text-gray-500">
                Ornare eu a volutpat eget vulputate. Fringilla commodo amet.
              </p>
            </div>
            <ul class="divide-y divide-gray-200">
              <li class="py-4 flex items-center justify-between space-x-4">
                <div class="flex flex-col">
                  <p
                    id="privacy-option-label-1"
                    class="text-sm leading-5 font-medium text-gray-900"
                  >
                    Import only new photos
                  </p>
                  <p id="privacy-option-description-1" class="text-sm leading-5 text-gray-500">
                    All photos matching <strong>[wildlife]</strong> will be added. You can review
                    which photos will be added below. // Only your new photos from your photostream
                    with the selected tags will be added. If you want to add all your current photos
                    matching <strong>[wildlife]</strong> disable this option.
                  </p>
                </div>
                <!-- On: "bg-teal-500", Off: "bg-gray-200" -->
                <span
                  role="checkbox"
                  tabindex="0"
                  aria-checked="true"
                  aria-labelledby="privacy-option-label-1"
                  aria-describedby="privacy-option-description-1"
                  class="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring"
                >
                  <!-- On: "translate-x-5", Off: "translate-x-0" -->
                  <span
                    aria-hidden="true"
                    class="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200"
                  ></span>
                </span>
              </li>
              <li class="py-4 flex items-center justify-between space-x-4">
                <div class="flex flex-col">
                  <p
                    id="privacy-option-label-2"
                    class="text-sm leading-5 font-medium text-gray-900"
                  >
                    Tag mode
                  </p>
                  <p id="privacy-option-description-2" class="text-sm leading-5 text-gray-500">
                    Search photos that contain 1 or more tags // Search photos that contain all tags
                  </p>
                </div>
                <!-- On: "bg-teal-500", Off: "bg-gray-200" -->
                <span
                  role="checkbox"
                  tabindex="0"
                  aria-checked="false"
                  aria-labelledby="privacy-option-label-2"
                  aria-describedby="privacy-option-description-2"
                  class="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring"
                >
                  <!-- On: "translate-x-5", Off: "translate-x-0" -->
                  <span
                    aria-hidden="true"
                    class="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200"
                  ></span>
                </span>
              </li>
            </ul>
          </div>
          <div class="border-t border-gray-200 px-4 py-4 sm:px-6">
            <!-- Content goes here -->
            <!-- We use less vertical padding on card footers at all sizes than on headers or body sections -->
            footer
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
  export default {
    data: () => ({
      open: false
    })
  }
</script>
<style>
  .top-100 {
    top: 100%;
  }
  .bottom-100 {
    bottom: 100%;
  }
  .max-h-select {
    max-height: 300px;
  }
</style>
