export function Logout() {
  localStorage.removeItem('ACCESS_TOKEN');
  window.location.href = '/';
}
