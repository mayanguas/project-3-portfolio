import './Blog.css';
import { BLOG } from '../../data/Blog';
import { BlogCard } from '../../components/BlogCard/BlogCard';

const Template = () => `
  <div class="margin-blog"></div>
  <section class="container-blog">
    <h2>BLOG</h2>
    <h3>Blog sobre programación, tecnología y seguridad informática.</h3>
    <div class="blog-gallery">
      ${BLOG.map((blog) => BlogCard(blog)).join('')}
    </div>
  </section>
`;

export const printTemplate = () => {
  document.querySelector('main').innerHTML = Template();
};
