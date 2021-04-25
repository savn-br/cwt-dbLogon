import Vue from 'vue'
export default function (status, msg) {
  const vue = new Vue()
  if (status >= 400) {
    vue.$buefy.toast.open({
      message: msg,
      type: 'is-danger',
      duration: 3000,
      position: 'is-top',
    })
  }
  console.log(vue.$buefy, status, msg)
}
