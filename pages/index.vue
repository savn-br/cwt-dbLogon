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
          b-field(
            label='user',
            :type='!!usernameMessage ? "is-danger" : ""',
            :message='usernameMessage'
          )
            b-input(
              v-model='username',
              size='is-small',
              icon='email',
              name='username'
            )
          b-field(
            label='password',
            :message='passwordMessage',
            :type='!!passwordMessage ? "is-danger" : ""'
          )
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
  middleware: ['auth'],
  props: {},
  data() {
    return {
      profileTypes: {
        // collaborator: { redirect: 'collaborator', menu: 'CollaboratorMenu' },
        // manager: { redirect: 'manager', menu: 'ManagerMenu' },
        // admin: { redirect: 'administrator', menu: 'AdministratorMenu' },
        // analyst: { redirect: 'analyst', menu: 'AnalystMenu' },
        new: { redirect: 'new' },
        pending: { redirect: 'pending' },
        saved: { redirect: 'saved' },
        authorized: { redirect: 'home' },
      },
      username: '',
      password: '',
      usernameMessage: '',
      passwordMessage: '',
    }
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {},
  methods: {
    async submitLogin() {
      try {
        const { data: responseData, status } = await this.$axios.post(
          '/auth/userLogin',
          {
            username: this.username,
            password: this.password,
          }
        )
        if (status === 200) {
          window.localStorage.setItem('token', responseData.data.token)
          window.localStorage.setItem(
            'refreshToken',
            responseData.data.refreshToken
          )
          const { profileType, userId, transactions } = responseData.data
          this.$store.commit('setUserDataTerm', {
            key: 'userId',
            value: userId,
          })
          this.$store.commit('setUserDataTerm', {
            key: 'profileType',
            value: profileType,
          })
          // if (this.profileTypes[profileType].menu) {
          //   this.$store.commit(
          //     'setCurrentMenu',
          //     this.profileTypes[profileType].menu
          //   )
          // }
          this.$store.commit('setCurrentMenu', transactions)
          this.$router.push(`/${this.profileTypes[profileType].redirect}/`)
        }
        if (status === 404) {
          this.usernameMessage = 'Usuário ou senha incorretos'
          this.passwordMessage = 'Usuário ou senha incorretos'
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
