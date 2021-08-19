import store from '../store'

export const ifAuthenticated = (to, from, next) => {
  store.dispatch('User/getUser')
      .then(() => {
        next()
      })
      .catch(() => {
        next({ name: 'Login', /*query: { redirect_to: to.fullPath }*/ })
      })
}