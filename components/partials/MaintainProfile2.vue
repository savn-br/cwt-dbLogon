<template lang="pug">
#maintainProfile2.maintain-profile2-wrapper.tw-mt-8.tw-px-4
  .button-wrappers.tw-mb-8
    b-button.tw-mr-4(type='is-primary') Salvar
    b-button(type='is-danger') Cancelar
  form.fields.tw-grid(name='profileForm')
    b-field.tw-mx-2(label='Código do perfil')
      b-input(v-model='code', size='is-small', name='user')
    b-field.tw-mx-2(label='Descrição do perfil')
      b-input(v-model='description', size='is-small', name='user')

  component.tw-mt-4.tw-px-8(
    is='CheckableRecursiveCollapse',
    :tree='tree',
    padding='0'
  )
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
  .fields {
    grid-template-columns: repeat(auto-fill, minmax(px2rem(300), 1fr));
    @media screen and(min-width: px2rem(1500)) {
      grid-template-columns: repeat(4, minmax(px2rem(300), 1fr));
    }
  }
}
</style>

<style lang="scss">
.maintain-profile2-wrapper {
  label {
    font-size: 0.75rem;
  }
}
</style>
