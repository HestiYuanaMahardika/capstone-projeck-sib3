import 'regenerator-runtime';
import '../styles/homepage.css';
import '../styles/about-blog.css';
import HomepageApp from './views/homepage/app';
import swRegister from './utils/sw-register';

const dashboardlink = document.getElementById('dashboardlink');
const checkoutNav = document.getElementById('checkout');
function isLogin() {
  const userRT = localStorage.getItem('user_RTproject');
  const data = JSON.parse(userRT);
  if (!userRT) {
    dashboardlink.innerHTML = 'Login';
    dashboardlink.href = './login.html';
    checkoutNav.setAttribute('class', '.d-none');
  } else if ((data.user !== 'seller') || (data.user !== 'admin') || data.user !== 'buyer') {
    dashboardlink.href = './login.html';
    dashboardlink.innerHTML = 'Login';
  }

  if (userRT) {
    if (data.user === 'seller') {
      window.location.href = 'seller/dashboard';
    } else if (data.user === 'buyer') {
      dashboardlink.innerHTML = 'Home';
      // dashboardlink.href = './';
    } else if (data.user === 'admin') {
      window.location.href = 'admin/';
    } else {
      dashboardlink.innerHTML = 'Login';
      dashboardlink.href = './login.html';
      checkoutNav.setAttribute('class', '.d-none');
    }
  }
}

const loader = document.querySelector('#js-preloader');
const appHomepage = new HomepageApp({
  header: document.querySelector('#header'),
  maincontent: document.querySelector('#home'),
});

window.addEventListener('hashchange', () => {
  document.querySelector('body').classList.remove('toggle-sidebar');
  loader.classList.remove('loaded');
  setTimeout(() => {
    loader.classList.add('loaded');
    appHomepage.renderPage();
  }, 500);
});

window.addEventListener('load', () => {
  loader.classList.remove('loaded');
  isLogin();
  setTimeout(() => {
    loader.classList.add('loaded');
    appHomepage.renderPage();
    swRegister();
  }, 500);
});
