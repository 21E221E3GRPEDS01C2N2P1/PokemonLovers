import store from '../store'

export const ifAuthenticated = (to, from, next) => {
  /*store.dispatch('user/getUser')
      .then(() => {
        next()
      })
      .catch(() => {
        next({ name: '/login', query: { redirect_to: to.fullPath } })
      })*/
      if (store.getters["auth/hasPermission"]) {
        next()
      } else {
        next({
          name: "login" // back to safety route //
        });
      }
}