import './styles.scss';
import { HomeComponent } from './app/home';

export class MainComponent {
  home = new HomeComponent();
  constructor() {
    if (import.meta.hot) {
      import.meta.hot.accept(() => {
        window.location.reload();
      });
    }
  }
}
new MainComponent();