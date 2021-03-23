<template lang="pug">
.login-wrapper.tw-grid.tw-h-screen.tw-h-screen.tw-place-content-center
  .l-card.tw-shadow-lg
    .l-card-header
      img.background(src='~/assets/mainBGmobile.jpg', alt='')
      img.tw-w-20.tw-mr-2.tw-mt-2.logo(
        src='~/assets/CWT_LOGO_TRASNPARENTE.png'
      )
    .l-card-body.tw-p-8.tw-bg-white
      form(@submit.prevent='submitLogin', name='login')
        fieldset
          legend.tw-w-full.tw-flex.tw-justify-end Login into your account
          b-field(label='user', type='', message='')
            b-input(
              v-model='username',
              size='is-small',
              icon='email',
              name='username'
            )
          b-field(label='password')
            b-input(
              v-model='password',
              size='is-small',
              icon='key',
              type='password',
              name='password'
            )
          b-button.tw-w-full.tw-mt-4(type='is-danger', @click='submitLogin') Entrar
</template>

<script>
export default {
  name: 'Teste',
  components: {},
  layout: 'public',
  props: {},
  data() {
    return { username: '', password: '' }
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {},
  methods: {
    async submitLogin() {
      try {
        const { data, status } = await this.$axios.post('/auth/', {
          username: this.username,
          password: this.password,
        })
        if (status === 200) {
          window.localStorage.setItem('token', data.token)
          this.$router.push('/manager')
        }
      } catch (err) {
        console.error(err)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.login-wrapper {
  margin: 0 px2rem(10);
  .l-card {
    max-width: px2rem(375);
    width: 100%;
  }
  .l-card-body {
    border-radius: 0 0 px2rem(8) px2rem(8);
  }
  .l-card-header {
    display: flex;
    position: relative;
    img.background {
      flex: 1;
      border-radius: px2rem(8) px2rem(8) 0 0;
    }
    img.logo {
      position: absolute;
      right: 0;
    }
  }
}
</style>

<style lang="scss">
.login-wrapper {
  label {
    font-size: 0.75rem;
  }
}
</style>
