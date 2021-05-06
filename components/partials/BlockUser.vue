<template lang="pug">
.block-user-wrapper.tw-mt-8.tw-px-8
  b-modal(v-model='isModalActive', :on-cancel='handleCancelOperation')
    template(#default='props')
      confirmation-modal(
        @close='props.close',
        :onConfirm='handleUpdateActiveState',
        :onCancel='handleCancelOperation'
      )
  form
    fieldset
      b-switch(size='is-small', v-model='onlyActives') {{ $t("activeOnly") }}
  standard-table.tw-mt-5(:data='filteredActivateUsers', :bordered='true')
    b-table-column(field='userId', :label='$t("user")', v-slot='props')
      span.tw-text-xs {{ props.row.userId }}
    b-table-column(field='userName', :label='$t("name")', v-slot='props')
      span.tw-text-xs {{ props.row.userName }}
    b-table-column(field='profileName', :label='$t("profile")', v-slot='props')
      span.tw-text-xs {{ props.row.profileName }}
    b-table-column(
      field='startTermDate',
      :label='$t("initialDate")',
      v-slot='props'
    )
      span.tw-text-xs {{ props.row.startTermDate }}
    b-table-column(
      field='endTermDate',
      :label='$t("finalDate")',
      v-slot='props'
    )
      span.tw-text-xs {{ props.row.endTermDate }}
    b-table-column(, :label='$t("active")', v-slot='props', :centered='true')
      b-field
        b-switch(
          size='is-small',
          :value='props.row.active',
          :ref='props.row.userId',
          @input='(active) => handleChangeCollaboratorState(active, props.row.userId)'
        )
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
export default {
  name: 'BlockUser',
  components: {
    StandardTable: () => import('@/components/StandardTable'),
    ConfirmationModal: () => import('@/components/partials/ConfirmationModal'),
  },
  props: {},
  data() {
    return {
      onlyActives: false,
      isModalActive: false,
      currentCollaborator: {
        active: false,
        userId: '',
      },
    }
  },
  computed: {
    ...mapState(['activateUsers']),

    filteredActivateUsers() {
      if (this.onlyActives) {
        return this.activateUsers.filter((user) => user.active)
      } else {
        return this.activateUsers
      }
    },
  },
  watch: {},
  async mounted() {
    await this.getActivateUsers()
  },
  created() {},
  methods: {
    ...mapActions(['getActivateUsers', 'setActivateUser']),
    ...mapMutations(['setActivateUsersElement']),

    handleChangeCollaboratorState(active, userId) {
      this.isModalActive = true
      this.currentCollaborator.active = active
      this.currentCollaborator.userId = userId
    },
    handleCancelOperation() {
      this.$refs[this.currentCollaborator.userId].value = !this
        .currentCollaborator.active
      this.$refs[this.currentCollaborator.userId].computedValue = !this
        .currentCollaborator.active
    },

    async handleUpdateActiveState() {
      const status = await this.setActivateUser({
        active: this.currentCollaborator.active,
        userId: this.currentCollaborator.userId,
      })
      if (status !== 200) {
        this.handleCancelOperation()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.block-user-wrapper {
}
</style>
