<template lang="pug">
.meu-perfil-wrapper.tw-mt-5.tw-px-4
  .fields.tw-grid
    b-field.tw-mx-2(:label='$t("user")')
      b-input(v-model='usuario', size='is-small', disabled)
    b-field.tw-mx-2(:label='$t("manager")')
      b-input(v-model='gestor', size='is-small', disabled)
    b-field.tw-mx-2(label='E-mail')
      b-input(v-model='email', size='is-small', disabled)
    b-field.tw-mx-2(:label='$t("company")')
      b-input(v-model='empresa', size='is-small', disabled)
    b-field.tw-mx-2(:label='$t("name")')
      b-input(v-model='nome', size='is-small', disabled)
    b-field.tw-mx-2(:label='$t("surname")')
      b-input(v-model='sobrenome', size='is-small', disabled)
    b-field.tw-mx-2(:label='$t("phone")')
      b-input(
        v-model='telefone',
        size='is-small',
        v-mask='["(##) ####-####", "(##) #####-####"]'
      )
    b-field.tw-mx-2(:label='$t("field")')
      b-input(v-model='area', size='is-small')
    b-field.tw-mx-2(:label='$t("role")')
      b-input(v-model='cargo', size='is-small')
    b-field.tw-mx-2(:label='$t("registration")')
      b-input(v-model='matricula', size='is-small')
    b-checkbox.tw-m-5(v-model='emergencial') {{ $t("emergency") }}
    b-checkbox.tw-m-5(v-model='desk') VIP Desk
  .update-buttons.tw-flex.tw-justify-center
    b-button.tw-mx-2.tw-my-4(type='is-success') {{ $t("update") }}
  collapse(title='Perfil de Acesso')
  collapse(title='Visão de clientes')
</template>

<script>
export default {
  name: 'MeuPerfil',
  components: {
    Collapse: () => import('@/components/Collapse'),
  },
  props: {},
  data() {
    return {
      usuario: 'ronnas123',
      gestor: 'Ronnasayd Machado',
      email: 'ronnas@gmail.com',
      empresa: 'CWT',
      nome: 'Ronnasayd',
      sobrenome: 'Machado',
      telefone: '1199999999',
      area: 'Engenharia',
      cargo: 'Engenheiro',
      matricula: '1234567890',
      emergencial: '',
      desk: '',
    }
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.meu-perfil-wrapper {
  .fields {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}
</style>
