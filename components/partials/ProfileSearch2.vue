<template lang="pug">
#profileSearch2.profile-search2-wrapper.tw-mt-8.tw-px-4
  form.fields.tw-grid(name='profileForm')
    b-field.tw-mx-2(label='Código do perfil')
      b-input(v-model='code', size='is-small', name='user')
    b-field.tw-mx-2(label='Descrição do perfil')
      b-input(v-model='description', size='is-small', name='user')
    b-field.tw-mx-2(label='Perfil pai')
      b-input(v-model='father', size='is-small', name='user')
    b-field.tw-mx-2(label='Visão de dados de clientes')
      b-input(v-model='clients', size='is-small', name='user')
    b-field.tw-mx-2
      b-switch(size='is-small', v-model='card') Visualizar cartão
    b-field.tw-mx-2
      b-switch(size='is-small', v-model='attr') Permissão de atribuição
    b-field.tw-mx-2
      b-switch(size='is-small', v-model='active') Ativo
  component.tw-mt-4(is='RecursiveCollapse', :tree='tree', padding='0')
</template>

<script>
export default {
  name: 'ProfileSearch2',
  components: {},
  props: {},
  data() {
    return {
      code: '',
      description: '',
      father: '',
      clients: '',
      card: false,
      attr: false,
      active: true,
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

  label {
    font-size: 0.75rem;
  }
}
</style>
