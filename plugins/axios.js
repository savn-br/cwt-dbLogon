import showToast from '@/utils/toast'
export default function ({ $axios, store, redirect }, inject) {
  const refreshRoute = '/auth/refreshToken/'

  let isRefreshing = false
  let failedQueue = []

  const processQueue = (error, token = null) => {
    failedQueue.forEach((prom) => {
      if (error) {
        prom.reject(error)
      } else {
        prom.resolve(token)
      }
    })

    failedQueue = []
  }

  $axios.onRequest((config) => {
    const token = localStorage.getItem('token')
    if (token) config.headers.Authorization = `Bearer ${token}`
    config.headers['Content-Type'] = 'application/json'

    config.validateStatus = function (status) {
      return status < 600
    }
  })

  $axios.onResponse((res) => {
    const originalRequest = res.config

    if (res.status === 401 && originalRequest.url === refreshRoute) {
      showToast('Não autorizado', 'is-danger')
      setTimeout(() => {
        window.localStorage.clear()
        window.location.href = '/cwt-dbLogon/'
      }, 3000)
    }
    if (res.status === 401 && originalRequest.url !== refreshRoute) {
      const { userId, profileType } = store.state.userData
      const refreshToken = window.localStorage.getItem('refreshToken')

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject })
        })
          .then((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`
            return $axios(originalRequest)
          })
          .catch((err) => {
            return Promise.reject(err)
          })
      }
      originalRequest._retry = true
      isRefreshing = true

      return new Promise((resolve, reject) => {
        $axios
          .post(refreshRoute, { userId, profileType, refreshToken })
          .then(({ data: { data } }) => {
            window.localStorage.setItem('token', data.token)
            window.localStorage.setItem('refreshToken', data.refreshToken)
            originalRequest.headers.Authorization = `Bearer ${data.token}`
            processQueue(null, data.token)
            resolve($axios(originalRequest))
          })
          .catch((err) => {
            processQueue(err, null)
            reject(err)
          })
          .then(() => {
            isRefreshing = false
          })
      })
    }
  })
}
