<template lang="pug">
.profile-form-wrapper
  form.fields.tw-grid(name='profileForm', ref='form')
    b-field.tw-mx-2(:label='$t("user")')
      b-input(v-model='data.userId', size='is-small', name='user', disabled)
    b-field.tw-mx-2(:label='$t("manager")')
      b-input(
        v-model='data.manager',
        size='is-small',
        name='manager',
        disabled
      )
    b-field.tw-mx-2(label='E-mail')
      b-input(
        v-model='data.email',
        size='is-small',
        name='email',
        type='email',
        disabled
      )
    b-field.tw-mx-2(:label='$t("company")')
      b-input(
        v-model='data.company',
        size='is-small',
        name='company',
        disabled
      )
    b-field.tw-mx-2(:label='$t("name")')
      b-input(v-model='data.userName', size='is-small', name='name', disabled)
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
  name: 'ProfileForm',
  components: {},
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {}
  },
  computed: {
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
  methods: {},
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
