<template lang="pug">
.perfil-form-default-wrapper
  form.fields.tw-grid
    b-field.tw-mx-2(:label='$t("user")')
      b-input(v-model='data.usuario', size='is-small', disabled)
    b-field.tw-mx-2(:label='$t("manager")')
      b-input(v-model='data.gestor', size='is-small', disabled)
    b-field.tw-mx-2(label='E-mail')
      b-input(v-model='data.email', size='is-small', disabled)
    b-field.tw-mx-2(:label='$t("company")')
      b-input(v-model='data.empresa', size='is-small', disabled)
    b-field.tw-mx-2(:label='$t("name")')
      b-input(v-model='data.nome', size='is-small', disabled)
    b-field.tw-mx-2(:label='$t("phone")')
      b-input(
        v-model='data.telefone',
        size='is-small',
        v-mask='["(##) ####-####", "(##) #####-####"]'
      )
    b-field.tw-mx-2(:label='$t("field")')
      b-input(v-model='data.area', size='is-small')
    b-field.tw-mx-2(:label='$t("role")')
      b-input(v-model='data.cargo', size='is-small')
    b-field.tw-mx-2(:label='$t("registration")')
      b-input(v-model='data.matricula', size='is-small')
    b-checkbox.tw-m-5(v-model='data.emergencial') {{ $t("emergency") }}
    b-checkbox.tw-m-5(v-model='data.desk') VIP Desk
    slot(name='content')
</template>

<script>
export default {
  name: 'PerfilFormDefault',
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
.perfil-form-default-wrapper {
  .fields {
    grid-template-columns: repeat(auto-fill, minmax(px2rem(300), 1fr));
    @media screen and(min-width: px2rem(1500)) {
      grid-template-columns: repeat(4, minmax(px2rem(300), 1fr));
    }
  }
}
</style>

<style lang="scss">
.perfil-form-default-wrapper {
  label {
    font-size: 0.75rem;
  }
}
</style>
