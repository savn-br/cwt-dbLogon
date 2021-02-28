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
    b-table(:data='data', :columns='columns', :bordered='true')
</template>

<script>
export default {
  name: 'SolicitacaoDeAcesso',
  components: {},
  data() {
    const perfil = Object.assign(require('@/jsons/perfil.json'))
    const table = Object.assign(require('@/jsons/table.json'))
    return {
      ...perfil,
      columns: [
        {
          field: 'date',
          label: this.$i18n.t('date'),
        },
        {
          field: 'action',
          label: this.$i18n.t('action'),
        },
      ],
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
