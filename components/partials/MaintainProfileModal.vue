<template lang="pug">
#maintainProfileModal.maintain-profile-modal-wrapper
  .card-l
    .card-header
    .card-content
      form.tw-grid(name='perfil')
        b-field.tw-mx-2(:label='$t("superProfile")')
          b-select(
            :placeholder='$t("selectProfile")',
            @input='(value) => handleChangeTerm("profileParentId", value)',
            :value='maintainProfile.profileParentId'
          )
            option(
              v-for='(parent,index) in parentProfiles',
              :value='parent.profileId'
            ) {{ parent.profileName }}
        //- b-field(label='Visão de dados de clientes')
        //-   b-select(placeholder='Selecione a visão', value='admin')
        //-     option(value='admin') administrador
        //-     option(value='gestor') gestor
        b-field.tw-mx-2.tw-w-24(:label='$t("profileCode")')
          b-input(
            :value='maintainProfile.profileId',
            size='is-small',
            maxlength='7',
            @input='(value) => handleChangeTerm("profileId", value)'
          )
        b-field.tw-mx-2(:label='$t("profileDescription")')
          b-input(
            :value='maintainProfile.profileName',
            size='is-small',
            maxlength='40',
            @input='(value) => handleChangeTerm("profileName", value)'
          )
        b-field.mx-2(:label='$t("customerDataView")')
          b-select(
            :placeholder='$t("selectCustomerDataView")',
            :value='maintainProfile.indVision',
            @input='(value) => handleChangeTerm("indVision", value)'
          )
            option(value='A') {{ $t("admin") }}
            option(value='P') {{ $t("pointOfSale") }}

        b-field
          b-field.tw-mx-2
            b-switch(
              :value='maintainProfile.viewCCard',
              @input='(value) => handleChangeTerm("viewCCard", value)'
            ) Visualizar cartão
          //- b-field
          //-   b-switch(v-model='perfil.access') Permissão de atribuição
          b-field.tw-mx-2
            b-switch(
              :value='maintainProfile.active',
              @input='(value) => handleChangeTerm("active", value)'
            ) Ativo

    .card-footer.tw-px-6.tw-py-4.tw-flex.tw-justify-end
      .wrapper-buttons
        b-button.tw-mr-4(type='is-danger', @click='$emit("close")') {{ $t("cancel") }}
        b-button(type='is-primary', @click='handleCreateProfile') {{ $t("save") }}
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  name: 'MaintainProfileModal',
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapState({
      maintainProfile: (state) => state.maintainProfile,
      parentProfiles: (state) => state.parentProfiles,
      maintainProfileMode: (state) => state.maintainProfileMode,
    }),
  },
  watch: {},
  mounted() {},
  created() {},
  methods: {
    ...mapActions(['createProfile', 'updateMaintainProfile']),
    ...mapMutations(['setMaintainProfileTerm']),
    handleChangeTerm(term, value) {
      if (term === 'profileId') value = parseInt(value)
      this.setMaintainProfileTerm({ term, value })
    },
    async handleCreateProfile() {
      this.$emit('close')
      if (this.maintainProfileMode === 'save') {
        await this.createProfile()
      }
      if (this.maintainProfileMode === 'edit') {
        await this.updateMaintainProfile()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.maintain-profile-modal-wrapper {
  max-width: px2rem(875);
  margin: 0 auto;
  form {
    grid-template-columns: repeat(auto-fill, minmax(px2rem(280), 1fr));
  }
}
</style>

<style lang="scss">
.maintain-profile-modal-wrapper {
  label {
    font-size: 0.75rem;
  }
  .card {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 10%),
      0 4px 6px -2px rgba(0, 0, 0, 5%);
  }
}
</style>
