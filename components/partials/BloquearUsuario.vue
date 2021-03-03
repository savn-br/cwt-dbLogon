<template lang="pug">
.bloquear-usuario-wrapper.tw-mt-8.tw-px-5
  form
    fieldset
      b-radio(v-model='radio', name='select', native-value='todos') Todos os usuários
      b-radio(v-model='radio', name='select', native-value='ativos') Somente ativos
  b-table.tw-mt-5(:data='data', :bordered='true')
    b-table-column(field='user', label='Usuário', v-slot='props')
      | {{ props.row.user }}
    b-table-column(field='name', label='Nome', v-slot='props')
      | {{ props.row.name }}
    b-table-column(field='perfil', label='Perfil', v-slot='props')
      | {{ props.row.perfil }}
    b-table-column(field='initial_date', label='Data inicial', v-slot='props')
      | {{ props.row.initial_date }}
    b-table-column(field='end_date', label='Data final', v-slot='props')
      | {{ props.row.end_date }}
    b-table-column(, label='Operação', v-slot='props')
      b-field
        b-switch(
          true-value='on',
          false-value='off',
          v-model='props.row.operation'
        ) {{ props.row.operation }}
</template>

<script>
export default {
  name: 'BloquearUsuario',
  components: {},
  props: {},
  data() {
    return {
      data: require('@/jsons/blockUser.json'),
      radio: '',
      switchValue: 'Off',
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
.bloquear-usuario-wrapper {
}
</style>
