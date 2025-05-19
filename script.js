// هذا الملف مخصص لإضافة تفاعلات JavaScript مستقبلية في موقعك
// مثلاً يمكن استخدامه لمعالجة النموذج أو إضافة تأثيرات تفاعلية

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  form.addEventListener('submit', function(e) {
    e.preventDefault(); // منع الإرسال الفعلي للنموذج (لضمان تجربة أفضل)

    // الحصول على القيم من الحقول
    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const message = form.querySelector('textarea').value.trim();

    // تحقق بسيط من صحة البيانات
    if (name === '' || email === '' || message === '') {
      alert('يرجى ملء جميع الحقول قبل الإرسال.');
      return;
    }

    // هنا يمكنك إضافة كود لإرسال البيانات إلى سيرفر أو عبر API
    // لكن هذه مجرد رسالة تأكيد حاليا

    alert(`شكرًا لك، ${name}! تم استلام رسالتك.`);
    form.reset(); // إعادة تعيين الحقول بعد الإرسال
  });
});
