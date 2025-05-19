document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  
  form.addEventListener('submit', e => {
    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const message = form.querySelector('textarea').value.trim();

    if (!name || !email || !message) {
      alert('الرجاء تعبئة جميع الحقول.');
      return;
    }

    alert(`شكرًا لك، ${name}! تم استلام رسالتك.`);
    form.reset();
  });
});
