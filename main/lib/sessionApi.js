export function setSession(data) {
  sessionStorage.setItem('accessToken', data.access_token)
}

export function getSession() {
  return sessionStorage.getItem('accessToken')
}

export function wipeSession() {
  sessionStorage.removeItem('accessToken')
}
