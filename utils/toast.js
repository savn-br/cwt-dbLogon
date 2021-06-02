import Vue from 'vue'

export default function (msg, type) {
  const mapType = {
    'is-success': 'success',
    'is-danger': 'error',
  }
  Vue.$toast.open({
    message: msg,
    type: mapType[type],
    duration: type === 'is-success' ? 5000 : 0,
  })
}
