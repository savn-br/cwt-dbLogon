<template lang="pug">
#profileSearch2.profile-search2-wrapper.tw-mt-8.tw-px-8
  back-button.tw-mb-4(:partialComponent='backProfileSearchPartial')
  form.fields.tw-grid.tw-mb-4(name='profileForm')
    b-field.tw-mx-2(label='Código do perfil')
      b-input(
        size='is-small',
        v-model='selectedProfileData.profileId',
        disabled
      )
    b-field.tw-mx-2(label='Descrição do perfil')
      b-input(
        v-model='selectedProfileData.profileName',
        size='is-small',
        disabled
      )
    b-field.tw-mx-2(label='Perfil pai')
      b-input(
        v-model='selectedProfileData.profileParentId',
        size='is-small',
        disabled
      )
    b-field.tw-mx-2(label='Visão de dados de clientes')
      b-input(, size='is-small', disabled)
    b-field.tw-mx-2
      b-switch(
        @input='(active) => handleUpdateProfile({ viewCCard: active })',
        size='is-small',
        :value='selectedProfileData.viewCCard'
      ) Visualizar cartão
    b-field.tw-mx-2
      b-switch(
        @input='(active) => handleUpdateProfile({ active })',
        size='is-small',
        :value='selectedProfileData.active'
      ) Ativo

  collapse.tw-text-sm(
    v-if='!!selectedProfileData.profileAccess && !!selectedProfileData.profileAccess.profileName',
    :title='selectedProfileData.profileAccess.profileName'
  )
    component(
      v-for='(system,index) in selectedProfileData.profileAccess.details',
      is='SystemCollapse',
      :key='index',
      :system='system'
    )
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'ProfileSearch2',
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapState(['selectedProfileData', 'backProfileSearchPartial']),
  },
  watch: {},
  async mounted() {
    await this.getSelectedProfileData()
  },
  created() {},
  methods: {
    ...mapActions(['getSelectedProfileData', 'handleUpdateProfileDataTerm']),
    async handleUpdateProfile(term) {
      await this.handleUpdateProfileDataTerm(term)
    },
  },
}
</script>

<style lang="scss" scoped>
.profile-search2-wrapper {
  .fields {
    grid-template-columns: repeat(auto-fill, minmax(px2rem(300), 1fr));
    @media screen and(min-width: px2rem(1500)) {
      grid-template-columns: repeat(4, minmax(px2rem(300), 1fr));
    }
  }
}
</style>

<style lang="scss">
.profile-search2-wrapper {
  .fields {
    max-width: px2rem(800);
    margin-left: auto;
    margin-right: auto;
  }

  // label {
  //   font-size: 0.75rem;
  // }
}
</style>
