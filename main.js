import './style.css';

// Imports
import { printTemplate as Header } from './src/components/Header/Header';
import { printTemplate as Home } from './src/pages/Home/Home';
import { printTemplate as Projects } from './src/pages/Projects/Projects';
import { printTemplate as Blog } from './src/pages/Blog/Blog';
import { printTemplate as Footer } from './src/components/Footer/Footer';

import { linkPage } from './src/utils/linkpage';

// Pages and components
Header();
Home();
Footer();

// Links
linkPage('#homeLink', Home);
linkPage('#projectsLink', Projects);
linkPage('#blogLink', Blog);

// ---------- Theme Swithcher ----------------- //
const colorSwitch = document.querySelector('#switch');

export const ChangeTheme = (ev) => {
  if (ev.target.checked) {
    document.body.setAttribute('class', 'dark-body');
  } else {
    document.body.setAttribute('class', 'light-body');
  }
};

colorSwitch.addEventListener('change', ChangeTheme);
