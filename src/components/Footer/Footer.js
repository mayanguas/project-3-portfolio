import './Footer.css';

const Template = () => `
  <h4>Created as a project for Rock{theCode}</h4>
`;

export const printTemplate = () => {
  document.querySelector('footer').innerHTML = Template();
};
