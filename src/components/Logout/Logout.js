export function Logout() {
  localStorage.removeItem('ACCESS_TOKEN');
  localStorage.removeItem('user');
  window.location.href = '/';
}
