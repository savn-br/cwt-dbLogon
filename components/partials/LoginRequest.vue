<template lang="pug">
.login-request-wrapper.tw-mt-8.tw-px-8
  //steps(:steps='steps')
  fieldset.tw-my-6.tw-flex.tw-justify-center
    b-field.tw-mx-2(label='Status:')
    b-field.tw-mx-2(
      :label='userData.profileType === "pending" ? "Aguardando autorização" : "Solicitando autorização"',
      :class='userData.profileType === "pending" ? "field-pending" : "field-not-pending"'
    ) 
  user-form(ref='profileForm', :isDisabled='true')
  .update-buttons.tw-flex.tw-justify-center(class='sm:tw-justify-end')
    //b-button.tw-mx-2(type='is-success', @click='handleUpdate') {{ $t("update") }}
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
import showToast from '@/utils/toast'
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
      if (!this.userData.pointOfSale) {
        showToast(this.$i18n.t('selectPointOfSale'), 'is-danger')
        return
      }
      await this.handleUpdateAccess()
      if (this.userData.profileType !== this.$route.path.replace(/\//g, '')) {
        this.$router.push(`/${this.userData.profileType}/`)
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
  .field-not-pending label {
    color: red;
    font-weight: bold;
  }
  .field-pending label {
    color: yellowgreen;
    font-weight: bold;
  }
}
</style>
