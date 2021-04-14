<template lang="pug">
.profile-form-wrapper
  form.fields.tw-grid(name='profileForm', ref='form')
    b-field.tw-mx-2(:label='$t("user")')
      b-input(
        v-model='userId',
        size='is-small',
        name='user',
        :disabled='isDisabled',
        @set='verifyUserId'
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
    b-checkbox.tw-m-5(v-model='active', name='active') {{ $t("active") }}
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
        return this.$store.state.selectedProfile.userId
      },
      set(value) {
        this.$store.commit('setSelectedProfileTerm', {
          key: 'userId',
          value,
        })
      },
    },
    manager: {
      get() {
        return this.$store.state.selectedProfile.manager
      },
      set(value) {
        this.$store.commit('setSelectedProfileTerm', {
          key: 'manager',
          value,
        })
      },
    },
    email: {
      get() {
        return this.$store.state.selectedProfile.email
      },
      set(value) {
        this.$store.commit('setSelectedProfileTerm', {
          key: 'email',
          value,
        })
      },
    },
    company: {
      get() {
        return this.$store.state.selectedProfile.company
      },
      set(value) {
        this.$store.commit('setSelectedProfileTerm', {
          key: 'company',
          value,
        })
      },
    },
    userName: {
      get() {
        return this.$store.state.selectedProfile.userName
      },
      set(value) {
        this.$store.commit('setSelectedProfileTerm', {
          key: 'userName',
          value,
        })
      },
    },
    phone: {
      get() {
        return this.$store.state.selectedProfile.phone
      },
      set(value) {
        this.$store.commit('setSelectedProfileTerm', {
          key: 'phone',
          value,
        })
      },
    },
    field: {
      get() {
        return this.$store.state.selectedProfile.field
      },
      set(value) {
        this.$store.commit('setSelectedProfileTerm', {
          key: 'field',
          value,
        })
      },
    },
    role: {
      get() {
        return this.$store.state.selectedProfile.role
      },
      set(value) {
        this.$store.commit('setSelectedProfileTerm', {
          key: 'role',
          value,
        })
      },
    },
    employeeNumber: {
      get() {
        return this.$store.state.selectedProfile.employeeNumber
      },
      set(value) {
        this.$store.commit('setSelectedProfileTerm', {
          key: 'employeeNumber',
          value,
        })
      },
    },
    emergencyFlag: {
      get() {
        return this.$store.state.selectedProfile.emergencyFlag
      },
      set(value) {
        this.$store.commit('setSelectedProfileTerm', {
          key: 'emergencyFlag',
          value,
        })
      },
    },
    vipFlag: {
      get() {
        return this.$store.state.selectedProfile.vipFlag
      },
      set(value) {
        this.$store.commit('setSelectedProfileTerm', {
          key: 'vipFlag',
          value,
        })
      },
    },
    active: {
      get() {
        return this.$store.state.selectedProfile.active
      },
      set(value) {
        this.$store.commit('setSelectedProfileTerm', {
          key: 'active',
          value,
        })
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
