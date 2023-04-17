import './Hobbys.css';

const Template = () => `
  <div class="margin-hobbys"></div>
  <div class="hobbys-container">
    <h2>HOBBYS</h2>
    <h3>En mi tiempo libre soy un apasionado de la fotografía.</h3>
    <div class="images">
      <img src="/hobbys/coast.jpg" alt="Image of the coast with the sea in the background"/>
      <img src="/hobbys/harbour.jpg" alt="Image of a harbour in Netherlands"/>
      <img src="/hobbys/madrid.jpg" alt="Monument in Madrid called Puerta de Alcalá"/>
      <img src="/hobbys/molinos.jpg" alt="Windmills in Castilla la Mancha in Spain"/>
      <img src="/hobbys/mountain01.jpg" alt="Image of mountain peaks"/>
      <img src="/hobbys/mountain02.jpg" alt="Image of a valley in the mountain"/>
      <img src="/hobbys/rome.jpg" alt="Image of the Trevi Fontana in Italy"/>
      <img src="/hobbys/street01.jpg" alt="Image of a street"/>
      <img src="/hobbys/street02.jpg" alt="Image of a street"/>
    </div>
  </div>
`;

export const printTemplate = () => {
  document.querySelector('main').innerHTML = Template();
};
