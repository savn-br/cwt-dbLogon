<template lang="pug">
#logModal.log-modeal-wrapper
  .card-l
    .card-header
    .card-content
      form.tw-grid(name='log')
        b-field(:label='$t("createdDate")')
          b-input(:value='logState.insertDate', size='is-small', disabled)
        b-field(:label='$t("creationUser")')
          b-input(:value='logState.userIdInsert', size='is-small', disabled)
        b-field(:label='$t("lastChangeDate")')
          b-input(:value='logState.alterDate', size='is-small', disabled)
        b-field(:label='$t("changeUser")')
          b-input(:value='logState.userIdUpdate', size='is-small', disabled)
    .card-footer.tw-px-6.tw-py-4.tw-flex.tw-justify-center
      .wrapper-buttons
        b-button.tw-mr-4.tw-w-40(type='is-success', @click='$emit("close")') OK
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'LogModal',
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapState({
      logState: (state) => state.logState,
    }),
  },
  watch: {},
  mounted() {},
  created() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.log-modeal-wrapper {
  max-width: px2rem(875);
  margin: 0 auto;
  form {
    grid-template-columns: repeat(auto-fill, minmax(px2rem(280), 1fr));
    grid-column-gap: px2rem(15);
  }
}
</style>

<style lang="scss">
.log-modeal-wrapper {
  label {
    font-size: 0.75rem;
  }
}
</style>
