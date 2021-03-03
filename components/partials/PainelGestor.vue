<template lang="pug">
.painel-gestor-wrapper.tw-mt-10.tw-px-4
  b-table(:data='data', :bordered='true', :narrowed='true', :striped='true')
    b-table-column(field='id', label='ID', v-slot='props')
      | {{ props.row.id }}
    b-table-column(field='date', label='Date', v-slot='props')
      | {{ props.row.date }}
    b-table-column(field='action', label='Ação', v-slot='props')
      | {{ props.row.action }}
    b-table-column(field='user', label='Usuário', v-slot='props')
      | {{ props.row.user }}
    b-table-column(field='colaborator', label='Colaborador', v-slot='props')
      | {{ props.row.colaborator }}
    b-table-column(label='Verificar', v-slot='props', :centered='true')
      b-button(type='is-primary', @click='verificar(props.row.id)') verificar perfil
</template>

<script>
export default {
  name: 'PainelGestor',
  components: {},
  props: {},
  data() {
    const data = Object.assign(require('@/jsons/attPerfil.json'))
    return {
      data,
    }
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {},
  methods: {
    verificar(id) {
      console.log(id)
    },
  },
}
</script>

<style lang="scss" scoped>
.painel-gestor-wrapper {
}
</style>
