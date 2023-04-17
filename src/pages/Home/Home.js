import './Home.css';

const Template = () => `
  <div class="margin"></div>
  <div class="container-home">

    <div class="presentation">
      <h1>PERSONAL PORTFOLIO</h1>
      <img src="/images/perfil.png" alt="Profile photo">
      <p class="name">Alejandro Yanguas</p>
      <p class="job">FULL STACK DEVELOPER</p>
      <div class="presentation-footer">
        <a href="https://github.com/mayanguas"><img src="/icons/github.svg" alt="GitHub icon"></a>
        <a href="mailto:alejandro_yanguas@yahoo.es"><img src="/icons/email-sobre.svg" alt="Email icon"></a>
      </div>
    </div>

    <div class="text-presentation">
      <div class="greetings">
        <span class="code">{</span> <h2>HOLA</h2> <span class="code">}</span>
      </div>
      <p class="introduction">Soy un desarrollador</p>
      <div class="creative"><span class="span-creative">Creativo</span></div>
      <p class="description first-parag">
        Soy estudiante de programación, mi objetivo es ser Full Stack Developer. Ahora mismo estoy estudiando en el programa Rock {theCode} para aprender HTML5, CSS3, JavaScript, React, TypeScript, Node y mucho más....
      </p>
      <p class="description second-parag">
        Espero que le guste mi sitio web y si tiene alguna pregunta no dude en ponerse en contacto conmigo.
      </p>
    </div>

  </div>
`;

export const printTemplate = () => {
  document.querySelector('main').innerHTML = Template();
};
