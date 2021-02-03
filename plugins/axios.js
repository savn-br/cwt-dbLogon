export default function ({ $axios, store, redirect }) {
    $axios.onRequest((config) => {

        config.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`
        config.validateStatus = function (status) {
            return status < 600;
        }
    }),
    $axios.onResponse((res) => {
        if (res.status === 401) {// Unauthorized
            redirect("/login")
        }
    })



}