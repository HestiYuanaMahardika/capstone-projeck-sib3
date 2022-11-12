/* eslint-disable class-methods-use-this */
import adminRoutes from '../../routes/admin-routes';
import UrlParser from '../../routes/url-parser';

class AdminApp {
  constructor({ header, aside, maincontent }) {
    this._header = header;
    this._aside = aside;
    this._maincontent = maincontent;
  }

  _loaderActive() {
    const loader = document.querySelector('#js-preloader');
    loader.classList.add('loaded');
  }

  _loaderHide() {
    const loader = document.querySelector('#js-preloader');
    setTimeout(() => {
      loader.classList.remove('loaded');
    }, 2000);
  }

  async renderPage() {
    this._loaderActive();
    try {
      const url = UrlParser.parseActiveUrlWithCombiner();
      const page = adminRoutes[url];
      console.log('kode renderpage AdminApp jalan..');
      this._maincontent.innerHTML = await page.render();
      await page.afterRender();
    } catch (error) {
      this._maincontent.innerHTML = `<h1>${error}</h1>`;
    } finally {
      this._loaderHide();
    }
  }
}

export default AdminApp;
