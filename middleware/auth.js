export default function ({ route, redirect }) {
  const token = window.localStorage.getItem('token')
  if (route.path === '/') {
    if (token) {
      redirect('/home/')
    }
  } else if (!token) {
    window.localStorage.clear()
    window.location.href = '/'
  }
}
