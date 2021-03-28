<template lang="pug">
#maintainSystem2.maintain-system2-wrapper.tw-mt-8.tw-px-8
  .form.tw-grid.form-auto-fill(name='modulos')
    b-field.tw-mx-2(label='Código do sistema')
      b-input(v-model='systemCode', disabled)
    b-field.tw-mx-2(label='Sigla do sistema')
      b-input(v-model='systemSigla', disabled)
    b-field.tw-mx-2(label='Descrição')
      b-input(v-model='description', disabled)
  b-modal(v-model='isModalActive')
    template(#default='props')
      maintain-system-modal-2(@close='props.close')
  .buttons-wrapper.tw-flex.tw-justify-end.tw-mb-2
    b-button(type='is-primary', @click='isModalActive = true') {{ $t("add") }}
  standard-table(:data='[profileDescription[0]]')
    b-table-column(
      v-slot='props',
      field='profile_code',
      :searchable='true',
      label='Código do módulo'
    )
      span.tw-text-xs {{ props.row.profile_code }}
    b-table-column(
      v-slot='props',
      field='profile_description',
      :searchable='true',
      label='Descrição do módulo'
    )
      span.tw-text-xs {{ props.row.profile_description }}
    b-table-column(
      v-slot='props',
      field='active',
      :label='$t("active")',
      :centered='true'
    )
      span(v-if='props.row.active')
        b-icon(icon='check')
      span(v-else)
        b-icon(icon='close')
    b-table-column(
      :label='$t("operation")',
      field='active_operation',
      :centered='true',
      v-slot='props'
    )
      .operation-wrapper
        span.tw-cursor-pointer(class='hover:tw-text-primary')
          b-icon.tw-mr-2(icon='pencil')
        span.tw-cursor-pointer(class='hover:tw-text-primary')
          b-icon.tw-mr-2(icon='account-details')
        span.tw-cursor-pointer(class='hover:tw-text-primary')
          b-icon.tw-mr-2(icon='clipboard-text')
        span.tw-cursor-pointer(class='hover:tw-text-primary')
          b-icon(icon='eye')
</template>

<script>
export default {
  name: 'MaintainSystem2',
  components: {
    StandardTable: () => import('@/components/StandardTable'),
    MaintainSystemModal2: () =>
      import('@/components/partials/MaintainSystemModal2'),
  },
  props: {},
  data() {
    return {
      systemCode: '2',
      systemSigla: 'REC',
      description: 'Receitas',
      isModalActive: false,
      profileDescription: require('@/jsons/profile-description-table-data.json'),
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
.maintain-system2-wrapper {
}
</style>

<style lang="scss">
.maintain-system2-wrapper {
  input.input {
    height: px2rem(25);
  }
}
</style>
