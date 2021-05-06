<template lang="pug">
#maintainProfile2.maintain-profile2-wrapper.tw-mt-8.tw-px-8
  back-button.tw-mb-6(partialComponent='MaintainProfile')
  form.fields.tw-flex.tw-flex-wrap.tw-justify-center(name='profileForm')
    b-field.tw-mx-2(:label='$t("profileCode")')
      b-input(v-model='code', size='is-small', name='user', disabled)
    b-field.tw-mx-2(label='Descrição do perfil')
      b-input(v-model='description', size='is-small', name='user', disabled)
  .button-wrappers.tw-my-4.tw-flex.tw-justify-center
    b-button.tw-mr-4(type='is-primary') Salvar
    b-button(type='is-danger') Cancelar
  component.tw-mt-4(is='MaintainTransaction')
</template>

<script>
export default {
  name: 'MaintainProfile2',
  components: {},
  props: {},
  data() {
    return {
      code: '',
      description: '',
      tree: require('@/jsons/directory-tree-data.json'),
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
.maintain-profile2-wrapper {
}
</style>

<style lang="scss">
.maintain-profile2-wrapper {
  label {
    font-size: 0.75rem;
  }
  .input.is-small {
    min-width: 250px;
  }
}
</style>
