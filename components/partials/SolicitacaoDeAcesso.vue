<template lang="pug">
.solicitacao-de-acesso-wrapper.tw-px-4
  steps
  .fields.tw-grid
    b-field.tw-mx-2(label='Usuário')
      b-input(v-model='usuario', size='is-small', disabled)
    b-field.tw-mx-2(label='Gestor')
      b-input(v-model='gestor', size='is-small', disabled)
    b-field.tw-mx-2(label='E-mail')
      b-input(v-model='email', size='is-small', disabled)
    b-field.tw-mx-2(label='Empresa')
      b-input(v-model='empresa', size='is-small', disabled)
    b-field.tw-mx-2(label='Nome')
      b-input(v-model='nome', size='is-small', disabled)
    b-field.tw-mx-2(label='Sobrenome')
      b-input(v-model='sobrenome', size='is-small', disabled)
    b-field.tw-mx-2(label='Tel. Comercial')
      b-input(v-model='telefone', size='is-small')
    b-field.tw-mx-2(label='Área')
      b-input(v-model='area', size='is-small')
    b-field.tw-mx-2(label='Cargo')
      b-input(v-model='cargo', size='is-small')
    b-field.tw-mx-2(label='Mátricula')
      b-input(v-model='matricula', size='is-small')
    b-checkbox.tw-m-5(v-model='emergencial') Emergencial
    b-checkbox.tw-m-5(v-model='desk') VIP Desk
  .update-buttons.tw-flex.tw-justify-center.tw-my-3(class='sm:tw-justify-end')
    b-button.tw-m-4(type='is-success') Atualizar
    b-button.tw-m-4(type='is-primary') Solicitar Acesso
  .logs
    h1 Status
    b-table(:data='data', :columns='columns')
</template>

<script>
export default {
  name: 'SolicitacaoDeAcesso',
  components: {},
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
      columns: [
        {
          field: 'date',
          width: '10',
          label: 'Data',
        },
        {
          field: 'description',
          width: '90',
          label: 'Ação',
        },
      ],
      data: [
        {
          id: 1,
          date: '2016-10-15 13:43:27',
          description: 'Lorem ipsum',
        },
        {
          id: 2,
          date: '2016-10-15 13:43:27',
          description: 'Lorem ipsum',
        },
      ],
    }
  },
  computed: {
    Steps: () => import('@/components/Steps'),
  },
  watch: {},
  mounted() {},
  created() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.solicitacao-de-acesso-wrapper {
  .fields {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}
</style>
