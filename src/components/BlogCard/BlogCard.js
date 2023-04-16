import './BlogCard.css';

export const BlogCard = (blog) => {
  return `
    <a href="#">
      <article class="blog-card">
        <img src=${blog.image} alt=${blog.title} />
        <div class="blog-content">
          <h4>${blog.title}</h4>
          <div class="blog-info">
            <p>${blog.date}</p>
            <p><span class="duration">${blog.duration}</span></p>
          </div>
          <p>${blog.description}</p>
        </div>
      </article>
    </a>
  `;
};
