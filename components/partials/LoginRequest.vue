<template lang="pug">
.login-request-wrapper.tw-mt-8.tw-px-8
  steps(:steps='steps')
  user-form(ref='profileForm', :isDisabled='true')
  .update-buttons.tw-flex.tw-justify-center(class='sm:tw-justify-end')
    b-button.tw-mx-2(type='is-success', @click='handleUpdate') {{ $t("update") }}
    b-button.tw-mx-2(
      type='is-primary',
      @click='handleEnable',
      :disabled='userData.profileType === "new"',
      :class='userData.profileType === "pending" ? "access-hidden" : ""'
    ) {{ $t("requestAccess") }}
  .logs.tw-mt-2.tw-mb-4
    .status-wrapper(v-if='!!userStatus && userStatus.length')
      h1 Status
      standard-table(:data='userStatus', , :bordered='true')
        b-table-column(field='date', :label='$t("date")', v-slot='props')
          span.tw-text-xs {{ props.row.date }}
        b-table-column(field='action', :label='$t("action")', v-slot='props')
          span.tw-text-xs {{ props.row.action }}
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'LoginRequest',
  components: {
    UserForm: () => import('@/components/partials/UserForm'),
  },
  props: {
    steps: {
      type: Number,
      default: () => 0,
    },
  },
  data() {
    return {}
  },
  computed: {
    ...mapState(['userData', 'userStatus']),
  },
  watch: {},
  async mounted() {
    await this.handleGetAccess()
  },
  created() {},
  methods: {
    ...mapActions([
      'handleGetAccess',
      'handleEnableAccess',
      'handleUpdateAccess',
    ]),
    async handleEnable() {
      await this.handleEnableAccess()
      if (this.userData.profileType !== this.$route.path.replace(/\//g, '')) {
        this.$router.push(`/${this.userData.profileType}/`)
      }
    },
    async handleUpdate() {
      const form = this.$refs.profileForm.$refs.form
      const formInputs = [
        form.phone,
        form.field,
        form.role,
        form.employeeNumber,
      ]
      const validationEvery = formInputs.every((input) => !!input.value)
      if (validationEvery) {
        const status = await this.handleUpdateAccess()
        if (this.userData.profileType !== this.$route.path.replace(/\//g, '')) {
          this.$router.push(`/${this.userData.profileType}/`)
        }
        if (status === 200) {
          this.$buefy.toast.open({
            message: 'Dados atualizados com sucesso',
            type: 'is-success',
            duration: 3000,
            position: 'is-top',
          })
        }
      } else {
        this.$buefy.toast.open({
          message: 'Por favor preencha todos os dados',
          type: 'is-danger',
          duration: 3000,
          position: 'is-top',
        })
      }
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
  .access-hidden {
    display: none;
  }
  label {
    font-size: 0.75rem;
  }
}
</style>
