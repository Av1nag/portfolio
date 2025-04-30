import { loadTemplate } from '../utils/loadTemplate';
import './home.scss';
export class HomeComponent {
  constructor() {
    loadTemplate('/src/app/home.html').then((html) => {
      const app = document.querySelector('#app');
      if (app) {
        app.innerHTML = html;
      }
    });
  }
  technicalSkills = [
    {
      name: 'Angular',
      image: '/assets/angular.svg',
    },
    {
      name: 'Ionic',
      image: '/assets/ionic.svg',
    },
    {
      name: 'TypeScript',
      image: '/assets/typescript.svg',
    },
    {
      name: 'React Native/Expo',
      image: '/assets/react-native.svg',
    },
    {
      name: 'HTML',
      image: '/assets/html.svg',
    },
    {
      name: 'CSS',
      image: '/assets/css.svg',
    },
    {
      name: 'Sass',
      image: '/assets/sass.svg',
    },
    {
      name: 'Rust',
      image: '/assets/rust.svg',
    },
  ];
}
