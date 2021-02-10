<template>
  <component :is="currentLayout">
    <router-view></router-view>
  </component>
</template>
<script>
  export default {
    name: 'LayoutBroker',
    props: {
      layouts: {
        type: Object,
        required: true
      },
      current: {
        type: String,
        required: true
      }
    },
    computed: {
      /**
       * Return layout component name for current route
       * @return {string}
       */
      currentLayout() {
        return this.layouts[this.current]
      }
    }
  }
</script>
