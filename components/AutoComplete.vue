<template lang="pug">
#autoComplete.auto-complete-wrapper
  b-field.tw-mx-2(:label='$t("findByUser")')
    b-autocomplete(
      :value='searchCollaboratorName',
      :data='collaborators',
      :loading='isFetching',
      @select='selectFn',
      @typing='getAsyncData'
    )
      template(slot-scope='props')
        .tw-font-bold {{ props.option.userName }}
        span.tw-text-sm.tw-font-bold ID:
        span.tw-ml-1 {{ props.option.userId }}
</template>

<script>
import { mapMutations, mapActions, mapState } from 'vuex'
import debounce from 'lodash/debounce'
export default {
  name: 'AutoComplete',
  components: {},
  props: {
    selectFn: {
      required: true,
      type: Function,
    },
  },
  data() {
    return {
      data: [],
      isFetching: false,
    }
  },
  computed: {
    ...mapState({
      collaborators: (state) => state.collaborators,
    }),
    searchCollaboratorName: {
      get() {
        return this.$store.state.searchCollaboratorName
      },
      set(value) {
        this.setSearchCollaboratorName(value)
      },
    },
  },
  watch: {},
  mounted() {},
  created() {},
  methods: {
    // You have to install and import debounce to use it,
    // it's not mandatory though.
    ...mapMutations(['setSearchCollaboratorName', 'setIsLoading']),
    ...mapActions(['getAvailableCollaborators']),
    getAsyncData: debounce(async function (name) {
      this.searchCollaboratorName = name
      this.isFetching = true
      await this.getAvailableCollaborators()
      this.isFetching = false
    }, 500),
  },
}
</script>

<style lang="scss" scoped>
.auto-complete-wrapper {
}
</style>
