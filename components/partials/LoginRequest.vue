<template lang="pug">
.login-request-wrapper.tw-mt-8.tw-px-8
  steps
  profile-form(:data='profile')
  .update-buttons.tw-flex.tw-justify-center(class='sm:tw-justify-end')
    b-button.tw-mx-2(type='is-success', @click='update') {{ $t("update") }}
    b-button.tw-mx-2(type='is-primary', disabled) {{ $t("requestAccess") }}
  .logs.tw-mt-2.tw-mb-4
    h1 Status
    standard-table(:data='tableStatus', , :bordered='true')
      b-table-column(field='date', :label='$t("date")', v-slot='props')
        span.tw-text-xs {{ $moment(props.row.date) }}
      b-table-column(field='action', :label='$t("action")', v-slot='props')
        span.tw-text-xs {{ props.row.action }}
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'LoginRequest',
  components: {
    StandardTable: () => import('@/components/StandardTable'),
    ProfileForm: () => import('@/components/partials/ProfileForm'),
    Steps: () => import('@/components/Steps'),
  },
  data() {
    return {}
  },
  computed: {
    ...mapState({
      profile: (state) => state.userData,
      tableStatus: (state) => state.userStatus,
    }),
  },
  watch: {},
  mounted() {
    this.$store.dispatch('getAccess')
  },
  created() {},
  methods: {
    async update() {
      await this.$store.dispatch('updateAccess')
      this.$buefy.toast.open({
        message: 'Dados atualizados com sucesso',
        type: 'is-success',
        duration: 3000,
        position: 'is-top',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.login-request-wrapper {
  .fields {
    grid-template-columns: repeat(auto-fill, minmax(px2rem(300), 1fr));
    @media screen and(min-width: px2rem(1500)) {
      grid-template-columns: repeat(4, minmax(px2rem(300), 1fr));
    }
  }
}
</style>

<style lang="scss">
.login-request-wrapper {
  label {
    font-size: 0.75rem;
  }
}
</style>
