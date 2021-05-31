import { ToastProgrammatic as Toast } from 'buefy'

export default function (msg, type) {
  Toast.open({
    duration: type === 'is-success' ? 5000 : 10000,
    message: msg,
    type,
    position: 'is-top',
  })
}
