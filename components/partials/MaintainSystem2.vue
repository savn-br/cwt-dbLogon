<template lang="pug">
#maintainSystem2.maintain-system2-wrapper.tw-mt-8.tw-px-8
  .form.tw-grid.form-auto-fill(name='modulos')
    b-field.tw-mx-2(label='Código do sistema')
      b-input(v-model='selectedSystem.systemId', size='is-small', disabled)
    b-field.tw-mx-2(label='Sigla do sistema')
      b-input(
        v-model='selectedSystem.systemAcronym',
        size='is-small',
        disabled
      )
    b-field.tw-mx-2(label='Descrição')
      b-input(v-model='selectedSystem.systemName', size='is-small', disabled)
  b-modal(v-model='isModalActive')
    template(#default='props')
      maintain-system-modal-2(@close='props.close')
  .buttons-wrapper.tw-flex.tw-justify-end.tw-mb-2
    b-button(type='is-primary', @click='createModule') {{ $t("add") }}
  standard-table(:data='selectedSystem.modules')
    b-table-column(v-slot='props', field='moduleId', label='Código do sistema')
      span.tw-text-xs {{ props.row.moduleId }}
    b-table-column(
      v-slot='props',
      field='moduleAcronym',
      :searchable='true',
      label='Sigla sistema'
    )
      span.tw-text-xs {{ props.row.moduleAcronym }}
    b-table-column(
      v-slot='props',
      field='moduleName',
      :searchable='true',
      label='Descrição'
    )
      span.tw-text-xs {{ props.row.moduleName }}
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
        span.tw-cursor-pointer(
          class='hover:tw-text-primary',
          @click='editModule(props.row)'
        )
          b-icon.tw-mr-2(icon='pencil')
        span.tw-cursor-pointer(
          class='hover:tw-text-primary',
          @click='goToTransaction(props.row)'
        )
          b-icon.tw-mr-2(icon='account-details')
        span.tw-cursor-pointer(class='hover:tw-text-primary')
          b-icon.tw-mr-2(icon='clipboard-text')
        span.tw-cursor-pointer(class='hover:tw-text-primary')
          b-icon(icon='eye')
</template>

<script>
import { mapState } from 'vuex'
import changeMenu from '~/mixins/changeMenu'
export default {
  name: 'MaintainSystem2',
  components: {
    StandardTable: () => import('@/components/StandardTable'),
    MaintainSystemModal2: () =>
      import('@/components/partials/MaintainSystemModal2'),
  },
  mixins: [changeMenu],
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
  computed: {
    ...mapState({
      selectedSystem: (state) => state.selectedSystem,
    }),
  },
  watch: {},
  mounted() {
    this.$store.dispatch('getModules')
  },
  created() {},
  methods: {
    goToTransaction(module) {
      this.$store.commit('changeSelectedModule', module)
      this.changePartial('MaintainSystem3')
    },
    createModule() {
      this.$store.commit('changeModuleModalMode', 'save')
      this.$store.commit('changeSelectedModule', {})
      this.isModalActive = true
    },
    editModule(module) {
      this.$store.commit('changeModuleModalMode', 'edit')
      this.$store.commit('changeSelectedModule', module)
      this.isModalActive = true
    },
  },
}
</script>

<style lang="scss" scoped>
.maintain-system2-wrapper {
}
</style>

<style lang="scss">
.maintain-system2-wrapper {
  .form {
    label {
      font-size: 0.75rem;
    }
  }

  input.input {
    height: px2rem(25);
  }
}
</style>
