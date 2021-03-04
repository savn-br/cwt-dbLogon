<template lang="pug">
.solicitacao-de-acesso-wrapper.tw-px-4
  steps
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
  .update-buttons.tw-flex.tw-justify-center(class='sm:tw-justify-end')
    b-button.tw-mx-2(type='is-success') {{ $t("update") }}
    b-button.tw-mx-2(type='is-primary') {{ $t("requestAccess") }}
  .logs.tw-mt-2.tw-mb-4
    h1 Status
    table-default(:data='data', , :bordered='true')
      b-table-column(field='date', :label='$t("date")', v-slot='props')
        span.tw-text-xs {{ props.row.date }}
      b-table-column(field='action', :label='$t("action")', v-slot='props')
        span.tw-text-xs {{ props.row.action }}
</template>

<script>
export default {
  name: 'SolicitacaoDeAcesso',
  components: {
    TableDefault: () => import('@/components/TableDefault'),
  },
  data() {
    const perfil = Object.assign(require('@/jsons/perfil.json'))
    const table = Object.assign(require('@/jsons/statusTable.json'))
    return {
      ...perfil,
      ...table,
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

<style lang="scss">
.solicitacao-de-acesso-wrapper {
  label {
    font-size: 0.75rem;
  }
}
</style>
