import './Header.css';

const Template = () => `
<nav class="navbar">
  <div class="menu-container">
    <label class="navbar-toggle" id="navbar-toggle" for="chkToggle">
      <img class="menu-movil" src="/icons/menu.svg" alt="menu-movil" width="30px" height="30px">
    </label>

    <div class="switch-container">
      <img class="icon-switch-sun" src="./public/icons/sun-solid.svg" alt="Icon of a sun">
      <label id="switch">
        <input type="checkbox">
        <span class="slider round"></span>
      </label>
      <img class="icon-switch-moon" src="./public/icons/moon-stars.svg" alt="Icon of a moon">
    </div>

    <input type="checkbox" id="chkToggle" />
    <ul class="main-nav" id="menu">
      <li><a href="#" class="nav-links">Inicio</a></li>
      <li><div class="separator"></div></li>
      <li><a href="#" class="nav-links">Portfolio</a></li>
      <li><div class="separator"></div></li>
      <li><a href="#" class="nav-links">Blog</a></li>
    </ul>

  </div>
</nav>

`;

export const printTemplate = () => {
  document.querySelector('header').innerHTML = Template();
};

// -----------------------------------------------------//
