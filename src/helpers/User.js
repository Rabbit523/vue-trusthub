// Source Of API
import SourceApi from './HubApi' 
// For all storage
import AppStorage from './Storage'

class TrusthubUser {
  // setup routes api
  constructor (link) {
    this.webApi = link
    this.loginApi = `${link}/login`
    this.registerApi = `${link}/user`
  }
  // setup login info
  setupLogin (router, store, data) {
    // store user data in vuex
    store.commit('setUserInfo', data)
    // store in localstorage
    AppStorage.storeInfo('userInfo', data)
    // enter the dashboard
    const typeUser = data.user.type.toLowerCase()
    router.push(`/${typeUser}`)
  }
  // Auth Guard so anyone not logged in cannot access dashboard
  authGuard (store, type) {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    if (userInfo) {
      if (userInfo.user.type.toLowerCase() !== type) {
        this.logOut()
      }
      // store user data in vuex
      store.commit('setUserInfo', userInfo)
    } else {
      this.logOut()
    }
  }
  // Logout
  logOut () {
    localStorage.clear()
    window.location = '/'
  }
}

export default  new TrusthubUser(SourceApi.source)