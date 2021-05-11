<template lang="pug">
.alternate-approver-register-wrapper.tw-mt-8.tw-px-8
  b-modal(
    v-model='isModalConfirmationActive',
    :on-cancel='handleCancelOperation'
  )
    template(#default='props')
      confirmation-modal(
        @close='props.close',
        :onConfirm='handleSetSubstituteApprover',
        :onCancel='handleCancelOperation'
      )
  b-modal(v-model='isModalActive')
    template(#default='props')
      alternate-approver-modal(@close='props.close')
  .button-primary.tw-flex.tw-justify-end
    b-button(type='is-primary', @click='handleOpenModal') {{ $t("add") }}
  standard-table.tw-mt-5(
    :data='approverList',
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
    //- b-table-column(
    //-   field='name',
    //-   :label='$t("delegateApproverName")',
    //-   v-slot='props'
    //- )
    //-   span.tw-text-xs {{ props.row.name }}
    //- b-table-column(field='email', label='E-mail', v-slot='props')
    //-   span.tw-text-xs {{ props.row.email }}
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
        b-switch(
          size='is-small',
          :value='props.row.active',
          :ref='props.row.userSubstituteId',
          @input='(status) => handleChangeStatus(status, props.row)'
        )
</template>

<script>
import { mapMutations, mapActions, mapState } from 'vuex'
export default {
  name: 'AlternateApproverRegister',
  components: {
    StandardTable: () => import('@/components/StandardTable'),
    AlternateApproverModal: () =>
      import('@/components/partials/AlternateApproverModal'),
    ConfirmationModal: () => import('@/components/partials/ConfirmationModal'),
  },
  props: {},
  data() {
    return {
      isModalActive: false,
      isModalConfirmationActive: false,
      internalSubstituteApprover: {
        userSubstituteId: '',
        active: false,
      },
    }
  },
  computed: {
    ...mapState({
      approverList: (state) => state.substituteApproverList,
    }),
  },
  watch: {},
  mounted() {
    this.getSubstituteApproverList()
  },
  created() {},
  methods: {
    ...mapMutations(['clearSubstituteApprover']),
    ...mapActions(['getSubstituteApproverList', 'setSubstituteApprover']),

    handleOpenModal() {
      this.clearSubstituteApprover()
      this.isModalActive = true
    },
    handleChangeStatus(status, substituteApprover) {
      const { userSubstituteId } = substituteApprover
      this.internalSubstituteApprover = {
        userSubstituteId,
        active: status,
      }
      this.isModalConfirmationActive = true
    },
    handleCancelOperation() {
      this.$refs[this.internalSubstituteApprover.userSubstituteId].value = !this
        .internalSubstituteApprover.active
      this.$refs[
        this.internalSubstituteApprover.userSubstituteId
      ].computedValue = !this.internalSubstituteApprover.active
    },
    handleSetSubstituteApprover() {
      this.setSubstituteApprover({
        userId: this.internalSubstituteApprover.userSubstituteId,
      })
    },
  },
}
</script>

<style lang="scss">
.alternate-approver-register-wrapper {
  .hidden {
    display: none;
  }
}
</style>
