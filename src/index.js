import './styles/main.scss'

import TypoApp from './js/modules/typo';
import Theme from './js/modules/theme';
import Menu from './js/modules/menu';

function init() {
  const typoApp = new TypoApp('#app', '.restart-button', '.game-words');
  const theme = new Theme('.theme-button', '#app');
  const menu = new Menu( '#app');

  typoApp.init();
  theme.init();
  menu.init();
}

init();
