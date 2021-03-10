<template lang="pug">
#maintainSystemModal2.maintain-system-modal2-wrapper
  .card
    .card-header
    .card-content
      form.tw-grid(name='perfil')
        b-field(label='Código do Módulo')
          b-input(v-model='perfil.register', size='is-small')
        b-field(label='Sigla')
          b-input(v-model='perfil.register', size='is-small')
        b-field(label='Descrição')
          b-input(v-model='perfil.email', size='is-small')
        b-field(label='Notas')
          b-input(maxlength='255', type='textarea')
        b-field
          b-switch Ativo
    .card-footer.tw-px-6.tw-pb-4.tw-flex.tw-justify-end
      .wrapper-buttons
        b-button.tw-mr-4(type='is-danger', @click='$emit("close")') Cancelar
        b-button(type='is-primary') Salvar
</template>

<script>
export default {
  name: 'MaintainSystemModal2',
  components: {},
  props: {},
  data() {
    return {
      perfil: {
        register: '',
        email: '',
        name: '',
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
.maintain-system-modal2-wrapper {
  max-width: px2rem(875);
  margin: 0 auto;
  form {
    grid-template-columns: repeat(auto-fill, minmax(px2rem(280), 1fr));
    grid-column-gap: px2rem(15);
  }
}
</style>

<style lang="scss">
.maintain-system-modal2-wrapper {
  label {
    font-size: 0.75rem;
  }
}
</style>
