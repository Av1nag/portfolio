import { loadTemplate } from '../utils/loadTemplate';
export class HomeComponent {
  constructor() {
    loadTemplate('/src/app/home.html').then((html) => {
      const app = document.querySelector('#app');
      if (app) {
        app.innerHTML = html;
      }
    });
  }
}
