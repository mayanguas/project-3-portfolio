import './Footer.css';

const Template = () => `
  <h4>Creado como proyecto para Rock{theCode}</h4>
`;

export const printTemplate = () => {
  document.querySelector('footer').innerHTML = Template();
};
