const getSession = () => sessionStorage.getItem('accessToken')
const setSession = data => { sessionStorage.setItem('accessToken', data.access_token) }
const wipeSession = () => { sessionStorage.removeItem('accessToken') }

export {
  getSession,
  setSession,
  wipeSession
}
