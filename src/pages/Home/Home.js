import './Home.css';

const Template = () => `
  <div class="margin"></div>
  <div class="container-home">
    <div class="presentation">
      <h1>PERSONAL PORTFOLIO</h1>
      <img src="/images/perfil.png" alt="Profile photo">
      <p>Alejandro Yanguas</p>
      <p>FULL STACK DEVELOPER</p>
      <div class="presentation-footer">
        <img src="/icons/github.svg" alt="GitHub icon">
        <img src="/icons/email-sobre.svg" alt="Email icon">
      </div>
    </div>
    <div class="text-presentation"></div>
  </div>
`;

export const printTemplate = () => {
  document.querySelector('main').innerHTML = Template();
};
