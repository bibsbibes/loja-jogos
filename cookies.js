function aceitar() {
  const banner = document.getElementById('cookie-banner');
  banner.classList.add('oculto');
  sessionStorage.setItem('cookiesAceitos', 'true');
}

window.addEventListener('DOMContentLoaded', () => {
  const aceitou = sessionStorage.getItem('cookiesAceitos');
  if (aceitou === 'true') {
    document.getElementById('cookie-banner').classList.add('oculto');
  }
});
