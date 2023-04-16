import './ProjectCard.css';

export const ProjectCard = (project) => {
  return `
    <article class="project-card">
      <img src=${project.image} alt=${project.title} />
      <div class="project-card-content">
        <h4>${project.title}</h4>
        <p>${project.description}</p>
        <p><span>Tech Stack:</span> ${project.tech.join(', ')}</p>
        <div class="project-links">
          <a href=${
            project.link
          }><img src="/icons/netlify.png" alt="Netlify icon"/> Ver Web</a>
          <a href=${
            project.github
          }><img src="/icons/github-white.svg" alt="GitHub icon"/> Ver Código</a>
        </div>
      </div>
    </article>
  `;
};
