export const linkPage = (id, page) => {
  document.querySelector(id).addEventListener('click', (ev) => {
    ev.preventDefault();
    page();
  });
};
