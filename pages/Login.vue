<template lang="pug">
    .container-fluid
        .login-wrapper.entrance(id="wrapper")
            .header-wrapper(id="header-wrapper")
                .login-header(id="header" style="background-position: -10px -44px;")
                    .logo
            form.login-form(name="loginForm" id="form" novalidate="")
                ValidationObserver(ref="observer")
                    div(id="lift-up")
                        .caption
                            | Log in to your account
                        .form-group.username
                            ValidationProvider(rules="required" name="User Name" v-slot="{ errors }")
                                b-input(name="pf.username" v-model="login.user" icon="account" id="username"  placeholder="UID (e.g. U101ZZZ)" ma="" autocomplete="off")
                                span.label-red-small {{ errors[0] }} 
                        .form-group.password
                            ValidationProvider(rules="required" name="Password" v-slot="{ errors }")
                                b-input(name="pf.pass" v-model="login.password" icon="key-variant" id="password" required="" type="password" placeholder="Password" @keyup.native.enter="userLogin")
                                span.label-red-small {{ errors[0] }} 
                       
                        .invalid-login(v-if="errorLogin")
                            | {{errorMessage}}
                        .form-group.btn-wrapper
                            b-button.btn(v-if="isProcessing" loading) LOG IN
                            b-button.btn(v-else type="is-primary" @click="userLogin") LOG IN
                                .loader-wrapper(id="loader")
                                    .horizontal-dots-loader
</template>

<script>
export default {
    layout: "public",

    data() {
        return {
            login: {
                user: "",
                password: "",
                context: "protected"
            },
            errorLogin: false,
            errorMessage: "",
            isProcessing: false
        };
    },
    methods: {
        async userLogin() {
            const isValid = await this.$refs.observer.validate();
            if (isValid) {
                this.isProcessing = true;
                this.errorMessage = ""
                this.$store
                    .dispatch("login/userLogin", this.login)
                    .then(result => {
                        this.$router.push("/");
                    })
                    .catch(err => {
                        this.errorLogin = true
                        this.errorMessage = err
                       
                    })
                    .finally(() => {
                        this.isProcessing = false;
                    });
            }
        }
    }
};
</script>
<style scoped>
@import "../assets/styles/cwt.css";
.label-red-small {
    color: red;
    font-size: 10px;
}
.invalid-login {
    color: red;
    font-size: 12px;
    margin: 10px;
    text-align: center;
}
</style>