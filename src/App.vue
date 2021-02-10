<template>
  <template v-if="$route.meta.layout">
    <TheLayoutBroker :layouts="$options.LAYOUTS" :current="$route.meta.layout" />
  </template>
  <router-view v-else />
</template>

<script>
  import Layout1 from './layouts/Layout1.vue'
  import Layout2 from './layouts/Layout2.vue'
  const LAYOUTS = {
    Layout1,
    Layout2
  }
  export default {
    LAYOUTS
  }
</script>
