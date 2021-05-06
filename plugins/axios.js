import showToast from '@/utils/toast'
export default function ({ $axios, store, redirect }, inject) {
  $axios.onRequest((config) => {
    config.headers.common.Authorization = `Bearer ${localStorage.getItem(
      'token'
    )}`
    config.headers['Content-Type'] = 'application/json'
    config.validateStatus = function (status) {
      return status < 600
    }
  })

  $axios.onResponse((res) => {
    if (res.status === 401) {
      const {
        data: { message },
      } = res
      showToast(message || 'Não autorizado', 'is-danger')
      setTimeout(() => {
        window.localStorage.clear()
        window.location.href = '/'
      }, 3000)
    }
  })
}
