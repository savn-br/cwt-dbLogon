<template lang="pug">
.approval-delegation-wrapper.tw-mt-8.tw-px-8
  b-modal(v-model='isLogModalActive')
    template(#default='props')
      log-modal(@close='props.close')
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
    b-button.tw-w-24(type='is-primary', @click='handleOpenModal') {{ $t("add") }}
  standard-table.tw-mt-5(
    :data='approvalList',
    :bordered='true',
    :narrowed='true',
    :hoverable='true'
  )
    b-table-column(
      field='userSubstituteId',
      :label='$t("user")',
      v-slot='props'
    )
      span.tw-text-xs {{ props.row.userSubstituteId }}
    b-table-column(
      field='userSubstituteName',
      :label='$t("name")',
      v-slot='props'
    )
      span.tw-text-xs {{ props.row.userSubstituteName }}
    b-table-column(field='Email', label='email', v-slot='props')
      span.tw-text-xs {{ props.row.email }}
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
      .button-container.tw-flex.tw-justify-center.tw-items-center.tw-gap-2
        b-button(
          :class='!props.row.active ? "hidden" : ""',
          type='is-danger',
          size='is-small',
          @click='(status) => handleChangeStatus(!props.row.active, props.row.userSubstituteId)'
        ) {{ $t("remove") }}
        span.tw-cursor-pointer.tw-flex.tw-items-center(
          class='hover:tw-text-primary',
          @click='(event) => handleShowLogModal(event, props.row)'
        )
          b-icon(icon='eye', size='')
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
    LogModal: () => import('@/components/partials/LogModal.vue'),
  },
  props: {},
  data() {
    return {
      isLogModalActive: false,
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
    ...mapMutations(['clearApprovalDelegation', 'setLogState']),
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
    handleShowLogModal(event, props) {
      event.stopPropagation()
      this.isLogModalActive = !this.isLogModalActive
      const { insertDate, userIdInsert, alterDate, userIdUpdate } = props
      this.setLogState({ insertDate, userIdInsert, alterDate, userIdUpdate })
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
