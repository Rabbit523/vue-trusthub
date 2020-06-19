import axios from '@/axios.js'

export default {
  fetchUsers ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      const headers = {
        Authorization: `Bearer ${payload.token}`
      }
      axios.get(payload.api, {headers})
        .then((response) => {

          response.data._embedded.userses.map(el => {
            el['id'] = el._links.self.href.split('/')[el._links.self.href.split('/').length - 1]
          })
          
          commit('SET_USERS', response.data._embedded.userses)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  fetchUser (context, userId) {
    return new Promise((resolve, reject) => {
      axios.get(`/api/user-management/users/${userId}`)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  removeRecord ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      console.log(payload)
      const headers = {
        Authorization: `Bearer ${payload.token}`
      }
      axios.delete(`${HubApi.users}/${payload.userId}`, {headers})
        .then((response) => {
          commit('REMOVE_RECORD', payload.userId)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  }
}
