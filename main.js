import './style.css';

// Imports
import { printTemplate as Header } from './src/components/Header/Header';
import { printTemplate as Home } from './src/pages/Home/Home';
import { printTemplate as Footer } from './src/components/Footer/Footer';

// Pages and components
Header();
Home();
Footer();

// ---------- Theme Swithcher ----------------- //
const colorSwitch = document.querySelector('#switch');

const ChangeTheme = (ev) => {
  if (ev.target.checked) {
    document.body.setAttribute('class', 'dark-body');
  } else {
    document.body.setAttribute('class', 'light-body');
  }
};

colorSwitch.addEventListener('change', ChangeTheme);
