import Vue from 'vue'
export default function (msg, type) {
  const vue = new Vue()
  vue.$buefy.toast.open({
    message: msg,
    type,
    duration: 3000,
    position: 'is-top',
  })
}
