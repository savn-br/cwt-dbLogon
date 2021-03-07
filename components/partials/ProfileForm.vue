<template lang="pug">
.profile-form-wrapper
  form.fields.tw-grid(name='profileForm')
    b-field.tw-mx-2(:label='$t("user")')
      b-input(v-model='data.user', size='is-small', name='user', disabled)
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
      b-input(v-model='data.name', size='is-small', name='name', disabled)
    b-field.tw-mx-2(:label='$t("phone")')
      b-input(
        v-model='data.phone',
        size='is-small',
        name='phone',
        v-mask='["(##) ####-####", "(##) #####-####"]'
      )
    b-field.tw-mx-2(:label='$t("field")')
      b-input(v-model='data.field', name='field', size='is-small')
    b-field.tw-mx-2(:label='$t("role")')
      b-input(v-model='data.position', name='position', size='is-small')
    b-field.tw-mx-2(:label='$t("registration")')
      b-input(v-model='data.register', name='register', size='is-small')
    b-checkbox.tw-m-5(v-model='data.emergency', name='emergency') {{ $t("emergency") }}
    b-checkbox.tw-m-5(v-model='data.desk', name='desk') VIP Desk
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
  computed: {},
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
