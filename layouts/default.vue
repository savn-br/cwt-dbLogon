<template lang="pug">
    .main_page_layout
        b-navbar
            <template lang="pug" slot="brand">
                b-navbar-item(tag="router-link" :to="{ path: '/' }")
                    img(src="~/assets/CWT_logo_-_Color_-_RGB_small_1.jpg"
                        alt="CWT")
            </template>
            
            <template lang="pug" slot="start">
                
            </template>

            <template lang="pug" slot="end">
                b-navbar-item(tag="div")
                    .buttons
                        b-button(type="is-primary" size="is-small" @click="logout")
                            strong Logout
            </template>
        .section
            .tile.is-ancestor
                .tile.is-vertical.is-3
                    .tile
                        slot(name="nav_bar")
                            side-bar
                .tile.is-vertical.is-9
                    .tile
                        slot(name="content")
                            nuxt
</template>

<script>
import SideBar from "~/components/partials/SideBar";

import { mapState } from "vuex";

export default {
    name: "main-page-layout",
    components: {
        SideBar
    },

    methods: {
        logout() {
            this.$store.dispatch("login/userLogout", this.login).then(() => {
                this.$router.push("/login");
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.main_page_layout {
    position: relative;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}
.section {
    padding: 1rem 2rem;
}
</style>
