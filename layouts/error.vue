<template>
  <div class="container">
    <Error404 v-if="error.statusCode === 404"></Error404>
  </div>
</template>
<script>
export default {
  components: {
    Error404: () => import('@/components/error/404'),
  },
  layout: 'errorLayout',
  props: { error: { type: Object, default: () => {} } },
}
</script>
