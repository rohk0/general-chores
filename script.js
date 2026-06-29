document.getElementById('year').textContent = new Date().getFullYear();

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const note = document.getElementById('formNote');
  note.hidden = false;
  form.reset();
  note.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const id = link.getAttribute('href');
    if (id.length > 1) {
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});
