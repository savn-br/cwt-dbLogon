<template lang="pug">
.login-wrapper.tw-grid.tw-h-screen.tw-h-screen.tw-place-content-center
  .l-card.tw-shadow-lg
    .l-card-header
      img(src='~/assets/mainBGmobile.jpg', alt='')
    .l-card-body.tw-p-8.tw-bg-white
      form
        fieldset
          legend Login into account
          b-field(label='user', type='', message='')
            b-input(v-model='user', size='is-small', icon='email')
          b-field(label='password')
            b-input(
              v-model='password',
              size='is-small',
              icon='key',
              type='password'
            )
          b-button.tw-w-full.tw-mt-4(type='is-primary') Entrar
</template>

<script>
export default {
  name: 'Teste',
  components: {},
  layout: 'public',
  props: {},
  data() {
    return { user: '', password: '' }
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.login-wrapper {
  margin: 0 10px;
  .l-card {
    max-width: 350px;
    width: 100%;
  }
}
</style>
