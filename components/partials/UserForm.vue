<template lang="pug">
.user-form-wrapper
  form.fields.tw-grid(name='profileForm', ref='form')
    b-field.tw-mx-2(:label='$t("user")')
      b-input(
        v-model='userId',
        size='is-small',
        name='user',
        :disabled='isDisabled',
        @change='verifyUserId'
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
    b-checkbox.tw-m-5(v-model='emergencyFlag', name='emergencyFlag') {{ $t("emergency") }}
    b-checkbox.tw-m-5(v-model='vipFlag', name='vipFlag') VIP Desk
    slot(name='content')
</template>

<script>
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
    userId: {
      get() {
        return this.$store.state.userData.userId
      },
      set(value) {
        this.$store.commit('changeUserId', value)
      },
    },
    email: {
      get() {
        return this.$store.state.userData.email
      },
      set(value) {
        this.$store.commit('changeEmail', value)
      },
    },
    userName: {
      get() {
        return this.$store.state.userData.userName
      },
      set(value) {
        this.$store.commit('changeUserName', value)
      },
    },
    company: {
      get() {
        return this.$store.state.userData.company
      },
      set(value) {
        this.$store.commit('changeCompany', value)
      },
    },
    manager: {
      get() {
        return this.$store.state.userData.manager
      },
      set(value) {
        this.$store.commit('changeManager', value)
      },
    },
    phone: {
      get() {
        return this.$store.state.userData.phone
      },
      set(value) {
        this.$store.commit('changePhone', value)
      },
    },
    field: {
      get() {
        return this.$store.state.userData.field
      },
      set(value) {
        this.$store.commit('changeField', value)
      },
    },
    role: {
      get() {
        return this.$store.state.userData.role
      },
      set(value) {
        this.$store.commit('changeRole', value)
      },
    },
    employeeNumber: {
      get() {
        return this.$store.state.userData.employeeNumber
      },
      set(value) {
        this.$store.commit('changeEmployeeNumber', value)
      },
    },
    emergencyFlag: {
      get() {
        return this.$store.state.userData.emergencyFlag
      },
      set(value) {
        this.$store.commit('changeEmergencyFlag', value)
      },
    },
    vipFlag: {
      get() {
        return this.$store.state.userData.vipFlag
      },
      set(value) {
        this.$store.commit('changeVipFlag', value)
      },
    },
  },
  watch: {},
  mounted() {},
  created() {},
  methods: {
    verifyUserId() {
      console.log(this.data.userId)
    },
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
