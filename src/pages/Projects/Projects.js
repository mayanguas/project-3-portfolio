import './Projects.css';
import { PROJECTS } from '../../data/Projects';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';

const Template = () => `
  <div class="margin-port"></div>
  <section class="container-projects">
    <h2>PROYECTOS</h2>
    <h3>Estos son los proyectos que he realizado hasta ahora...</h3>
    <div class="blog-gallery">
      ${PROJECTS.map((project) => ProjectCard(project)).join('')}
    </div>
  </section>
`;

export const printTemplate = () => {
  document.querySelector('main').innerHTML = Template();
};
