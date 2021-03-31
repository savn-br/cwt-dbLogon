// ~/plugins/vuex-persist.js
import VuexPersistence from 'vuex-persist'
import Crypto from 'crypto-js'

const storageKey = 'vuex'
const encryptionToken = '889d9190a5c3033b07cf97b2c22a5f5b'

export default ({ store }) => {
  new VuexPersistence({
    /* your options */
    storage: {
      getItem() {
        const store = window.localStorage.getItem(storageKey)
        if (store) {
          try {
            const bytes = Crypto.AES.decrypt(store, encryptionToken)

            return JSON.parse(bytes.toString(Crypto.enc.Utf8))
          } catch (e) {
            window.localStorage.removeItem(storageKey)
          }
        }
      },
      setItem(key, value) {
        const store = Crypto.AES.encrypt(value, encryptionToken).toString()
        return window.localStorage.setItem(storageKey, store)
      },
      removeItem: () => window.localStorage.removeItem(storageKey),
    },
  }).plugin(store)
}
