export default function ({ $axios, store, redirect }, inject) {
  $axios.onRequest((config) => {
    config.headers.common.Authorization = `Bearer ${localStorage.getItem(
      'token'
    )}`
    config.headers['Content-Type'] = 'application/json'

    // config.headers.common['Content-Type'] = 'application/json'
    config.validateStatus = function (status) {
      return status < 600
    }
  })

  $axios.onResponse((res) => {
    if (res.status === 401) {
      window.localStorage.clear()
      window.location.href = '/'
    }
  })
}
