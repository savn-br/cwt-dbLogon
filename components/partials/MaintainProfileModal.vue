<template lang="pug">
#maintainProfileModal.maintain-profile-modal-wrapper
  .card
    .card-header
    .card-content
      form.tw-grid(name='perfil')
        b-field(label='Perfil pai')
          b-select(placeholder='Selecione o perfil', value='admin')
            option(value='admin') ADMIN
            option(value='gestor') GESTOR
        b-field(label='Visão de dados de clientes')
          b-select(placeholder='Selecione a visão', value='admin')
            option(value='admin') administrador
            option(value='gestor') gestor
        b-field.mx-2(:label='$t("profileCode")')
          b-input(v-model='perfil.register', size='is-small')
        b-field.mx-2(label='Descrição do perfil')
          b-input(v-model='perfil.email', size='is-small')
        b-field
          b-field
            b-switch(v-model='perfil.card') Visualizar cartão
          b-field
            b-switch(v-model='perfil.access') Permissão de atribuição
          b-field
            b-switch(v-model='perfil.active') Ativo

    .card-footer.tw-px-6.tw-py-4.tw-flex.tw-justify-end
      .wrapper-buttons
        b-button.tw-mr-4(type='is-danger', @click='$emit("close")') {{ $t("cancel") }}
        b-button(type='is-primary') {{ $t("save") }}
</template>

<script>
export default {
  name: 'MaintainProfileModal',
  components: {},
  props: {},
  data() {
    return {
      perfil: {
        register: '',
        email: '',
        name: '',
        card: '',
        access: '',
        active: '',
      },
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
.maintain-profile-modal-wrapper {
  max-width: px2rem(875);
  margin: 0 auto;
  form {
    grid-template-columns: repeat(auto-fill, minmax(px2rem(280), 1fr));
  }
}
</style>

<style lang="scss">
.maintain-profile-modal-wrapper {
  label {
    font-size: 0.75rem;
  }
}
</style>
