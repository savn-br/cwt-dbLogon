<template lang="pug">
.user-form-wrapper
  form.fields.tw-grid(name='profileForm', ref='form')
    b-field.tw-mx-2(:label='$t("user")')
      b-input(
        v-model='userId',
        size='is-small',
        name='user',
        :disabled='isDisabled'
      )
    b-field.tw-mx-2(:label='$t("manager")')
      b-input(
        v-model='manager',
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
    b-field.tw-mx-2(:label='$t("company")')
      b-input(
        v-model='company',
        size='is-small',
        name='company',
        :disabled='isDisabled'
      )
    b-field.tw-mx-2(:label='$t("name")')
      b-input(
        v-model='userName',
        size='is-small',
        name='name',
        :disabled='isDisabled'
      )
    b-field.tw-mx-2(:label='$t("phone")')
      b-input(
        v-model='phone',
        size='is-small',
        name='phone',
        ,
        v-mask='["(##) ####-####", "(##) #####-####"]'
      )
    b-field.tw-mx-2(:label='$t("field")')
      b-input(v-model='field', name='field', size='is-small')
    b-field.tw-mx-2(:label='$t("role")')
      b-input(v-model='role', name='role', size='is-small')
    b-field.tw-mx-2(:label='$t("registration")')
      b-input(v-model='employeeNumber', name='employeeNumber', size='is-small')
    b-field.tw-mx-2(label='Ponto de venda')
      b-select(
        placeholder='Selecione o ponto de venda',
        size='is-small',
        v-model='pointOfSale'
      )
        option(
          :value='point.pointOfSaleId',
          v-for='(point, index) in allPointOfSales',
          :key='index'
        ) {{ point.pointOfSaleName }}
    b-field
      b-checkbox.tw-m-5(v-model='emergencyFlag', name='emergencyFlag') {{ $t("emergency") }}
    b-field
      b-checkbox.tw-m-5(v-model='vipFlag', name='vipFlag') VIP Desk
    slot(name='content')
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex'
export default {
  name: 'UserForm',
  components: {},
  props: {
    isDisabled: {
      type: Boolean,
      default: () => true,
    },
  },
  data() {
    return {}
  },
  computed: {
    ...mapState(['userData', 'allPointOfSales']),
    userId: {
      get() {
        return this.userData.userId
      },
      set(value) {
        this.setUserDataTerm({ key: 'userId', value })
      },
    },
    email: {
      get() {
        return this.userData.email
      },
      set(value) {
        this.setUserDataTerm({ key: 'email', value })
      },
    },
    userName: {
      get() {
        return this.userData.userName
      },
      set(value) {
        this.setUserDataTerm({ key: 'userName', value })
      },
    },
    company: {
      get() {
        return this.userData.company
      },
      set(value) {
        this.setUserDataTerm({ key: 'company', value })
      },
    },
    manager: {
      get() {
        return this.userData.manager
      },
      set(value) {
        this.setUserDataTerm({ key: 'manager', value })
      },
    },
    phone: {
      get() {
        return this.userData.phone
      },
      set(value) {
        this.setUserDataTerm({ key: 'phone', value })
      },
    },
    field: {
      get() {
        return this.userData.field
      },
      set(value) {
        this.setUserDataTerm({ key: 'field', value })
      },
    },
    role: {
      get() {
        return this.userData.role
      },
      set(value) {
        this.setUserDataTerm({ key: 'role', value })
      },
    },
    employeeNumber: {
      get() {
        return this.userData.employeeNumber
      },
      set(value) {
        this.setUserDataTerm({
          key: 'employeeNumber',
          value,
        })
      },
    },
    emergencyFlag: {
      get() {
        return this.userData.emergencyFlag
      },
      set(value) {
        this.setUserDataTerm({
          key: 'emergencyFlag',
          value,
        })
      },
    },
    vipFlag: {
      get() {
        return this.userData.vipFlag
      },
      set(value) {
        this.setUserDataTerm({ key: 'vipFlag', value })
      },
    },
    pointOfSale: {
      get() {
        return this.userData.pointOfSale
      },
      set(value) {
        this.setUserDataTerm({ key: 'pointOfSale', value })
      },
    },
  },
  watch: {},
  async mounted() {
    await this.getAllPointOfSales()
  },
  created() {},
  methods: {
    ...mapMutations(['setUserDataTerm']),
    ...mapActions(['getAllPointOfSales']),
  },
}
</script>

<style lang="scss" scoped>
.user-form-wrapper {
  .fields {
    grid-template-columns: repeat(auto-fill, minmax(px2rem(300), 1fr));
    @media screen and(min-width: px2rem(1500)) {
      grid-template-columns: repeat(4, minmax(px2rem(300), 1fr));
    }
  }
}
</style>

<style lang="scss">
.user-form-wrapper {
  label {
    font-size: 0.75rem;
  }
}
</style>
