<template lang="pug">
.my-profile-wrapper.tw-mt-5.tw-px-4
  perfil-form-default(:data='perfil')
  .update-buttons.tw-flex.tw-justify-center
    b-button.tw-mx-2.tw-my-4(type='is-success') {{ $t("update") }}
  collapse.tw-text-sm(:title='$t("accessProfile")')
    detail-table(:data='tree')
  collapse.tw-text-sm(:title='$t("customerView")')
</template>

<script>
export default {
  name: 'MyProfile',
  components: {
    Collapse: () => import('@/components/Collapse'),
    DetailTable: () => import('@/components/DetailTable'),
    ProfileForm: () => import('@/components/partials/ProfileForm'),
  },
  props: {},
  data() {
    const perfil = require('@/jsons/profile-data.json')
    const tree = require('@/jsons/directory-tree-data.json')
    return { tree, perfil }
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.my-profile-wrapper {
  .fields {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    @media screen and(min-width: 1500px) {
      grid-template-columns: repeat(4, minmax(300px, 1fr));
    }
  }
}
</style>

<style lang="scss">
.my-profile-wrapper {
  label {
    font-size: 0.75rem;
  }
}
</style>
