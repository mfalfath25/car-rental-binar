export const timedLogout = () => {
  setTimeout(() => {
    localStorage.clear()
    window.open('http://localhost:5000/auth/logout', '_self')
  }, 1000)
}
