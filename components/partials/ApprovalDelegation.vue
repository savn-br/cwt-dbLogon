<template lang="pug">
.approval-delegation-wrapper.tw-mt-8.tw-px-8
  b-modal(v-model='isModalConfirmationActive')
    template(#default='props')
      confirmation-modal(
        @close='props.close',
        :onConfirm='handleApprovalDelegation'
      )
  b-modal(v-model='isModalActive')
    template(#default='props')
      approval-delegation-modal(@close='props.close')
  .button-primary.tw-flex.tw-justify-end
    b-button(type='is-primary', @click='handleOpenModal') {{ $t("add") }}
  standard-table.tw-mt-5(
    :data='approvalList',
    :bordered='true',
    :narrowed='true',
    :hoverable='true'
  )
    b-table-column(
      field='userSubstituteId',
      :label='$t("registration")',
      v-slot='props'
    )
      span.tw-text-xs {{ props.row.userSubstituteId }}
    b-table-column(
      field='userSubstituteName',
      :label='$t("name")',
      v-slot='props'
    )
      span.tw-text-xs {{ props.row.userSubstituteName }}
    b-table-column(
      field='beginTermDate',
      :label='$t("initialDate")',
      v-slot='props'
    )
      span.tw-text-xs {{ props.row.beginTermDate }}
    b-table-column(
      field='endTermDate',
      :label='$t("finalDate")',
      v-slot='props'
    )
      span.tw-text-xs {{ props.row.endTermDate }}
    b-table-column(
      ,
      :label='$t("operation")',
      v-slot='props',
      :centered='true'
    )
      b-field(:class='!props.row.active ? "hidden" : ""')
        b-button(
          type='is-danger',
          size='is-small',
          @click='(status) => handleChangeStatus(!props.row.active, props.row.userSubstituteId)'
        ) {{ $t("remove") }}
        //- b-switch(
        //-   size='is-small',
        //-   :value='props.row.active',
        //-   :ref='`${props.row.userSubstituteId}_${props.index}`',
        //-   @input='(status) => handleChangeStatus(status, props.row, props.index)'
        //- )
</template>

<script>
import { mapMutations, mapActions, mapState } from 'vuex'
export default {
  name: 'ApprovalDelegation',
  components: {
    StandardTable: () => import('@/components/StandardTable'),
    ApprovalDelegationModal: () =>
      import('@/components/partials/ApprovalDelegationModal'),
    ConfirmationModal: () => import('@/components/partials/ConfirmationModal'),
  },
  props: {},
  data() {
    return {
      isModalActive: false,
      isModalConfirmationActive: false,
      internalApprovalDelegation: {
        userSubstituteId: '',
        active: false,
      },
    }
  },
  computed: {
    ...mapState({
      approvalList: (state) => state.approvalDelegationList,
    }),
  },
  watch: {},
  mounted() {
    this.getApprovalDelegationList()
    this.getUsersByManagerId()
  },
  created() {},
  methods: {
    ...mapMutations(['clearApprovalDelegation']),
    ...mapActions([
      'getApprovalDelegationList',
      'setApprovalDelegation',
      'getUsersByManagerId',
    ]),

    handleOpenModal() {
      this.clearApprovalDelegation()
      this.isModalActive = true
    },
    handleChangeStatus(status, userSubstituteId) {
      this.internalApprovalDelegation = {
        userSubstituteId,
        active: status,
      }
      this.isModalConfirmationActive = true
    },
    handleApprovalDelegation() {
      this.setApprovalDelegation({
        userId: this.internalApprovalDelegation.userSubstituteId,
      })
    },
  },
}
</script>

<style lang="scss">
.approval-delegation-wrapper {
  .hidden {
    display: none;
  }
}
</style>
