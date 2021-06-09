<template lang="pug">
.profile-form-wrapper.tw-max-w-3xl.tw-mx-auto
  form(name='profileForm', ref='form')
    fieldset.tw-my-6.tw-flex.tw-flex-wrap
      b-field.tw-mx-2.tw-w-20(:label='$t("user")')
        b-input(
          v-model='userId',
          size='is-small',
          name='user',
          :disabled='isDisabled',
          @set='verifyUserId'
        )
      b-field.tw-mx-2(:label='$t("manager")')
        b-input(
          v-model='managerName',
          size='is-small',
          name='manager',
          :disabled='isDisabled'
        )
      b-field.tw-mx-2(label='E-mail')
        b-input(
          v-model='email',
          size='is-small',
          name='email',
          type='email',
          :disabled='isDisabled'
        )

      b-field.tw-mx-2(:label='$t("name")')
        b-input(
          v-model='userName',
          size='is-small',
          name='name',
          :disabled='isDisabled'
        )
    fieldset.tw-my-6.tw-flex.tw-flex-wrap
      b-field.tw-mx-2.tw-w-32(:label='$t("phone")')
        b-input(
          v-model='phone',
          size='is-small',
          name='phone',
          autocomplete='off',
          placeholder='(XX) XXXXX-XXXX',
          v-mask='["(##) ####-####", "(##) #####-####"]'
        )
      b-field.tw-mx-2.tw-w-56(:label='$t("company")')
        b-input(
          v-model='company',
          size='is-small',
          name='company',
          autocomplete='off',
          maxlength='30'
        )
      b-field.tw-mx-2.tw-w-32(:label='$t("field")')
        b-input(
          v-model='field',
          name='field',
          size='is-small',
          autocomplete='off',
          maxlength='15'
        )
      b-field.tw-mx-2.tw-w-56(:label='$t("role")')
        b-input(
          v-model='role',
          name='role',
          size='is-small',
          autocomplete='off',
          maxlength='30'
        )
    fieldset.tw-my-6.tw-flex.tw-flex-wrap
      b-field.tw-mx-2.tw-w-20(:label='$t("registration")')
        b-input(
          v-model='employeeNumber',
          name='employeeNumber',
          size='is-small',
          autocomplete='off',
          maxlength='8'
        )
      b-field.tw-mx-2(:label='$t("pointOfSale")')
        b-select(
          :placeholder='$t("selectPointOfSale")',
          size='is-small',
          :value='pointOfSale',
          :expanded='true',
          @input='(point) => handlePointOfSale(point)'
        )
          option(
            v-for='point in allPointOfSales',
            :value='point.pointOfSaleId',
            :key='point.pointOfSaleId'
          ) {{ point.pointOfSaleName }}
      .wrapper-checkboxs.tw-flex.tw-flex-wrap
        b-field.tw-m-5
          b-checkbox(v-model='emergencyFlag', name='emergencyFlag') {{ $t("emergency") }}
        b-field.tw-m-5
          b-checkbox(v-model='vipFlag', name='vipFlag') VIP Desk
        b-field.tw-m-5
          b-checkbox(v-model='active', name='active') {{ $t("active") }}
    slot(name='content')
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex'
export default {
  name: 'ProfileForm',
  components: {},
  props: {
    data: {
      type: Object,
      default: () => {},
    },
    isDisabled: {
      type: Boolean,
      default: () => true,
    },
  },
  data() {
    return {}
  },
  computed: {
    ...mapState(['allPointOfSales']),
    userId: {
      get() {
        return this.$store.state.selectedCollaborator.userId
      },
      set(value) {
        this.$store.commit('setSelectedCollaboratorTerm', {
          key: 'userId',
          value,
        })
      },
    },
    managerName: {
      get() {
        return this.$store.state.selectedCollaborator.managerName
      },
      set(value) {
        this.$store.commit('setSelectedCollaboratorTerm', {
          key: 'managerName',
          value,
        })
      },
    },
    email: {
      get() {
        return this.$store.state.selectedCollaborator.email
      },
      set(value) {
        this.$store.commit('setSelectedCollaboratorTerm', {
          key: 'email',
          value,
        })
      },
    },
    company: {
      get() {
        return this.$store.state.selectedCollaborator.company
      },
      set(value) {
        this.$store.commit('setSelectedCollaboratorTerm', {
          key: 'company',
          value,
        })
      },
    },
    userName: {
      get() {
        return this.$store.state.selectedCollaborator.userName
      },
      set(value) {
        this.$store.commit('setSelectedCollaboratorTerm', {
          key: 'userName',
          value,
        })
      },
    },
    phone: {
      get() {
        return this.$store.state.selectedCollaborator.phone
      },
      set(value) {
        this.$store.commit('setSelectedCollaboratorTerm', {
          key: 'phone',
          value,
        })
      },
    },
    field: {
      get() {
        return this.$store.state.selectedCollaborator.field
      },
      set(value) {
        this.$store.commit('setSelectedCollaboratorTerm', {
          key: 'field',
          value,
        })
      },
    },
    role: {
      get() {
        return this.$store.state.selectedCollaborator.role
      },
      set(value) {
        this.$store.commit('setSelectedCollaboratorTerm', {
          key: 'role',
          value,
        })
      },
    },
    employeeNumber: {
      get() {
        return this.$store.state.selectedCollaborator.employeeNumber
      },
      set(value) {
        this.$store.commit('setSelectedCollaboratorTerm', {
          key: 'employeeNumber',
          value,
        })
      },
    },
    emergencyFlag: {
      get() {
        return this.$store.state.selectedCollaborator.emergencyFlag
      },
      set(value) {
        this.$store.commit('setSelectedCollaboratorTerm', {
          key: 'emergencyFlag',
          value,
        })
      },
    },
    vipFlag: {
      get() {
        return this.$store.state.selectedCollaborator.vipFlag
      },
      set(value) {
        this.$store.commit('setSelectedCollaboratorTerm', {
          key: 'vipFlag',
          value,
        })
      },
    },
    active: {
      get() {
        return this.$store.state.selectedCollaborator.active
      },
      set(value) {
        this.$store.commit('setSelectedCollaboratorTerm', {
          key: 'active',
          value,
        })
      },
    },
    pointOfSale: {
      get() {
        return this.$store.state.selectedCollaborator.pointOfSale
      },
      set(value) {
        this.$store.commit('setSelectedCollaboratorTerm', {
          key: 'pointOfSale',
          value,
        })
      },
    },
  },
  watch: {},
  async mounted() {
    await this.getAllPointOfSales()
  },
  created() {},
  methods: {
    ...mapActions(['getAllPointOfSales']),
    ...mapMutations(['setSelectedCollaboratorTerm']),
    handlePointOfSale(point) {
      if (point)
        this.setSelectedCollaboratorTerm({ key: 'pointOfSale', value: point })
    },
    verifyUserId() {
      console.log(this.data.userId)
    },
  },
}
</script>

<style lang="scss" scoped>
.profile-form-wrapper {
  .fields {
    grid-template-columns: repeat(auto-fill, minmax(px2rem(300), 1fr));
    @media screen and(min-width: px2rem(1500)) {
      grid-template-columns: repeat(4, minmax(px2rem(300), 1fr));
    }
  }
}
</style>

<style lang="scss">
.profile-form-wrapper {
  label {
    font-size: 0.75rem;
  }
}
</style>
